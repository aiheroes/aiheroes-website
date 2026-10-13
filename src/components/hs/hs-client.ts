// Behaviour of the house-style site: cover rotation, section build-ups, counting numbers, the menu,
// forms, FAQ anchors and filters. Re-initialised on every Astro page load.

let teardown: AbortController | null = null;
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMenu(signal: AbortSignal) {
  const menuBtn = document.querySelector<HTMLButtonElement>('.hs-nav__menu');
  const menu = document.getElementById('hs-menu');
  if (!menuBtn || !menu) return;
  const setOpen = (open: boolean) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    // The chat launcher steps aside while the full-screen menu is open.
    window.dispatchEvent(new CustomEvent('hs:menu', { detail: { open } }));
  };
  menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'), { signal });
  menu.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) setOpen(false); }, { signal });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); menuBtn.focus(); }
  }, { signal });
  signal.addEventListener('abort', () => {
    document.documentElement.style.overflow = '';
    window.dispatchEvent(new CustomEvent('hs:menu', { detail: { open: false } }));
  });
}

function initCover(signal: AbortSignal) {
  const root = document.querySelector<HTMLElement>('.hs-cover');
  if (!root) return;
  const wipe = root.querySelector<HTMLElement>('.hs-cover__wipe')!;
  const heads = [...root.querySelectorAll<HTMLElement>('[data-head]')];
  const subs = [...root.querySelectorAll<HTMLElement>('[data-sub]')];
  const photos = [...root.querySelectorAll<HTMLImageElement>('[data-photo]')];
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-go]')];
  const pauseBtn = root.querySelector<HTMLButtonElement>('[data-pause]');
  let current = 0;
  let pendingAccent = root.dataset.accent ?? 'red';
  let held = false;      // paused by the visitor with the button
  let hovering = false;
  let focused = false;

  const syncPause = () => {
    root.classList.toggle('is-paused', held || hovering || focused || document.hidden);
    root.classList.toggle('is-held', held);
    pauseBtn?.setAttribute('aria-label', held ? pauseBtn.dataset.labelPlay ?? 'Speel de wisseling af' : pauseBtn.dataset.labelPause ?? 'Pauzeer de wisseling');
  };

  // Words and photo rotate within one colour field; only a visitor's choice changes the colour.
  const show = (next: number, chosen = false) => {
    if (next !== current) {
      [heads, subs].forEach((list) => {
        list[current]?.classList.remove('is-active');
        list[current]?.setAttribute('aria-hidden', 'true');
        list[next]?.classList.add('is-active');
        list[next]?.removeAttribute('aria-hidden');
      });
      photos[current]?.classList.remove('is-active');
      photos[current]?.setAttribute('alt', '');
      photos[next]?.classList.add('is-active');
      photos[next]?.setAttribute('alt', tabs[next].dataset.alt ?? '');
      tabs[current].setAttribute('aria-selected', 'false');
      tabs[next].setAttribute('aria-selected', 'true');
      current = next;
    }
    if (!chosen) return;
    const to = tabs[next].dataset.accent!;
    if (to === root.dataset.accent) return;
    pendingAccent = to;
    if (reduceMotion()) { root.dataset.accent = to; return; }
    // A new colour field slides in over the old one, then becomes the zone itself.
    wipe.style.background = `var(--${to})`;
    wipe.classList.remove('is-wiping');
    void wipe.offsetWidth;
    wipe.classList.add('is-wiping');
  };

  wipe.addEventListener('animationend', () => {
    root.dataset.accent = pendingAccent;
    wipe.classList.remove('is-wiping');
  }, { signal });

  tabs.forEach((tab, i) => tab.addEventListener('click', () => show(i, true), { signal }));
  root.querySelector('[role="tablist"]')?.addEventListener('keydown', (e) => {
    const k = (e as KeyboardEvent).key;
    if (k !== 'ArrowRight' && k !== 'ArrowLeft') return;
    const next = (current + (k === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
    show(next, true);
    tabs[next].focus();
  }, { signal });

  // The progress fill is the clock: when the active fill finishes, the next slide comes in.
  root.addEventListener('animationend', (e) => {
    if ((e.target as Element).classList.contains('hs-cover__fill')) show((current + 1) % tabs.length);
  }, { signal });

  pauseBtn?.addEventListener('click', () => { held = !held; syncPause(); }, { signal });
  // Hover and focus hold the rotation for a mouse and a keyboard only. On a phone a tap fakes a
  // mouseenter that never gets its mouseleave, and the tapped tab keeps focus: the cover froze
  // after the first tap. A clicked tab keeps focus too, so focus counts only when it is visible.
  root.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse') return; hovering = true; syncPause(); }, { signal });
  root.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'mouse') return; hovering = false; syncPause(); }, { signal });
  const keyboardFocus = () => !!root.querySelector(':focus-visible');
  root.addEventListener('focusin', () => { focused = keyboardFocus(); syncPause(); }, { signal });
  root.addEventListener('focusout', () => { focused = root.contains(document.activeElement) && keyboardFocus(); syncPause(); }, { signal });
  document.addEventListener('visibilitychange', syncPause, { signal });
  syncPause();
}

/** Numbers count up from zero in 800ms (deck §9). The server-rendered value is the final one. */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals ?? 0);
  const suffix = el.dataset.suffix ?? '';
  const prefix = el.dataset.prefix ?? '';
  const locale = document.documentElement.lang === 'en' ? 'en-GB' : 'nl-NL';
  const nf = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const fmt = (v: number) => prefix + nf.format(v) + suffix;
  if (reduceMotion() || !Number.isFinite(target)) { el.textContent = fmt(target); return; }
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min((now - start) / 800, 1);
    el.textContent = fmt(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  el.textContent = fmt(0);
  requestAnimationFrame(step);
}

function initReveal(observers: IntersectionObserver[]) {
  // data-reveal="content": the block is taller than its content (the statement on phones), so the
  // reveal waits for its first item to come into view instead of the block's top edge.
  const blockOf = new Map<Element, Element>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const block = blockOf.get(e.target) ?? e.target;
      block.classList.add('is-in');
      block.querySelectorAll<HTMLElement>('[data-count]').forEach((n) => setTimeout(() => countUp(n), 180));
      io.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll<HTMLElement>('.hs [data-reveal]').forEach((el) => {
    const watch = el.dataset.reveal === 'content' ? el.querySelector('[data-item]') ?? el : el;
    blockOf.set(watch, el);
    io.observe(watch);
  });
  observers.push(io);
}

/** Statement: write out "mbitie" and "mplementatie" once the slide is mostly in view. Plays once. */
function initAI(observers: IntersectionObserver[]) {
  const sec = document.querySelector<HTMLElement>('.hs-statement[data-ai]');
  if (!sec) return;
  if (reduceMotion()) { sec.classList.add('is-played'); return; }
  // Start as soon as the slogan itself comes into view, not when the slide has nearly landed.
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    sec.classList.add('is-played');
    io.disconnect();
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  io.observe(sec.querySelector('.hs-ai') ?? sec);
  observers.push(io);
}

/**
 * Main menu: always there at the top of the page; it moves out of the way while you scroll down
 * and slides back in as soon as you scroll up. The direction comes from the wheel, touch and keys,
 * not from the scroll position, so a snap that settles the page back onto a slide does not
 * summon the menu.
 */
function initNav(signal: AbortSignal) {
  const nav = document.querySelector<HTMLElement>('.hs-nav');
  const menuBtn = document.querySelector<HTMLButtonElement>('.hs-nav__menu');
  if (!nav) return;
  const nearTop = () => scrollY < nav.offsetHeight * 2;
  // Only keyboard focus pins the bar: a tapped or clicked menu button keeps focus, and the bar must still hide.
  const pinned = () => menuBtn?.getAttribute('aria-expanded') === 'true' || !!nav.querySelector(':focus-visible') || !!nav.dataset.open;
  const show = () => nav.classList.remove('is-hidden');
  const hide = () => { if (!nearTop() && !pinned()) nav.classList.add('is-hidden'); };
  const go = (up: boolean) => (up ? show() : hide());

  addEventListener('wheel', (e) => { if (Math.abs(e.deltaY) > 2) go(e.deltaY < 0); }, { passive: true, signal });
  let touchY: number | null = null;
  addEventListener('touchstart', (e) => { touchY = e.touches[0]?.clientY ?? null; }, { passive: true, signal });
  addEventListener('touchmove', (e) => {
    const y = e.touches[0]?.clientY;
    if (touchY === null || y === undefined || Math.abs(y - touchY) < 8) return;
    go(y > touchY); // finger moves down = page scrolls up
    touchY = y;
  }, { passive: true, signal });
  addEventListener('keydown', (e) => {
    if (['ArrowUp', 'PageUp', 'Home'].includes(e.key)) show();
    else if (['ArrowDown', 'PageDown', 'End', ' '].includes(e.key)) hide();
  }, { signal });
  addEventListener('scroll', () => { if (nearTop()) show(); }, { passive: true, signal });
  nav.addEventListener('focusin', show, { signal });
}

/**
 * Sub-menu bar (from 1100px). Hovering or focusing a menu item with sub-pages opens its bar, with the
 * sub-items right-aligned on the menu's right edge (CSS); moving
 * to another such item keeps the bar open and wipes the next colour in from the left. It closes
 * shortly after the pointer leaves the menu or rests on an item without sub-pages, on Esc, when
 * focus leaves the menu and when the page scrolls down. On touch the first tap on an item opens
 * its bar and the second follows the link.
 */
function initSubnav(signal: AbortSignal) {
  const nav = document.querySelector<HTMLElement>('[data-subnav]');
  if (!nav) return;
  const wide = matchMedia('(min-width: 1100px)');
  const items = [...nav.querySelectorAll<HTMLElement>('.hs-nav__item')];
  const subOf = (key: string | null) => (key ? nav.querySelector<HTMLElement>(`[data-sub="${key}"]`) : null);
  const topOf = (key: string | null) => (key ? nav.querySelector<HTMLAnchorElement>(`.hs-nav__item[data-key="${key}"] > .hs-nav__top`) : null);
  let current: string | null = null;
  let openTimer = 0;
  let closeTimer = 0;
  let touch = false;      // the last pointer was a finger or pen: taps open, focus does not
  let quietFocus = false; // focus moved by us (Esc), do not reopen
  const clear = () => { window.clearTimeout(openTimer); window.clearTimeout(closeTimer); };

  const setOpen = (key: string | null) => {
    clear();
    if (key === current) return;
    const prev = current;
    current = key;
    if (key) nav.dataset.open = key; else delete nav.dataset.open;
    topOf(prev)?.setAttribute('aria-expanded', 'false');
    topOf(key)?.setAttribute('aria-expanded', 'true');
    const prevSub = subOf(prev);
    const next = subOf(key);
    prevSub?.classList.remove('is-active');
    if (!next) return;
    next.classList.add('is-active');
    if (prevSub && !reduceMotion()) {
      // Switching: the old plane stays put while the new colour wipes in over it from the left.
      prevSub.classList.add('is-leaving');
      const done = () => prevSub.classList.remove('is-leaving');
      next.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 300, easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)' })
        .finished.then(done, done);
    }
  };
  const closeSoon = (ms: number) => { window.clearTimeout(closeTimer); closeTimer = window.setTimeout(() => setOpen(null), ms); };

  items.forEach((li) => {
    const key = li.dataset.key ?? null;
    li.addEventListener('pointerenter', (e) => {
      if (!wide.matches || e.pointerType !== 'mouse') return;
      clear();
      if (!key) { if (current) closeSoon(150); return; }
      // A short pause before the first opening, so sweeping across the menu does not flash it.
      openTimer = window.setTimeout(() => setOpen(key), current ? 0 : 90);
    }, { signal });
    li.querySelector('.hs-nav__top')?.addEventListener('click', (e) => {
      if (!key || !wide.matches || !touch || current === key) return;
      e.preventDefault();
      setOpen(key);
    }, { signal });
  });
  nav.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { window.clearTimeout(openTimer); closeSoon(260); } }, { signal });
  nav.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') window.clearTimeout(closeTimer); }, { signal });
  addEventListener('pointerdown', (e) => {
    touch = e.pointerType !== 'mouse';
    if (current && !nav.contains(e.target as Node)) setOpen(null);
  }, { capture: true, passive: true, signal });

  nav.addEventListener('focusin', (e) => {
    if (!wide.matches || touch || quietFocus) return;
    const li = (e.target as Element).closest<HTMLElement>('.hs-nav__item');
    setOpen(li?.dataset.key ?? null);
  }, { signal });
  nav.addEventListener('focusout', (e) => { if (!nav.contains(e.relatedTarget as Node | null)) setOpen(null); }, { signal });
  addEventListener('keydown', (e) => {
    touch = false;
    if (e.key !== 'Escape' || !current) return;
    const top = topOf(current);
    setOpen(null);
    quietFocus = true;
    top?.focus();
    quietFocus = false;
  }, { signal });

  addEventListener('wheel', (e) => { if (current && e.deltaY > 2) setOpen(null); }, { passive: true, signal });
  addEventListener('touchmove', () => { if (current) setOpen(null); }, { passive: true, signal });
  wide.addEventListener('change', () => setOpen(null), { signal });
  signal.addEventListener('abort', clear);
}

/**
 * Forms post JSON to their action (/api/contact). The bot checks of the old React form stay: a
 * honeypot, a minimum fill time, links in the message and name equal to organisation all get a
 * silent "success". The server adds origin checks and a rate limit.
 */
function initForm(signal: AbortSignal) {
  document.querySelectorAll<HTMLFormElement>('[data-hs-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('.hs-form__status');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const opened = Date.now();
    const say = (text: string, state: 'ok' | 'error' | 'busy') => {
      if (!status) return;
      status.textContent = text;
      status.dataset.state = state;
    };
    // A marked field (aria-invalid, red ring) clears as soon as the visitor changes it.
    form.addEventListener('input', (e) => (e.target as Element).removeAttribute('aria-invalid'), { signal });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
      const empty = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]')].filter((f) => !f.value.trim());
      empty.forEach((f) => f.setAttribute('aria-invalid', 'true'));
      const missing = empty[0];
      if (missing) {
        say(form.dataset.msgMissing ?? 'Vul je naam, e-mailadres en je vraag in.', 'error');
        missing.focus();
        return;
      }
      const email = form.querySelector<HTMLInputElement>('input[type="email"]');
      if (email && !email.checkValidity()) {
        email.setAttribute('aria-invalid', 'true');
        say(form.dataset.msgEmail ?? 'Dat e-mailadres klopt nog niet helemaal.', 'error');
        email.focus();
        return;
      }
      const done = () => {
        form.reset();
        say(form.dataset.success ?? 'Ontvangen. Binnen 24 uur hoor je van ons.', 'ok');
      };
      const bot = !!data.botField || Date.now() - opened < 3000 || /<a[\s>]/i.test(data.message ?? '')
        || (!!data.name?.trim() && data.name.trim() === data.organization?.trim());
      if (bot) { done(); return; }
      say(form.dataset.msgBusy ?? 'Bezig met versturen…', 'busy');
      if (button) button.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ botField: '', ...data }),
        });
        if (res.ok) done();
        else say(form.dataset.msgError ?? 'Er ging iets mis. Probeer het opnieuw of mail ons via info@aiheroes.io.', 'error');
      } catch {
        say(form.dataset.msgError ?? 'Er ging iets mis. Probeer het opnieuw of mail ons via info@aiheroes.io.', 'error');
      } finally {
        if (button) button.disabled = false;
      }
    }, { signal });
  });
}

/**
 * The three founders have the same rank, so lists marked data-shuffle show them in a random order
 * per visit. The HTML keeps a fixed order for search engines; "alternate" re-applies is-reverse.
 */
function initShuffle() {
  document.querySelectorAll<HTMLElement>('[data-shuffle]').forEach((list) => {
    const items = [...list.children] as HTMLElement[];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach((el, i) => {
      list.appendChild(el);
      if (list.dataset.shuffle === 'alternate') el.classList.toggle('is-reverse', i % 2 === 1);
    });
  });
}

/** FAQ answers are <details>; a link to one (#faq-...) opens it. */
function initFaq() {
  if (!location.hash) return;
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target instanceof HTMLDetailsElement) target.open = true;
}

/** Case and card filters: buttons with data-filter show only the items whose data-tags match. */
function initFilter(signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
    const buttons = [...group.querySelectorAll<HTMLButtonElement>('[data-filter]')];
    const list = document.getElementById(group.dataset.filterGroup!);
    if (!list) return;
    const items = [...list.querySelectorAll<HTMLElement>('[data-tags]')];
    buttons.forEach((b) => b.addEventListener('click', () => {
      const f = b.dataset.filter!;
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      items.forEach((it) => { it.hidden = f !== 'all' && !(it.dataset.tags ?? '').split(' ').includes(f); });
    }, { signal }));
  });
}

function init() {
  teardown?.abort();
  if (!document.querySelector('.hs')) return;
  document.documentElement.classList.add('hs-js');
  teardown = new AbortController();
  const observers: IntersectionObserver[] = [];
  const { signal } = teardown;
  signal.addEventListener('abort', () => observers.forEach((o) => o.disconnect()));
  initMenu(signal);
  initNav(signal);
  initSubnav(signal);
  initCover(signal);
  initReveal(observers);
  initAI(observers);
  initForm(signal);
  initShuffle();
  initFaq();
  initFilter(signal);
}

document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', () => teardown?.abort());
