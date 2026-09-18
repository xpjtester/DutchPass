create table if not exists courses(id bigint generated always as identity primary key,title text not null,level text not null,description text,position integer default 0,created_at timestamptz default now());
create table if not exists lessons(id bigint generated always as identity primary key,course_id bigint references courses(id) on delete cascade,title text not null,description text,position integer default 0,created_at timestamptz default now());
create table if not exists exercises(id bigint generated always as identity primary key,lesson_id bigint references lessons(id) on delete cascade,type text not null,question text not null,answer text not null,explanation text,position integer default 0);
create table if not exists user_progress(id bigint generated always as identity primary key,user_id uuid not null references auth.users(id) on delete cascade,lesson_id bigint references lessons(id) on delete cascade,score integer default 0,completed boolean default false,updated_at timestamptz default now(),unique(user_id,lesson_id));

alter table courses enable row level security;
alter table lessons enable row level security;
alter table exercises enable row level security;
alter table user_progress enable row level security;

create policy "courses readable" on courses for select using (true);
create policy "lessons readable" on lessons for select using (true);
create policy "exercises readable" on exercises for select using (true);
create policy "users read own progress" on user_progress for select using (auth.uid() = user_id);
create policy "users insert own progress" on user_progress for insert with check (auth.uid() = user_id);
create policy "users update own progress" on user_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users delete own progress" on user_progress for delete using (auth.uid() = user_id);
