---
note_type: learned
title: "Graph View Uses Structural Links"
learn_id: "2026-04-21-0015-graph-view-uses-structural-links"
summary: "Use wiki links for active/inactive project hubs plus project-to-commit and commit-to-learned structure; keep richer references as plain text."
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
last_updated: "2026-04-21 00:15"
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
- What is true: wiki links should primarily encode the simple structural graph `activeProjects|inactiveProjects -> project -> commit -> learned`, while richer relationships should stay as plain text paths, summaries, or non-linked references.
- Why it matters: this keeps the Obsidian graph readable for the user while preserving detailed context for agents inside the note bodies.
- When to reuse it: reuse when creating or editing project notes, commit notes, learned notes, and generated indexes.

## Evidence
- How this was learned: the user explicitly asked for projects in the middle, commits attached to their project, and learned notes attached to their relevant commit.
- Limits or caveats: some duplicate structural wiki links may still appear inside the same note, but they should point only along the simple chain instead of introducing extra cross-note hubs.
- Re-check trigger: re-check if the user later wants the graph to show more complex semantic relationships.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0000 - session-start-retrieval-is-targeted.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Templates/Project.md`, `Templates/Commit.md`, `Templates/Learned.md`

## Sources
- User direction from the vault-architecture session on 2026-04-21.
