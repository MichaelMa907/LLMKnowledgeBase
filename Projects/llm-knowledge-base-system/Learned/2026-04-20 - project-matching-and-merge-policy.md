---
note_type: learned
title: "Project Matching And Merge Policy"
learn_id: "2026-04-20-2228-project-matching-and-merge-policy"
summary: "Default to a new project unless the user explicitly continues an existing one; ask before merging overlaps."
scope: "global"
global: true
importance: 0.95
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-20 22:28"
last_updated: "2026-04-20 22:28"
status: "active"
tags:
  - learned
---

# Project Matching And Merge Policy

## Scope
- Applies at: global
- Why this scope is correct: project matching is a shared agent workflow rule, not a property of one project.
- Promotion or demotion notes: keep global because it governs all project-routing decisions across agents.

## Truth
- What is true: unless the user explicitly says to continue a previous conversation, continue a named project, or work in an existing project, start a new project by default.
- Why it matters: default-new reduces silent over-merging when projects have fuzzy or poorly defined boundaries.
- When to reuse it: apply whenever a new prompt arrives and an agent is deciding whether to reuse an older project.

## Evidence
- How this was learned: the user explicitly changed the matching rule and asked that overlap be handled by asking about merge instead of merging automatically.
- Limits or caveats: if the user explicitly says this is a new project or new task, do not merge even if overlap is obvious; if overlap is detected later and the user did not explicitly mark it new, ask before merging.
- Re-check trigger: re-check only if the user changes the matching rule again.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`

## Sources
- User direction from the vault-architecture session on 2026-04-20.
