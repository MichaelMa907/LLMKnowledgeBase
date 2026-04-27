---
note_type: project
title: "LLM Knowledge Base System"
project_id: "2026-04-20-llm-knowledge-base-system"
project_slug: "llm-knowledge-base-system"
project_type: "system"
created: "2026-04-20 22:28"
last_active: "2026-04-27 00:26"
last_session: "2026-04-27 00:26"
resolved: false
status: "active"
sessions_count: 4
commit_threads_count: 4
total_prompt_entries: 31
project_folder: "Projects/llm-knowledge-base-system/"
learned_folder: "Projects/llm-knowledge-base-system/Learned/"
current_commit_thread: "Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Architecture, automation, and truth-model design for the shared Obsidian memory system itself."
reuse_when: "Reuse this project when changing the vault architecture, templates, truth precedence, generator script, or shared agent instructions."
do_not_merge_with: "Do not merge this project with ordinary user task projects tracked inside the vault."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# LLM Knowledge Base System

## Overview
- Canonical objective: build the Obsidian vault into a shared truth and memory system for Codex, Claude, and later agents.
- Why this project exists: the vault needs durable structure, clear scope boundaries, and generated indexes so agents can rely on it without hand-maintaining project lists.
- Current owner agent: Codex

## Workflow
- Workflow role: not a workflow project; this is the system-design project that defines how workflow projects should be stored.
- When to use it: reuse this note when changing the vault protocol itself, not when running a stored workflow.
- Preconditions: knowledge-base structure and shared agent instructions are the subject of the work.
- Expected result: updated vault rules, templates, or generated-view behavior.
- Verification status: protocol rule updated; real workflow-project dogfooding still pending.
- Known limits: the workflow-project design has been specified, but a real workflow project still needs to prove that the front-page structure is sufficient.

## Matching
- Scope summary: vault architecture, truth-model rules, templates, generated indexes, and shared agent instructions.
- Reuse this project when: the user asks to change how the knowledge base itself works.
- Do not merge with: normal tracked projects that the vault is meant to store.
- Merge candidates to review with the user: none yet.
- Merge decision status: none.

## Goals
- Establish global, machine, and project truth scopes.
- Keep project history append-only while preserving a stable current-state view.
- Generate project indexes automatically instead of curating them by hand.
- Make the same protocol usable by Codex and Claude.

## Problems
- Raw project logs alone are too noisy to act as the only truth layer.
- Project matching can duplicate or over-merge work if the rules are vague.
- Cross-project knowledge gets buried if everything stays project-local.

## Constraints
- The system must stay Obsidian-friendly and use plain markdown plus frontmatter.
- The workflow must remain append-oriented for commit history.
- The current machine does not have Python in PATH, so cross-platform automation should use Node.

## Success Criteria
- The vault has an explicit truth hierarchy.
- Generated index files show active and inactive projects automatically.
- Global truth can be surfaced from learned notes without moving those files out of their origin folders.
- Machine truth can still live outside project folders when it is genuinely machine-specific.
- Shared instructions for Codex and Claude match the same workflow.

## Current State
- Stable state right now: learned notes stay in their origin project or machine folders; notes marked `global: true` are surfaced in `Globals/globalIndex.md` rather than being moved; a cross-platform Node updater maintains generated root/global/machine/project learned indexes from changed roots; the Markdown indexes are the human-facing outputs; the JSON state file is only an internal incremental cache rather than source-of-truth content; new-session retrieval is explicitly targeted rather than full replay; the vault now also has a canonical `User/User.md` profile that is small enough to read at session start; wiki links are constrained to a simple graph where `activeProjects` and `inactiveProjects` group projects, then projects link to commits, and commits link to learned notes; the two generated project-list hub pages now also end with `[[Templates/Project|Project]]` so they connect to the shared project-template node; reusable workflows fit the system as workflow projects with front-page canonical procedures rather than needing a separate subsystem; template files now show placeholder wiki-link syntax in backticks so they do not create phantom graph nodes; every project folder is expected to include a user-owned `MichaelsNotes/` directory that agents must not modify unless the user explicitly asks; the most important vault-editing invariants are stated directly in `AGENTS.md` and `CLAUDE.md` instead of living only in learned notes; the updater script is folder-relocatable because it derives the vault root from its own location instead of one hard-coded absolute path; the live vault folder is now the canonical git working tree for `https://github.com/MichaelMa907/LLMKnowledgeBase`; `.gitignore` now defines the public GitHub distribution surface; and tracked vault-wide changes on a machine with canonical repo access now publish to `dev` by default while `main` is reserved for explicit user-directed releases.
- What changed this session: the temporary distribution-folder approach was discarded; the live vault itself was converted into the canonical GitHub repository checkout; the remote bootstrap was merged into local history; `.gitignore`, `AGENTS.md`, and `CLAUDE.md` were aligned to the public distribution surface and branch policy; and the repo workflow now treats `dev` as the default publish target for tracked host-machine changes and `main` as the explicit release branch.
- Remaining risk: the system still depends on agents correctly choosing scope, asking before merging overlapping projects, passing the correct changed roots to the updater script, proving on a real workflow project that the front-page `Workflow` and `Resolution` structure is enough without more workflow-specific metadata, deciding whether `project_type` should become a formally enumerated taxonomy instead of partly implicit usage, eventually adding project-creation automation so `MichaelsNotes/` is created mechanically instead of only by instruction, deciding whether system-level learned truths should move into a dedicated non-project bootstrap area for cleaner no-project portability, and deciding whether git publication should remain manual or gain scripted automation for `dev` syncs and explicit `main` releases.

## Resolution
- Current resolution state: unresolved
- Why this is resolved or unresolved: the knowledge-base architecture is still being evolved and validated in real use.
- Reopen when: this project stays open while the vault protocol is still changing.

## Next Steps
- As new vault-critical editing invariants are discovered, promote their concise operational form into `AGENTS.md` and `CLAUDE.md` in the same task instead of leaving them only as learned notes.
- Keep `User/User.md` curated and under its intended size cap by merging overlap instead of letting it turn into a general-purpose memory dump.
- If more graph-shaping footer or hub links are added later, keep them generator-owned instead of hand-editing generated files.
- Decide whether to separate system-level learned truths from the `llm-knowledge-base-system` project so a fresh machine can inherit the full bootstrap without copying any project folder.
- Decide later whether explicit release exports beyond the GitHub repo are still useful, or whether the repo itself is now the only distribution surface that matters.
- If project scaffolding automation is introduced later, make it create `MichaelsNotes/` automatically rather than relying only on written agent instructions.
- Dogfood the incremental updater on more real projects and confirm that the changed-root workflow stays reliable.
- Decide later whether `global: true` should drive any automatic loading behavior beyond indexing.
- Add more global notes only when a rule clearly needs cross-project precedence.
- If Codex or Claude gets a new local instruction surface, skill, or MCP, record it in the agent protocol file and the right scoped learned note.
- Decide whether to automate the default host-machine `dev` commit/push workflow or keep it manual.
- Decide whether the incremental JSON cache earns its keep or whether a simpler full-rescan model is acceptable in practice.
- Decide whether session-start retrieval should stay lightweight or whether agents should automatically preload a small number of high-importance global notes before acting.
- Verify that the simplified wiki-link policy keeps the Obsidian graph readable once more projects and sessions exist.
- Verify that active and inactive grouping nodes still feel readable once there are many projects in both lists.
- Create a real workflow project, such as visible-shell command execution, and verify that the new front-page `Workflow` plus `Resolution` structure is enough for future-session reuse.
- Decide whether to formalize an explicit allowed set of `project_type` values, since the current state mixes template default, protocol rules, and live usage.
- Decide whether long-running build efforts like robot design should keep using `task` or whether they deserve their own formal type such as `build` or `initiative`.
- Verify in Obsidian after reindex that the placeholder nodes sourced from template files are gone and that only real structural note links remain.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-26 23:41 | 2026-04-27 00:26 | Codex | `<session-2026-04-26-2341>` | [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]] | 8 | open | Defined the cross-machine bootstrap boundary, verified that the updater script remains relocatable, reaffirmed the rule for promoting critical vault invariants into the protocol files, discarded the temporary distribution-folder approach, and converted the live vault into the canonical GitHub repo with `dev` for routine tracked changes and `main` for explicit releases |
| 2026-04-21 21:05 | 2026-04-21 22:57 | Codex | `<session-2026-04-21-2105>` | [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]] | 6 | open | Added cross-vault `MichaelsNotes/` rules, centralized critical vault-editing conventions, added a canonical cross-agent `User/User.md`, and made both generated project-list hubs keep the shared `Project` footer link |
| 2026-04-21 00:31 | 2026-04-21 01:37 | Codex | `<current-session>` | [[Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures]] | 6 | closed | Promoted workflow projects into the shared protocol, clarified current `project_type` usage, drafted a minimal user-facing workflow prompt, and fixed template placeholder wikilinks so they stop creating phantom graph nodes |
| 2026-04-20 22:28 | 2026-04-21 00:24 | Codex | `<session-2026-04-20-2228>` | [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]] | 11 | closed | Added scoped truth storage, starter notes, a machine-scoped record of the live Codex instruction entrypoint, clarified the project-note read path, verified learned-note storage, replaced the PowerShell generator with an incremental Node updater, corrected `global: true` to mean indexed globally rather than stored globally, simplified wiki links for a readable graph, and restored active/inactive project hubs |

## Progress
### Session 2026-04-26 - Codex - <session-2026-04-26-2341>
- [23:41] Verified from the live repository that the reusable cross-machine bootstrap is the protocol plus generator layer, while generated indexes, old machine notes, and ordinary project folders are data that should usually be left behind or regenerated.
- [23:49] Verified from the updater code that the vault can be moved to a different parent folder without breaking core indexing, because the script computes `vaultRoot` from its own location and normalizes changed paths relative to that root.
- [23:54] Reconfirmed that only high-impact cross-vault editing invariants must be promoted into both `AGENTS.md` and `CLAUDE.md`; ordinary durable facts can remain in learned notes at the appropriate scope.
- [00:18] Discarded the temporary distribution-folder approach, added a vault-specific `.gitignore`, and recorded the new GitHub publishing policy that uses `dev` for routine tracked host-machine changes and `main` only for explicit releases.
- [00:26] Converted the live vault folder into the canonical `MichaelMa907/LLMKnowledgeBase` git working tree, merged the remote bootstrap, replaced the placeholder repo files with vault-specific ones, and aligned the project state to the new git-backed publishing workflow.

### Session 2026-04-21 - Codex - <session-2026-04-21-2105>
- [21:05] Added a nonnegotiable cross-vault rule that every project folder must include `MichaelsNotes/`, that agents may read it when useful but must never modify it without explicit user instruction, and that the folder is not part of mandatory default retrieval.
- [21:05] Created `MichaelsNotes/` directories for the existing `3dor2d`, `llm-knowledge-base-system`, and `visible-shell-command-workflow` projects and updated the shared template so future project creation keeps reserving that user-owned space.
- [21:13] Evaluated whether foundational editing conventions should live directly in the global protocol files and established the rule of thumb that severe cross-vault invariants belong in `AGENTS.md` and `CLAUDE.md`, while learned notes keep the rationale and history.
- [21:21] Added a dedicated `Critical Vault Editing Conventions` section plus a promotion rule in the shared protocol so future learned rules with the same severity are promoted into the always-read instruction surface in the same task.
- [22:48] Identified that the vault had no dedicated always-read user-profile surface and that durable user facts would otherwise fall back to global learned notes plus targeted retrieval.
- [22:48] Added `User/User.md` as the canonical shared user profile, updated both agent protocol files so it is read at session start, capped it to a small curated entry set, and separated it explicitly from project/tool/system memory.
- [22:57] Promoted the manually added `Project` footer idea into the generator so both `activeProjects.md` and `inactiveProjects.md` now end with `[[Templates/Project|Project]]` instead of relying on hand edits to generated files.

### Session 2026-04-21 - Codex - <current-session>
- [00:31] Decided that reusable procedures such as starting a visible shell should usually start as ordinary projects or reference-style projects, and recorded that as the first project-scoped learned note in this knowledge-base-system project.
- [00:39] Added explicit workflow-project rules so a future "learn this workflow and save it as a project" request now stores the canonical procedure and resolution state on the project front page instead of relying on commit history alone.
- [00:45] Clarified that `project` is the note kind rather than a `project_type`, and that the currently visible `project_type` values are `task` by template default, `workflow` by shared rules, and `system` in live usage.
- [00:48] Applied the current taxonomy to a concrete long-running build example and confirmed that a months-long robot-design effort would still be `task` today, which highlights that the catch-all type may be too broad.
- [00:53] Drafted the minimal plain-language prompt shape for starting a visible-shell workflow project in a new session without over-specifying the implementation.
- [01:37] Removed live placeholder wikilinks from the templates, moved those examples into backticks, and added a shared rule so Obsidian no longer creates phantom graph nodes from template text.

### Session 2026-04-20 - Codex - <session-2026-04-20-2228>
- [22:28] Created the first real system-maintenance project for the vault itself.
- [22:28] Added global, machine, and project truth scopes plus precedence rules.
- [22:28] Added a PowerShell generator script for `activeProjects.md`, `inactiveProjects.md`, `Globals/globalIndex.md`, and machine indexes.
- [22:28] Seeded the vault with global policy/reference notes and a machine-specific runtime note.
- [23:07] Verified that Codex now enters this knowledge system through `.codex/AGENTS.md` redirecting to the vault, recorded the missing sidecar instruction files as machine-scoped truth, and updated the live Codex protocol section to reflect that.
- [23:13] Clarified that a project's stable state should be read from the project note's `Current State`, `Next Steps`, `Session Index`, and `Progress` sections rather than reconstructed from every commit thread entry.
- [23:17] Verified that learned notes are already implemented outside project folders in global tiers and machine scope, while project-scoped learned support exists but this project does not yet have any project-local learned notes.
- [23:23] Challenged whether the three-way split inside global scope is useful enough to justify the added complexity, rather than treating global as one scope and project as a separate lower scope.
- [23:23] Recorded simplification as an active design option: keep `global`, `machine`, and `project` as the real scopes, and only reintroduce subtiers inside global if real conflicts or scale make them necessary.
- [23:30] Collapsed the three global tiers into one metadata-sorted global index model, added `importance` metadata to learned notes, and replaced the PowerShell generator with an incremental Node updater plus generated state cache.
- [23:30] Added generated per-project learned indexes and updated the agent protocols so Codex and Claude run the updater script with `--changed` roots after every prompt.
- [23:50] Clarified that the Markdown indexes are the user-facing generated views, while `Scripts/knowledge-base-state.json` is only an internal cache used to avoid full rescans on every prompt.
- [00:00] Corrected the global model so learned files stay in their origin project or machine folders and `global: true` only makes `Globals/globalIndex.md` link to them in place.
- [00:00] Updated the planned session-start retrieval model to favor targeted reading of project and global summaries over blindly loading every commit or learned note.
- [00:15] Simplified wiki-link usage so the Obsidian graph only emphasizes the structural chain from project to commit to learned note, while richer relationships stay as plain text paths and summaries.
- [00:24] Added `activeProjects.md` and `inactiveProjects.md` back as intentional graph hubs so active projects connect to the active list and inactive projects connect to the inactive list without reintroducing other index noise.

## Commit Threads
- [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]] - open - 2026-04-26 23:41
- [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]] - open - 2026-04-21 21:05
- [[Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures]] - closed - 2026-04-21 00:31
- [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]] - closed - 2026-04-20 22:28

## Scope Notes
- Global notes that affect this project:
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - project-matching-and-merge-policy.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - agent-memory-patterns.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2105 - michaelsnotes-folders-are-user-owned.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2248 - canonical-user-profile-lives-in-user-user-md.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2257 - project-list-pages-end-with-project-template-link.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2349 - updater-script-is-relocatable-with-the-vault.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-27 0018 - github-publishing-uses-dev-and-main-release-gates.md`
- Machine notes that affect this project:
  `Machines/MICHAEL-ROG/Learned/2026-04-20 - node-is-the-knowledge-base-runtime.md`
  `Machines/MICHAEL-ROG/Learned/2026-04-20 2307 - codex-instruction-entrypoint-is-vault-agents.md`
  `Machines/MICHAEL-ROG/Learned/2026-04-27 0018 - canonical-github-repo-is-writable-from-this-machine.md`
- Project-scoped learned notes:
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0031 - reusable-workflows-can-start-as-projects.md`
- Learned notes stored in this project:
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - project-matching-and-merge-policy.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - agent-memory-patterns.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0031 - reusable-workflows-can-start-as-projects.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2105 - michaelsnotes-folders-are-user-owned.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2248 - canonical-user-profile-lives-in-user-user-md.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2257 - project-list-pages-end-with-project-template-link.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-26 2349 - updater-script-is-relocatable-with-the-vault.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-27 0018 - github-publishing-uses-dev-and-main-release-gates.md`
- Generated learned view: `Projects/llm-knowledge-base-system/learnedIndex.md`
