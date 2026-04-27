---
note_type: learned
title: "Canonical GitHub Repo Is Writable From This Machine"
learn_id: "2026-04-27-0018-canonical-github-repo-is-writable-from-this-machine"
summary: "The canonical `MichaelMa907/LLMKnowledgeBase` GitHub repo can be cloned from and pushed to from MICHAEL-ROG."
scope: "machine"
global: false
importance: 0.86
machine_id: "MICHAEL-ROG"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects.md"
category: "runtime"
source: "user"
confidence: 0.96
created: "2026-04-27 00:18"
last_updated: "2026-04-27 00:18"
status: "active"
tags:
  - learned
---

# Canonical GitHub Repo Is Writable From This Machine

## Scope
- Applies at: machine
- Why this scope is correct: repo credentials and push capability are properties of this machine's local environment, not a universal vault fact.
- Promotion or demotion notes: keep machine-scoped unless canonical push access becomes uniform across all machines used with this vault.

## Truth
- What is true: on `MICHAEL-ROG`, the canonical GitHub repo `https://github.com/MichaelMa907/LLMKnowledgeBase` can be cloned from and pushed to successfully.
- Why it matters: the shared `dev`/`main` publishing workflow is actionable on this machine instead of being only a theoretical branch policy.
- When to reuse it: reuse whenever deciding whether the live vault can publish directly from this machine or whether work must remain local.

## Evidence
- How this was learned: the user provided a successful clone, commit, and push transcript against `MichaelMa907/LLMKnowledgeBase` from this machine on 2026-04-27.
- Limits or caveats: this confirms repo access on the machine, not on every shell session or every future credential state.
- Re-check trigger: re-check if authentication changes, push starts failing, or the canonical repo moves.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-27 0018 - github-publishing-uses-dev-and-main-release-gates.md`
- Related files or references: `Machines/MICHAEL-ROG/machineIndex.md`

## Sources
- User-provided terminal transcript on 2026-04-27 showing successful `git clone`, `git commit`, and `git push` against `MichaelMa907/LLMKnowledgeBase`.
