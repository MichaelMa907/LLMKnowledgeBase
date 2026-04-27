---
note_type: project
title: "Minecraft Shaders Mod Setup"
project_id: "2026-04-26-minecraft-shaders-mod-setup"
project_slug: "minecraft-shaders-mod-setup"
project_type: "task"
created: "2026-04-26 23:30"
last_active: "2026-04-27 00:28"
last_session: "2026-04-27 00:28"
resolved: false
status: "active"
sessions_count: 2
commit_threads_count: 2
total_prompt_entries: 5
project_folder: "Projects/minecraft-shaders-mod-setup/"
learned_folder: "Projects/minecraft-shaders-mod-setup/Learned/"
current_commit_thread: "Projects/minecraft-shaders-mod-setup/Commits/2026-04-27 0028 - mod-safety-check.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Assess a Fabric Minecraft client setup for smooth shader-heavy play with many mods, texture packs, and Distant Horizons."
reuse_when: "Reuse when continuing this same Minecraft client optimization and mod-stack setup."
do_not_merge_with: "Separate unrelated PC gaming troubleshooting or future non-Minecraft modpack projects unless the user explicitly continues this setup."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
  - gaming
  - minecraft
  - mods
  - performance
---

# Minecraft Shaders Mod Setup

## Overview
- Canonical objective: Judge whether the current Fabric mod stack is enough for a smooth, fun, shader-heavy Minecraft setup.
- Why this project exists: The user wants strong performance while planning to add lots of shaders, texture packs, and mods.
- Current owner agent: Codex

## Matching
- Scope summary: Local advisory work for Minecraft client optimization, visual mods, and performance-risk tradeoffs.
- Reuse this project when: Continuing this same setup or refining the recommended optimization stack.
- Do not merge with: Unrelated launcher issues, Java installs, or non-Minecraft graphics tuning.
- Merge candidates to review with the user: None.
- Merge decision status: Not needed.

## Goals
- Determine whether the current mod list covers the core client optimization baseline.
- Call out weak spots for a shader-heavy, texture-pack-heavy setup.
- Give the user the shortest high-value next additions and settings advice.

## Problems
- The current stack covers the core baseline but not the full "lots of shaders and mods" case.
- `Distant Horizons` is not free performance; with shaders it can become one of the heaviest pieces of the setup.
- No evidence yet that memory settings, shader choice, or pack resolution are tuned.

## Constraints
- Base advice on the visible mod list only.
- Avoid pretending this guarantees performance without hardware details or in-game testing.

## Success Criteria
- Give the user a clear yes/no on whether optimization is effectively finished.
- Identify the most important remaining upgrades and risks.

## Current State
- Stable state right now: The client already has the main Fabric performance core: `Sodium`, `Lithium`, `FerriteCore`, `EntityCulling`, `Iris`, and supporting dependencies. Fresh source checks plus the user's Prism screenshot indicate the instance is likely on `1.21.11`, where `ImmediatelyFast` has an official Fabric build, `ModernFix` is represented in Prism by the maintained `ModernFix-mVUS` fork for Fabric minor-version support, and `NoisiumForked` is the maintained path for Noisium-style optimization.
- What changed this session: Created a follow-up session thread, verified current support status and version availability, then refined the recommendation using the user's Prism results so it matches the likely `1.21.11` instance instead of the older `1.21.1` case.
- Remaining risk: `Noisium`-style worldgen optimizers are more situational than render optimizers, and the biggest practical performance variable is still the `Distant Horizons` plus shader-pack combination rather than these three mods themselves.

## Resolution
- Current resolution state: Unresolved but clearly scoped.
- Why this is resolved or unresolved: The user has a solid baseline, but there are still meaningful optimization additions and tuning steps before calling it done.
- Reopen when: The user wants a recommended mod list, JVM settings, shader choices, or pack-specific tuning.

## Next Steps
- Add a few remaining performance mods that fit the user's exact Minecraft and Fabric version.
- Treat shader pack choice, render-distance settings, and texture-pack resolution as first-order performance decisions.
- Test with and without `Distant Horizons` enabled before assuming remaining FPS limits come from the rest of the mod stack.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-26 23:30 | 2026-04-26 23:35 | Codex | `codex-minecraft-shaders-mod-setup-20260426-2330` | [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-26 2330 - initial-assessment]] | 3 | open | Assessed the visible Fabric performance stack and checked compatibility of additional optimization mods |
| 2026-04-27 00:28 | 2026-04-27 00:28 | Codex | `codex-minecraft-shaders-mod-setup-20260427-0028` | [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-27 0028 - mod-safety-check]] | 1 | open | Re-checked current support and usefulness of ImmediatelyFast, ModernFix, and Noisium-family mods from current primary sources |

## Progress
### Session 2026-04-26 - Codex - codex-minecraft-shaders-mod-setup-20260426-2330
- [23:30] Opened this project and started [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-26 2330 - initial-assessment]].
- [23:30] Reviewed the visible mod list and confirmed the core Fabric optimization baseline is already present.
- [23:30] Identified the main gap: the stack is good, but not yet "done" for a heavy shaders plus texture packs plus many mods target.
- [23:35] Verified from current mod documentation that `ImmediatelyFast`, `Noisium`, and `ModernFix` are generally compatible performance mods for this Fabric setup, with the main caveat that shader and `Distant Horizons` behavior still depends on version and shader-pack support.

### Session 2026-04-27 - Codex - codex-minecraft-shaders-mod-setup-20260427-0028
- [00:28] Started [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-27 0028 - mod-safety-check]] for a fresh source-based recheck.
- [00:28] Confirmed `ImmediatelyFast` remains actively maintained for Fabric `1.21.1`.
- [00:28] Confirmed `ModernFix` does not require a fork for Fabric `1.21.1`; the original project still has recent `1.21.1` releases.
- [00:28] Confirmed the original `Noisium` is no longer the safest recommendation, and a maintained fork is the current path if you want that category of optimization.
- [00:28] Corrected the recommendation using the Prism screenshot: for the likely `1.21.11` instance, `ModernFix-mVUS` is the expected Fabric listing, while `ImmediatelyFast` and `NoisiumForked` also have matching `1.21.11` builds.

## Commit Threads
- [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-26 2330 - initial-assessment]] - open - 2026-04-26 23:30
- [[Projects/minecraft-shaders-mod-setup/Commits/2026-04-27 0028 - mod-safety-check]] - open - 2026-04-27 00:28

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/minecraft-shaders-mod-setup/learnedIndex.md`
