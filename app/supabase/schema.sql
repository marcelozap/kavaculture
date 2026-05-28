create extension if not exists pgcrypto;

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  subtitle text not null,
  blurb text not null,
  wait_time text,
  event_title text,
  event_copy text,
  event_link text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.menu_sections (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.drinks (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  section_id uuid not null references public.menu_sections(id) on delete restrict,
  name text not null,
  category text not null,
  description text not null,
  price_cents integer not null check (price_cents >= 0),
  is_featured boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.location_featured_drinks (
  id uuid primary key default gen_random_uuid(),
  location_id uuid not null references public.locations(id) on delete cascade,
  drink_id uuid not null references public.drinks(id) on delete cascade,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (location_id, drink_id)
);

create index if not exists idx_locations_sort_order on public.locations(sort_order);
create index if not exists idx_menu_sections_sort_order on public.menu_sections(sort_order);
create index if not exists idx_drinks_section_id on public.drinks(section_id);
create index if not exists idx_featured_location_sort on public.location_featured_drinks(location_id, sort_order);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_locations_updated_at on public.locations;
create trigger set_locations_updated_at
before update on public.locations
for each row
execute function public.set_updated_at();

drop trigger if exists set_menu_sections_updated_at on public.menu_sections;
create trigger set_menu_sections_updated_at
before update on public.menu_sections
for each row
execute function public.set_updated_at();

drop trigger if exists set_drinks_updated_at on public.drinks;
create trigger set_drinks_updated_at
before update on public.drinks
for each row
execute function public.set_updated_at();
