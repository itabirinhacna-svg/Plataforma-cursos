create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'student' check (role in ('student','teacher','admin')),
  created_at timestamp with time zone default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  level text not null,
  price_cents integer not null,
  is_published boolean default false,
  created_at timestamp with time zone default now()
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  video_url text,
  position integer not null,
  is_free_preview boolean default false
);

create table public.teaching_materials (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete set null,
  title text not null,
  description text,
  material_type text not null check (material_type in ('sequencia_didatica','plano_aula','slide','apostila_questoes','gabarito','material_complementar')),
  audience text not null default 'both' check (audience in ('teacher','student','both')),
  file_format text not null check (file_format in ('pdf','ppt','doc','link')),
  file_url text not null,
  is_published boolean default false,
  created_by uuid references auth.users(id),
  created_at timestamp with time zone default now()
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_name text not null,
  status text not null,
  current_period_end timestamp with time zone
);

create table public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete restrict,
  amount_cents integer not null,
  currency text not null default 'BRL',
  status text not null,
  created_at timestamp with time zone default now()
);

create table public.access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  source_type text not null check (source_type in ('purchase','subscription','manual')),
  source_id uuid,
  expires_at timestamp with time zone
);
