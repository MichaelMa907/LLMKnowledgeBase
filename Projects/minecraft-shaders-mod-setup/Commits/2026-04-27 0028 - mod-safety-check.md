---
note_type: commit_thread
title: "Mod Safety Check"
commit_id: "2026-04-27-0028-mod-safety-check"
project_note: "Projects/minecraft-shaders-mod-setup/minecraft-shaders-mod-setup.md"
project_slug: "minecraft-shaders-mod-setup"
agent: "Codex"
session_id: "codex-minecraft-shaders-mod-setup-20260427-0028"
started: "2026-04-27 00:28"
last_updated: "2026-04-27 00:28"
status: "open"
prompt_count: 1
merge_review_status: "not_needed"
tags:
  - commit
---

# Mod Safety Check

## Session Context
- Project: [[Projects/minecraft-shaders-mod-setup/minecraft-shaders-mod-setup]]
- Why this commit exists: Re-check from current primary sources whether `ImmediatelyFast`, `ModernFix`, and `Noisium`-family mods are still supported, safe, and useful for the user's Fabric `1.21.1` shader setup.
- Scope for this session: Source verification only, with no local client changes.

## Merge Review
- Explicit continue from user: Yes.
- Overlap suspected: No.
- User merge decision: Not needed.

## Prompt Log
### Prompt 01 - 2026-04-27 00:28
- User request: "it looks like noisium and modernfix are no longer supported and only their fork version are. also looks like they are not that popular. search online to really make sure these three are safe and useful to download"
- Action: Re-read the local instructions, reopened the Minecraft project note, and checked current Modrinth and GitHub sources for official versions, maintenance status, and compatibility signals.
- Reason: The user asked for a source-backed re-evaluation focused on current support status and practical usefulness.
- Commands / tools: `Get-Content`, `Get-Date`, web search.
- Files / notes touched: `Projects/minecraft-shaders-mod-setup/minecraft-shaders-mod-setup.md`.
- Scope impact: Project note updated with a new session and refreshed current-state summary.
- Outcome: Confirmed `ImmediatelyFast` is clearly active, `ModernFix` is still active on the original project for Fabric `1.21.1`, and `Noisium` is the one where the maintained fork now matters. Also confirmed that popularity is not a concern for `ImmediatelyFast` or `ModernFix`, while `Noisium`-family mods are more niche and situational.
- Follow-up impact: Recommend `ImmediatelyFast` and `ModernFix` as strong additions; treat a maintained `Noisium` fork as optional and mainly useful for chunk generation, exploration, and `Distant Horizons` LOD generation.

## Scope Notes
- Global notes created or updated:
- Machine notes created or updated:
- Project notes created or updated: `Projects/minecraft-shaders-mod-setup/minecraft-shaders-mod-setup.md`

## Handoff / Closeout
- Current state: The best next recommendations are narrower than before: `ImmediatelyFast` and `ModernFix` look clearly worthwhile; `Noisium` should only be added if the user wants its specific worldgen benefits.
- Open issues: Exact shader pack, texture pack resolution, and Java/RAM settings are still unknown.
- Suggested next prompt: "give me the exact safest mods to add for my 1.21.1 Fabric setup"
