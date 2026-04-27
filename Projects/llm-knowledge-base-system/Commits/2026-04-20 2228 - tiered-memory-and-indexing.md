---
note_type: commit_thread
title: "Tiered Memory And Indexing"
commit_id: "2026-04-20-2228-tiered-memory-and-indexing"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "<session-2026-04-20-2228>"
started: "2026-04-20 22:28"
last_updated: "2026-04-21 00:24"
status: "closed"
prompt_count: 11
merge_review_status: "not_needed"
tags:
  - commit
---

# Tiered Memory And Indexing

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: redesign the vault into a scoped truth system with generated indexes and stronger matching rules.
- Scope for this session: global/machine/project tiers, generator script, new starter notes, and updated agent instructions.

## Merge Review
- Explicit continue from user: no.
- Overlap suspected: yes, this is clearly part of the vault-architecture effort, but the new operating rule being introduced in this same turn is to start new by default unless the user explicitly continues.
- User merge decision: not needed for this seed project because it is the first canonical project note for vault architecture itself.

## Prompt Log
### Prompt 01 - 2026-04-20 22:28
- User request: implement tiered memory with global, machine, and project scope; search online for common memory-system patterns; add generated project indexes; tighten project matching so new is the default and merge requires user confirmation.
- Action: researched common agent-memory patterns online, redesigned the vault protocol, added a PowerShell generator script, created starter global and machine notes, and seeded the first real project note plus this commit thread.
- Reason: the user wants the vault to function as a system of memory and truth instead of only a collection of append-only project logs.
- Commands / tools: read local Codex memory files, searched official docs online, checked local runtime availability, created directories, patched markdown/templates, and generated indexes with `Scripts/Refresh-KnowledgeBase.ps1`.
- Files / notes touched: root `AGENTS.md`, `CLAUDE.md`, `Templates/*`, `Scripts/Refresh-KnowledgeBase.ps1`, root project indexes, global/machine starter notes, and the project note for this system work.
- Scope impact: added new global tier notes, one machine-specific runtime note, and a project note that tracks vault architecture itself.
- Outcome: the vault now has scoped truth layers, generated views, and a stricter project-matching rule set.
- Follow-up impact: future project additions should now flow through the generator script instead of manually curated project lists.

### Prompt 02 - 2026-04-20 23:07
- User request: reread all instruction files so Codex can track changes to how its own knowledge system works.
- Action: reread the live Codex and vault instruction files, verified that `.codex/AGENTS.md` now redirects into this vault, confirmed that `.codex/user.agent.md` and `.codex/learned.agent.md` are absent, updated the Codex protocol note, and added a machine-scoped learned note for the new instruction layout.
- Reason: the user wants the knowledge base to track not just project work but also changes in how Codex itself receives instructions and maintains memory.
- Commands / tools: read `.codex/AGENTS.md`, attempted reads for `.codex/user.agent.md` and `.codex/learned.agent.md`, listed `C:\Users\micha\.codex`, reread `AGENTS.md` and `CLAUDE.md`, patched markdown notes, and ran `Scripts/Refresh-KnowledgeBase.ps1`.
- Files / notes touched: root `AGENTS.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit note, `Machines/MICHAEL-ROG/Learned/2026-04-20 2307 - codex-instruction-entrypoint-is-vault-agents.md`, and regenerated index files.
- Scope impact: clarified the current Codex instruction surface and lifted that environment fact into machine scope so future sessions do not depend on nonexistent sidecar files.
- Outcome: future instruction rereads on this machine should treat the vault `AGENTS.md` plus scoped vault notes as the authoritative Codex memory surface.
- Follow-up impact: if Codex's local wiring changes again, update the environment section and machine-scoped truth note in the same task.

### Prompt 03 - 2026-04-20 23:13
- User request: explain how the final state and progress of a project are tracked without reading every commit first.
- Action: clarified the intended read path and updated the project note so it explicitly states that stable state and progress live in the project note while commits remain append-only historical evidence.
- Reason: the user wants a practical way to inspect project status quickly instead of replaying the full commit log.
- Commands / tools: reread the active project note and commit thread, patched both notes, and ran `Scripts/Refresh-KnowledgeBase.ps1`.
- Files / notes touched: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and this commit note, plus regenerated indexes.
- Scope impact: reinforced the project-note-first model for reading progress and final state.
- Outcome: the system now states more explicitly that readers should use the project note as the canonical summary view.
- Follow-up impact: if this still feels too indirect in practice, add a dedicated `Snapshot` or `Final State` section to the project template later.

### Prompt 04 - 2026-04-20 23:17
- User request: confirm how learned notes are stored and whether storage outside the project folder has already been implemented.
- Action: verified the live file layout, confirmed that learned storage is already implemented in global tier folders and machine scope, and noted that project-scoped learned storage is supported by layout and templates but has not been used in this project yet.
- Reason: the user wants to know which parts of the scoped memory model are real today versus only designed on paper.
- Commands / tools: listed tracked files under `Globals`, `Machines`, and `Projects`, reread the project note and this commit thread, patched both notes, and ran `Scripts/Refresh-KnowledgeBase.ps1`.
- Files / notes touched: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and this commit note, plus regenerated indexes.
- Scope impact: clarified which learned-note scopes are implemented and populated right now.
- Outcome: the storage model is now explicit: global and machine learned are live; project learned is live as a path/template but unused in this project so far.
- Follow-up impact: the next good validation step is to create a real project-scoped learned note during ordinary project work.

### Prompt 05 - 2026-04-20 23:23
- User request: question why there are three global tiers instead of one global scope, with project-wide acting as the next level down.
- Action: evaluated the rationale for the three-way global split and identified it as optional complexity rather than a core requirement of the memory model.
- Reason: the user wants the truth model to stay simple and grounded in actual usage rather than preserving unnecessary architectural distinctions.
- Commands / tools: reread the project note, this commit thread, and `AGENTS.md`, then patched the project and commit notes.
- Files / notes touched: `AGENTS.md` was reread for context; `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and this commit note were updated.
- Scope impact: reframed the tiered-global model as a design choice that can be collapsed later without changing the broader global/machine/project structure.
- Outcome: the project now explicitly tracks the possibility that one `global` scope may be enough.
- Follow-up impact: if the user prefers simplicity over preemptive precedence modeling, collapse the global folders and keep importance only as metadata.

### Prompt 06 - 2026-04-20 23:23
- User request: continue the explanation.
- Action: prepared the fuller design argument: project-wide is already a separate scope and should not be described as a second global tier; the real decision is whether global itself needs subtiers.
- Reason: the user asked for a deeper explanation of the tradeoff, not just a yes or no answer.
- Commands / tools: no new external tools beyond the rereads and note patches already performed for this response.
- Files / notes touched: this commit note and the project note.
- Scope impact: sharpened the distinction between applicability scope and precedence/importance inside a scope.
- Outcome: the response can now recommend a simpler model cleanly: `global`, `machine`, `project`, `commit history`.
- Follow-up impact: if the user approves simplification, update `AGENTS.md`, `CLAUDE.md`, template references, note locations, and the refresh script together in one change.

### Prompt 07 - 2026-04-20 23:30
- User request: collapse the global tiers into one global scope sorted by confidence and importance; replace the PowerShell maintenance script with a cross-platform script that updates only changed areas; make Codex and Claude run that updater after every prompt.
- Action: collapsed global learned storage into `Globals/Learned`, added `importance` metadata to learned notes and templates, replaced the PowerShell generator with `Scripts/update-knowledge-base.mjs`, added an incremental generated state cache plus per-project learned indexes, updated existing learned notes and runtime assumptions, and rewrote the Codex/Claude workflow instructions around `--changed` roots.
- Reason: the user wants a simpler truth model, Linux-friendly maintenance, and an indexing workflow that does not reread the entire vault after every prompt.
- Commands / tools: checked runtime availability with `node --version` and `python --version`, moved the global note files into the new folder, patched protocol/templates/notes/scripts, and prepared the new updater to refresh only the scopes that changed.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/*`, `Scripts/update-knowledge-base.mjs`, `Globals/Learned/*`, `Machines/MICHAEL-ROG/Learned/*`, this commit note, and the project note.
- Scope impact: simplified the global truth model, made learned-index ordering metadata-driven instead of folder-driven, and changed maintenance from full PowerShell refreshes to incremental Node updates.
- Outcome: the vault now has one global learned scope, a cross-platform updater, and explicit post-prompt script instructions for both agents.
- Follow-up impact: run the new updater with the changed roots for this migration, verify the generated files, and remove leftover empty tier folders.

### Prompt 08 - 2026-04-20 23:50
- User request: question why `Scripts/knowledge-base-state.json` exists and whether the global Markdown index alone should be enough.
- Action: inspected the generated cache, clarified that the Markdown indexes are human-facing outputs while the JSON file is only an internal incremental cache, and recorded the open tradeoff between simplicity and no-full-rescan performance.
- Reason: the user wants to know whether the JSON file is real architectural value or unnecessary complexity.
- Commands / tools: reread the active project note and commit note, inspected `Scripts/knowledge-base-state.json`, patched the project and commit notes, and ran the incremental updater with the project root.
- Files / notes touched: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit note, and regenerated index/state outputs through the updater.
- Scope impact: clarified the role of the generated cache inside the maintenance design without changing the truth model itself.
- Outcome: the vault now explicitly records that the JSON file is not source of truth; it only exists to make changed-root updates feasible.
- Follow-up impact: if the user prefers maximum simplicity over incremental performance, the cache can be removed and the updater can fall back to full rescans.

### Prompt 09 - 2026-04-21 00:00
- User request: correct the global model so `global: true` means "indexed globally" instead of moving the note to a global folder, and explain the exact session-start workflow for continuing a known project in a new session.
- Action: moved the global learned notes back into the knowledge-base project's `Learned/` folder, updated the protocol so `Globals/globalIndex.md` is only a generated directory of links, patched the updater to build the global index from `global: true` notes in place, added one-line summaries for learned index entries, and encoded the new-session retrieval workflow as both instruction text and a new global learned note.
- Reason: the user wants global applicability to be metadata only, while keeping the actual learned files attached to their originating project, and wants a precise description of what an agent should load first in a new session.
- Commands / tools: moved learned note files, reread protocol/script/project files, patched instructions/templates/notes/script, and ran the updater after the changes.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Learned.md`, `Templates/Project.md`, `Scripts/update-knowledge-base.mjs`, the moved learned notes in `Projects/llm-knowledge-base-system/Learned/`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`, this commit note, and the project note.
- Scope impact: global truth is now indexing metadata instead of a storage folder, and new-session retrieval can be defined around generated summaries and targeted reads rather than full-vault replay.
- Outcome: the vault now matches the intended rule: the global index points at real learned files in place, and the expected new-session retrieval path is explicit.
- Follow-up impact: verify the regenerated indexes and then use this corrected model as the basis for future session-start behavior.

### Prompt 10 - 2026-04-21 00:15
- User request: simplify the Obsidian graph so projects sit in the middle, commits connect to their project, and learned notes connect to their relevant commit, while richer relationships remain available for agent reading without cluttering the graph.
- Action: changed the shared rule so only structural relationships use wiki links, rewrote templates and current notes to replace extra wiki links with plain text paths, and updated generated indexes to show titles, summaries, and paths without becoming graph hubs.
- Reason: the user wants the graph view to be readable at a glance instead of reflecting every internal cross-reference the agents may still need.
- Commands / tools: reread templates, project/commit/learned notes, and generated indexes; patched instructions/templates/notes/script; and regenerated the indexes with the updated graph policy.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/*`, `Scripts/update-knowledge-base.mjs`, the current project note, this commit note, all learned notes for the knowledge-base-system project, and both machine learned notes.
- Scope impact: wiki links now primarily encode the simple structural chain `project -> commit -> learned`.
- Outcome: future graph edges should be much closer to the user-facing mental model while the underlying text still preserves richer references.
- Follow-up impact: verify the graph with more than one project and more than one session to make sure the simplification scales cleanly.

### Prompt 11 - 2026-04-21 00:24
- User request: make active projects connect to `activeProjects.md` and inactive ones connect to `inactiveProjects.md`.
- Action: updated the graph rule so the active and inactive project index pages are the only generated grouping hubs allowed to use wiki links, changed the updater to emit wiki links for project rows in those two files, and updated the graph policy note to reflect that exception.
- Reason: the user wants the graph to stay simple but still have top-level grouping nodes that cluster active and inactive projects separately.
- Commands / tools: reread the generator, graph policy note, project note, commit note, and project indexes; patched the instructions/script/notes; and regenerated the indexes.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Scripts/update-knowledge-base.mjs`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`, this commit note, and the project note.
- Scope impact: active and inactive project list pages are now intentional graph hubs, while other generated indexes stay plain-text-only.
- Outcome: the graph should now show `activeProjects -> active project` and `inactiveProjects -> inactive project` without reintroducing the earlier cross-link clutter.
- Follow-up impact: verify this still looks clean after there are multiple active and inactive projects.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - project-matching-and-merge-policy.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 - agent-memory-patterns.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
- Machine notes created or updated:
  `Machines/MICHAEL-ROG/Learned/2026-04-20 - node-is-the-knowledge-base-runtime.md`
  `Machines/MICHAEL-ROG/Learned/2026-04-20 2307 - codex-instruction-entrypoint-is-vault-agents.md`
- Project notes created or updated:
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`

## Handoff / Closeout
- Current state: learned files stay in place, `Globals/globalIndex.md` is now just a generated directory of global links, and the incremental Node updater has been retargeted around that model.
- Current state: learned files stay in place, the global index is a generated directory, and wiki links are being constrained to the simple project/commit/learn chain for graph readability.
- Open issues: no automatic loading behavior exists yet beyond the indexes, and the changed-root workflow still needs real project usage to prove it is reliable.
- Suggested next prompt: dogfood the corrected session-start workflow on a normal project and see whether the amount of automatic preloading feels right.
- Before closing this commit, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
