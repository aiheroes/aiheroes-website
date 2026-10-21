// The public website check behind /nl/php-versie-check (PHP2Shell, October 2026). It reads only
// what a site shows anyone: the headers and HTML of the page the visitor enters, plus /wp-json/ on
// a WordPress site whose page hides the PHP version (a cached page often drops the header that a
// live PHP response still sends). No crawling, no probing for vulnerabilities, nothing stored.
//
// The server fetches an address a visitor typed, so every hop is guarded: http(s) on default ports
// only, no IP literals, and a DNS lookup that refuses private, loopback, link-local and other
// reserved addresses at connect time, so there is no window between check and connect. Redirects
// are followed by hand and checked again; bodies are capped and every request times out.

import http from 'node:http';
import https from 'node:https';
import dns from 'node:dns';
import { isIP, type LookupFunction } from 'node:net';
import zlib from 'node:zlib';
import type { Readable } from 'node:stream';
import { phpStatus, type PhpStatus } from './php-versions.js';

const UA = 'AIHeroesSiteCheck/1.0 (+https://aiheroes.io/nl/php-versie-check)';
const MAX_BODY = 640 * 1024;
const MAX_HOPS = 5;
const HOP_MS = 8000;

export type CheckErrorCode = 'invalid_url' | 'blocked' | 'not_found' | 'unreachable' | 'timeout' | 'tls' | 'redirects';

export class CheckError extends Error {
  code: CheckErrorCode;
  constructor(code: CheckErrorCode) {
    super(code);
    this.code = code;
  }
}

// ---------- Address guards ----------

function blockedV4(ip: string): boolean {
  const [a, b, c] = ip.split('.').map(Number);
  return (
    a === 0 || a === 10 || a === 127 || a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113)
  );
}

/** Private, loopback, link-local, multicast, documentation and tunnel ranges are off limits. */
export function blockedIp(address: string): boolean {
  const ip = address.toLowerCase().replace(/^\[|\]$/g, '');
  if (isIP(ip) === 4) return blockedV4(ip);
  if (isIP(ip) !== 6) return true;
  const mapped = ip.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return blockedV4(mapped[1]);
  return (
    ip === '::' || ip === '::1' || ip.startsWith('::') ||
    /^f[cd]/.test(ip) || /^fe[89ab]/.test(ip) || ip.startsWith('ff') ||
    ip.startsWith('64:ff9b') || ip.startsWith('100:') || ip.startsWith('2001:db8') ||
    ip.startsWith('2001:0:') || ip.startsWith('2001::') || ip.startsWith('2002:')
  );
}

const safeLookup = ((hostname: string, options: dns.LookupOptions, callback: (...args: unknown[]) => void) => {
  dns.lookup(hostname, { ...options, all: true }, (err, addresses) => {
    if (err) return callback(err);
    const list = addresses as unknown as dns.LookupAddress[];
    if (!list.length || list.some((a) => blockedIp(a.address))) {
      return callback(Object.assign(new Error('blocked address'), { code: 'EBLOCKED' }));
    }
    if (options.all) return callback(null, list);
    callback(null, list[0].address, list[0].family);
  });
}) as unknown as LookupFunction;

const LOCAL_SUFFIX = /(^|\.)(localhost|local|internal|intranet|lan|home|corp|home\.arpa)$/i;

function guardUrl(url: URL): void {
  if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new CheckError('invalid_url');
  if (url.port) throw new CheckError('blocked');
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (isIP(host)) throw new CheckError('blocked');
  if (!host.includes('.') || LOCAL_SUFFIX.test(host)) throw new CheckError('blocked');
  url.username = '';
  url.password = '';
  url.hash = '';
}

/** "jouwbedrijf.nl", "www.x.nl/pagina" or a full URL; only http and https. */
export function normalizeInput(raw: string): { url: URL; typedScheme: boolean } {
  const text = raw.trim();
  if (!text || text.length > 300 || /\s/.test(text)) throw new CheckError('invalid_url');
  const typedScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(text);
  if (/^[a-z][a-z0-9+.-]*:/i.test(text) && !typedScheme && !/^[^:]+:\d+/.test(text)) throw new CheckError('invalid_url');
  let url: URL;
  try {
    url = new URL(typedScheme ? text : `https://${text}`);
  } catch {
    throw new CheckError('invalid_url');
  }
  guardUrl(url);
  return { url, typedScheme };
}

// ---------- Fetching ----------

type ResHeaders = http.IncomingHttpHeaders;
interface Hop { status: number; headers: ResHeaders; body: string; location?: string }
export interface Page { url: URL; status: number; headers: ResHeaders; body: string }

function errorCode(e: unknown): CheckErrorCode {
  if (e instanceof CheckError) return e.code;
  const code = String((e as { code?: string })?.code ?? '');
  if (code === 'EBLOCKED') return 'blocked';
  if (code === 'ENOTFOUND' || code === 'EAI_AGAIN' || code === 'ENODATA') return 'not_found';
  if (/CERT|TLS|SSL|SELF_SIGNED|UNABLE_TO_VERIFY|HOSTNAME_MISMATCH|ERR_TLS/i.test(code)) return 'tls';
  if (code === 'ETIMEDOUT' || code === 'ESOCKETTIMEDOUT') return 'timeout';
  return 'unreachable';
}

function fetchOnce(url: URL, maxBody: number): Promise<Hop> {
  return new Promise((resolve, reject) => {
    let settled = false;
    let started = false;
    const chunks: Buffer[] = [];
    let size = 0;
    let status = 0;
    let headers: ResHeaders = {};
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ status, headers, body: Buffer.concat(chunks).toString('utf8') });
    };
    const fail = (e: unknown) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(new CheckError(errorCode(e)));
    };
    const mod = url.protocol === 'https:' ? https : http;
    const req = mod.request(
      url,
      {
        method: 'GET',
        lookup: safeLookup,
        headers: {
          'user-agent': UA,
          accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'nl,en;q=0.8',
        },
      },
      (res) => {
        started = true;
        status = res.statusCode ?? 0;
        headers = res.headers;
        if (status >= 300 && status < 400 && res.headers.location) {
          settled = true;
          clearTimeout(timer);
          res.resume();
          resolve({ status, headers, body: '', location: res.headers.location });
          return;
        }
        const enc = String(res.headers['content-encoding'] ?? '').toLowerCase().trim();
        let stream: Readable = res;
        if (enc === 'gzip' || enc === 'x-gzip') stream = res.pipe(zlib.createGunzip());
        else if (enc === 'deflate') stream = res.pipe(zlib.createInflate());
        else if (enc === 'br') stream = res.pipe(zlib.createBrotliDecompress());
        stream.on('data', (c: Buffer) => {
          if (settled) return;
          chunks.push(c);
          size += c.length;
          if (size >= maxBody) {
            finish();
            req.destroy();
          }
        });
        stream.on('end', finish);
        // A broken stream or encoding keeps what arrived: the headers matter most.
        stream.on('error', finish);
        res.on('error', finish);
      },
    );
    // One deadline per hop, slow bodies included. A response that started keeps what it has.
    const timer = setTimeout(() => {
      if (started) finish();
      else fail(new CheckError('timeout'));
      req.destroy();
    }, HOP_MS);
    req.on('error', (e) => (started ? finish() : fail(e)));
    req.end();
  });
}

/** Follows redirects by hand, guarding every hop. */
export async function fetchPage(start: URL, maxBody = MAX_BODY): Promise<Page> {
  let url = start;
  for (let hop = 0; hop <= MAX_HOPS; hop++) {
    guardUrl(url);
    const res = await fetchOnce(url, maxBody);
    if (!res.location) return { url, status: res.status, headers: res.headers, body: res.body };
    try {
      url = new URL(res.location, url);
    } catch {
      return { url, status: res.status, headers: res.headers, body: res.body };
    }
  }
  throw new CheckError('redirects');
}

// ---------- Reading the page ----------

export type PhpSource = 'x-powered-by' | 'server' | 'wp-json' | 'cookie' | 'platform';
export type Verdict =
  | 'php-eol'
  | 'php-unpatched'
  | 'php-patched'
  | 'php-supported'
  | 'php-unknown'
  | 'hidden-platform'
  | 'hidden-php'
  | 'hosted'
  | 'refused'
  | 'no-signal';

export interface SiteReport {
  url: string;
  host: string;
  status: number;
  https: boolean;
  verdict: Verdict;
  php: {
    found: boolean;
    version: string | null;
    /** A Linux package build ("-1ubuntu2.14"): the distribution may have backported fixes. */
    distro: boolean;
    source: PhpSource | null;
    status: PhpStatus | null;
  };
  platform: { name: string; version: string | null; php: boolean; hosted: boolean } | null;
  plugins: string[];
  theme: string | null;
}

const header = (h: ResHeaders, name: string) => {
  const v = h[name];
  return Array.isArray(v) ? v.join(', ') : (v ?? '');
};

// Linux distributions backport fixes under their own version numbers.
const DISTRO = /\((?:Ubuntu|Debian|Red Hat|CentOS|AlmaLinux|Rocky Linux|Fedora|SUSE)\)/i;

function phpFrom(value: string): { version: string; distro: boolean } | null {
  const m = value.match(/\bPHP\/(\d+\.\d+(?:\.\d+)?)([^\s,;)]*)/i);
  return m ? { version: m[1], distro: /^[-+~]/.test(m[2]) || DISTRO.test(value) } : null;
}

function generators(html: string, headers: ResHeaders): string[] {
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((tag) => /\bname\s*=\s*["']?generator\b/i.test(tag))
    .map((tag) => tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1]?.trim() ?? '')
    .filter(Boolean);
  const x = header(headers, 'x-generator');
  return x ? [...metas, x] : metas;
}

interface Platform { name: string; version: string | null; php: boolean; hosted: boolean }

function detectPlatform(html: string, headers: ResHeaders): Platform | null {
  const gens = generators(html, headers);
  const gen = (re: RegExp) => gens.map((g) => g.match(re)).find(Boolean) ?? null;
  const has = (name: string) => name in headers;
  const powered = header(headers, 'x-powered-by');
  const server = header(headers, 'server');
  const cookies = header(headers, 'set-cookie');
  const link = header(headers, 'link');

  const wp = gen(/^WordPress\s*([\d.]+)?/i);
  if (wp || /api\.w\.org/i.test(link) || /\/wp-(?:content|includes)\//i.test(html) || /rel=["']https:\/\/api\.w\.org\/["']/i.test(html)) {
    return { name: 'WordPress', version: wp?.[1] ?? null, php: true, hosted: false };
  }
  const drupal = gen(/^Drupal\s*(\d+)?/i);
  if (drupal || has('x-drupal-cache') || has('x-drupal-dynamic-cache')) {
    return { name: 'Drupal', version: drupal?.[1] ?? null, php: true, hosted: false };
  }
  const joomla = gen(/Joomla!?/i);
  if (joomla) return { name: 'Joomla', version: null, php: true, hosted: false };
  if (Object.keys(headers).some((k) => k.startsWith('x-magento')) || /\/static\/version\d+\/frontend\//i.test(html) || /Magento_[A-Z]\w+\//.test(html)) {
    return { name: 'Magento', version: null, php: true, hosted: false };
  }
  if (gen(/PrestaShop/i) || /\bprestashop\s*=\s*\{/i.test(html)) return { name: 'PrestaShop', version: null, php: true, hosted: false };
  if (gen(/TYPO3/i) || /\/typo3(?:conf|temp)\//i.test(html)) return { name: 'TYPO3', version: null, php: true, hosted: false };
  if (gen(/Shopware/i)) return { name: 'Shopware', version: null, php: true, hosted: false };
  if (/Craft CMS/i.test(powered)) return { name: 'Craft CMS', version: null, php: true, hosted: false };
  if (/laravel_session=/i.test(cookies)) return { name: 'Laravel', version: null, php: true, hosted: false };

  // Hosted builders: the platform runs and updates the servers.
  if (has('x-wix-request-id') || gen(/Wix\.com/i)) return { name: 'Wix', version: null, php: false, hosted: true };
  if (/Squarespace/i.test(server) || /This is Squarespace\./.test(html)) return { name: 'Squarespace', version: null, php: false, hosted: true };
  if (has('x-shopid') || has('x-shopify-stage') || /cdn\.shopify\.com/i.test(html)) return { name: 'Shopify', version: null, php: false, hosted: true };
  if (gen(/Webflow/i) || /\bdata-wf-site=/i.test(html)) return { name: 'Webflow', version: null, php: false, hosted: true };
  if (gen(/^Framer\b/i)) return { name: 'Framer', version: null, php: false, hosted: true };
  if (gen(/Jimdo/i) || /jimdo/i.test(server)) return { name: 'Jimdo', version: null, php: false, hosted: true };
  return null;
}

function wordpressParts(html: string) {
  const plugins = new Set<string>();
  for (const m of html.matchAll(/\/wp-content\/plugins\/([a-z0-9][a-z0-9._-]{0,80})\//gi)) {
    plugins.add(m[1].toLowerCase());
    if (plugins.size >= 60) break;
  }
  const theme = html.match(/\/wp-content\/themes\/([a-z0-9][a-z0-9._-]{0,80})\//i)?.[1]?.toLowerCase() ?? null;
  return { plugins: [...plugins].sort(), theme };
}

function verdictOf(report: Omit<SiteReport, 'verdict'>): Verdict {
  const { php, platform } = report;
  if (php.version && php.status) {
    const s = php.status;
    if (s.phase === 'eol') return 'php-eol';
    if (s.phase === 'unknown') return 'php-unknown';
    if (s.patched === false) return 'php-unpatched';
    if (s.patched === true) return 'php-patched';
    return 'php-supported';
  }
  if (platform?.php) return 'hidden-platform';
  if (php.found) return 'hidden-php';
  if (platform?.hosted) return 'hosted';
  if (report.status >= 400) return 'refused';
  return 'no-signal';
}

export async function checkSite(raw: string): Promise<SiteReport> {
  const { url, typedScheme } = normalizeInput(raw);
  let page: Page;
  try {
    page = await fetchPage(url);
  } catch (e) {
    // No https answer for a bare domain: try plain http once.
    const code = errorCode(e);
    if (typedScheme || url.protocol !== 'https:' || !['unreachable', 'tls', 'timeout'].includes(code)) throw e;
    const plain = new URL(url.href);
    plain.protocol = 'http:';
    page = await fetchPage(plain);
  }

  const { headers, body } = page;
  const platform = detectPlatform(body, headers);
  let source: PhpSource | null = null;
  let found = phpFrom(header(headers, 'x-powered-by'));
  if (found) source = 'x-powered-by';
  else if ((found = phpFrom(header(headers, 'server')))) source = 'server';

  // A cached WordPress page often lacks the header; the REST API answers from PHP itself.
  if (!found && platform?.name === 'WordPress') {
    try {
      const api = await fetchPage(new URL('/wp-json/', page.url), 64 * 1024);
      found = phpFrom(header(api.headers, 'x-powered-by')) ?? phpFrom(header(api.headers, 'server'));
      if (found) source = 'wp-json';
    } catch {
      // The page itself already gave the answer we can give.
    }
  }

  let phpSeen = !!found;
  if (!found) {
    if (/\bPHP\b/i.test(header(headers, 'x-powered-by'))) { phpSeen = true; source = 'x-powered-by'; }
    else if (/PHPSESSID=/i.test(header(headers, 'set-cookie'))) { phpSeen = true; source = 'cookie'; }
    else if (platform?.php) source = 'platform';
  }

  const wp = platform?.name === 'WordPress' ? wordpressParts(body) : { plugins: [], theme: null };
  const report: Omit<SiteReport, 'verdict'> = {
    url: page.url.href,
    host: page.url.hostname,
    status: page.status,
    https: page.url.protocol === 'https:',
    php: {
      found: phpSeen || !!platform?.php,
      version: found?.version ?? null,
      distro: found?.distro ?? false,
      source,
      status: found ? phpStatus(found.version, found.distro) : null,
    },
    platform,
    plugins: wp.plugins,
    theme: wp.theme,
  };
  return { ...report, verdict: verdictOf(report) };
}
