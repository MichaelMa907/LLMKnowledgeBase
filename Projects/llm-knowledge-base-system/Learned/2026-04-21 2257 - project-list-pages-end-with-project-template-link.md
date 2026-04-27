---
note_type: learned
title: "Project List Pages End With Project Template Link"
learn_id: "2026-04-21-2257-project-list-pages-end-with-project-template-link"
summary: "The generated `activeProjects.md` and `inactiveProjects.md` pages should end with `[[Templates/Project|Project]]` so both graph hubs connect to the shared project-template node."
scope: "global"
global: true
importance: 0.88
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders.md"
category: "workflow"
source: "user"
confidence: 1.00
created: "2026-04-21 22:57"
last_updated: "2026-04-21 22:57"
status: "active"
tags:
  - learned
---

# Project List Pages End With Project Template Link

## Scope
- Applies at: global
- Why this scope is correct: this is a shared graph and generated-view rule that affects the two top-level project-list hubs for the whole vault.
- Promotion or demotion notes: keep global unless the user changes how project-list hubs should connect in the Obsidian graph.

## Truth
- What is true: `activeProjects.md` and `inactiveProjects.md` should both end with `[[Templates/Project|Project]]` so each generated list hub connects to the shared project-template node in the graph.
- Why it matters: this gives the graph a clearer common anchor for project-list pages and preserves the same footer behavior across regenerations.
- When to reuse it: reuse whenever editing the project-list generator, graph-link policy, or the layout of the two top-level project-list pages.

## Evidence
- How this was learned: the user manually added the link to `activeProjects.md`, confirmed that the real target is `Templates/Project`, and then requested that both active and inactive project lists include the same footer from now on.
- Limits or caveats: the footer should be generated, not hand-edited, because `activeProjects.md` and `inactiveProjects.md` are regenerated files.
- Re-check trigger: re-check if the user later changes the desired graph hub structure or wants a different shared footer target.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-21 2105 - michaelsnotes-user-owned-project-folders]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0015 - graph-view-uses-structural-links.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`, `Scripts/update-knowledge-base.mjs`, `activeProjects.md`, `inactiveProjects.md`, `Templates/Project.md`

## Sources
- User instruction on 2026-04-21 after manually adding the footer link to `activeProjects.md`.
