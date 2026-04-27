---
note_type: learned
title: "Learned Index Updates Are Incremental"
learn_id: "2026-04-20-2330-learned-index-updates-are-incremental"
summary: "Agents update learned indexes from changed roots after each prompt instead of rescanning the entire vault."
scope: "global"
global: true
importance: 0.98
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-20 23:30"
last_updated: "2026-04-20 23:30"
status: "active"
tags:
  - learned
---

# Learned Index Updates Are Incremental

## Scope
- Applies at: global
- Why this scope is correct: this is a shared workflow rule for how Codex, Claude, and future agents should update learned retrieval views after each prompt.
- Promotion or demotion notes: keep global unless the vault abandons incremental indexing entirely.

## Truth
- What is true: agents should run `node Scripts/update-knowledge-base.mjs` after every prompt and pass only the roots that changed via repeated `--changed` arguments instead of rescanning the entire vault by default.
- Why it matters: this keeps the generated learned indexes current without paying the cost of rereading every folder after each prompt.
- When to reuse it: reuse whenever an agent updates project notes, learned notes, machine notes, or global notes.

## Evidence
- How this was learned: the user explicitly asked for one global scope, metadata-based sorting, and a script that updates only the folders that may have changed.
- Limits or caveats: use `--full` when bootstrapping the cache or after a broad structural migration; otherwise prefer the smallest changed-root set possible.
- Re-check trigger: re-check if the updater becomes unreliable or if the vault switches to a different indexing architecture.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`, `Machines/MICHAEL-ROG/Learned/2026-04-20 - node-is-the-knowledge-base-runtime.md`
- Related files or references: `Scripts/update-knowledge-base.mjs`, `AGENTS.md`, `CLAUDE.md`

## Sources
- User direction from the vault-architecture session on 2026-04-20.
