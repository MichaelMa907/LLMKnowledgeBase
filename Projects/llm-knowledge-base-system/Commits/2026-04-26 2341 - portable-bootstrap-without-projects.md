---
note_type: commit_thread
title: "Portable Bootstrap Without Projects"
commit_id: "2026-04-26-2341-portable-bootstrap-without-projects"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "<session-2026-04-26-2341>"
started: "2026-04-26 23:41"
last_updated: "2026-04-27 00:02"
status: "open"
prompt_count: 4
merge_review_status: "not_needed"
tags:
  - commit
---

# Portable Bootstrap Without Projects

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: define what belongs to the portable knowledge-base bootstrap versus project and machine data when moving the vault to another machine.
- Scope for this session: portability boundaries for protocol files, templates, generator assets, generated views, machine notes, and project content.

## Merge Review
- Explicit continue from user: yes, the user explicitly continued the `llm-knowledge-base-system` project.
- Overlap suspected: no, this is directly about how the knowledge-base system itself should be copied and reused.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-26 23:41
- User request: keep working on the LLM knowledge base project and explain what should be copied to another machine when the user wants the same database setup but does not want to copy existing projects.
- Action: reviewed the live vault protocol, project note, templates, updater script, Obsidian config, and generated state; defined the current portability boundary; recorded it as a global learned note; and updated the project front page for future retrieval.
- Reason: the current layout mixes true bootstrap assets with generated views, machine notes, and ordinary project data, so the answer needs to be grounded in the actual repository rather than a generic recommendation.
- Commands / tools: read `AGENTS.md`, `User/User.md`, the `llm-knowledge-base-system` project note, templates, `Scripts/update-knowledge-base.mjs`, `.obsidian` config files, and generated state via PowerShell.
- Files / notes touched: this commit thread, `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`, and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: adds a vault-wide portability rule about what counts as reusable setup versus user/machine content.
- Outcome: the portable-bootstrap guidance is now recorded inside the knowledge-base system and can be reused in future sessions.
- Follow-up impact: if a completely project-free bootstrap is desired later, the system may need a dedicated non-project home for some protocol truths that currently live under `Projects/llm-knowledge-base-system/Learned/`.

### Prompt 02 - 2026-04-26 23:49
- User request: confirm whether the script uses referenced paths rather than hard-coded absolute paths, and whether moving the whole project to another folder will keep it working.
- Action: verified the updater's root-resolution and changed-path normalization logic directly in `Scripts/update-knowledge-base.mjs`, recorded the relocatability behavior as a global learned note, and updated the project record.
- Reason: the user wants an exact answer about whether the vault is folder-relocatable, which depends on the script's real path-handling behavior rather than a guess.
- Commands / tools: inspected the updater code with `Select-String` and read the current session notes via PowerShell.
- Files / notes touched: this commit thread, `Projects/llm-knowledge-base-system/Learned/2026-04-26 2349 - updater-script-is-relocatable-with-the-vault.md`, and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: adds a reusable runtime rule about relocating the vault directory without breaking the core updater workflow.
- Outcome: confirmed that moving the whole vault to another folder is fine for the updater because it derives the vault root from the script location and maps changed paths relative to that root.
- Follow-up impact: UI/session files such as `.obsidian/workspace.json` may still be worth omitting when copying, but the core indexing script is not tied to one absolute folder path.

### Prompt 03 - 2026-04-26 23:54
- User request: remind them of the current rule for whether important learned rules belong only in global learned notes or must also go into instruction files.
- Action: reread the protocol section and the learned note that established the policy, then answered with the exact promotion rule and its boundary.
- Reason: the user wants the authoritative current rule, not a rough recollection.
- Commands / tools: searched `AGENTS.md` for the maintenance and critical-invariant rules and reread the learned note `2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`.
- Files / notes touched: this commit thread and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: no protocol change; this only reaffirms the current rule.
- Outcome: confirmed that only cross-vault editing invariants with high failure impact must be promoted into both `AGENTS.md` and `CLAUDE.md`, while ordinary learned facts can remain as global or scoped learned notes.
- Follow-up impact: when a new rule is learned, the decision boundary stays "would violating this rule risk corrupting the vault or breaking shared behavior?" If yes, promote it; if not, a learned note is enough.

### Prompt 04 - 2026-04-27 00:02
- User request: create a portable distribution in `C:\Users\micha\Projects\distributions\LLMKnowledgeBase1.0` that includes the vault bootstrap plus only the `llm-knowledge-base-system` project and works correctly on another machine.
- Action: assembled a release folder with the portable root files, `.obsidian`, `Templates/`, `Scripts/update-knowledge-base.mjs`, `User/User.md`, and `Projects/llm-knowledge-base-system`; patched the copied protocol and project files to remove source-machine assumptions; added a short release `README.md`; and regenerated the copied vault's indexes and state with `node Scripts/update-knowledge-base.mjs --full`.
- Reason: the user wants an actual ready-to-move artifact, not just advice about what to copy.
- Commands / tools: created directories and copied selected files with PowerShell, patched the destination-only markdown files, and ran the updater script from inside the release folder.
- Files / notes touched: this commit thread, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and the distribution tree rooted at `C:\Users\micha\Projects\distributions\LLMKnowledgeBase1.0`.
- Scope impact: creates the first concrete portable release of the vault bootstrap plus the knowledge-base-system project.
- Outcome: `C:\Users\micha\Projects\distributions\LLMKnowledgeBase1.0` now contains a self-consistent portable copy with only the intended project content and regenerated derived files.
- Follow-up impact: if this export pattern becomes recurring, the next improvement should be a scripted release/export workflow instead of manual assembly.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2349 - updater-script-is-relocatable-with-the-vault.md`
- Machine notes created or updated: none.
- Project notes created or updated:
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`

## Handoff / Closeout
- Current state: the vault now has an explicit portability rule, a verified note that the updater script remains valid after moving the whole vault to a new folder, and a concrete release at `C:\Users\micha\Projects\distributions\LLMKnowledgeBase1.0` containing only the bootstrap plus the knowledge-base-system project.
- Open issues: some durable system rationale still lives inside the `llm-knowledge-base-system` project, so a perfectly clean no-project bootstrap is still a design tradeoff rather than a fully separated packaging mode, and the release/export process is still manual.
- Suggested next prompt: if you want, the next step is to turn this exact release layout into an export script that can build future versions automatically.
- Before closing this commit, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
