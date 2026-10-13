---
number: "012"
title: Row-level security in Postgres, from first principles
dek: What a policy actually is, where the planner applies it, and why USING and WITH CHECK are two different questions.
date: 2026-10-10
minutes: 14
subject: Databases
tags: [databases, security]
status: settled
media: video
video:
  # src: /video/rls.mp4   ← add your recording; chapters will sync with it
  duration: "18:40"
  chapters:
    - { title: "A policy is a predicate", at: "00:00", anchor: a-policy-is-a-predicate }
    - { title: "Two questions, two clauses", at: "03:48", anchor: two-questions-two-clauses }
    - { title: "Who is exempt", at: "08:15", anchor: who-is-exempt }
    - { title: "Policies and the planner", at: "12:30", anchor: policies-and-the-planner }
learn:
  - { anchor: a-policy-is-a-predicate, text: "What a row-level security policy actually is: a predicate." }
  - { anchor: two-questions-two-clauses, text: "Why USING and WITH CHECK answer different questions." }
  - { anchor: who-is-exempt, text: "Who bypasses RLS — and how to stop it." }
---

Most explanations of row-level security start with syntax. This one starts with a question the database is asking on every row: *is this row visible to the current role, and may this row be written by it?* Everything else follows from keeping those two questions apart.

## A policy is a predicate

A policy is a boolean expression attached to a table. When RLS is enabled, Postgres combines the applicable policies and adds them to the query as a filter, much as if you had written the `WHERE` clause yourself.[^1]

```sql
alter table invoices enable row level security;

create policy tenant_read on invoices
  for select
  using (tenant_id = current_setting('app.tenant')::uuid);

create policy tenant_write on invoices
  for insert
  with check (tenant_id = current_setting('app.tenant')::uuid);
```

<aside class="margin-note"><span>margin note</span>Supabase builds on exactly this: <code>auth.uid()</code> is just a function a policy can call.</aside>

## Two questions, two clauses

`USING` filters rows that already exist. `WITH CHECK` validates rows you are about to create or change, and raises an error instead of silently dropping them.[^2] An update needs both: you must be able to see the old row, and the new row must still pass.

<div class="definition"><span>Definition</span>Permissive policies are OR-ed together; restrictive policies are AND-ed onto that result. A table with RLS enabled and no policies denies everything to non-owners.</div>

## Who is exempt

Superusers and roles with `BYPASSRLS` skip policies entirely, and so does the table owner unless you also run `FORCE ROW LEVEL SECURITY`. Most production leaks I have read about live in that sentence.

## Policies and the planner

[Continue the essay — how policy predicates are added to the query, why the columns they touch should be indexed, and what "leakproof" functions have to do with it.]

## Testing a policy

[How you test policies: switching roles, setting `app.tenant`, and asserting row counts.]

[^1]: PostgreSQL documentation, §5.9 “Row Security Policies”.
[^2]: PostgreSQL documentation, CREATE POLICY — “Policies Applied by Command Type”.
