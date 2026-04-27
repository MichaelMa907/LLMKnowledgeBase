---
note_type: learned
title: "Codex Instruction Entrypoint Is Vault AGENTS"
learn_id: "2026-04-20-2307-codex-instruction-entrypoint-is-vault-agents"
summary: "On this machine, Codex enters the vault through .codex/AGENTS.md redirecting to the vault AGENTS file."
scope: "machine"
global: false
importance: 0.85
machine_id: "MICHAEL-ROG"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "instruction"
source: "verification"
confidence: 1.00
created: "2026-04-20 23:07"
last_updated: "2026-04-20 23:07"
status: "active"
tags:
  - learned
---

# Codex Instruction Entrypoint Is Vault AGENTS

## Scope
- Applies at: machine
- Why this scope is correct: this is a verified fact about the current local Codex installation and file layout on `MICHAEL-ROG`, not a guaranteed truth for every machine or every agent.
- Promotion or demotion notes: do not promote this to global unless the same local instruction surface is verified across other machines and agent installs.

## Truth
- What is true: `C:\Users\micha\.codex\AGENTS.md` currently acts as a thin redirect to `C:\Users\micha\Projects\LLMKnowledgeBase\AGENTS.md`, and separate `.codex/user.agent.md` and `.codex/learned.agent.md` files are not present.
- Why it matters: future instruction rereads and self-tracking on this machine should treat the vault protocol plus scoped vault notes as the live Codex memory surface instead of expecting standalone sidecar memory files.
- When to reuse it: reuse when refreshing Codex instructions, debugging memory-tracking behavior, or documenting later changes to the local Codex instruction surface.

## Evidence
- How this was learned: read `C:\Users\micha\.codex\AGENTS.md`, attempted to read the old sidecar files, and listed the contents of `C:\Users\micha\.codex` during the 2026-04-20 vault-architecture session.
- Limits or caveats: this note is specific to the current machine and current local Codex setup; another machine or future install may restore or replace those sidecar files.
- Re-check trigger: re-check if Codex is updated, reconfigured, or gains a different local memory-file layout.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Machines/MICHAEL-ROG/Learned/2026-04-20 - node-is-the-knowledge-base-runtime.md`
- Related files or references: `AGENTS.md`, `C:\Users\micha\.codex\AGENTS.md`

## Sources
- Local file reads and directory verification on `MICHAEL-ROG` during the 2026-04-20 vault-architecture session.
