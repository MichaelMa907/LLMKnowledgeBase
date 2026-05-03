---
note_type: commit_thread
title: "Workflow Projects For Reusable Procedures"
commit_id: "2026-04-21-0031-workflow-projects-for-reusable-procedures"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "<current-session>"
started: "2026-04-21 00:31"
last_updated: "2026-04-21 01:37"
status: "closed"
prompt_count: 6
merge_review_status: "not_needed"
tags:
  - commit
---

# Workflow Projects For Reusable Procedures

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: evaluate whether reusable operating workflows should get their own subsystem or live inside the current project-and-learned-note model.
- Scope for this session: workflow memory modeling, retrieval cost, and the threshold for introducing workflow-specific infrastructure.

## Merge Review
- Explicit continue from user: yes, this prompt explicitly continues the knowledge-base-system project.
- Overlap suspected: no, this prompt is directly about the active vault-architecture project itself.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-21 00:31
- User request: ask whether reusable procedures like starting a visible shell should be tracked as a normal project or need a separate workflow system.
- Action: evaluated the tradeoff, kept the current recommendation project-first, created a fresh session commit, added a project-scoped learned note describing when workflow-specific infrastructure would actually be warranted, and updated the project note to reflect the new session state.
- Reason: adding a second memory structure for workflows would increase maintenance and retrieval complexity before there is evidence that ordinary projects plus learned notes are insufficient.
- Commands / tools: reread `AGENTS.md`, `CLAUDE.md`, the active project note, the previous commit thread, and template examples; patched markdown notes; and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit thread, `Projects/llm-knowledge-base-system/Learned/2026-04-21 0031 - reusable-workflows-can-start-as-projects.md`, and `Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md`.
- Scope impact: added project-scoped design guidance for the knowledge-base architecture without changing the shared global protocol.
- Outcome: reusable workflows can now be treated as normal projects or short-lived reference projects first, with learned notes carrying the distilled reusable procedure inside that project.
- Follow-up impact: if workflow projects start needing canonical invocation names, parameters, branching, or automatic preloading, that is the point to consider a dedicated workflow layer.

### Prompt 02 - 2026-04-21 00:39
- User request: check whether the current setup would correctly handle a new workflow-learning project such as learning how to open a visible shell, and modify the markdown protocol if not.
- Action: identified that the existing system could store the information but did not yet force workflow-specific front-page structure or retrieval, then updated the shared agent instructions and project template to add `project_type`, a dedicated `Workflow` section, a `Resolution` section, and an explicit rule that workflow projects should keep the canonical reusable procedure on the front page and mark themselves resolved once verified.
- Reason: the user wants a future session to be able to say "learn this workflow, save it as a project" and have that project be reliably reusable without rereading commit history.
- Commands / tools: reread `Templates/Project.md`, `AGENTS.md`, `CLAUDE.md`, the active project note, and this commit thread; patched markdown notes; and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit thread, and `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`.
- Scope impact: promoted workflow-project handling into the shared global protocol instead of leaving it as a project-local design preference.
- Outcome: a prompt like the user's visible-shell example now has a defined storage model: create a workflow project, mention that in `Overview`, store the steps on the front page in `Workflow`, keep the stable result in `Current State`, and mark the project resolved once verified.
- Follow-up impact: the next validation step is to dogfood this on a real workflow project and see whether the template captures enough operational detail without extra workflow-specific automation.

### Prompt 03 - 2026-04-21 00:45
- User request: ask which project types currently exist and whether the set is just workflow and project.
- Action: inspected the live template and protocol references for `project_type`, confirmed that the default template defines `task`, the shared protocol explicitly defines `workflow`, and the current knowledge-base system project already uses `system` in practice.
- Reason: the user wants the current taxonomy as implemented, not an aspirational future classification.
- Commands / tools: searched the vault for `project_type:` references and reread `Templates/Project.md` plus `AGENTS.md`.
- Files / notes touched: this commit thread and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: clarified the current state of the type taxonomy without changing the shared protocol.
- Outcome: the current setup does not have only `workflow` and `project`; `project` is `note_type`, while `project_type` is currently `task` by template default, `workflow` by protocol rule, and `system` by live usage.
- Follow-up impact: if the user wants a strict closed set, the next step is to formalize the allowed `project_type` values in the shared protocol instead of leaving part of the taxonomy implicit.

### Prompt 04 - 2026-04-21 00:48
- User request: ask what `project_type` a long-running robot-design effort with hundreds of sessions would be.
- Action: classified the example under the current taxonomy as `task`, while noting that this exposes how broad and underspecified the catch-all type still is.
- Reason: the user wants to know how a large multi-month build project fits into the currently implemented type system.
- Commands / tools: used existing context from the live template and protocol; no new protocol edits were required.
- Files / notes touched: this commit thread and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: clarified how the current taxonomy applies to a concrete long-term build project without changing the taxonomy itself.
- Outcome: under the current setup, a robot-design effort would be stored as `project_type: task`, not `workflow` or `system`.
- Follow-up impact: if the user wants richer classification, the next step is to formalize additional project types for long-running build, research, or maintenance work.

### Prompt 05 - 2026-04-21 00:53
- User request: ask for a short, natural prompt to use in a new session so the agent creates the visible-shell workflow project correctly.
- Action: derived the minimum user phrasing needed to trigger the intended behavior without over-specifying implementation details.
- Reason: the user wants a practical bootstrap prompt they can actually type, not a rigid protocol statement.
- Commands / tools: used the current project context and workflow-project rules already in memory; no new protocol files needed changes.
- Files / notes touched: this commit thread and `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`.
- Scope impact: validated the user-facing prompt shape for starting a workflow project under the current rules.
- Outcome: the recommended prompt explicitly asks the agent to learn the procedure, save it as a project, and note that it is a workflow in the overview while staying otherwise lightweight.
- Follow-up impact: if the user wants, the next validation step is to actually use that prompt in a fresh session and confirm the created project note matches the intended workflow structure.

### Prompt 06 - 2026-04-21 01:37
- User request: fix the foundational template issue where Obsidian is treating placeholder wiki links in template files as nonexistent-file graph nodes.
- Action: traced the phantom graph nodes to live ``...`` placeholder links inside `Templates/Commit.md` and `Templates/Project.md`, changed those placeholder examples to backticked text, updated the shared agent instructions so templates never contain live placeholder wiki links again, and recorded the rule as a global learned note.
- Reason: the graph should only reflect real notes and intended structural links, not template placeholders that happen to resemble wiki links.
- Commands / tools: searched the vault for wiki links containing angle-bracket placeholders with `rg`, reread the shared instructions and templates, patched the affected files, and refreshed generated views with `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Commit.md`, `Templates/Project.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, this commit thread, and `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`.
- Scope impact: added a cross-vault authoring rule that keeps template examples readable without polluting the Obsidian graph with phantom nodes.
- Outcome: template files no longer emit fake graph edges for `<project-slug>` or `<commit-slug>` placeholders, while real instantiated notes can still use live structural wiki links.
- Follow-up impact: after Obsidian reindexes the vault, the phantom nodes created solely by template placeholders should disappear unless some other file still references them.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`
- Machine notes created or updated: none.
- Project notes created or updated:
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0031 - reusable-workflows-can-start-as-projects.md`
  `AGENTS.md`
  `CLAUDE.md`
  `Templates/Project.md`
  `Templates/Commit.md`

## Handoff / Closeout
- Current state: the knowledge base now has explicit workflow-project handling, and the templates no longer contain live placeholder wiki links that create phantom graph nodes in Obsidian.
- Open issues: this still needs to be exercised on a real workflow project to confirm that the front page captures enough detail and that no extra workflow-specific metadata is missing, and the allowed `project_type` values are still only partly formalized with `task` acting as a very broad catch-all.
- Suggested next prompt: reopen Obsidian or let it reindex, then verify that the placeholder nodes disappear and that real instantiated notes still produce the intended structural graph.
- Before closing this commit, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.
