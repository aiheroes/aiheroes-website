// 410 Gone for retired WordPress-era URL families (cutover plan F1). vercel.json
// rewrites the dead patterns here, so the original URL stays in the address bar and
// crawlers get the exact status Netlify used to send. Cached, noindex.

export default async function handler(): Promise<Response> {
  return new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>410 Gone</title><meta name="robots" content="noindex"></head><body><h1>410 Gone</h1><p>This page has been permanently removed. Visit <a href="https://aiheroes.io/">aiheroes.io</a>.</p></body></html>',
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noindex',
      },
    },
  );
}
