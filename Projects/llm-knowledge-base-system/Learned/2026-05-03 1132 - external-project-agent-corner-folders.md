---
note_type: learned
title: "External Project Agent Corner Folders"
learn_id: "2026-05-03-1132-external-project-agent-corner-folders"
summary: "Agent-created support files kept inside an external user project should go under `Codex's Corner/` or `Claude's Corner/` instead of being dropped loose into the project."
scope: "global"
global: true
importance: 0.92
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-05-03 1123 - graph-wikilink-audit-cleanup.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-05-03 11:32"
last_updated: "2026-05-03 11:32"
status: "active"
tags:
  - learned
---

# External Project Agent Corner Folders

## Scope
- Applies at: global
- Why this scope is correct: it governs how agents write files into any external user project outside this knowledge-base vault.
- Promotion or demotion notes: promoted into `AGENTS.md` and `CLAUDE.md` because misplaced files can clutter user-owned projects.

## Truth
- What is true: when Codex or Claude creates support files that should live with an external user project, the files should go into an agent-specific folder instead of being placed loose in the project root or arbitrary project folders. Codex uses `Codex's Corner/`; Claude uses `Claude's Corner/`.
- Why it matters: this keeps agent-authored supporting material visible and recoverable without polluting the user's actual project structure.
- When to reuse it: reuse whenever an agent decides a generated note, export, plan, report, scratch-but-worth-keeping file, or similar support artifact belongs with an external project rather than in `C:\Users\micha\Temp`.

## Evidence
- How this was learned: Michael explicitly asked that important agent-created files inside real project directories be placed in `Codex's Corner` or `Claude's Corner` rather than directly in the project directory.
- Limits or caveats: normal source files, config files, assets, and documents that must live in the project's established structure should still be written to the correct project path, especially when the user names an exact destination.
- Re-check trigger: re-check if Michael later standardizes a different agent-artifact folder name.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-05-03 1123 - graph-wikilink-audit-cleanup]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-29 1411 - external-projects-stay-out-of-public-vault.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`

## Sources
- User direction on 2026-05-03.
