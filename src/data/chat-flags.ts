// Build-time chat flags, resolved in ONE place.
//
// Why defaults instead of `=== 'true'`: the site is built on a GitHub runner via
// `vercel pull` + `vercel build`, and Vercel "sensitive" environment variables are
// not pullable (they arrive empty). A flag that needs an explicit 'true' would
// silently switch the assistant off on every CI build. The launch decision (26-08)
// is "chat is public", so the flags degrade to ON; PUBLIC_CHAT_ENABLED=false is
// the kill switch and PUBLIC_CHAT_SOURCE_CHIPS=false hides the chips.
export const CHAT_ENABLED = import.meta.env.PUBLIC_CHAT_ENABLED !== 'false';
export const CHAT_SOURCE_CHIPS = import.meta.env.PUBLIC_CHAT_SOURCE_CHIPS !== 'false';
// Public booking link (also printed on the site); env overrides it.
export const CHAT_BOOKING_URL: string =
  import.meta.env.PUBLIC_CHAT_BOOKING_URL || 'https://calendar.app.google/GV4mwWWbdzJJJBfW9';
