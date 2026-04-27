---
note_type: learned
title: "Updater Script Is Relocatable With The Vault"
learn_id: "2026-04-26-2349-updater-script-is-relocatable-with-the-vault"
summary: "The updater script derives `vaultRoot` from its own location and normalizes `--changed` inputs back to that root, so moving the whole vault to a new folder does not break the core indexing workflow."
scope: "global"
global: true
importance: 0.82
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects.md"
category: "runtime"
source: "verification"
confidence: 0.98
created: "2026-04-26 23:49"
last_updated: "2026-04-26 23:49"
status: "active"
tags:
  - learned
---

# Updater Script Is Relocatable With The Vault

## Scope
- Applies at: global
- Why this scope is correct: this is a property of the core updater script and affects any machine or folder where the vault is copied.
- Promotion or demotion notes: keep global unless a future script version introduces hard-coded external paths.

## Truth
- What is true: `Scripts/update-knowledge-base.mjs` computes `vaultRoot` as the parent of its own script directory, and its `--changed` path normalization converts either absolute inputs or cwd-relative inputs back into paths relative to that derived root.
- Why it matters: the core indexing flow keeps working when the whole vault is moved to a different parent directory, because the script is anchored to the vault layout rather than one absolute machine path.
- When to reuse it: reuse whenever the user asks whether the vault can be relocated or whether path-based updates depend on one fixed install location.

## Evidence
- How this was learned: verified in `Scripts/update-knowledge-base.mjs` that `vaultRoot` is `path.resolve(scriptDir, '..')`, while changed-path normalization uses `path.resolve(process.cwd(), input)` and then `path.relative(vaultRoot, absolute)`.
- Limits or caveats: this does not make machine-scoped note contents portable by themselves, and `.obsidian/workspace.json` can still carry stale UI state from the old location even though the updater logic remains valid.
- Re-check trigger: re-check if the updater script starts calling external tools by absolute path or storing absolute vault paths in the cache.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-26 2341 - portable-bootstrap-without-projects]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`
- Related files or references: `Scripts/update-knowledge-base.mjs`

## Sources
- `Scripts/update-knowledge-base.mjs` lines defining `vaultRoot` and `normalizeChangedPath`, verified on 2026-04-26.
