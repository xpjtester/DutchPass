create table if not exists writing_attempts(
 id bigint generated always as identity primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 test_slug text not null,
 task_id integer not null,
 answer text not null default '',
 score integer,
 feedback text,
 created_at timestamptz default now(),
 updated_at timestamptz default now(),
 unique(user_id,test_slug,task_id)
);
alter table writing_attempts enable row level security;
create policy "users read own writing" on writing_attempts for select using(auth.uid()=user_id);
create policy "users insert own writing" on writing_attempts for insert with check(auth.uid()=user_id);
create policy "users update own writing" on writing_attempts for update using(auth.uid()=user_id) with check(auth.uid()=user_id);
