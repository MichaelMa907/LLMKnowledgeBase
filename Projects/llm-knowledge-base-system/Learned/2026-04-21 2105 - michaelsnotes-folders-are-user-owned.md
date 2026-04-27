---
note_type: learned
title: "MichaelsNotes Folders Are User-Owned"
learn_id: "2026-04-21-2105-michaelsnotes-folders-are-user-owned"
summary: "Every project folder should include a `MichaelsNotes/` directory that agents may read when useful but must never modify without explicit user instruction."
scope: "global"
global: true
importance: 0.96
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders.md"
category: "instruction"
source: "user"
confidence: 1.00
created: "2026-04-21 21:05"
last_updated: "2026-04-21 21:05"
status: "active"
tags:
  - learned
---

# MichaelsNotes Folders Are User-Owned

## Scope
- Applies at: global
- Why this scope is correct: this is a cross-vault project-structure and agent-behavior rule that should apply to every project and every agent using the knowledge base.
- Promotion or demotion notes: keep global unless the vault stops using per-project folders or the user explicitly replaces this convention.

## Truth
- What is true: every real project folder should include `Projects/<project-slug>/MichaelsNotes/` as user-owned space for Michael's manual notes; agents may read it when the user asks or when the agent judges it directly useful to the active task, but agents must never write, modify, move, rename, or delete that folder or anything inside it unless the user explicitly asks for that exact change.
- Why it matters: the vault needs a clearly protected area where the user can keep personal notes without agent edits, while still allowing those notes to inform work when relevant.
- When to reuse it: reuse whenever creating a new project, touching a legacy project layout, or deciding whether an agent may read or edit content inside `MichaelsNotes/`.

## Evidence
- How this was learned: the user explicitly requested that every project contain `MichaelsNotes/` and that agent writes there be prohibited unless the user specifically asks.
- Limits or caveats: `MichaelsNotes/` is not part of mandatory default session-start retrieval, but reading it is allowed when the user requests it or when the agent judges it directly useful to the active task.
- Re-check trigger: re-check if the project-folder convention changes or if a future project-scaffolding tool starts creating project directories automatically.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`

## Sources
- User instruction on 2026-04-21 to add protected `MichaelsNotes/` folders across projects.
