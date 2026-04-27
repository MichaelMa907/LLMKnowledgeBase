---
note_type: learned
title: "Critical Vault Invariants Belong In Agent Protocol"
learn_id: "2026-04-21-2121-critical-vault-invariants-belong-in-agent-protocol"
summary: "Cross-vault editing invariants severe enough to damage the knowledge base must be stated directly in `AGENTS.md` and `CLAUDE.md`, not only in learned notes."
scope: "global"
global: true
importance: 0.97
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders.md"
category: "instruction"
source: "user"
confidence: 1.00
created: "2026-04-21 21:21"
last_updated: "2026-04-21 21:21"
status: "active"
tags:
  - learned
---

# Critical Vault Invariants Belong In Agent Protocol

## Scope
- Applies at: global
- Why this scope is correct: this governs how all agents should encode and preserve the most important editing rules for the entire knowledge base.
- Promotion or demotion notes: keep global unless the vault stops using shared protocol files as the primary instruction surface.

## Truth
- What is true: if a learned rule is a cross-vault editing invariant whose violation could corrupt the vault, create phantom graph nodes, break generated views or indexing, rewrite protected history, or alter user-owned content, that rule must be stated directly in both `AGENTS.md` and `CLAUDE.md` in addition to any learned note that explains it.
- Why it matters: critical operational rules are too important to depend on optional learned-note retrieval, so they need to live in the highest-probability instruction surface that agents read first.
- When to reuse it: reuse whenever deciding whether a newly learned vault rule should stay as explanatory memory only or be promoted into the global protocol files.

## Evidence
- How this was learned: the user reviewed several editing-focused learned notes such as phantom-link prevention and asked that truly foundational conventions live directly in the shared protocol instead of being left only in learned notes.
- Limits or caveats: learned notes should still be kept for rationale, provenance, examples, and edge cases; this rule only changes where the operational command must also appear.
- Re-check trigger: re-check if the vault changes its primary instruction entrypoint or the user adopts a different top-level protocol surface.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 2105 - michaelsnotes-folders-are-user-owned.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`

## Sources
- User instruction on 2026-04-21 to promote severe editing conventions into the shared protocol files.
