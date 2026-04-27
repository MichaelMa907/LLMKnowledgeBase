---
note_type: learned
title: "Workflow Projects Store Canonical Procedure On Front Page"
learn_id: "2026-04-21-0039-workflow-projects-store-canonical-procedure-on-front-page"
summary: "Workflow projects should identify themselves in overview, keep the verified reusable procedure on the front page, and mark themselves resolved when complete."
scope: "global"
global: true
importance: 0.91
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures.md"
category: "workflow"
source: "user"
confidence: 0.97
created: "2026-04-21 00:39"
last_updated: "2026-04-21 00:39"
status: "active"
tags:
  - learned
---

# Workflow Projects Store Canonical Procedure On Front Page

## Scope
- Applies at: global
- Why this scope is correct: this is now a shared authoring and retrieval rule for any agent creating reusable workflow projects in the vault.
- Promotion or demotion notes: keep global unless the vault later gets a separate workflow system that replaces this pattern.

## Truth
- What is true: when a user asks to learn or preserve a reusable procedure as a project, that project should use `project_type: workflow`, mention in `Overview` that it is a workflow project, keep the verified reusable procedure on the front page in `Workflow`, and set `resolved: true` once the workflow is learned and verified.
- Why it matters: future agents should be able to reuse the workflow from the project note itself instead of reconstructing it from commit history.
- When to reuse it: reuse when creating or updating workflow, reference-workflow, or procedure-learning projects.

## Evidence
- How this was learned: the user tested the protocol with a visible-shell example and asked whether the current setup would reliably create a reusable resolved workflow project.
- Limits or caveats: if the workflow has parameters, branches, or many variants, the front page may still need tighter structure later.
- Re-check trigger: re-check if real workflow projects start needing more metadata than `project_type`, `Workflow`, and `Resolution`.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0031 - reusable-workflows-can-start-as-projects.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`

## Sources
- User direction from the vault-architecture session on 2026-04-21.
