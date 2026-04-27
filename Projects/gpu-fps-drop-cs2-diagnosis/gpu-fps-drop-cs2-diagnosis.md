---
note_type: project
title: "CS2 GPU FPS Drop Diagnosis"
project_id: "2026-04-24-gpu-fps-drop-cs2-diagnosis"
project_slug: "gpu-fps-drop-cs2-diagnosis"
project_type: "task"
created: "2026-04-24 21:56"
last_active: "2026-04-24 22:00"
last_session: "2026-04-24 22:00"
resolved: false
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 3
project_folder: "Projects/gpu-fps-drop-cs2-diagnosis/"
learned_folder: "Projects/gpu-fps-drop-cs2-diagnosis/Learned/"
current_commit_thread: "Projects/gpu-fps-drop-cs2-diagnosis/Commits/2026-04-24 2156 - initial-diagnosis.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Diagnose a sudden CS2 FPS drop on Michael's laptop by checking GPU routing, driver state, power state, and local game config."
reuse_when: "Reuse when diagnosing this same April 24, 2026 CS2 performance regression on this machine."
do_not_merge_with: "Separate future unrelated game-performance or driver-cleanup tasks unless the user explicitly continues this diagnosis."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
  - gaming
  - gpu
  - cs2
---

# CS2 GPU FPS Drop Diagnosis

## Overview
- Canonical objective: Determine why CS2 dropped from roughly 250 FPS to roughly 90 FPS on `MICHAEL-ROG`.
- Why this project exists: The user reported a sudden gaming performance drop and asked whether the driver was the cause.
- Current owner agent: Codex

## Matching
- Scope summary: Local troubleshooting of CS2, NVIDIA GPU use, Windows/G-Helper power state, and possible frame caps on this laptop.
- Reuse this project when: Continuing this same diagnosis session or applying the same findings to restore prior CS2 performance.
- Do not merge with: Generic hardware tuning or unrelated knowledge-base maintenance.
- Merge candidates to review with the user: None.
- Merge decision status: Not needed.

## Goals
- Verify whether CS2 is running on the dGPU.
- Check whether thermals, power mode, or in-game limits explain the drop.
- Narrow likely cause before suggesting disruptive steps like driver reinstall.

## Problems
- `powercfg` reports the base Windows scheme as `Balanced`, which can be misleading versus the live UI mode.
- GPU utilization and power draw look low for a severe FPS drop.
- CPU frequency looked low during gameplay.

## Constraints
- Avoid changing user settings without an explicit request.
- Use local evidence first.

## Success Criteria
- Identify the most likely cause category with concrete evidence.
- Give the user the shortest high-value checks to restore performance.

## Current State
- Stable state right now: CS2 is running on the NVIDIA RTX 5070 Ti Laptop GPU with driver `576.65`; temperatures look normal; in-game `fps_max` is `400`, `battery_saver` is `false`, and `mat_vsync` is `0`.
- What changed this session: Verified G-Helper is set to `Turbo+` with `dGPU exclusive` / `Ultimate`; found `cs2_video.txt` indicates a non-exclusive fullscreen state and observed low GPU power plus low reported CPU frequency under load; confirmed no benchmark utilities are currently installed locally.
- Remaining risk: The remaining likely causes are a presentation-mode issue, a NVIDIA-side frame cap such as Whisper Mode / Max Frame Rate, or reduced system power from charger / power-delivery behavior.

## Resolution
- Current resolution state: Unresolved but narrowed.
- Why this is resolved or unresolved: The root cause is not proven yet, but a broken driver is no longer the leading explanation.
- Reopen when: More local verification is needed or the user wants settings changed.

## Next Steps
- Confirm whether the laptop is on the full ASUS barrel charger rather than USB-C PD or a low-watt dock.
- In CS2, switch to exclusive fullscreen, apply, and restart the game.
- Check NVIDIA App / GeForce Experience for Whisper Mode or Max Frame Rate on CS2.
- Run one GPU benchmark and one CPU benchmark to determine whether the issue is CS2-specific or system-wide.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-24 21:56 | 2026-04-24 21:56 | Codex | `codex-gpu-fps-drop-cs2-20260424-2156` | [[Projects/gpu-fps-drop-cs2-diagnosis/Commits/2026-04-24 2156 - initial-diagnosis]] | 2 | open | Verified dGPU routing and narrowed likely cause away from a bad driver |

## Progress
### Session 2026-04-24 - Codex - codex-gpu-fps-drop-cs2-20260424-2156
- [21:56] Opened this project and started [[Projects/gpu-fps-drop-cs2-diagnosis/Commits/2026-04-24 2156 - initial-diagnosis]].
- [21:56] Verified the game is using the RTX 5070 Ti Laptop GPU on driver `576.65`.
- [21:56] Verified G-Helper shows `Turbo+`, `dGPU exclusive`, `Ultimate`, and Windows UI power mode `Best performance`.
- [21:56] Found no in-game `fps_max` or VSync cap; remaining suspects are presentation mode, NVIDIA-side frame cap, or charger/power-delivery limits.
- [22:00] Confirmed no common local benchmark utilities are installed; next step is to use quick synthetic GPU and CPU tests to isolate CS2 from the wider system.

## Commit Threads
- [[Projects/gpu-fps-drop-cs2-diagnosis/Commits/2026-04-24 2156 - initial-diagnosis]] - open - 2026-04-24 21:56

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/gpu-fps-drop-cs2-diagnosis/learnedIndex.md`
