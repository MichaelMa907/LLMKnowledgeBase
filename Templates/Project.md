---
note_type: project
title: "<Project Title>"
project_id: "<YYYY-MM-DD>-<project-slug>"
project_slug: "<project-slug>"
project_type: "task"
created: "<YYYY-MM-DD HH:MM>"
last_active: "<YYYY-MM-DD HH:MM>"
last_session: "<YYYY-MM-DD HH:MM>"
resolved: false
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 1
project_folder: "Projects/<project-slug>/"
learned_folder: "Projects/<project-slug>/Learned/"
current_commit_thread: "Projects/<project-slug>/Commits/<YYYY-MM-DD HHmm> - <commit-slug>.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "<one-line scope>"
reuse_when: "<when to reuse this project>"
do_not_merge_with: "<what should stay separate>"
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# <Project Title>

> Canonical note path: `Projects/<project-slug>/<project-slug>.md`
>
> This note is the stable current-state view of the project.
>
> Every real project folder must include a user-owned `MichaelsNotes/` directory alongside this note.
>
> Agents may read `MichaelsNotes/` when the user asks or when the agent judges it directly useful to the active task, but they must never write, modify, move, rename, or delete it unless the user explicitly asks for that exact change.
>
> If `project_type` is `workflow`, a future agent should be able to execute the workflow from this front page without replaying commit history.
>
> Keep placeholder link examples in backticks inside template files so Obsidian does not create phantom graph nodes from template text.
>
> Project notes should list commit thread paths as plain text or code-formatted paths, not live wiki links. Commit notes carry the live link back to the parent project.
>
> Use alongside `Templates/Commit.md` and `Templates/Learned.md`.

## Overview
- Canonical objective:
- Why this project exists:
- Current owner agent:

## Workflow
> Fill this section when `project_type` is `workflow`, or when the front page should teach a reusable procedure directly.

- Workflow role:
- When to use it:
- Preconditions:
- Expected result:
- Verification status:
- Known limits:
1. <canonical step 1>
2. <canonical step 2>
3. <canonical step 3>

## Matching
- Scope summary:
- Reuse this project when:
- Do not merge with:
- Merge candidates to review with the user:
- Merge decision status:

## Goals
- 

## Problems
- 

## Constraints
- 

## Success Criteria
- 

## Current State
- Stable state right now:
- What changed this session:
- Remaining risk:

## Resolution
- Current resolution state:
- Why this is resolved or unresolved:
- Reopen when:

## Next Steps
- 

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD HH:MM | YYYY-MM-DD HH:MM | Codex | `<session-id>` | `Projects/<project-slug>/Commits/<YYYY-MM-DD HHmm> - <commit-slug>.md` | 1 | open | Started project |

## Progress
> Add one progress bullet after every prompt.
>
> In the current session subsection only, you may rewrite or remove bullets that were fully reversed later in the same session so this section reflects stable state rather than temporary churn.
>
> Do not rewrite prior-session subsections. If an older session was wrong, add a new correction entry instead.

### Session YYYY-MM-DD - Codex - <session-id>
- [HH:MM] Opened this project and started `Projects/<project-slug>/Commits/<YYYY-MM-DD HHmm> - <commit-slug>.md`.

## Commit Threads
- `Projects/<project-slug>/Commits/<YYYY-MM-DD HHmm> - <commit-slug>.md` - open - YYYY-MM-DD HH:MM

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/<project-slug>/learnedIndex.md`

## References
- `Templates/Project.md`
- `Templates/Commit.md`
- `Templates/Learned.md`
