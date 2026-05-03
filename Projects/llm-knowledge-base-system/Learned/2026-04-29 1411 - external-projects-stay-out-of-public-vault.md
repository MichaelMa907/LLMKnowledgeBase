---
note_type: learned
title: "External Projects Stay Out Of Public Vault"
learn_id: "2026-04-29-1411-external-projects-stay-out-of-public-vault"
summary: "Personal, school, job, application, code, and research projects should not be created or maintained as live project folders in the public LLMKnowledgeBase repo by default; when the user gives an external path, work there and reserve this repo for knowledge-base-system changes."
scope: "global"
global: true
importance: 0.98
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-29 1411 - external-project-boundary.md"
category: "workflow"
source: "user_correction"
confidence: 0.99
created: "2026-04-29 14:11"
last_updated: "2026-04-29 14:11"
status: "active"
tags:
  - learned
---

# External Projects Stay Out Of Public Vault

## Scope
- Applies at: global
- Why this scope is correct: this governs how agents should separate reusable knowledge-base-system work from personal/external project work across all future sessions.
- Promotion or demotion notes: promoted into both `AGENTS.md` and `CLAUDE.md` because violating it can leak personal context into a public release surface.

## Truth
- What is true: if the user names an external project folder or the task is about a personal, school, job, application, code, or research project, agents should work in that project folder and should not create or maintain a matching live project under this public knowledge-base repo by default. Use `Projects/llm-knowledge-base-system/` only for changes to the knowledge-base system itself.
- Why it matters: the public repo is intended to release reusable protocol, templates, scripts, and the system reference project, not Michael's private project history or application materials.
- When to reuse it: reuse whenever an agent is tempted to store an ordinary external task as a `Projects/<project-slug>/` folder inside `LLMKnowledgeBase`.

## Evidence
- How this was learned: Michael corrected an agent-created personal application project stored under `LLMKnowledgeBase`, clarified that the work has its own external project folder, and stated that the knowledge-base repo should include only changes to the actual knowledge-base system.
- Limits or caveats: retrieval from local knowledge-base context can still be useful when explicitly requested, but retrieval should not imply that new personal project notes belong in the public repo.
- Re-check trigger: re-check if the repo gains a private-only mode or a separate non-public memory vault.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-29 1411 - external-project-boundary]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-27 0127 - starter-release-repo-omits-live-vault-data.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `.gitignore`

## Sources
- User correction in session on 2026-04-29.
