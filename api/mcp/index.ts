// MCP server for agents (Model Context Protocol, Streamable HTTP transport), served on
// https://aiheroes.io/mcp (vercel.json rewrites it here). Read-only: search the site, read
// a page as Markdown, list the pages and get the recurring facts. Stateless: no sessions and
// no SSE stream, every POST carries one JSON-RPC message (or a batch) and gets JSON back.
// Discovery: /.well-known/mcp/server-card.json and /.well-known/ai-catalog.json.
//
// The page Markdown comes from dist/**/*.md (scripts/build-markdown.mjs), shipped with this
// function through `includeFiles` in vercel.json, so it always matches the deployment.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { z } from 'zod';
import { config as appConfig } from '../../server/config.js';
import { increment } from '../../server/counters.js';
import { hashIp } from '../../server/guards.js';
import { retrieve } from '../../server/search.js';
import { SITE, SITE_EN, ENTRIES, ENTRIES_EN } from '../../src/data/site.js';
import { FOUNDERS, FOUNDER_ORDER } from '../../src/data/team.js';

const ORIGIN = 'https://aiheroes.io';
const DIST = join(process.cwd(), 'dist');
const SERVER_INFO = { name: 'aiheroes', title: 'AI Heroes', version: '1.0.0', websiteUrl: ORIGIN };
// Newest first; an unknown version from the client gets the newest.
const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];
const CALLS_PER_MINUTE = 60;

const INSTRUCTIONS =
  'AI Heroes B.V. (Groningen, the Netherlands) builds AI tools teams use every day. Use search to find passages, ' +
  'get_page to read a whole page, list_pages for every page and get_company_facts for prices, terms and contact ' +
  'details. Pages exist in English (/en/...) and Dutch (/ and /nl/...). Quote prices as "from" amounts.';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID',
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...CORS },
  });

// --- the pages, from the bundled Markdown ------------------------------------------------------

interface Page {
  path: string;
  url: string;
  title: string;
  lang: 'nl' | 'en';
}

let pageCache: Page[] | null = null;

function pages(): Page[] {
  if (pageCache) return pageCache;
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
    });
  let files: string[] = [];
  try {
    files = walk(DIST);
  } catch {
    // No build output (dev before the first build): no pages.
  }
  pageCache = files
    .map((file) => {
      const rel = relative(DIST, file).split(sep).join('/').replace(/\.md$/, '');
      return { file, path: rel === 'index' ? '/' : `/${rel}` };
    })
    // Pages only: build-markdown.mjs writes these routes; skip other Markdown in dist (skills, READMEs).
    .filter(({ path }) => path === '/' || path === '/en' || /^\/(nl|en)\/[a-z0-9\-/]+$/.test(path))
    .map(({ file, path }) => {
      const head = readFileSync(file, 'utf8').slice(0, 400);
      const title = (/^Title: (.*)$/m.exec(head)?.[1] ?? path).replace(/\s*\|\s*AI Heroes$/, '');
      const lang: 'nl' | 'en' = path === '/en' || path.startsWith('/en/') ? 'en' : 'nl';
      return { path, url: path === '/' ? ORIGIN : ORIGIN + path, title, lang };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
  return pageCache;
}

/** A path or aiheroes.io URL to a site path, or null when it is not one of ours. */
function toPath(input: string): string | null {
  let url: URL;
  try {
    url = new URL(input.trim(), ORIGIN);
  } catch {
    return null;
  }
  if (!/^(www\.)?aiheroes\.io$/.test(url.hostname)) return null;
  let path = url.pathname.replace(/\.md$/, '').replace(/\/+$/, '') || '/';
  if (path === '/nl' || path === '/index') path = '/';
  return /^\/[a-z0-9\-/]*$/.test(path) && !path.includes('//') ? path : null;
}

function readPage(path: string): string | null {
  if (!pages().some((p) => p.path === path)) return null;
  return readFileSync(join(DIST, path === '/' ? 'index.md' : `${path.slice(1)}.md`), 'utf8');
}

// --- the facts, from src/data (the same source as the page copy) -----------------------------

function facts(lang: 'nl' | 'en') {
  const en = lang === 'en';
  const entries = en ? ENTRIES_EN : ENTRIES;
  return {
    name: SITE.name,
    legalName: SITE.legalName,
    chamberOfCommerce: SITE.kvk,
    address: `${SITE.address.street}, ${SITE.address.postcode} ${SITE.address.city}, the Netherlands`,
    email: SITE.email,
    phone: SITE_EN.phone,
    bookingUrl: appConfig.bookingUrl,
    since: SITE.since,
    startSprint: {
      days: SITE.sprint.days,
      priceFrom: en ? SITE_EN.sprint.price : SITE.sprint.price,
      startWithin: en ? SITE_EN.sprint.startWithin : SITE.sprint.startWithin,
      url: ORIGIN + (en ? '/en/start-sprint' : '/nl/startsprint'),
    },
    build: en
      ? { priceFrom: SITE_EN.build.from, price: SITE_EN.build.price, credit: SITE_EN.build.credit, milestones: SITE_EN.build.milestones }
      : { priceFrom: SITE.build.from, price: SITE.build.price, credit: SITE.build.credit, milestones: SITE.build.milestones },
    training: en
      ? { priceFrom: SITE_EN.training.from, unit: SITE_EN.training.unit }
      : { priceFrom: SITE.training.from, unit: SITE.training.unit },
    replyTime: en ? SITE_EN.reply : SITE.reply,
    waysIn: Object.values(entries).map((e) => ({ title: e.title, url: ORIGIN + e.href })),
    founders: FOUNDER_ORDER.map((id) => {
      const f = FOUNDERS[id];
      return { name: f.name, role: en ? f.en.role : f.role, calendar: f.calendar };
    }),
    moreInfo: { llmsTxt: `${ORIGIN}/llms.txt`, allPagesMarkdown: `${ORIGIN}/llms-full.txt` },
  };
}

// --- tools ------------------------------------------------------------------------------------

const READ_ONLY = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };
const LANGUAGE = { type: 'string', enum: ['en', 'nl'], description: 'en (default) or nl' };

const TOOLS = [
  {
    name: 'search',
    title: 'Search aiheroes.io',
    description:
      'Search the AI Heroes website: services, the start sprint, prices, how a build runs, cases, knowledge articles, the team, AI Salon and vacancies. Returns the best-matching passages with the URL of their page.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'What to look for, in English or Dutch', minLength: 1, maxLength: 300 },
        language: { ...LANGUAGE, description: 'Language of the pages to search: en (default) or nl. Falls back to the other language when nothing matches.' },
        limit: { type: 'integer', minimum: 1, maximum: 10, description: 'Number of passages, default 5' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    annotations: READ_ONLY,
  },
  {
    name: 'get_page',
    title: 'Read a page as Markdown',
    description: 'The full text of one aiheroes.io page as Markdown, for example /en/start-sprint or https://aiheroes.io/nl/startsprint. list_pages gives every path.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'Path or full URL on aiheroes.io', minLength: 1, maxLength: 300 } },
      required: ['path'],
      additionalProperties: false,
    },
    annotations: READ_ONLY,
  },
  {
    name: 'list_pages',
    title: 'List the pages',
    description: 'Every public aiheroes.io page with its title and URL, in one language.',
    inputSchema: { type: 'object', properties: { language: LANGUAGE }, additionalProperties: false },
    annotations: READ_ONLY,
  },
  {
    name: 'get_company_facts',
    title: 'Company facts',
    description:
      'The recurring facts about AI Heroes: start sprint (days, price from, start within), build price from, training price, the three ways in, the founders with their booking calendars, and contact details.',
    inputSchema: { type: 'object', properties: { language: LANGUAGE }, additionalProperties: false },
    annotations: READ_ONLY,
  },
];

const lang = z.enum(['en', 'nl']).default('en');
const ARGS = {
  search: z.object({ query: z.string().trim().min(1).max(300), language: lang, limit: z.number().int().min(1).max(10).default(5) }),
  get_page: z.object({ path: z.string().min(1).max(300) }),
  list_pages: z.object({ language: lang }),
  get_company_facts: z.object({ language: lang }),
};
type ToolName = keyof typeof ARGS;

interface ToolResult {
  content: { type: 'text'; text: string }[];
  structuredContent?: Record<string, unknown>;
  isError?: boolean;
}

const text = (t: string, structured?: Record<string, unknown>, isError = false): ToolResult => ({
  content: [{ type: 'text', text: t }],
  ...(structured ? { structuredContent: structured } : {}),
  ...(isError ? { isError } : {}),
});

async function callTool(name: ToolName, raw: unknown): Promise<ToolResult> {
  const parsed = ARGS[name].safeParse(raw ?? {});
  if (!parsed.success) return text(`Invalid arguments: ${parsed.error.issues.map((i) => `${i.path.join('.') || 'input'}: ${i.message}`).join('; ')}`, undefined, true);

  if (name === 'search') {
    const { query, language, limit } = parsed.data as z.infer<typeof ARGS.search>;
    const results = (await retrieve(query, language, limit)).map((r) => ({
      title: r.title,
      heading: r.heading,
      url: r.url,
      text: r.text.length > 700 ? `${r.text.slice(0, 700).trimEnd()}…` : r.text,
    }));
    if (!results.length) return text(`Nothing found for "${query}". Try other words, the other language, or list_pages.`, { results });
    const out = results.map((r, i) => `${i + 1}. ${r.title}${r.heading ? ` · ${r.heading}` : ''}\n   ${r.url}\n   ${r.text.replace(/\s+/g, ' ')}`);
    return text(out.join('\n\n'), { results });
  }

  if (name === 'get_page') {
    const { path: input } = parsed.data as z.infer<typeof ARGS.get_page>;
    const path = toPath(input);
    const md = path ? readPage(path) : null;
    if (!md) return text(`No page at "${input}" on aiheroes.io. Use list_pages for every path, or search.`, undefined, true);
    return text(md);
  }

  if (name === 'list_pages') {
    const { language } = parsed.data as z.infer<typeof ARGS.list_pages>;
    const list = pages().filter((p) => p.lang === language).map(({ title, url }) => ({ title, url }));
    return text(list.map((p) => `- [${p.title}](${p.url})`).join('\n'), { pages: list });
  }

  const { language } = parsed.data as z.infer<typeof ARGS.get_company_facts>;
  const f = facts(language);
  return text(JSON.stringify(f, null, 2), f);
}

// --- JSON-RPC ---------------------------------------------------------------------------------

interface RpcMessage {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: Record<string, unknown>;
}

const rpcError = (id: RpcMessage['id'], code: number, message: string) => ({ jsonrpc: '2.0', id: id ?? null, error: { code, message } });
const rpcResult = (id: RpcMessage['id'], result: unknown) => ({ jsonrpc: '2.0', id, result });

async function handle(msg: RpcMessage, request: Request): Promise<unknown | null> {
  if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') return rpcError(null, -32600, 'Invalid Request');
  // Notifications (no id) and responses get no answer.
  if (msg.id === undefined || msg.id === null || typeof msg.method !== 'string') return null;
  const { id, method, params = {} } = msg;

  switch (method) {
    case 'initialize': {
      const asked = typeof params.protocolVersion === 'string' ? params.protocolVersion : '';
      return rpcResult(id, {
        protocolVersion: PROTOCOL_VERSIONS.includes(asked) ? asked : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      });
    }
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, { tools: TOOLS });
    case 'tools/call': {
      const name = params.name;
      if (typeof name !== 'string' || !(name in ARGS)) return rpcError(id, -32602, `Unknown tool: ${String(name)}`);
      const perMinute = await increment(`mcp:${hashIp(request)}:minute`, 60);
      if (perMinute > CALLS_PER_MINUTE) return rpcError(id, -32000, 'Rate limit: try again in a minute');
      try {
        return rpcResult(id, await callTool(name as ToolName, params.arguments));
      } catch (err) {
        console.error('mcp tool failed:', name, err);
        return rpcResult(id, text('The tool failed. Try again, or read https://aiheroes.io/llms.txt.', undefined, true));
      }
    }
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

// Vercel treats a module as a Web-API function only when it exports HTTP-method handlers.
export async function POST(request: Request): Promise<Response> {
  const version = request.headers.get('mcp-protocol-version');
  if (version && !PROTOCOL_VERSIONS.includes(version)) {
    return json(400, rpcError(null, -32600, `Unsupported MCP-Protocol-Version: ${version}`));
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, rpcError(null, -32700, 'Parse error'));
  }
  if (Array.isArray(body)) {
    if (body.length === 0 || body.length > 20) return json(400, rpcError(null, -32600, 'Invalid Request'));
    const answers = (await Promise.all(body.map((m) => handle(m as RpcMessage, request)))).filter((a) => a !== null);
    return answers.length ? json(200, answers) : new Response(null, { status: 202, headers: CORS });
  }
  const answer = await handle(body as RpcMessage, request);
  return answer === null ? new Response(null, { status: 202, headers: CORS }) : json(200, answer);
}

// No server-initiated stream: GET gets 405, as the transport allows. A short note for people
// who open the URL in a browser.
export async function GET(): Promise<Response> {
  return new Response(
    'AI Heroes MCP server (Streamable HTTP). Connect an MCP client to https://aiheroes.io/mcp. Server card: https://aiheroes.io/.well-known/mcp/server-card.json\n',
    { status: 405, headers: { Allow: 'POST, OPTIONS', 'Content-Type': 'text/plain; charset=utf-8', ...CORS } },
  );
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: { ...CORS, 'Access-Control-Max-Age': '86400' } });
}
