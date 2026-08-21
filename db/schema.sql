-- Chat assistant schema (SDD D6/D9) for Supabase Postgres, EU region (Frankfurt).
-- Apply via the Supabase SQL editor. Service-role access only: RLS is enabled with
-- no policies, so the anon key can read nothing.

create table if not exists conversations (
  id uuid primary key,
  locale text not null default 'nl',
  first_path text not null default '/',
  started_at timestamptz not null default now(),
  last_at timestamptz not null default now(),
  escalated boolean not null default false
);

create table if not exists messages (
  id bigint generated always as identity primary key,
  conversation_id uuid not null,
  role text not null check (role in ('user', 'assistant')),
  content jsonb not null,
  sources jsonb,
  created_at timestamptz not null default now()
);
create index if not exists messages_conversation_idx on messages (conversation_id, created_at);

create table if not exists escalations (
  id bigint generated always as identity primary key,
  conversation_id uuid not null,
  name text not null,
  email text not null,
  reason text not null default 'visitor_request',
  consent_at timestamptz not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table if not exists feedback (
  id bigint generated always as identity primary key,
  conversation_id uuid not null,
  message_id text not null,
  rating text not null check (rating in ('up', 'down')),
  created_at timestamptz not null default now()
);

-- Windowed counters for rate limits + spend circuit breakers (D9 layers 4+6).
create table if not exists counters (
  key text not null,
  window_start bigint not null,
  count bigint not null default 0,
  primary key (key, window_start)
);

-- Atomic increment used by server/counters.ts. Returns the new count for the
-- current window. p_delta 0 = read-only peek.
create or replace function increment_counter(p_key text, p_window_seconds bigint, p_delta bigint)
returns bigint
language plpgsql
security definer
as $$
declare
  v_window bigint := (extract(epoch from now())::bigint / p_window_seconds) * p_window_seconds;
  v_count bigint;
begin
  insert into counters (key, window_start, count)
  values (p_key, v_window, greatest(p_delta, 0))
  on conflict (key, window_start)
  do update set count = counters.count + p_delta
  returning count into v_count;
  return v_count;
end;
$$;

-- Retention (SDD D6): 30 days for regular conversations, 90 for escalated ones;
-- counters older than 60 days are noise. Requires the pg_cron extension
-- (Database -> Extensions in Supabase).
select cron.schedule(
  'chat-retention',
  '20 3 * * *',
  $$
    delete from messages m using conversations c
      where m.conversation_id = c.id
        and c.last_at < now() - case when c.escalated then interval '90 days' else interval '30 days' end;
    delete from conversations c
      where c.last_at < now() - case when c.escalated then interval '90 days' else interval '30 days' end;
    delete from counters where window_start < extract(epoch from now())::bigint - 60*24*60*60;
  $$
);

alter table conversations enable row level security;
alter table messages enable row level security;
alter table escalations enable row level security;
alter table feedback enable row level security;
alter table counters enable row level security;
