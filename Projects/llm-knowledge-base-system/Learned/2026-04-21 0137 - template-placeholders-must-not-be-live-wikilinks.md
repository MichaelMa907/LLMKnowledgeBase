---
note_type: learned
title: "Template Placeholders Must Not Be Live Wikilinks"
learn_id: "2026-04-21-0137-template-placeholders-must-not-be-live-wikilinks"
summary: "Template files must keep placeholder link syntax in backticks or plain text so Obsidian does not create phantom graph nodes from template examples."
scope: "global"
global: true
importance: 0.92
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures.md"
category: "workflow"
source: "verification"
confidence: 1.00
created: "2026-04-21 01:37"
last_updated: "2026-04-21 01:37"
status: "active"
tags:
  - learned
---

# Template Placeholders Must Not Be Live Wikilinks

## Scope
- Applies at: global
- Why this scope is correct: this is a shared vault-authoring rule that affects every agent editing template files.
- Promotion or demotion notes: keep global unless the vault stops using Obsidian-style wiki links entirely.

## Truth
- What is true: template files must not contain live placeholder wiki links such as `[[Projects/<project-slug>/<project-slug>]]`; keep placeholder link syntax in backticks or plain text inside templates, and only use live wiki links in instantiated real notes.
- Why it matters: Obsidian treats placeholder wiki links in template files as real graph edges and phantom note targets, which pollutes the graph with nonexistent nodes.
- When to reuse it: reuse whenever editing `Templates/*.md` or any other instructional note that needs to show wiki-link syntax without creating real graph links.

## Evidence
- How this was learned: the Obsidian graph showed nonexistent nodes created from template placeholder links like `<project-slug>` and `<commit-slug>`.
- Limits or caveats: real instantiated project, commit, and learned notes should still use live structural wiki links where the graph is meant to show them.
- Re-check trigger: re-check if new phantom graph nodes appear from another instructional or template file that contains placeholder wiki-link syntax.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 0031 - workflow-projects-for-reusable-procedures]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Templates/Commit.md`

## Sources
- Local vault inspection on 2026-04-21 plus user-provided graph screenshots.
