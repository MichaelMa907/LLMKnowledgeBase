---
note_type: commit_thread
title: "Graph Wikilink Audit Cleanup"
commit_id: "2026-05-03-1123-graph-wikilink-audit-cleanup"
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
agent: "Codex"
session_id: "codex-20260503-1123"
started: "2026-05-03 11:23"
last_updated: "2026-05-03 11:27"
status: "open"
prompt_count: 1
merge_review_status: "not_needed"
tags:
  - commit
---

# Graph Wikilink Audit Cleanup

## Session Context
- Project: [[Projects/llm-knowledge-base-system/llm-knowledge-base-system]]
- Why this commit exists: Michael reported that the Obsidian graph still had orphaned project-looking nodes and commit-to-commit-looking edges even after the earlier bare-wikilink fix.
- Scope for this session: tighten the graph-link policy, clean existing live wiki links, add an audit command, refresh generated indexes, and record why the bad graph happened.

## Merge Review
- Explicit continue from user: yes, the user explicitly said this is a continuation of the LLM knowledgebase.
- Overlap suspected: no; this directly changes the knowledge-base-system project.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-05-03 11:23
- User request: identify why the Obsidian graph still had orphan projects and commit-to-commit-looking links, fix the bad link, and add instructions so it does not happen again.
- Action: updated `AGENTS.md`, `CLAUDE.md`, and templates so project notes no longer use live commit-thread wiki links; commit notes may link only the parent project; learned notes may link only one origin commit; richer provenance stays as plain paths. Added `Scripts/audit-wikilinks.mjs`, converted existing project-note commit links and extra learned/commit links to plain paths, created the missing `Projects/temp-artifact-location-preference/MichaelsNotes/` folder while touching that legacy project, removed UTF-8 BOMs introduced by the PowerShell mechanical rewrite, made `Scripts/update-knowledge-base.mjs` tolerate a leading BOM, and ran a full index rebuild.
- Reason: Obsidian was not malfunctioning; the vault was emitting too many real `[[...]]` edges. Project notes were linking every commit thread, and some learned/history notes linked extra commits or projects, so the graph displayed those informational references as structural edges.
- Commands / tools: `rg`, `Get-Content`, PowerShell mechanical link conversion, `apply_patch`, `node Scripts/audit-wikilinks.mjs`, `node Scripts/update-knowledge-base.mjs --full`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Templates/Commit.md`, `Templates/Learned.md`, `Scripts/audit-wikilinks.mjs`, `Scripts/update-knowledge-base.mjs`, project notes, learned notes with extra provenance links, and this commit thread.
- Scope impact: cross-vault graph-link invariant; future agents should audit live wiki links after graph-rule changes.
- Outcome: the wiki-link audit passed after the full rebuild. The regenerated active/inactive project lists now include project notes from a clean full scan, including the previously missing `computer-performance-settings-check` project.
- Follow-up impact: future graph-shaping changes should run `node Scripts/audit-wikilinks.mjs`; agents should avoid Windows PowerShell `Set-Content -Encoding utf8` for frontmatter files because it can add a BOM that breaks the current Node frontmatter parser.

## Scope Notes
- Global notes created or updated:
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
  `Projects/llm-knowledge-base-system/Learned/2026-05-03 1128 - frontmatter-files-must-avoid-bom.md`
- Project notes created or updated:
  `AGENTS.md`
  `CLAUDE.md`
  `Templates/Project.md`
  `Templates/Commit.md`
  `Templates/Learned.md`
  `Scripts/audit-wikilinks.mjs`
  `Scripts/update-knowledge-base.mjs`
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`

## Handoff / Closeout
- Current state: graph-link cleanup is implemented, generated indexes have been rebuilt, and `node Scripts/audit-wikilinks.mjs` passes.
- Open issues: Obsidian may need a graph refresh/reindex to drop edges that came from old file contents.
- Suggested next prompt: inspect the refreshed Obsidian graph if any unexpected edge remains.
