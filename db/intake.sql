-- Intake outbox (marketing-automation SDD §3.2, point 4): every contact or download form that
-- reaches the team also lands here, so the AI Heroes Hub can turn it into a contact and a lead.
-- The website writes with the service key (RLS on, no policies) and pings the hub; the hub reads
-- with the role hub_worker and keeps its own cursor, so a missed ping is caught by its cron.
-- Apply in the Supabase SQL editor or with psql as `postgres`; safe to re-run.

create table if not exists intake_outbox (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('contact', 'download')),
  name text not null,
  email text not null,
  company text,
  phone text,
  message text,
  locale text,
  page text,
  -- Only after "Ja" in the consent bar: the visitor id (cookie aih_vid) and the bar's text version.
  vid uuid,
  consent_version text,
  payload jsonb
);
create index if not exists intake_outbox_created on intake_outbox (created_at);
alter table intake_outbox enable row level security;

grant select on intake_outbox to hub_worker;
drop policy if exists hub_worker_read on intake_outbox;
create policy hub_worker_read on intake_outbox for select to hub_worker using (true);

-- The hub copies what it needs into its own database within minutes; 90 days is a safety margin.
select cron.schedule(
  'intake-retention',
  '50 3 * * *',
  $$ delete from intake_outbox where created_at < now() - interval '90 days' $$
);
