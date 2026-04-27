---
note_type: learned
title: "Reusable Workflows Can Start As Projects"
learn_id: "2026-04-21-0031-reusable-workflows-can-start-as-projects"
summary: "Model reusable procedures as ordinary projects first; only add workflow-specific infrastructure if project notes and learned notes stop being enough."
scope: "project"
global: false
importance: 0.72
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures.md"
category: "workflow"
source: "user"
confidence: 0.85
created: "2026-04-21 00:31"
last_updated: "2026-04-21 00:31"
status: "active"
tags:
  - learned
---

# Reusable Workflows Can Start As Projects

## Scope
- Applies at: project
- Why this scope is correct: this is guidance for the knowledge-base architecture project itself, not yet a cross-vault rule that should outrank everything else.
- Promotion or demotion notes: promote later only if the user adopts this as a stable protocol for all future workflow-like tasks.

## Truth
- What is true: reusable procedures such as "start a visible shell" should usually be tracked as ordinary projects first, optionally described in their overview as workflow or reference projects, with the distilled reusable steps recorded as learned notes inside that project.
- Why it matters: this reuses the existing matching, commit, progress, and retrieval model instead of introducing a second subsystem before there is evidence that one is needed.
- When to reuse it: reuse when deciding how to store a new repeatable operating pattern or short-lived reference workflow.

## Evidence
- How this was learned: the user asked whether workflow memories need a separate system or can live as projects, using visible-shell startup as the concrete example.
- Limits or caveats: a dedicated workflow layer may become worthwhile if many workflow projects need canonical invocation names, parameters, branching steps, stronger discoverability, or automatic loading.
- Re-check trigger: re-check if workflow-type projects accumulate and start feeling awkward to find or reuse through ordinary project notes and learned notes.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - agent-memory-patterns.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
- Related files or references: `Templates/Project.md`, `Templates/Learned.md`

## Sources
- User direction from the vault-architecture session on 2026-04-21.
