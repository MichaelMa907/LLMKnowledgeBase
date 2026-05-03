---
note_type: commit_thread
title: "External Project Boundary"
commit_id: "2026-04-29-1411-external-project-boundary"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "codex-20260429-1411"
started: "2026-04-29 14:11"
last_updated: "2026-04-29 14:11"
status: "open"
prompt_count: 2
merge_review_status: "not_needed"
tags:
  - commit
---

# External Project Boundary

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: Michael corrected the project boundary after a personal external project was incorrectly stored inside the public knowledge-base repo.
- Scope for this session: remove the accidental personal project notes, strengthen the shared protocol, and preserve the correction as a knowledge-base-system invariant.

## Merge Review
- Explicit continue from user: yes, this directly changes the knowledge-base-system protocol and release boundary.
- Overlap suspected: no, this is a vault-system correction rather than a user-project continuation.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-29 14:11
- User request: correct the mistake of storing a personal external application project in `LLMKnowledgeBase`; personal/external projects should not live in the public knowledge-base repo.
- Action: removed the accidental personal project folder from `LLMKnowledgeBase`, kept the external project folder untouched, and updated `AGENTS.md` and `CLAUDE.md` with an explicit external-project boundary.
- Reason: the public repo should contain the reusable knowledge-base system and its reference project, not personal project history or application materials.
- Commands / tools: inspected git status and ignore rules, deleted the accidental local project folder, patched shared protocol files.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, this commit thread, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and `Projects/llm-knowledge-base-system/Learned/2026-04-29 1411 - external-projects-stay-out-of-public-vault.md`.
- Scope impact: strengthens the release and storage boundary for all future agent work in this repo.
- Outcome: personal external project notes are no longer in the knowledge-base repo; future agents are told to work in external paths when provided.
- Follow-up impact: future retrieval may read prior local context when asked, but it must not create new personal project records in this public repo by default.

### Prompt 02 - 2026-04-29 14:11
- User request: continue the cleanup after interrupting the prior command.
- Action: resumed cleanup without using escalation, completed the delete and protocol update, and prepared verification.
- Reason: the interrupted cleanup left the accidental folder present.
- Commands / tools: `Remove-Item`, `apply_patch`.
- Files / notes touched: same as Prompt 01.
- Scope impact: same as Prompt 01.
- Outcome: cleanup completed.
- Follow-up impact: verify generated indexes and git status before final response.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-29 1411 - external-projects-stay-out-of-public-vault.md`
- Project notes created or updated:
  `AGENTS.md`
  `CLAUDE.md`
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`

## Handoff / Closeout
- Current state: the public knowledge-base repo now has an explicit external-project boundary in both agent protocol files.
- Open issues: existing ignored local project folders may still exist on this machine, but they are outside the tracked starter-release surface; do not delete them without explicit user instruction.
- Suggested next prompt: audit the release surface before a push.
