-- ════════════════════════════════════════════════════════════════
--  VIBE — Le Salon des Voix · Configuration Supabase
--  Projet : fhksytcoyjtcrkmhnoyw
--
--  COMMENT L'UTILISER :
--  1. Va sur supabase.com → ton projet → "SQL Editor"
--  2. Clique "New query"
--  3. Colle TOUT ce fichier
--  4. Clique "Run"
--  → Ça crée la table, les sécurités, et le bucket de stockage audio
-- ════════════════════════════════════════════════════════════════

-- ── 1. TABLE : les profils-voix ─────────────────────────────────
create table if not exists public.voix_profiles (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references auth.users(id) on delete cascade,
  name            text,
  city            text,
  dist            text,
  intent          text,
  audio_url       text not null,
  duration_label  text default '0:20',
  tone_label      text default 'authentique',
  photo_url       text,
  published       boolean default true,
  created_at      timestamptz default now()
);

-- Index pour charger les voix récentes rapidement
create index if not exists voix_profiles_published_idx
  on public.voix_profiles (published, created_at desc);

-- ── 2. SÉCURITÉ (Row Level Security) ────────────────────────────
alter table public.voix_profiles enable row level security;

-- Tout le monde peut VOIR les voix publiées
drop policy if exists "voix_select_published" on public.voix_profiles;
create policy "voix_select_published"
  on public.voix_profiles for select
  using ( published = true );

-- Un membre connecté peut PUBLIER sa propre voix
drop policy if exists "voix_insert_own" on public.voix_profiles;
create policy "voix_insert_own"
  on public.voix_profiles for insert
  with check ( auth.uid() = user_id );

-- Un membre peut MODIFIER seulement sa propre voix
drop policy if exists "voix_update_own" on public.voix_profiles;
create policy "voix_update_own"
  on public.voix_profiles for update
  using ( auth.uid() = user_id );

-- Un membre peut SUPPRIMER seulement sa propre voix
drop policy if exists "voix_delete_own" on public.voix_profiles;
create policy "voix_delete_own"
  on public.voix_profiles for delete
  using ( auth.uid() = user_id );

-- ── 3. BUCKET DE STOCKAGE pour les fichiers audio ───────────────
insert into storage.buckets (id, name, public)
values ('voix', 'voix', true)
on conflict (id) do nothing;

-- Tout le monde peut ÉCOUTER (lire) les fichiers audio
drop policy if exists "voix_audio_read" on storage.objects;
create policy "voix_audio_read"
  on storage.objects for select
  using ( bucket_id = 'voix' );

-- Un membre connecté peut TÉLÉVERSER son audio
drop policy if exists "voix_audio_upload" on storage.objects;
create policy "voix_audio_upload"
  on storage.objects for insert
  with check ( bucket_id = 'voix' and auth.role() = 'authenticated' );

-- ════════════════════════════════════════════════════════════════
--  FINI. Le Salon des Voix est prêt côté base de données.
--
--  Ensuite, dans ton App.jsx, décommente le bloc "👉 SUPABASE"
--  dans la fonction publishVoice() — il pointe déjà vers :
--    • le bucket   'voix'
--    • la table    'voix_profiles'
--  Les noms correspondent exactement à ce SQL.
-- ════════════════════════════════════════════════════════════════
