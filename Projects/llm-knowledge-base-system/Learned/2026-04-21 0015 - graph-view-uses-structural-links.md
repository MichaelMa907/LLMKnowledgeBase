---
note_type: learned
title: "Graph View Uses Structural Links"
learn_id: "2026-04-21-0015-graph-view-uses-structural-links"
summary: "Use live wiki links only for project-list hubs, commit-to-parent-project links, and one learned-note origin commit; keep richer references as plain text."
scope: "global"
global: true
importance: 0.93
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-21 00:15"
last_updated: "2026-05-03 11:23"
status: "active"
tags:
  - learned
---

# Graph View Uses Structural Links

## Scope
- Applies at: global
- Why this scope is correct: this is a shared authoring rule for how vault notes should expose graph links across all projects.
- Promotion or demotion notes: keep global unless the user later wants a denser graph again.

## Truth
- What is true: live wiki links should encode only the simple structural graph: generated project-list pages link project notes, commit notes link only their parent project, and learned notes link only one origin commit. Project notes must list commit threads as plain paths instead of live wiki links, and extra provenance such as origin projects, follow-up commits, related commits, and related projects must stay as plain text paths or non-linked references.
- Why it matters: Obsidian treats every live `[[...]]` occurrence as a graph edge. If project pages link every commit or learned notes link extra commits, the graph becomes a history/reference graph instead of the intended project structure.
- When to reuse it: reuse when creating or editing project notes, commit notes, learned notes, and generated indexes.

## Evidence
- How this was learned: the user explicitly asked for projects in the middle, commits attached to their project, and learned notes attached to their relevant commit; later graph inspection showed that project-note commit links and extra provenance links still created unintended graph edges.
- Limits or caveats: the graph is undirected, so a commit note linking its parent project is enough to attach the commit to the project. The project note does not need to link back to every commit for the graph to show the relationship.
- Re-check trigger: re-check if the user later wants the graph to show more complex semantic relationships.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Templates/Commit.md`, `Templates/Learned.md`, `Scripts/audit-wikilinks.mjs`, `Projects/llm-knowledge-base-system/Commits/2026-05-03 1123 - graph-wikilink-audit-cleanup.md`

## Sources
- User direction from the vault-architecture session on 2026-04-21.
