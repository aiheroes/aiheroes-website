// Markdown for agents by content negotiation (Vercel Routing Middleware). A request that
// asks for text/markdown (Accept: text/markdown) gets the page's Markdown version, the
// <path>.md that scripts/build-markdown.mjs writes after the build; browsers keep getting
// HTML. vercel.json rewrites run after the filesystem, so a static page always wins there;
// middleware runs before it.
//
// The Markdown is fetched from the deployment itself and returned with our own headers
// (Content-Type, x-markdown-tokens, a canonical Link to the HTML page). When no .md exists
// (noindexed pages, 404s) or the fetch fails, the request falls through to the HTML.

import { next } from '@vercel/functions/middleware';

// Only the routes that have a Markdown version (see build-markdown.mjs). Node.js runtime:
// Vercel deprecated edge for middleware.
export const config = { matcher: ['/', '/en', '/nl/:path*', '/en/:path*'], runtime: 'nodejs' };

/** q-value of a media range in an Accept header, or -1 when it is not listed. */
function quality(accept: string, type: string): number {
  const [major] = type.split('/');
  let exact = -1;
  let partial = -1;
  let any = -1;
  for (const part of accept.toLowerCase().split(',')) {
    const [range, ...params] = part.trim().split(';');
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    const r = range.trim();
    if (r === type) exact = Math.max(exact, q);
    else if (r === `${major}/*`) partial = Math.max(partial, q);
    else if (r === '*/*') any = Math.max(any, q);
  }
  return exact >= 0 ? exact : partial >= 0 ? partial : any;
}

/** Markdown only when it is asked for by name and not ranked below HTML. */
export function wantsMarkdown(accept: string | null): boolean {
  if (!accept || !accept.toLowerCase().includes('text/markdown')) return false;
  const md = quality(accept, 'text/markdown');
  return md > 0 && md >= quality(accept, 'text/html');
}

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const page = request.method === 'GET' || request.method === 'HEAD';
  // Files (the .md itself, assets) pass straight through.
  if (!page || /\.[a-z0-9]+$/i.test(url.pathname)) return next();
  if (!wantsMarkdown(request.headers.get('accept'))) return next({ headers: { Vary: 'Accept' } });

  const path = url.pathname.replace(/\/+$/, '') || '/';
  const mdPath = path === '/' ? '/index.md' : `${path}.md`;
  try {
    const headers: Record<string, string> = { Accept: 'text/markdown' };
    // Preview deployments sit behind Vercel Authentication: pass its cookie or bypass along.
    const cookie = request.headers.get('cookie');
    const bypass = request.headers.get('x-vercel-protection-bypass');
    if (cookie) headers.Cookie = cookie;
    if (bypass) headers['x-vercel-protection-bypass'] = bypass;
    const res = await fetch(new URL(mdPath, url.origin), { headers });
    if (!res.ok) return next({ headers: { Vary: 'Accept' } });
    const body = await res.text();
    const canonical = `https://aiheroes.io${path === '/' ? '' : path}`;
    return new Response(request.method === 'HEAD' ? null : body, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Location': mdPath,
        Link: `<${canonical}>; rel="canonical"; type="text/html"`,
        Vary: 'Accept',
        // Rough estimate (about four characters per token), as Markdown for Agents reports it.
        'x-markdown-tokens': String(Math.ceil(body.length / 4)),
        'Cache-Control': res.headers.get('cache-control') ?? 'public, max-age=0, must-revalidate',
      },
    });
  } catch {
    return next({ headers: { Vary: 'Accept' } });
  }
}
