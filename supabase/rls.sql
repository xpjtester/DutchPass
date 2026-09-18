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
