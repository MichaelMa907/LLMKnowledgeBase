---
note_type: learned
title: "Portable Bootstrap Excludes Project And Machine Data"
learn_id: "2026-04-26-2341-portable-bootstrap-excludes-project-and-machine-data"
summary: "A shareable blank-instance bootstrap consists of protocol, templates, generator assets, and optional user/UI config, while `Projects/`, prior `Machines/`, generated indexes, and the JSON state cache are data to omit or regenerate."
scope: "global"
global: true
importance: 0.84
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects.md"
category: "workflow"
source: "verification"
confidence: 0.93
created: "2026-04-26 23:41"
last_updated: "2026-04-26 23:41"
status: "active"
tags:
  - learned
---

# Portable Bootstrap Excludes Project And Machine Data

## Scope
- Applies at: global
- Why this scope is correct: this rule describes how to package the vault architecture itself for reuse on a different machine without carrying over user task history or old machine state.
- Promotion or demotion notes: keep global unless the vault later gains a dedicated export tool that supersedes this manual copy boundary.

## Truth
- What is true: for a blank-instance copy to another machine, treat `AGENTS.md`, `CLAUDE.md`, `Templates/`, `Scripts/update-knowledge-base.mjs`, and optionally `User/User.md` plus selected `.obsidian` settings as the reusable bootstrap; do not treat `Projects/`, prior `Machines/<machine-id>/Learned/`, generated indexes, or `Scripts/knowledge-base-state.json` as required bootstrap content.
- Why it matters: the vault's durable setup is mostly protocol and generation logic, while project folders and machine-learned notes hold user/task history and environment-specific truths that should not automatically follow the user to a new machine.
- When to reuse it: reuse whenever the user wants to start a fresh vault on another machine with the same structure and rules but without cloning prior project history.

## Evidence
- How this was learned: verified from the live repository layout and updater script that generated views are derived from source notes, machine truth is stored under `Machines/`, and ordinary projects live under `Projects/`; also verified that `.obsidian/workspace.json` stores last-open tabs and pane state rather than core knowledge-base behavior.
- Limits or caveats: the current architecture still stores some system rationale and global learned notes inside `Projects/llm-knowledge-base-system/Learned/`, so a strict no-project transfer yields a thinner bootstrap that relies mainly on `AGENTS.md` and `CLAUDE.md`; copy that project too only if the user wants the system-design history and global learned-note corpus on the new machine.
- Re-check trigger: re-check if the vault gets a dedicated export/import workflow, a new top-level bootstrap folder, or a different home for system-level learned notes.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 2248 - canonical-user-profile-lives-in-user-user-md.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/`, `Scripts/update-knowledge-base.mjs`, `.obsidian/workspace.json`, `Scripts/knowledge-base-state.json`

## Sources
- Repository structure and script behavior verified on 2026-04-26 in the live `LLMKnowledgeBase` vault.
