---
note_type: learned
title: "Fresh Clone Setup Needs Agent Entrypoint And Index Rebuild"
learn_id: "2026-04-27-0154-fresh-clone-setup-needs-agent-entrypoint-and-index-rebuild"
summary: "A new user must point their agent's global instruction file at the cloned vault protocol and run a full updater rebuild so local generated indexes, including the global learned index, exist."
scope: "global"
global: true
importance: 0.90
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-27 0127 - starter-release-surface-cleanup.md"
category: "workflow"
source: "user clarification"
confidence: 0.96
created: "2026-04-27 01:54"
last_updated: "2026-04-27 01:54"
status: "active"
tags:
  - learned
---

# Fresh Clone Setup Needs Agent Entrypoint And Index Rebuild

## Scope
- Applies at: global
- Why this scope is correct: every reusable installation of the knowledge base needs the same bootstrap steps before agents can reliably use the vault.
- Promotion or demotion notes: keep the operational steps in `README.md`; this learned note records the durable setup requirement and rationale.

## Truth
- What is true: after cloning the public starter repo, a user must add an instruction block to each agent's always-loaded instruction file that points at the local clone and the correct protocol file, then run a full updater rebuild so local generated files such as `Globals/globalIndex.md`, `activeProjects.md`, `inactiveProjects.md`, and `Scripts/knowledge-base-state.json` are created from the included project and learned notes.
- Why it matters: cloning only gets the tracked source notes and scripts; the generated global learned index and local cache are intentionally ignored, and agents will not automatically know where the vault lives unless their entrypoint instructions point at it.
- When to reuse it: reuse when changing setup docs, release packaging, installer scripts, or agent entrypoint guidance.

## Evidence
- How this was learned: the user clarified that setup must explain both the agent instruction block and the command needed to generate global learned views from the included `llm-knowledge-base-system` learned notes.
- Limits or caveats: exact global instruction file locations vary by agent installation and should be described as agent-specific rather than hard-coded to one machine path.
- Re-check trigger: re-check if a real installer, plugin, or automatic agent entrypoint registration is added.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-27 0127 - starter-release-surface-cleanup]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-27 0127 - starter-release-repo-omits-live-vault-data.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-26 2349 - updater-script-is-relocatable-with-the-vault.md`
- Related files or references: `README.md`, `Scripts/setup-knowledge-base.ps1`, `Scripts/setup-knowledge-base.cmd`, `Scripts/update-knowledge-base.mjs`

## Sources
- User clarification on 2026-04-27 during public release setup documentation.
