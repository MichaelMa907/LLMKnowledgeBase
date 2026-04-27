---
note_type: learned
title: "OmniObject3D Subset Provenance"
learn_id: "2026-04-21-1940-omniobject3d-subset-provenance"
summary: "The local 3Dor2D subset was built from official OmniObject3D OpenXLab raw-scan and 24-view render archives for bread, biscuit, and box."
scope: "project"
global: false
importance: 0.86
machine_id: ""
project_note: "Projects/3dor2d/3dor2d.md"
project_slug: "3dor2d"
commit_note: "Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim.md"
category: "data-provenance"
source: "verification"
confidence: 0.98
created: "2026-04-21 19:40"
last_updated: "2026-04-21 19:40"
status: "active"
tags:
  - learned
---

# OmniObject3D Subset Provenance

## Scope
- Applies at: `Projects/3dor2d`
- Why this scope is correct: this fact is specific to how the `3Dor2D` repo dataset was assembled.
- Promotion or demotion notes: do not promote globally unless another project reuses the same subset-building procedure directly.

## Truth
- What is true: the local dataset under `C:\Users\micha\Projects\3Dor2D\Dataset` was assembled from official `OmniObject3D` archives, not by rendering meshes inside this repo. The 3D assets came from `OpenXLab` paths under `raw/raw_scans/<category>.tar.gz`, and the 2D assets came from the official 24-view branch `raw/blender_renders_24_views/img/<category>.tar.gz`.
- Why it matters: this answers the provenance question for the paired 2D and 3D data and keeps the fairness claim defensible because both modalities come from the same underlying scanned objects.
- When to reuse it: reuse this whenever a future agent needs to explain where the local `images/` and `mesh/` folders came from, or needs to reconstruct the subset-building workflow.

## Evidence
- How this was learned: older Codex rollout logs from 2026-04-19 show OpenXLab category downloads for `bread`, `biscuit`, and `box` from `raw/raw_scans/*.tar.gz`; the same session also verified an official `blender_renders_24_views` branch and concluded that the final subset kept the official 24 rendered views plus `Scan.obj`, `Scan.mtl`, and `Scan.jpg` for the exact same objects.
- Limits or caveats: the current repo stores a normalized folder layout `Dataset/<category>/<object_id>/{mesh,images}` rather than the original OmniObject3D archive layout.
- Re-check trigger: re-check if the dataset root is rebuilt, replaced, or expanded to new categories.

## Links
- Origin project: `Projects/3dor2d/3dor2d.md`
- Origin commit: `Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim.md`
- Related notes: none.
- Related files or references: `C:\Users\micha\Projects\3Dor2D\Dataset\selection_manifest.txt`, `C:\Users\micha\Projects\3Dor2D\Goal.md`

## Sources
- Local rollout `C:\Users\micha\.codex\sessions\2026\04\19\rollout-2026-04-19T17-47-04-019da7b6-2106-7c20-bd59-0d7b0772e1f1.jsonl`
- Official project page: `https://omniobject3d.github.io/`
- Official repository: `https://github.com/omniobject3d/OmniObject3D`
