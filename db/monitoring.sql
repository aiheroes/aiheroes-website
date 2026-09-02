-- Monitoring queries for the website assistant (launch plan E3). Paste into the
-- Supabase SQL editor (service role) or wire into a Supabase "Reports" dashboard.
-- All tables come from db/schema.sql. Time zone: Europe/Amsterdam.

-- 1. Daily volume: conversations, messages, escalations (last 14 days).
select
  (c.started_at at time zone 'Europe/Amsterdam')::date as day,
  count(distinct c.id)                                  as conversations,
  count(m.id) filter (where m.role = 'user')            as visitor_messages,
  count(distinct e.conversation_id)                     as escalations,
  round(100.0 * count(distinct e.conversation_id) / nullif(count(distinct c.id), 0), 1) as escalation_pct
from conversations c
left join messages m on m.conversation_id = c.id
left join escalations e on e.conversation_id = c.id
where c.started_at > now() - interval '14 days'
group by 1
order by 1 desc;

-- 2. Containment proxy: conversations with >= 2 visitor turns and no escalation.
--    (SDD V1 "oplossen, niet afschepen": watch this next to the escalation rate.)
with per_conv as (
  select c.id,
         count(*) filter (where m.role = 'user') as user_turns,
         bool_or(e.id is not null)               as escalated
  from conversations c
  join messages m on m.conversation_id = c.id
  left join escalations e on e.conversation_id = c.id
  where c.started_at > now() - interval '7 days'
  group by c.id
)
select
  count(*)                                                     as conversations_7d,
  count(*) filter (where user_turns >= 2)                      as engaged,
  count(*) filter (where user_turns >= 2 and not escalated)    as engaged_contained,
  round(100.0 * count(*) filter (where user_turns >= 2 and not escalated)
        / nullif(count(*) filter (where user_turns >= 2), 0), 1) as containment_pct
from per_conv;

-- 3. Language + entry page mix (where the assistant is actually used).
select locale, first_path, count(*) as conversations
from conversations
where started_at > now() - interval '30 days'
group by 1, 2
order by 3 desc
limit 25;

-- 4. Spend circuit breaker: cents recorded per day/month window (D9 layer 6).
--    Keys are written by server/counters.ts recordSpend(): spend:day / spend:month.
select key,
       to_timestamp(window_start) at time zone 'Europe/Amsterdam' as window_start,
       count                                                      as cents
from counters
where key like 'spend:%'
order by window_start desc
limit 40;

-- 5. Abuse signals: actors hitting the per-minute or per-day limits today.
select key, to_timestamp(window_start) as window_start, count
from counters
where key not like 'spend:%'
  and window_start > extract(epoch from date_trunc('day', now()))::bigint
  and count >= 10
order by count desc
limit 50;

-- 6. Open escalations older than one working day (SLA: reply within a day).
select e.id, e.created_at, e.name, e.email, e.reason, e.conversation_id
from escalations e
where e.status = 'open'
  and e.created_at < now() - interval '1 day'
order by e.created_at;

-- 7. "Honest unknown" signal: assistant answers that admit not knowing (NL/EN).
--    A rising share means the corpus has a gap worth a page or article.
select (m.created_at at time zone 'Europe/Amsterdam')::date as day,
       count(*) as unknown_answers
from messages m
where m.role = 'assistant'
  and m.created_at > now() - interval '30 days'
  and (m.content::text ilike '%weet ik niet%'
       or m.content::text ilike '%staat niet op de site%'
       or m.content::text ilike '%don''t have that information%'
       or m.content::text ilike '%not on the site%')
group by 1
order by 1 desc;

-- 8. Most cited pages (source chips) — what the assistant sends people to.
select src->>'url' as url, count(*) as citations
from messages m, jsonb_array_elements(coalesce(m.sources, '[]'::jsonb)) src
where m.role = 'assistant'
  and m.created_at > now() - interval '30 days'
group by 1
order by 2 desc
limit 20;

-- 9. Thumbs feedback is retired in the widget (26-08); the table stays for the
--    escalation form's implicit signal. Sanity check it stays empty:
select count(*) as feedback_rows from feedback;

-- 10. Retention health: nothing older than the D6 windows should survive the
--     nightly pg_cron job (30 days regular, 90 days escalated).
select
  count(*) filter (where c.last_at < now() - interval '30 days' and not c.escalated) as stale_regular,
  count(*) filter (where c.last_at < now() - interval '90 days' and c.escalated)     as stale_escalated
from conversations c;
