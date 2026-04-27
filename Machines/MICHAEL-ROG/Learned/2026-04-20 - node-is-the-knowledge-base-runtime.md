---
note_type: learned
title: "Node Is The Knowledge Base Runtime"
learn_id: "2026-04-20-2228-node-is-the-knowledge-base-runtime"
summary: "This machine has Node available and should use it for cross-platform knowledge-base maintenance scripts."
scope: "machine"
global: false
importance: 0.95
machine_id: "MICHAEL-ROG"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "runtime"
source: "verification"
confidence: 1.00
created: "2026-04-20 22:28"
last_updated: "2026-04-20 23:30"
status: "active"
tags:
  - learned
---

# Node Is The Knowledge Base Runtime

## Scope
- Applies at: machine
- Why this scope is correct: this is a local runtime fact about the current machine, not a cross-project truth for every environment.
- Promotion or demotion notes: do not promote to global unless the vault later standardizes on Node across machines by policy.

## Truth
- What is true: this machine has `node v24.14.1` available, while `python` and `py` are not available in PATH, so vault maintenance scripts should use Node for cross-platform automation here.
- Why it matters: the generated index workflow needs one runtime that works on Windows and Linux, and Node is the dependable cross-platform option available on this machine right now.
- When to reuse it: reuse when adding or repairing vault automation on `MICHAEL-ROG`.

## Evidence
- How this was learned: `node --version` succeeded with `v24.14.1`, while `python --version` and `py --version` failed in the local shell during the vault-architecture session.
- Limits or caveats: this note is machine-specific and should not be assumed on other machines.
- Re-check trigger: re-check if Node disappears, Python becomes the preferred shared runtime, or the user chooses a different cross-platform scripting runtime.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
- Related files or references: `Scripts/update-knowledge-base.mjs`

## Sources
- Local shell verification on `MICHAEL-ROG` during the 2026-04-20 vault-architecture session.
