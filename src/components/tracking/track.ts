// Beacon for the site's own visit tracking (marketing-automation SDD §8.3). Bundled once by
// HsLayout; with the ClientRouter it keeps running across page swaps.
//
// Without consent nothing is stored in the browser: the collector (api/e.ts) recognises a
// visitor only within one day, from a hash it makes server side. With "Ja" in the consent bar
// (consent.ts) every event also carries the id from the cookie aih_vid.
//
// Per page: a pageview on arrival, and a leave event with the engaged time since the last leave
// (time the tab is visible and someone was active in the last 30 s) and the deepest scroll.
// Custom events: window.aihTrack(name, props) or data-track="name" on a clickable element.

type Props = Record<string, string | number | boolean>;
type Ev = {
  t: 'pageview' | 'leave' | 'event' | 'consent';
  p: string;
  n?: string;
  r?: string;
  u?: Record<string, string>;
  l?: string;
  ms?: number;
  s?: number;
  x?: Props;
};

declare global {
  interface Window {
    aihTrack?: (name: string, props?: Props) => void;
  }
}

const ENDPOINT = '/api/e';
const IDLE_MS = 30_000;
const host = location.hostname;
const enabled = host !== 'localhost' && host !== '127.0.0.1';

function cookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

// ?intern=1 marks this browser as team traffic (filtered out of the dashboards), ?intern=0 undoes it.
function internal(): boolean {
  try {
    const flag = new URLSearchParams(location.search).get('intern');
    if (flag === '1') localStorage.setItem('aih_intern', '1');
    if (flag === '0') localStorage.removeItem('aih_intern');
    return localStorage.getItem('aih_intern') === '1';
  } catch {
    return false;
  }
}

function send(events: Ev[], unloading = false) {
  if (!enabled || !events.length) return;
  const consent = cookie('aih_consent');
  const body = JSON.stringify({
    h: host,
    c: consent === 'yes' || consent === 'no' ? consent : null,
    vid: consent === 'yes' ? (cookie('aih_vid') ?? undefined) : undefined,
    i: internal() ? 1 : undefined,
    e: events,
  });
  try {
    if (unloading && navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'text/plain' }));
      return;
    }
    void fetch(ENDPOINT, { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(() => {});
  } catch {
    // Tracking never gets in the visitor's way.
  }
}

// --- the current page ---

let path = location.pathname;
let engaged = 0;
let lastActive = Date.now();
let maxScroll = 0;
let first = true;

const active = () => {
  lastActive = Date.now();
};

setInterval(() => {
  if (document.visibilityState === 'visible' && Date.now() - lastActive < IDLE_MS) engaged += 1000;
}, 1000);

function measureScroll() {
  const doc = document.documentElement;
  const seen = ((window.scrollY + window.innerHeight) / Math.max(doc.scrollHeight, 1)) * 100;
  maxScroll = Math.max(maxScroll, Math.min(100, Math.round(seen)));
}

let scrollQueued = false;
addEventListener(
  'scroll',
  () => {
    active();
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      measureScroll();
    });
  },
  { passive: true },
);
for (const type of ['pointermove', 'pointerdown', 'keydown', 'touchstart']) {
  addEventListener(type, active, { passive: true });
}

function leave(unloading: boolean) {
  if (engaged < 1000) return;
  send([{ t: 'leave', p: path, ms: engaged, s: maxScroll }], unloading);
  engaged = 0;
}

function pageview() {
  path = location.pathname;
  engaged = 0;
  maxScroll = 0;
  lastActive = Date.now();
  measureScroll();
  const ev: Ev = { t: 'pageview', p: path, l: document.documentElement.lang || undefined };
  if (first) {
    first = false;
    try {
      const ref = document.referrer ? new URL(document.referrer).hostname : '';
      if (ref && ref !== host) ev.r = ref.replace(/^www\./, '');
    } catch {
      // An unparsable referrer is simply left out.
    }
    const params = new URLSearchParams(location.search);
    const utm: Record<string, string> = {};
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
      const value = params.get(key);
      if (value) utm[key.slice(4)] = value.slice(0, 120);
    }
    if (Object.keys(utm).length) ev.u = utm;
  }
  send([ev]);
}

document.addEventListener('astro:page-load', pageview);
document.addEventListener('astro:before-preparation', () => leave(false));
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') leave(true);
});
addEventListener('pagehide', () => leave(true));

// --- custom events ---

window.aihTrack = (name, props) => send([{ t: 'event', n: name, p: path, x: props }]);

document.addEventListener('aih:consent', (e) => {
  const detail = (e as CustomEvent<{ choice: 'yes' | 'no'; version: string }>).detail;
  send([{ t: 'consent', n: detail.choice, p: path, x: { version: detail.version } }]);
});

document.addEventListener(
  'click',
  (e) => {
    const target = e.target as Element | null;
    const tracked = target?.closest<HTMLElement>('[data-track]');
    if (tracked?.dataset.track) window.aihTrack?.(tracked.dataset.track);
    const link = target?.closest<HTMLAnchorElement>('a[href]');
    if (!link) return;
    try {
      const url = new URL(link.href, location.href);
      if (/\.(pdf|docx?|xlsx?|pptx?|zip)$/i.test(url.pathname) || link.hasAttribute('download')) {
        window.aihTrack?.('download', { file: url.pathname.split('/').pop() ?? '' });
      } else if (/^https?:$/.test(url.protocol) && url.hostname !== host) {
        window.aihTrack?.('outbound', { host: url.hostname.replace(/^www\./, '') });
      }
    } catch {
      // mailto:, tel: and odd hrefs are not tracked.
    }
  },
  { capture: true },
);

export {};
