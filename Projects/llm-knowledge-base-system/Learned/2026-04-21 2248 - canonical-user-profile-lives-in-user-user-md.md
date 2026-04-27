---
note_type: learned
title: "Canonical User Profile Lives In User/User.md"
learn_id: "2026-04-21-2248-canonical-user-profile-lives-in-user-user-md"
summary: "Durable cross-project user metadata is stored in a small always-read `User/User.md` note, while project, tool, and system rules stay in learned notes or project notes."
scope: "global"
global: true
importance: 0.98
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders.md"
category: "instruction"
source: "user"
confidence: 1.00
created: "2026-04-21 22:48"
last_updated: "2026-04-21 22:48"
status: "active"
tags:
  - learned
---

# Canonical User Profile Lives In User/User.md

## Scope
- Applies at: global
- Why this scope is correct: this defines the single shared memory surface for durable user metadata across all projects and all agents.
- Promotion or demotion notes: keep global unless the vault intentionally replaces the shared user-profile mechanism with a different top-level structure.

## Truth
- What is true: durable cross-project user metadata should be stored in `User/User.md`, which is small enough to read at session start; keep that note focused on identity, enduring collaboration preferences, stable strengths, and long-lived interests, while project-specific tool choices, repo conventions, and system-wide editing rules stay in project notes or learned notes.
- Why it matters: user metadata needs a canonical always-read home that is consistent across Codex and Claude without turning the general learned-note system into a mixed user-profile dump.
- When to reuse it: reuse whenever an agent learns something durable about the user and must decide whether it belongs in the shared profile or in project/global learned notes instead.

## Evidence
- How this was learned: the user explicitly requested a dedicated user profile structure, preferred a small metadata-style note over a cluttered user-memory tree, and distinguished user profile content from system rules such as phantom-file prevention.
- Limits or caveats: keep `User/User.md` under roughly 30 active entries and default to a single file; only widen the structure if the user explicitly asks or the single-file profile can no longer stay concise.
- Re-check trigger: re-check if the user asks for a richer multi-file user-memory structure or a different retrieval policy.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `User/User.md`

## Sources
- User instruction on 2026-04-21 to add a dedicated shared user profile that stays small and does not absorb system or project conventions.
