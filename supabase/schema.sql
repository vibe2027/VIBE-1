-- VIBE — Schéma complet (Salon Voix + profils + matchs)
-- Projet Supabase : fhksytcoyjtcrkmhnoyw
-- Exécuter dans SQL Editor

-- Profils (dont mode Fantôme / fumée)
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  city          text,
  intent        text,
  ghost_mode    boolean default true,
  created_at    timestamptz default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles for select using (true);

drop policy if exists "profiles_own" on public.profiles;
create policy "profiles_own" on public.profiles for all using (auth.uid() = id);

-- Révélations (fumée dissipée pour une personne précise)
create table if not exists public.reveals (
  id          uuid primary key default gen_random_uuid(),
  from_user   uuid references auth.users(id) on delete cascade,
  to_user     uuid references auth.users(id) on delete cascade,
  created_at  timestamptz default now(),
  unique (from_user, to_user)
);

alter table public.reveals enable row level security;
create policy "reveals_read" on public.reveals for select
  using (auth.uid() = from_user or auth.uid() = to_user);
create policy "reveals_insert" on public.reveals for insert
  with check (auth.uid() = from_user);

-- Matchs (pair uniquement visible aux 2 ; flash est broadcast séparé)
create table if not exists public.matches (
  id          uuid primary key default gen_random_uuid(),
  user_a      uuid references auth.users(id) on delete cascade,
  user_b      uuid references auth.users(id) on delete cascade,
  created_at  timestamptz default now(),
  check (user_a < user_b)
);

alter table public.matches enable row level security;
create policy "matches_pair_only" on public.matches for select
  using (auth.uid() = user_a or auth.uid() = user_b);
create policy "matches_insert" on public.matches for insert
  with check (auth.uid() = user_a or auth.uid() = user_b);

-- Salon des Voix
create table if not exists public.voix_profiles (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references auth.users(id) on delete cascade,
  name            text,
  city            text,
  intent          text,
  audio_url       text not null,
  duration_label  text default '0:20',
  published       boolean default true,
  created_at      timestamptz default now()
);

create index if not exists voix_profiles_published_idx
  on public.voix_profiles (published, created_at desc);

alter table public.voix_profiles enable row level security;
create policy "voix_select_published" on public.voix_profiles for select using (published = true);
create policy "voix_insert_own" on public.voix_profiles for insert with check (auth.uid() = user_id);
create policy "voix_update_own" on public.voix_profiles for update using (auth.uid() = user_id);
create policy "voix_delete_own" on public.voix_profiles for delete using (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('voix', 'voix', true)
on conflict (id) do nothing;

create policy "voix_audio_read" on storage.objects for select using (bucket_id = 'voix');
create policy "voix_audio_upload" on storage.objects for insert
  with check (bucket_id = 'voix' and auth.role() = 'authenticated');
