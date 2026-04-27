---
note_type: commit_thread
title: "Bare Wikilinks In Real Notes"
commit_id: "2026-04-23-2247-bare-wikilinks-in-real-notes"
project_note: "Projects/ultralight-mouse/ultralight-mouse.md"
project_slug: "ultralight-mouse"
agent: "Codex"
session_id: "codex-20260423-2247"
started: "2026-04-23 22:47"
last_updated: "2026-04-23 23:02"
status: "open"
prompt_count: 2
merge_review_status: "not_needed"
tags:
  - commit
---

# Bare Wikilinks In Real Notes

## Session Context
- Project: [[Projects/ultralight-mouse/ultralight-mouse]]
- Why this commit exists: a real-world Obsidian graph failure inside the Ultralight Mouse notes exposed that the shared templates and protocol were not explicit enough about never wrapping live wiki links in code formatting inside instantiated notes.
- Scope for this session: fix the broken live Ultralight Mouse notes, tighten the shared instructions and templates, and keep the provenance of the lesson attached to the project where it was actually discovered.

## Merge Review
- Explicit continue from user: yes; the user explicitly identified this as a flaw surfaced by the current Ultralight Mouse notes and asked for the instruction files to be updated.
- Overlap suspected: yes, with the knowledge-base-system project because the protocol files needed changes, but the lesson itself was discovered inside Ultralight Mouse.
- User merge decision: keep the provenance attached to `Ultralight Mouse` rather than creating a separate project-origin graph edge in `llm-knowledge-base-system`.

## Prompt Log
### Prompt 01 - 2026-04-23 22:47
- User request: "when you made the commits, you wrote Project: `[[Projects/ultralight-mouse/ultralight-mouse]]` instead of Project: [[Projects/ultralight-mouse/ultralight-mouse]]. this made it so that it completely did not link within obsidians graph view. this is a fundamental flaw in the knowledge base itself, so instead of a global learned i think something needs to be updated within the instruction files"
- Action: audited the vault for code-formatted live wiki links, fixed the broken `Ultralight Mouse` commit and project-note links, updated `AGENTS.md` and `CLAUDE.md` with an explicit rule that instantiated notes must use bare wiki links, tightened the shared templates so they now say to strip template backticks when instantiating real notes, recorded the invariant as a new global learned note, and updated this project note.
- Reason: code-formatted `[[...]]` text is visible in Markdown but does not create a real Obsidian graph edge, so the protocol needed to state the difference between template placeholder syntax and live note syntax explicitly.
- Commands / tools: `rg`, `Get-Content`, `apply_patch`, and `node Scripts/update-knowledge-base.mjs --changed Projects/llm-knowledge-base-system --changed Projects/ultralight-mouse`.
- Files / notes touched: `AGENTS.md`, `CLAUDE.md`, `Templates/Commit.md`, `Templates/Project.md`, `Projects/ultralight-mouse/ultralight-mouse.md`, `Projects/ultralight-mouse/Commits/2026-04-23 2011 - initialize-prototype-two-project.md`, `Projects/ultralight-mouse/Commits/2026-04-23 2051 - install-project-into-knowledge-base.md`, `Projects/ultralight-mouse/Commits/2026-04-23 2154 - rename-project-and-set-next-step.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-23 2247 - real-notes-must-use-bare-wikilinks.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and this commit thread.
- Scope impact: adds a new vault-critical authoring invariant and repairs the first real notes that violated it.
- Outcome: the broken Obsidian graph links are repaired for the Ultralight Mouse notes, and future agents now have the rule in the always-read protocol plus the templates.
- Follow-up impact: any future note-instantiation automation should preserve this distinction explicitly so template placeholders remain inert while real notes emit bare wiki links.

### Prompt 02 - 2026-04-23 23:02
- User request: "yeah but that thing just got linked to two separate projects in obsidian graph. now idc how you want to give youself notes, in obsidian graph, i just want it to be linked to the project it came from. in this case, it will be the ultralight mosue project, that is where you learned this. that doesnt mean it cant get placed in global or be put in the instruction file, but i dont want it to connect to multiple projects. that will make the graph very messy"
- Action: Re-homed this commit thread and the global learned note from `llm-knowledge-base-system` into `Ultralight Mouse`, updated their provenance metadata, removed the extra session and learned-note references from the knowledge-base-system project note, and kept the instruction-file rule changes global without leaving the graph attribution split across two projects.
- Reason: The user wants graph provenance to reflect the project where the issue was actually discovered, even when the fix also updates shared protocol files.
- Commands / tools: `Get-Content`, `Move-Item`, `apply_patch`, and `node Scripts/update-knowledge-base.mjs --changed Projects/ultralight-mouse --changed Projects/llm-knowledge-base-system`.
- Files / notes touched: `Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes.md`, `Projects/ultralight-mouse/Learned/2026-04-23 2247 - real-notes-must-use-bare-wikilinks.md`, `Projects/ultralight-mouse/ultralight-mouse.md`, `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, `AGENTS.md`, `CLAUDE.md`, `Templates/Commit.md`, and `Templates/Project.md`.
- Scope impact: The graph provenance for this lesson now belongs only to `Ultralight Mouse`, while the operational rule still exists globally in the instruction files.
- Outcome: The extra cross-project graph edge was removed from the provenance notes, and future retrieval can still use the global rule without cluttering the project graph.
- Follow-up impact: Future global protocol fixes that are learned inside a project should keep their learned-note provenance attached to the project that surfaced them unless the user explicitly switches work into the knowledge-base-system project.

## Scope Notes
- Global notes created or updated:
  `Projects/ultralight-mouse/Learned/2026-04-23 2247 - real-notes-must-use-bare-wikilinks.md`
- Machine notes created or updated: none.
- Project notes created or updated:
  `Projects/ultralight-mouse/ultralight-mouse.md`
  `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
  `AGENTS.md`
  `CLAUDE.md`
  `Templates/Commit.md`
  `Templates/Project.md`

## Handoff / Closeout
- Current state: the shared protocol now distinguishes clearly between inert placeholder wiki-link syntax in templates and bare live wiki links in instantiated notes, the known broken Ultralight Mouse links are fixed, and the lesson's graph provenance now lives only under `Ultralight Mouse`.
- Open issues: any older project not caught by this audit could still contain code-formatted live wiki links, though the immediate known instances were repaired.
- Suggested next prompt: if you want, run a broader vault audit for any other live wiki links that are still wrapped in code formatting outside templates.
- Before closing this commit, update `Projects/ultralight-mouse/ultralight-mouse.md`, update `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`, and run `node Scripts/update-knowledge-base.mjs --changed Projects/ultralight-mouse --changed Projects/llm-knowledge-base-system`.
