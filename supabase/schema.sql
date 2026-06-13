-- Lex Insight — consultation request storage
-- Run this in the Supabase dashboard: SQL Editor → New query → paste → Run.
-- (Or via the Supabase CLI as a migration.)

create table if not exists public.inquiries (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text not null,
  phone         text not null,
  company       text,
  practice_area text not null,
  message       text not null,
  status        text not null default 'new',

  -- Light input bounds to limit abuse from the public form.
  constraint name_len    check (char_length(name) between 1 and 200),
  constraint email_len   check (char_length(email) between 3 and 320),
  constraint phone_len   check (char_length(phone) between 3 and 50),
  constraint company_len check (company is null or char_length(company) <= 200),
  constraint message_len check (char_length(message) between 1 and 5000)
);

-- Turn ON Row Level Security. With RLS enabled and only the policy below,
-- the public (anon) role can INSERT but cannot SELECT/UPDATE/DELETE.
alter table public.inquiries enable row level security;

-- Allow anonymous visitors to submit the contact form (insert only).
drop policy if exists "Public can submit inquiries" on public.inquiries;
create policy "Public can submit inquiries"
  on public.inquiries
  for insert
  to anon
  with check (true);

-- NOTE: no SELECT policy is defined on purpose, so submissions are NOT
-- readable from the browser. View them in the Supabase dashboard
-- (Table editor → inquiries), which uses the privileged service role.

-- Helpful index for sorting the newest requests first in the dashboard.
create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);
