---
note_type: learned
title: "Session-Start Retrieval Is Targeted"
learn_id: "2026-04-21-0000-session-start-retrieval-is-targeted"
summary: "When a new session continues a known project, read the project note and generated indexes first, then only open relevant learned notes or commits on demand."
scope: "global"
global: true
importance: 0.94
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-21 00:00"
last_updated: "2026-04-21 00:00"
status: "active"
tags:
  - learned
---

# Session-Start Retrieval Is Targeted

## Scope
- Applies at: global
- Why this scope is correct: this is a shared retrieval rule for how agents should resume known projects in new sessions.
- Promotion or demotion notes: keep global unless the vault later adopts a much heavier preload model.

## Truth
- What is true: when a new session explicitly continues a known project, agents should read the project note and generated indexes first, then open only the relevant learned notes or recent commit history on demand instead of replaying every file by default.
- Why it matters: this keeps retrieval fast and focused while still letting the agent dive into exact notes when the prompt requires it.
- When to reuse it: reuse whenever a new session begins with an explicit continue instruction or a named project.

## Evidence
- How this was learned: the user explicitly asked what the exact new-session workflow should be and challenged whether agents should preload everything or only the right summaries and linked notes.
- Limits or caveats: if the project note is stale or incomplete, the agent may need to open the latest commit thread and additional learned notes sooner.
- Re-check trigger: re-check if the project note stops being a reliable stable summary or if retrieval quality suffers.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Globals/globalIndex.md`

## Sources
- User direction from the vault-architecture session on 2026-04-21.
