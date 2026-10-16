// WebMCP (https://webmachinelearning.github.io/webmcp/): the site's key actions as tools for an AI
// agent in the visitor's browser. Here the imperative tools: search the site, read a page as
// Markdown, open a page. The contact form is a declarative tool (toolname on the form in
// HsContact; hs-client initForm answers the agent). Registered once per document: the
// ClientRouter keeps the document across page loads. Browsers without WebMCP skip all of it.

import { navigate } from 'astro:transitions/client';

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean };
  execute: (args: Record<string, unknown>) => Promise<string>;
}

interface ModelContext {
  registerTool(tool: WebMcpTool, options?: { signal?: AbortSignal }): Promise<void> | void;
}

const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'nl');

/** A same-origin path from a path or URL, or null. */
function sitePath(input: unknown): string | null {
  if (typeof input !== 'string' || !input.trim()) return null;
  try {
    const url = new URL(input.trim(), location.origin);
    return url.origin === location.origin ? url.pathname.replace(/\/+$/, '') || '/' : null;
  } catch {
    return null;
  }
}

const TOOLS: WebMcpTool[] = [
  {
    name: 'search_site',
    description:
      'Search the AI Heroes website: services, the start sprint, prices, cases, knowledge articles, the team and events. Returns matching passages with their page URLs.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'What to look for, in English or Dutch' },
        language: { type: 'string', enum: ['en', 'nl'], description: 'Language of the pages; defaults to the language of this page' },
      },
      required: ['query'],
    },
    annotations: { readOnlyHint: true },
    async execute({ query, language }) {
      const res = await fetch('/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: { name: 'search', arguments: { query: String(query ?? ''), language: language === 'en' || language === 'nl' ? language : lang() } },
        }),
      });
      const data = await res.json().catch(() => null);
      return data?.result?.content?.[0]?.text ?? data?.error?.message ?? 'Search failed. Try again later.';
    },
  },
  {
    name: 'read_page',
    description: 'The text of an aiheroes.io page as Markdown: this page by default, or the path or URL you give.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'Path on this site, for example /en/start-sprint; empty for this page' } },
    },
    annotations: { readOnlyHint: true },
    async execute({ path }) {
      const target = path ? sitePath(path) : location.pathname.replace(/\/+$/, '') || '/';
      if (!target) return 'Give a path on this site, for example /en/start-sprint.';
      const res = await fetch(target === '/' ? '/index.md' : `${target}.md`);
      return res.ok ? res.text() : `No Markdown version of ${target}. Search the site or open the page instead.`;
    },
  },
  {
    name: 'open_page',
    description: 'Open a page of the AI Heroes website in this tab, for example /en/start-sprint or /en/cases.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'Path on this site, optionally with #section' } },
      required: ['path'],
    },
    annotations: { readOnlyHint: true },
    async execute({ path }) {
      const target = sitePath(path);
      if (!target) return 'Give a path on this site, for example /en/start-sprint.';
      const hash = typeof path === 'string' && path.includes('#') ? path.slice(path.indexOf('#')) : '';
      await navigate(target + hash);
      return `Opened ${target}${hash}.`;
    },
  },
];

const context = ((document as unknown as { modelContext?: ModelContext }).modelContext ??
  (navigator as unknown as { modelContext?: ModelContext }).modelContext) as ModelContext | undefined;

if (context && typeof context.registerTool === 'function') {
  for (const tool of TOOLS) {
    try {
      Promise.resolve(context.registerTool(tool)).catch(() => {});
    } catch {
      // An older build with another signature: leave it.
    }
  }
}
