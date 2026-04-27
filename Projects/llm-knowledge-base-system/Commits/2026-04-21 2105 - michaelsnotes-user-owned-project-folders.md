---
note_type: commit_thread
title: "MichaelsNotes User-Owned Project Folders"
commit_id: "2026-04-21-2105-michaelsnotes-user-owned-project-folders"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "<session-2026-04-21-2105>"
started: "2026-04-21 21:05"
last_updated: "2026-04-21 22:57"
status: "open"
prompt_count: 6
merge_review_status: "not_needed"
tags:
  - commit
---

# MichaelsNotes User-Owned Project Folders

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: encode a protected user-owned notes area into the shared vault protocol and align the existing project folders to that rule.
- Scope for this session: shared instructions, project template, project-folder layout, and the durable rule about how agents must handle `MichaelsNotes/`.

## Merge Review
- Explicit continue from user: yes, the user explicitly switched work into the `llm-knowledge-base-system` project.
- Overlap suspected: no, this is directly about the knowledge-base system itself rather than an ordinary tracked project.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-21 21:05
- User request: switch work to the knowledge-base project, create a `MichaelsNotes/` folder in each project, and write explicit nonnegotiable instructions in `AGENTS.md` and `CLAUDE.md` that agents must never change, move, or delete it unless the user specifically asks.
- Action: updated the shared protocol files and project template, created `MichaelsNotes/` directories for the current projects, added a global learned note for the rule, opened this new session commit, and updated the live knowledge-base-system project note to reflect the new state.
- Reason: the user wants every project to reserve a clearly protected space for Michael's own notes, while still allowing agents to read that space when it is useful or explicitly requested.
- Commands / tools: reread the KB protocol, templates, and current project note; created directories with PowerShell; patched markdown notes; and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit thread, `Projects/llm-knowledge-base-system/Learned/2026-04-21 2105 - michaelsnotes-folders-are-user-owned.md`, `Projects/3dor2d/MichaelsNotes/`, `Projects/llm-knowledge-base-system/MichaelsNotes/`, and `Projects/visible-shell-command-workflow/MichaelsNotes/`.
- Scope impact: adds a global authoring and project-structure rule that applies to every project managed inside the vault.
- Outcome: current projects now have `MichaelsNotes/` directories, future project instructions require them, and agents are explicitly barred from modifying them without direct user instruction.
- Follow-up impact: if project scaffolding is automated later, that scaffolder should physically create `MichaelsNotes/` instead of relying only on written protocol.

### Prompt 02 - 2026-04-21 21:13
- User request: ask whether foundational knowledge-base editing conventions should live directly in `AGENTS.md` and `CLAUDE.md` instead of only in learned notes.
- Action: evaluated the current split between protocol files and learned notes, confirmed that severe cross-vault editing invariants should live in the global protocol files while learned notes remain as rationale and provenance, and explained the recommended decision boundary.
- Reason: the user wants the highest-risk vault rules to be hard to miss during future sessions, not dependent on optional learned-note retrieval.
- Commands / tools: used the current knowledge-base context already loaded in this session; no file edits were made for this advisory response.
- Files / notes touched: none.
- Scope impact: clarified how foundational editing rules should be stored without changing the vault yet.
- Outcome: the operational recommendation is now explicit: cross-vault editing invariants belong in the shared protocol files, while learned notes keep the why, history, and edge cases.
- Follow-up impact: if the user approves, promote the core conventions into `AGENTS.md` and `CLAUDE.md` and add a rule so future equally severe invariants are handled the same way.

### Prompt 03 - 2026-04-21 21:21
- User request: promote the important editing conventions into the global protocol files and add instructions so future learned rules of the same severity are treated the same way.
- Action: added a `Critical Vault Editing Conventions` section plus a promotion rule in `AGENTS.md` and `CLAUDE.md`, created a new global learned note recording that severe editing invariants must also live in the agent protocol files, and updated the live project note and this session history.
- Reason: the user wants foundational rules such as generated-file handling, append-only history, phantom-link prevention, and user-owned note protection to be present in the always-read instruction surface.
- Commands / tools: reread the current learned notes that govern vault editing, patched the shared protocol files and project records, and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and this commit thread.
- Scope impact: strengthens the shared instruction surface so future agents do not have to discover the most important editing invariants indirectly through learned-note retrieval.
- Outcome: the vault now has both the operational commands in the shared protocol and the supporting rationale in learned notes, plus an explicit rule to keep handling future equally severe invariants that way.
- Follow-up impact: future edits that reveal new vault-critical invariants should update the relevant learned note and promote the concise operational rule into both protocol files in the same task.

### Prompt 04 - 2026-04-21 22:48
- User request: ask where a newly learned user fact such as Michael being highly technical would be stored and how another session would access it under the current configuration.
- Action: explained that under the current configuration such a fact would live as a global learned note in its origin project and would be discoverable through `Globals/globalIndex.md`, but would not yet have a dedicated always-read user-profile surface.
- Reason: the user wanted the current behavior described precisely before deciding whether to add a dedicated user-memory mechanism.
- Commands / tools: reread the shared protocol and current knowledge-base-system note to verify the exact live retrieval rules; no file edits were made for this advisory response.
- Files / notes touched: none.
- Scope impact: clarified a gap in the current architecture without changing it yet.
- Outcome: the missing piece became explicit: the vault had global learned notes but no canonical lightweight user-profile note.
- Follow-up impact: if the user wants durable user facts to be reliably available across sessions, add a dedicated shared user-profile surface.

### Prompt 05 - 2026-04-21 22:48
- User request: implement a dedicated user-memory mechanism that loosely follows a sparse metadata-style user profile, shared across LLMs, while keeping system rules in global learned notes and avoiding a cluttered user-memory tree.
- Action: added a canonical `User/User.md` note, updated `AGENTS.md` and `CLAUDE.md` so all agents treat it as the shared user profile and read it at session start, added rules that keep it capped and separate from project or system conventions, recorded the architecture as a global learned note, and updated the live project record.
- Reason: the user wants durable user facts to have a consistent always-read home across agents without mixing them into project memory or system policy.
- Commands / tools: created the new `User/` folder, patched the shared protocol files and project records, added a global learned note, and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `User/User.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 2248 - canonical-user-profile-lives-in-user-user-md.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and this commit thread.
- Scope impact: adds a new top-level shared user-memory surface and the protocol rules that govern what belongs there versus in learned notes.
- Outcome: the vault now has a canonical user profile that is intentionally small, shared across agents, and loaded at session start, while system rules and project/tool conventions remain in learned or project notes.
- Follow-up impact: future durable user facts can now be written into `User/User.md` directly when they are truly cross-project and stable.

### Prompt 06 - 2026-04-21 22:57
- User request: preserve the manually added `[[Project]]` footer behavior by making both `activeProjects.md` and `inactiveProjects.md` end with the same link to `Templates/Project`, because it makes the graph easier to read.
- Action: updated the generator so both project-list pages now end with `[[Templates/Project|Project]]`, added the rule to the shared graph-view guidance, recorded it as a global learned note, and updated the project/session records.
- Reason: the user wants the footer link to be part of the durable generated layout instead of a hand edit that disappears on the next regeneration.
- Commands / tools: inspected the current generated pages and updater script, patched the shared protocol files plus generator and notes, and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Scripts/update-knowledge-base.mjs`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 2257 - project-list-pages-end-with-project-template-link.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, `activeProjects.md`, `inactiveProjects.md`, and this commit thread.
- Scope impact: adds a shared generated-view and graph rule for the two top-level project-list hubs.
- Outcome: both generated project-list pages now keep the same `Project` footer link automatically after regeneration.
- Follow-up impact: future graph-layout changes to the project-list pages should update the shared protocol and generator together instead of being hand-edited in the generated files.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2105 - michaelsnotes-folders-are-user-owned.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2248 - canonical-user-profile-lives-in-user-user-md.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2257 - project-list-pages-end-with-project-template-link.md`
- Machine notes created or updated: none.
- User notes created or updated:
  `User/User.md`
- Project notes created or updated:
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
  `AGENTS.md`
  `CLAUDE.md`
  `Templates/Project.md`

## Handoff / Closeout
- Current state: the shared protocol now centralizes the most important vault-editing invariants in `AGENTS.md` and `CLAUDE.md`, includes a canonical always-read `User/User.md` profile for small cross-project user metadata, and now makes both generated project-list pages end with the shared `Project` footer link so the graph stays consistent after regeneration.
- Open issues: there is still no dedicated project-creation script, so future `MichaelsNotes/` compliance depends on agents following the rule until scaffolding is automated, and the user profile will need occasional pruning if it approaches the intended size cap.
- Suggested next prompt: if you want more graph-shaping rules like this, call out the exact link or node pattern you want and the generator can own it instead of leaving it as a hand edit.
- Before closing this commit, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
