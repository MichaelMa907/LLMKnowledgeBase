---
note_type: commit_thread
title: "Starter Release Surface Cleanup"
commit_id: "2026-04-27-0127-starter-release-surface-cleanup"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "<session-2026-04-27-0127>"
started: "2026-04-27 01:27"
last_updated: "2026-04-27 01:45"
status: "open"
prompt_count: 2
merge_review_status: "not_needed"
tags:
  - commit
---

# Starter Release Surface Cleanup

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: correct the GitHub repo so it publishes only the reusable starter vault surface instead of live machine and project data.
- Scope for this session: `.gitignore`, shared protocol files, starter repo documentation, and git index cleanup for tracked local-only content.

## Merge Review
- Explicit continue from user: yes, this directly continues the knowledge-base-system repo-publishing work.
- Overlap suspected: no, this is a vault-system change rather than an ordinary tracked project.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-27 01:27
- User request: fix the repo because multiple projects and this machine were published, make it a release version others can download and modify, and release that correction to `main`.
- Action: verified the tracked repo surface, narrowed `.gitignore` to a blank starter-vault release model, updated `AGENTS.md`, `CLAUDE.md`, and `README.md`, added tracked placeholder directories, and removed already-tracked live `Projects/`, `Machines/`, `User/`, `.obsidian/`, and generated files from git with `--cached` so local data stays on disk.
- Reason: the current repo was publishing one machine's live vault state rather than the reusable knowledge-base framework the user intended to release.
- Commands / tools: inspected tracked files and branch state with git and PowerShell; patched protocol and repo files; then ran `git rm -r --cached` against tracked local-only surfaces.
- Files / notes touched: `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `README.md`, this commit thread, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and `Projects/llm-knowledge-base-system/Learned/2026-04-27 0127 - starter-release-repo-omits-live-vault-data.md`.
- Scope impact: changes the durable publishing rule so public releases are starter repos rather than mirrors of the author's current vault.
- Outcome: the staged release surface now excludes live projects, machine notes, user profile data, Obsidian config, and generated indexes while preserving those files locally.
- Follow-up impact: future releases should only ship reusable protocol, templates, tooling, and any explicitly chosen starter examples.

### Prompt 02 - 2026-04-27 01:45
- User request: clarify that the release should keep the `llm-knowledge-base-system` project and its learned notes so the knowledge base works as intended and provides a sample project.
- Action: updated `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `README.md`, the project note, and the learned release-boundary note so the public release includes `Projects/llm-knowledge-base-system/` as the reference/sample project while still excluding ordinary projects, machine notes, user profile content, Obsidian config, and generated root/global/cache files.
- Reason: the prior correction overshot by making the repo a blank starter, but the intended release needs the system project as reusable documentation and an example of the vault's own project/learned-note workflow.
- Commands / tools: inspected the tracked release surface, read the system project files, patched release rules and notes, and staged the system project back into git.
- Files / notes touched: `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `README.md`, this commit thread, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and `Projects/llm-knowledge-base-system/Learned/2026-04-27 0127 - starter-release-repo-omits-live-vault-data.md`.
- Scope impact: refines the durable GitHub publishing boundary to include exactly one project by default, the knowledge-base system reference project.
- Outcome: the release surface now reflects starter framework plus sample/reference project instead of a completely blank vault.
- Follow-up impact: future releases should keep this project included unless the user explicitly asks for a no-project bootstrap.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-27 0127 - starter-release-repo-omits-live-vault-data.md`
- Project notes created or updated:
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
  `AGENTS.md`
  `CLAUDE.md`
  `.gitignore`
  `README.md`

## Handoff / Closeout
- Current state: the public repo is being corrected to a starter-vault release surface with the `llm-knowledge-base-system` reference project included, while the local vault still keeps its other private history and generated files.
- Open issues: release automation is still manual, and generated root/global indexes remain local/regenerable by default.
- Suggested next prompt: if needed later, add a scripted release command that verifies the staged surface before pushing `main`.
- Before closing this commit, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
