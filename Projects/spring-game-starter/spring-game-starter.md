---
note_type: project
title: "Spring Game Starter"
project_id: "2026-04-24-spring-game-starter"
project_slug: "spring-game-starter"
project_type: "task"
created: "2026-04-24 15:10"
last_active: "2026-04-24 15:26"
last_session: "2026-04-24 15:26"
resolved: false
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 5
project_folder: "Projects/spring-game-starter/"
learned_folder: "Projects/spring-game-starter/Learned/"
current_commit_thread: "Projects/spring-game-starter/Commits/2026-04-24 1510 - python-class-inheritance-questions.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Python and game-code questions for the Spring Game Starter workspace."
reuse_when: "The user is continuing work or asking follow-up questions for the Spring_Game_Starter repo."
do_not_merge_with: "Unrelated Python questions or separate game prototypes."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# Spring Game Starter

> Canonical note path: `Projects/spring-game-starter/spring-game-starter.md`
>
> This note is the stable current-state view of the project.
>
> Every real project folder must include a user-owned `MichaelsNotes/` directory alongside this note.
>
> Agents may read `MichaelsNotes/` when the user asks or when the agent judges it directly useful to the active task, but they must never write, modify, move, rename, or delete it unless the user explicitly asks for that exact change.
>
> If `project_type` is `workflow`, a future agent should be able to execute the workflow from this front page without replaying commit history.
>
> Keep placeholder link examples in backticks inside template files so Obsidian does not create phantom graph nodes from template text.
>
> Replace those backticked examples with bare real wiki links when instantiating an actual project note. Do not leave the backticks in place around live links.
>
> Use alongside `Templates/Commit.md` and `Templates/Learned.md`.

## Overview
- Canonical objective: Help with Python and game-code questions in the `Spring_Game_Starter` workspace.
- Why this project exists: The user asked how class inheritance behaves for a `Block(Sprite)` class and whether constructor requirements from `Sprite` still apply.
- Current owner agent: Codex

## Workflow
> Fill this section when `project_type` is `workflow`, or when the front page should teach a reusable procedure directly.

- Workflow role:
- When to use it:
- Preconditions:
- Expected result:
- Verification status:
- Known limits:
1. <canonical step 1>
2. <canonical step 2>
3. <canonical step 3>

## Matching
- Scope summary: Python and game-code questions for the Spring Game Starter workspace.
- Reuse this project when: The user continues working in `C:\Users\micha\Desktop\game design\Spring_Game_Starter`.
- Do not merge with: Unrelated Python questions or different game repos unless the user explicitly says to merge them.
- Merge candidates to review with the user:
- Merge decision status: none

## Goals
- Explain how inheritance and constructors behave for `Block(Sprite)`.
- Make `Block.show(width, height)` project world `x` and `y` to the 1280x720 Processing screen like the Desmos reference.

## Problems
- The user was unsure whether subclass instances get subclass methods and whether `Sprite` constructor arguments are still required.
- `Block.show(width, height)` was still a stub and needed to mirror the Desmos projection logic.

## Constraints
- The user requested changing only the `Block.show(width, height)` function in the repo code.

## Success Criteria
- Give a correct explanation of inherited methods and constructor behavior.
- Update only `Block.show(width, height)` so it draws the projected block like the Desmos example.

## Current State
- Stable state right now: `Block.show(width, height)` now projects a block onto the screen using the Desmos-style horizontal angle and distance scaling, drawing a centered outline rectangle in Processing.
- What changed this session: Clarified subclass inheritance and constructor behavior, then replaced the `Block.show(width, height)` stub in the repo with screen-space projection math derived from the Desmos graph state.
- Remaining risk: I could not run an automated syntax or runtime check because neither `python` nor `py` is available in PATH on this machine, and the exact visual result still depends on how `Block` instances are created and called in the sketch.

## Resolution
- Current resolution state: unresolved
- Why this is resolved or unresolved: The code question is still active in this session.
- Reopen when: The user continues with more Spring Game Starter questions.

## Next Steps
- Instantiate a `Block` in the sketch and call `block.show(width, height)` during `draw()` to verify the visual matches the Desmos placement you want.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-24 15:10 | 2026-04-24 15:26 | Codex | 20260424-1510-codex | [[Projects/spring-game-starter/Commits/2026-04-24 1510 - python-class-inheritance-questions]] | 5 | open | Answering inheritance questions and patching `Block.show(width, height)` |

## Progress
> Add one progress bullet after every prompt.
>
> In the current session subsection only, you may rewrite or remove bullets that were fully reversed later in the same session so this section reflects stable state rather than temporary churn.
>
> Do not rewrite prior-session subsections. If an older session was wrong, add a new correction entry instead.

### Session 2026-04-24 - Codex - 20260424-1510-codex
- [15:10] Opened this project and started [[Projects/spring-game-starter/Commits/2026-04-24 1510 - python-class-inheritance-questions]].
- [15:10] Explained that a `Block` instance gets methods defined on `Block` plus inherited behavior from `Sprite`.
- [15:10] Investigated the follow-up constructor question about whether `Block()` must still satisfy `Sprite.__init__`.
- [15:26] Read the Desmos graph state for `wgckoxwr0p` and extracted the screen-position and distance-scaling formulas from the public calculator state JSON.
- [15:26] Replaced the `Block.show(width, height)` stub with a Processing implementation that projects `self.x` and `self.y` to screen space and draws the block as an outline rectangle.

## Commit Threads
- [[Projects/spring-game-starter/Commits/2026-04-24 1510 - python-class-inheritance-questions]] - open - 2026-04-24 15:10

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/spring-game-starter/learnedIndex.md`

## References
- `Templates/Project.md`
- `Templates/Commit.md`
- `Templates/Learned.md`
