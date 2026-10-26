-- Read-only role for the AI Heroes Hub (marketing-automation SDD §3.2 and §12).
-- The hub reads chat, tracking and tool data from this database; it never gets the
-- service key. Apply in the Supabase SQL editor or with psql as `postgres`.
--
-- The password is NOT in this file (public repo). Set it separately:
--   alter role hub_worker with password '<secret>';
-- and store the connection string in the hub's Vercel env as WEB_DATABASE_URL
-- (pooler user `hub_worker.<project-ref>`, port 6543).

do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'hub_worker') then
    create role hub_worker with login noinherit;
  end if;
end
$$;

alter role hub_worker set statement_timeout = '15s';

grant usage on schema public to hub_worker;

-- Chat tables (db/schema.sql). RLS stays on; these policies only let hub_worker read.
grant select on conversations, messages, escalations, feedback to hub_worker;

drop policy if exists hub_worker_read on conversations;
create policy hub_worker_read on conversations for select to hub_worker using (true);
drop policy if exists hub_worker_read on messages;
create policy hub_worker_read on messages for select to hub_worker using (true);
drop policy if exists hub_worker_read on escalations;
create policy hub_worker_read on escalations for select to hub_worker using (true);
drop policy if exists hub_worker_read on feedback;
create policy hub_worker_read on feedback for select to hub_worker using (true);

-- Phase 1 adds web_events, web_sessions, web_daily_stats, tool_runs, tool_content and
-- intake_outbox; their grants for hub_worker live next to those tables.
