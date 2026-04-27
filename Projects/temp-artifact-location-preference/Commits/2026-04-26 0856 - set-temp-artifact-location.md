---
note_type: commit_thread
title: "Set Temp Artifact Location"
commit_id: "2026-04-26-0856-set-temp-artifact-location"
project_note: "Projects/temp-artifact-location-preference/temp-artifact-location-preference.md"
project_slug: "temp-artifact-location-preference"
agent: "Codex"
session_id: "codex-20260426-0856"
started: "2026-04-26 08:56"
last_updated: "2026-04-26 08:56"
status: "closed"
prompt_count: 2
merge_review_status: "not_needed"
tags:
  - commit
---

# Set Temp Artifact Location

## Session Context
- Project: [[Projects/temp-artifact-location-preference/temp-artifact-location-preference]]
- Why this commit exists: Preserve the user's cross-project preference for agent-created temporary artifact storage.
- Scope for this session: Record the default temp location, its project-folder exception, and ensure the folder exists.

## Merge Review
- Explicit continue from user: No.
- Overlap suspected: No.
- User merge decision: Not needed.

## Prompt Log
### Prompt 01 - 2026-04-26 08:56
- User request: "from now on, every log you keep, every temporary thing you download that you dont think I'm going to keep, put it in C:\Users\micha\Temp."
- Action: Treated the request as a new cross-project preference, verified the target folder, and prepared to store the rule in durable notes.
- Reason: The user set a standing operational preference that should carry into future work.
- Commands / tools: `Get-Date`; `Test-Path`; `New-Item`; `apply_patch`.
- Files / notes touched: `Projects/temp-artifact-location-preference/temp-artifact-location-preference.md`; `Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location.md`; `User/User.md`.
- Scope impact: Establishes a new default storage location for disposable local artifacts on this machine.
- Outcome: `C:\Users\micha\Temp` was confirmed to exist and is now the default target for disposable agent-created artifacts.
- Follow-up impact: Future tasks should save throwaway files there unless a more specific project location makes more sense.

### Prompt 02 - 2026-04-26 08:56
- User request: "now obviously if the log is from a specific project with a project folder then follow when appropriate"
- Action: Recorded the exception that project-specific artifacts should remain in the relevant project folder structure.
- Reason: The user clarified that the new default should not override sensible project-local storage.
- Commands / tools: `apply_patch`.
- Files / notes touched: `Projects/temp-artifact-location-preference/temp-artifact-location-preference.md`; `Projects/temp-artifact-location-preference/Commits/2026-04-26 0856 - set-temp-artifact-location.md`; `User/User.md`.
- Scope impact: Narrows the default rule with a clear project-folder exception.
- Outcome: The standing rule is now "use `C:\Users\micha\Temp` for disposable artifacts, except keep project-specific artifacts in their project folders when appropriate."
- Follow-up impact: Future agents can apply the rule without needing another clarification.

## Scope Notes
- Global notes created or updated:
- Machine notes created or updated:
- Project notes created or updated: `Projects/temp-artifact-location-preference/temp-artifact-location-preference.md`

## Handoff / Closeout
- Current state: The preference is recorded and the target folder already exists.
- Open issues: Existing files were not moved.
- Suggested next prompt: "clean up the old downloads into Temp" if the user wants prior artifacts reorganized.
