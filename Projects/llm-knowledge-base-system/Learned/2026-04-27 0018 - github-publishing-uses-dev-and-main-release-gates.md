---
note_type: learned
title: "GitHub Publishing Uses Dev And Main Release Gates"
learn_id: "2026-04-27-0018-github-publishing-uses-dev-and-main-release-gates"
summary: "Tracked vault changes publish to `dev` on machines with canonical repo write access, while `main` is reserved for explicit user-directed releases."
scope: "global"
global: true
importance: 0.90
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-27 00:18"
last_updated: "2026-04-27 00:18"
status: "active"
tags:
  - learned
---

# GitHub Publishing Uses Dev And Main Release Gates

## Scope
- Applies at: global
- Why this scope is correct: this is the shared publishing workflow for the canonical GitHub repo that represents the vault.
- Promotion or demotion notes: keep global unless the vault stops using the `dev` and `main` branch split.

## Truth
- What is true: when the current machine has write access to the canonical GitHub repo for this vault, knowledge-base-wide changes to tracked files should be committed and pushed to `dev`, while `main` is reserved for explicit user-directed releases or explicit main updates.
- Why it matters: this keeps day-to-day vault evolution separate from release snapshots and prevents accidental publication of work-in-progress to `main`.
- When to reuse it: reuse whenever deciding which branch should receive a vault-wide commit or whether a prompt requires a release push.

## Evidence
- How this was learned: the user explicitly directed that tracked knowledge-base changes should publish to `dev` by default on the host machine and that `main` should only receive pushes when the user explicitly asks for a release.
- Limits or caveats: this rule is about tracked Git content only; ignored local files remain local unless the user explicitly changes the distribution surface.
- Re-check trigger: re-check if the user changes the branch model, repo host, or release policy.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `.gitignore`

## Sources
- User instruction on 2026-04-27 defining `dev` as the default push target and `main` as release-only.
