// Keeps the opened MeetingChooser panel inside the viewport.
//
// The panel (components/MeetingChooser.tsx) is 288px wide and sits in normal flow,
// so it pushes content down instead of covering it. In a narrow footer column on a
// phone its natural position runs past the screen edge. This nudges it back in.
// It is a document-level listener so it also works for the server-rendered footer,
// which ships no React on static pages, and it survives view transitions.

const VIEWPORT_GUTTER = 16;

function fitPanel(details: HTMLDetailsElement) {
  const panel = details.querySelector<HTMLElement>('[data-meeting-panel]');
  if (!panel) return;
  panel.style.transform = '';
  if (!details.open) return;
  const rect = panel.getBoundingClientRect();
  const maxRight = window.innerWidth - VIEWPORT_GUTTER;
  let dx = 0;
  if (rect.right > maxRight) dx = maxRight - rect.right;
  if (rect.left + dx < VIEWPORT_GUTTER) dx = VIEWPORT_GUTTER - rect.left;
  if (dx !== 0) panel.style.transform = `translateX(${Math.round(dx)}px)`;
}

// `toggle` does not bubble; a capture-phase listener on the document still sees it.
document.addEventListener(
  'toggle',
  (event) => {
    const target = event.target;
    if (target instanceof HTMLDetailsElement && target.hasAttribute('data-meeting-chooser')) {
      fitPanel(target);
    }
  },
  true,
);

window.addEventListener('resize', () => {
  document
    .querySelectorAll<HTMLDetailsElement>('details[data-meeting-chooser][open]')
    .forEach(fitPanel);
});
