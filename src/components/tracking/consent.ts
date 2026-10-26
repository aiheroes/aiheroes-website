// Consent bar logic (HsConsent.astro). The choice is kept 13 months in the cookie aih_consent
// (needed to remember the choice, so it needs no consent itself). "Ja" also sets aih_vid, a
// random id for layer 1 of the tracking, and grants GA4's analytics_storage; "Liever niet"
// removes aih_vid and the GA cookies. track.ts sends the choice as a consent event.

const CONSENT_VERSION = '2026-10';
const MAX_AGE = 60 * 60 * 24 * 395;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function setCookie(name: string, value: string, maxAge = MAX_AGE) {
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function dropGaCookies() {
  const names = document.cookie.split(';').map((c) => c.trim().split('=')[0]).filter((n) => n.startsWith('_ga'));
  const domains = ['', `; Domain=${location.hostname}`, `; Domain=.${location.hostname.replace(/^www\./, '')}`];
  for (const name of names) for (const d of domains) document.cookie = `${name}=; Max-Age=0; Path=/${d}`;
}

function choose(choice: 'yes' | 'no', bar: HTMLElement) {
  setCookie('aih_consent', choice);
  if (choice === 'yes') {
    if (!getCookie('aih_vid')) setCookie('aih_vid', crypto.randomUUID());
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  } else {
    setCookie('aih_vid', '', 0);
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    dropGaCookies();
  }
  document.dispatchEvent(new CustomEvent('aih:consent', { detail: { choice, version: CONSENT_VERSION } }));
  bar.hidden = true;
}

let controller: AbortController | null = null;

function init() {
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;
  const bar = document.querySelector<HTMLElement>('[data-consent]');
  if (!bar) return;
  const current = getCookie('aih_consent');
  bar.hidden = current === 'yes' || current === 'no';
  for (const button of bar.querySelectorAll<HTMLButtonElement>('[data-consent-choice]')) {
    button.addEventListener('click', () => choose(button.dataset.consentChoice === 'yes' ? 'yes' : 'no', bar), { signal });
  }
  for (const opener of document.querySelectorAll<HTMLElement>('[data-consent-open]')) {
    opener.addEventListener(
      'click',
      () => {
        bar.hidden = false;
        bar.querySelector<HTMLButtonElement>('[data-consent-choice="yes"]')?.focus();
      },
      { signal },
    );
  }
}

document.addEventListener('astro:page-load', init);

export {};
