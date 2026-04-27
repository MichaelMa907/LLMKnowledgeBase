---
note_type: project
title: "Temp Artifact Location Preference"
project_id: "2026-04-26-temp-artifact-location-preference"
project_slug: "temp-artifact-location-preference"
project_type: "task"
created: "2026-04-26 08:56"
last_active: "2026-04-26 08:56"
last_session: "2026-04-26 08:56"
resolved: true
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 2
project_folder: "Projects/temp-artifact-location-preference/"
learned_folder: "Projects/temp-artifact-location-preference/Learned/"
current_commit_thread: "Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Record the user's preferred location for agent-created temporary artifacts and its project-folder exception."
reuse_when: "The user asks where temporary files should go, or future work needs a default location for disposable downloads and logs on this machine."
do_not_merge_with: "Specific project work that merely creates its own project-local artifacts."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# Temp Artifact Location Preference

> Canonical note path: `Projects/temp-artifact-location-preference/temp-artifact-location-preference.md`
>
> This note is the stable current-state view of the project.
>
> Every real project folder must include a user-owned `MichaelsNotes/` directory alongside this note.
>
> Agents may read `MichaelsNotes/` when the user asks or when the agent judges it directly useful to the active task, but they must never write, modify, move, rename, or delete it unless the user explicitly asks for that exact change.

## Overview
- Canonical objective: Preserve the user's rule for where agent-created temporary artifacts should be stored on this machine.
- Why this project exists: The user wants disposable downloads, logs, and scratch artifacts kept out of `Downloads` unless they belong in a real project folder.
- Current owner agent: Codex

## Matching
- Scope summary: Cross-project storage preference for temporary agent-created artifacts.
- Reuse this project when: Future work needs a default temp location or needs to interpret the project-folder exception.
- Do not merge with: One-off project tasks that only happen to create files.
- Merge candidates to review with the user: None.
- Merge decision status: Not needed.

## Goals
- Record the default temp-artifact location.
- Record the exception for project-specific logs and artifacts.
- Ensure the target folder exists on this machine.

## Problems
- Agent-created reference images previously landed in `Downloads`, which is noisier than the user's preferred temp location.

## Constraints
- Respect project-specific folder structure when artifacts clearly belong to a real project.
- Do not move existing files unless the user asks.

## Success Criteria
- Future disposable artifacts default to `C:\Users\micha\Temp`.
- Project-local artifacts continue to live in the relevant project folder when appropriate.

## Current State
- Stable state right now: The standing preference is to place disposable agent-created logs, downloads, and other temporary artifacts in `C:\Users\micha\Temp`, except when a specific project already has an appropriate project folder for those artifacts.
- What changed this session: The preference was made explicit and `C:\Users\micha\Temp` was confirmed to already exist.
- Remaining risk: Some external tools or platform-managed logs may still write to their own fixed locations outside this preference.

## Resolution
- Current resolution state: Resolved.
- Why this is resolved or unresolved: The preference and exception are now recorded for future sessions.
- Reopen when: The user wants a different default location or wants old temp files migrated.

## Next Steps
- Apply this default on future tasks when saving disposable local artifacts.
- Keep project-specific outputs in project folders when clearly appropriate.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-26 08:56 | 2026-04-26 08:56 | Codex | `codex-20260426-0856` | [[Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location]] | 2 | closed | Recorded the user's default temp-artifact location and the project-folder exception |

## Progress
### Session 2026-04-26 - Codex - codex-20260426-0856
- [08:56] Opened this project and started [[Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location]].
- [08:56] Confirmed that `C:\Users\micha\Temp` already exists and recorded it as the default location for disposable agent-created artifacts.
- [08:56] Recorded the exception that artifacts belonging to a real project should stay in that project's folder structure when appropriate.

## Commit Threads
- [[Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location]] - closed - 2026-04-26 08:56

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/temp-artifact-location-preference/learnedIndex.md`
