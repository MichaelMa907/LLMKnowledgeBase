---
note_type: commit_thread
title: "<Commit Title>"
commit_id: "<YYYY-MM-DD-HHmm>-<commit-slug>"
project_note: "Projects/<project-slug>/<project-slug>.md"
project_slug: "<project-slug>"
agent: "Codex"
session_id: "<session-id>"
started: "<YYYY-MM-DD HH:MM>"
last_updated: "<YYYY-MM-DD HH:MM>"
status: "open"
prompt_count: 1
merge_review_status: "not_needed"
tags:
  - commit
---

# <Commit Title>

> One commit note equals one project inside one agent session.
>
> Append one new prompt entry after every user prompt.
>
> Never delete or rewrite earlier prompt entries in this file, even if a later prompt undoes the work.
>
> Keep placeholder link examples in backticks inside template files so Obsidian does not create phantom graph nodes from template text.
>
> Replace the project placeholder with one bare real wiki link when instantiating an actual commit note. Commit notes should not contain other live wiki links.

## Session Context
- Project: `[[Projects/<project-slug>/<project-slug>]]` in the template only; instantiated commit notes must use bare `[[...]]` without backticks
- Why this commit exists:
- Scope for this session:

## Merge Review
- Explicit continue from user:
- Overlap suspected:
- User merge decision:

## Prompt Log
> Duplicate the block below for each new prompt in the same session.
>
> Every entry must include at least `Action` and `Reason`.

### Prompt 01 - YYYY-MM-DD HH:MM
- User request:
- Action:
- Reason:
- Commands / tools:
- Files / notes touched:
- Scope impact:
- Outcome:
- Follow-up impact:

## Scope Notes
- Global notes created or updated:
- Machine notes created or updated:
- Project notes created or updated:

## Handoff / Closeout
- Current state:
- Open issues:
- Suggested next prompt:
- Before closing this commit, update `Projects/<project-slug>/<project-slug>.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
