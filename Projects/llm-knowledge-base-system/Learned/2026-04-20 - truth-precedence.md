---
note_type: learned
title: "Truth Precedence"
learn_id: "2026-04-20-2228-truth-precedence"
summary: "Defines the vault-wide order for resolving conflicting truth across global, machine, project, and commit history."
scope: "global"
global: true
importance: 1.00
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "policy"
source: "user"
confidence: 1.00
created: "2026-04-20 22:28"
last_updated: "2026-04-20 22:28"
status: "active"
tags:
  - learned
---

# Truth Precedence

## Scope
- Applies at: global
- Why this scope is correct: precedence is a vault-wide rule and cannot be left to project-local interpretation.
- Promotion or demotion notes: keep this global unless the user replaces the entire precedence model.

## Truth
- What is true: truth is resolved in this order: notes surfaced by `Globals/globalIndex.md` where `global=true` -> `Machines/<machine-id>/Learned` -> project current-state truth -> commit history.
- Why it matters: without explicit precedence, the vault becomes an archive of competing claims instead of a usable source of truth.
- When to reuse it: apply whenever notes from different scopes disagree or when deciding where a new truth belongs.

## Evidence
- How this was learned: the user explicitly chose the scope order `global -> machine specific -> project specific`, then later simplified the global scope from three internal tiers down to one folder sorted by metadata.
- Limits or caveats: within the same scope, prefer the more explicit and more recently updated note; if still ambiguous, ask the user.
- Re-check trigger: re-check only if the user changes the truth model.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - project-matching-and-merge-policy.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`

## Sources
- User direction from the vault-architecture session on 2026-04-20.
