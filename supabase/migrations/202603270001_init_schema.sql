create extension if not exists pgcrypto;

create table if not exists public.meal (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  img_url text,
  vegetarian boolean not null default false,
  bestseller boolean not null default false,
  rating numeric(2,1) not null default 0,
  reviews integer not null default 0,
  time text not null default '30 min',
  price integer not null check (price >= 0),
  "originalPrice" text,
  created_at timestamptz not null default now()
);

create table if not exists public.meal_discount (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  image text,
  vegetarian boolean not null default false,
  rating numeric(2,1) not null default 0,
  reviews integer not null default 0,
  time text not null default '30 min',
  price text not null,
  "originalPrice" text,
  new_price text,
  created_at timestamptz not null default now()
);

alter table public.meal enable row level security;
alter table public.meal_discount enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'meal'
      and policyname = 'Allow public read on meal'
  ) then
    create policy "Allow public read on meal"
      on public.meal
      for select
      to anon
      using (true);
  end if;
end;
$$;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'meal_discount'
      and policyname = 'Allow public read on meal_discount'
  ) then
    create policy "Allow public read on meal_discount"
      on public.meal_discount
      for select
      to anon
      using (true);
  end if;
end;
$$;
