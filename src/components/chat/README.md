# Chat assistant

The AI Heroes website assistant (design: internal SDD, not in this repo). Map:

- `src/components/chat/` — widget island (launcher + lazy panel, generative-UI cards,
  escalation form, localStorage continuity, Art. 50 disclosure).
- `netlify/functions/` — `/api/chat` (streaming), `/api/warmup` (token + prewarm),
  `/api/escalate`, `/api/feedback`. All pin region `fra`.
- `server/` — config, guards (HMAC token, quotas), counters/spend breaker, hybrid
  search over the bundled index, prompt, persistence, model routing.
- `scripts/build-index/` — builds `server/index-data/index.json` from `dist/` after
  `astro build`. Same commit ships site + index. Public content only.
- `db/schema.sql` — Supabase (EU) tables + `increment_counter` RPC + retention cron.
- `evals/` — promptfoo suite driving the real handler
  (`npx promptfoo@latest eval -c evals/promptfooconfig.yaml`).

## Local dev

```bash
cp .env.example .env   # set ANTHROPIC_API_KEY (dev provider)
npm run build          # produces dist/ + the knowledge index
netlify dev            # serves the site + functions on one port
```

Then open any page with `?chat=1` (the flag sticks per browser). Without any
persistence/Slack env vars everything degrades gracefully: in-memory rate limits,
no transcripts, no notifications.

## Ship checklist (per SDD §13)

1. `CHAT_TOKEN_SECRET` + `CHAT_IP_SALT` set in Netlify env.
2. Supabase EU project, `db/schema.sql` applied, URL + service key in env.
3. Slack webhook in env.
4. Production model: `CHAT_MODEL_PROVIDER=vertex` + GCP project vars (EU!).
5. `PUBLIC_CHAT_ENABLED=true` only after the eval gate passes.
