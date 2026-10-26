-- Website tracking (marketing-automation SDD §8) and tool runs (§7.1). Apply in the
-- Supabase SQL editor or with psql as `postgres`; safe to re-run.
--
-- Layer 0 (everyone): no cookie, no stored IP. The collector (api/e.ts) hashes
-- salt|ip|user-agent with a random salt that exists for one UTC day, so a visitor is
-- only recognisable within that day. Layer 1 (only after "Ja" in the consent bar):
-- events also carry `vid`, a random id from the first-party cookie aih_vid.
-- Writes go through the service key (RLS on, no policies); the AI Heroes Hub reads
-- with the role hub_worker (db/hub_worker.sql).

create table if not exists web_events (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  host text not null,
  visitor_key text not null,
  vid uuid,
  type text not null check (type in ('pageview', 'leave', 'event', 'consent')),
  name text,
  path text not null,
  referrer_host text,
  utm jsonb,
  lang text,
  country text,
  device text,
  browser text,
  engaged_ms integer,
  scroll_pct smallint,
  props jsonb,
  internal boolean not null default false
);
create index if not exists web_events_at on web_events (at);
create index if not exists web_events_visitor on web_events (visitor_key, at);
create index if not exists web_events_vid on web_events (vid, at) where vid is not null;

-- Every run of a checker or questionnaire, also without an e-mail address.
create table if not exists tool_runs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  tool text not null,
  input_domain text,
  input jsonb,
  result jsonb,
  score smallint,
  visitor_key text,
  vid uuid,
  report_requested_at timestamptz,
  report_opened_at timestamptz,
  email_hash text
);
create index if not exists tool_runs_created on tool_runs (created_at);
create index if not exists tool_runs_domain on tool_runs (input_domain);

-- Daily rollup, kept after the raw events are gone. dimension: total, path,
-- referrer, country, device.
create table if not exists web_daily_stats (
  day date not null,
  dimension text not null,
  key text not null,
  visitors integer not null,
  pageviews integer not null,
  engaged_ms bigint not null,
  primary key (day, dimension, key)
);

-- One random salt per UTC day. Deleted after two days, so older visitor keys can
-- no longer be linked to an IP address by anyone, including us.
create table if not exists tracking_salts (
  day date primary key,
  salt text not null
);

create or replace function tracking_salt()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_salt text;
begin
  insert into tracking_salts (day, salt)
  values (current_date, replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''))
  on conflict (day) do nothing;
  select salt into v_salt from tracking_salts where day = current_date;
  return v_salt;
end;
$$;
revoke all on function tracking_salt() from public, anon, authenticated;
grant execute on function tracking_salt() to service_role;

create or replace function tracking_rollup(p_day date)
returns void
language sql
as $$
  delete from web_daily_stats where day = p_day;
  with ev as (
    select coalesce(vid::text, visitor_key) as person, type, path, referrer_host, country, device, engaged_ms
    from web_events
    where at >= p_day and at < p_day + 1 and host = 'aiheroes.io' and not internal
  )
  insert into web_daily_stats (day, dimension, key, visitors, pageviews, engaged_ms)
  select p_day, 'total', '', count(distinct person), count(*) filter (where type = 'pageview'), coalesce(sum(engaged_ms), 0) from ev
  union all
  select p_day, 'path', path, count(distinct person), count(*) filter (where type = 'pageview'), coalesce(sum(engaged_ms), 0) from ev group by path
  union all
  select p_day, 'referrer', coalesce(referrer_host, '(direct)'), count(distinct person), count(*), 0 from ev where type = 'pageview' group by 3
  union all
  select p_day, 'country', coalesce(country, '?'), count(distinct person), count(*), 0 from ev where type = 'pageview' group by 3
  union all
  select p_day, 'device', coalesce(device, '?'), count(distinct person), count(*), 0 from ev where type = 'pageview' group by 3;
$$;
revoke all on function tracking_rollup(date) from public, anon, authenticated;

alter table web_events enable row level security;
alter table tool_runs enable row level security;
alter table web_daily_stats enable row level security;
alter table tracking_salts enable row level security;

-- The hub reads events, tool runs and the rollup; never the salts.
grant select on web_events, tool_runs, web_daily_stats to hub_worker;
drop policy if exists hub_worker_read on web_events;
create policy hub_worker_read on web_events for select to hub_worker using (true);
drop policy if exists hub_worker_read on tool_runs;
create policy hub_worker_read on tool_runs for select to hub_worker using (true);
drop policy if exists hub_worker_read on web_daily_stats;
create policy hub_worker_read on web_daily_stats for select to hub_worker using (true);

-- Rollup of yesterday, shortly after midnight UTC.
select cron.schedule('tracking-rollup', '30 0 * * *', $$ select tracking_rollup(current_date - 1) $$);

-- Retention (privacy statement): anonymous events 90 days, events of recognised
-- visitors 13 months (the cookie's lifetime), tool runs 13 months, salts 2 days.
select cron.schedule(
  'tracking-retention',
  '40 3 * * *',
  $$
    delete from web_events where vid is null and at < now() - interval '90 days';
    delete from web_events where vid is not null and at < now() - interval '13 months';
    delete from tool_runs where created_at < now() - interval '13 months';
    delete from tracking_salts where day < current_date - 1;
  $$
);
