---
note_type: learned
title: "Frontmatter Files Must Avoid BOM"
learn_id: "2026-05-03-1128-frontmatter-files-must-avoid-bom"
summary: "Markdown notes with frontmatter should be written without a leading UTF-8 BOM; the updater now tolerates one, but agents should avoid introducing it."
scope: "global"
global: true
importance: 0.90
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-05-03 1123 - graph-wikilink-audit-cleanup.md"
category: "workflow"
source: "verification"
confidence: 1.00
created: "2026-05-03 11:28"
last_updated: "2026-05-03 11:28"
status: "active"
tags:
  - learned
---

# Frontmatter Files Must Avoid BOM

## Scope
- Applies at: global
- Why this scope is correct: the updater parses frontmatter across all vault projects, machines, and learned notes.
- Promotion or demotion notes: promoted into `AGENTS.md` and `CLAUDE.md` because a BOM can break generated indexes.

## Truth
- What is true: agents should avoid introducing a leading UTF-8 BOM in Markdown files that use frontmatter. On Windows, especially avoid Windows PowerShell `Set-Content -Encoding utf8` for these files unless the result is verified or the BOM is stripped.
- Why it matters: a leading BOM before `---` can make frontmatter parsers miss note metadata and produce empty or stale generated views. `Scripts/update-knowledge-base.mjs` now strips a leading BOM defensively, but note writers should still preserve clean UTF-8 without BOM.
- When to reuse it: reuse whenever doing bulk mechanical Markdown rewrites or diagnosing missing projects in generated indexes.

## Evidence
- How this was learned: a mechanical PowerShell link cleanup introduced BOMs, after which a full `node Scripts/update-knowledge-base.mjs --full` rebuild produced empty active/inactive project lists until the BOMs were removed.
- Limits or caveats: this was observed on this Windows vault with the current Node updater; other tools may tolerate BOMs differently.
- Re-check trigger: re-check if the updater's frontmatter parser is replaced with a library that fully normalizes input before matching.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-05-03 1123 - graph-wikilink-audit-cleanup]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 2330 - learned-index-updates-are-incremental.md`
- Related files or references: `Scripts/update-knowledge-base.mjs`, `AGENTS.md`, `CLAUDE.md`

## Sources
- Local full-rebuild verification on 2026-05-03.
