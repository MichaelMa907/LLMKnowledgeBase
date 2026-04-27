---
note_type: project
title: "3Dor2D"
project_id: "2026-04-21-3dor2d"
project_slug: "3dor2d"
project_type: "task"
created: "2026-04-21 19:32"
last_active: "2026-04-21 19:57"
last_session: "2026-04-21 19:57"
resolved: false
status: "active"
sessions_count: 3
commit_threads_count: 3
total_prompt_entries: 8
project_folder: "Projects/3dor2d/"
learned_folder: "Projects/3dor2d/Learned/"
current_commit_thread: "Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Compare 2D and 3D object recognition fairly using the same underlying objects and matched information content."
reuse_when: "Reuse this project when working on the 3Dor2D repo or deciding how to structure a fair same-data 2D-vs-3D object recognition experiment."
do_not_merge_with: "Do not merge with unrelated dataset surveys or generic computer vision research notes that are not specific to this repo and experiment."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# 3Dor2D

## Overview
- Canonical objective: determine whether object recognition is more accurate in 3D or 2D when both methods receive comparable information from the same objects.
- Why this project exists: the repo is being set up to run a fair comparison where one 3D asset is treated as comparable to multiple 2D views from that same object.
- Current owner agent: Codex

## Matching
- Scope summary: fair 2D-vs-3D object recognition experiment using matched object-level data.
- Reuse this project when: the work is about the 3Dor2D repo, its dataset choice, or the eventual paired evaluation setup.
- Do not merge with: standalone notes about 3D datasets that are not part of the 3Dor2D experiment.
- Merge candidates to review with the user: none.
- Merge decision status: not needed.

## Goals
- Use the same underlying objects for both the 2D and 3D sides of the comparison.
- Keep the data budget comparable across modalities.
- Build a dataset and protocol that let model accuracy differences come from representation choice rather than from mismatched supervision.

## Problems
- A 2D-vs-3D comparison is easy to bias if the modalities come from different datasets or if one side has more information.
- Early repo state does not yet document the training pipeline, split strategy, or evaluation protocol.

## Constraints
- Use paired data from the same objects where possible.
- Preserve both the mesh assets and the corresponding multi-view images.
- Keep the project in the knowledge base as a separate new project.

## Success Criteria
- The dataset choice supports a fair object-level comparison between 2D and 3D.
- The data source and view-generation story are explicit and reproducible.
- The eventual experiment can report accuracy under a clearly matched data budget.

## Current State
- Stable state right now: the repo contains a curated `OmniObject3D` subset with categories `bread`, `biscuit`, and `box`, 80 objects per category, 24 RGB views per object, and one mesh asset triplet per object. The project goal is now explicitly object recognition, not segmentation. The written repo notes currently focus on the goal and dataset selection rationale; no model-training or evaluation code is present yet.
- What changed this session: reviewed the repo, confirmed the chosen dataset and subset structure from the manifest, verified that the stored 2D views are official OmniObject3D multi-view renders paired with per-view camera transforms, traced the original OpenXLab download paths from older Codex rollout logs, backfilled the missing historical commit notes for the dataset-acquisition path, and added a project-scoped rebuild procedure note that makes the dataset assembly reproducible.
- Remaining risk: the experiment design is still missing explicit train/validation/test splits, a formal data-budget definition, and the actual 2D and 3D baselines.

## Resolution
- Current resolution state: unresolved.
- Why this is resolved or unresolved: the dataset curation step is in place, but the comparison protocol and models are not implemented yet.
- Reopen when: continue into split design, model selection, rendering policy, or benchmarking.

## Next Steps
- Define the comparison task precisely within recognition: classification only, or a broader recognition benchmark that may later include retrieval or open-set recognition.
- Write down the exact fairness rule for equal information budget between a mesh and a set of views.
- Create train/validation/test splits for the 240 selected objects.
- Choose initial 2D and 3D baselines and evaluation metrics.
- Decide whether the exact OpenXLab rebuild procedure should also live in repo-facing documentation instead of only in the knowledge base.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-19 17:49 | 2026-04-19 18:19 | Codex | `019da7b6-2106-7c20-bd59-0d7b0772e1f1` | [[Projects/3dor2d/Commits/2026-04-19 1749 - omniobject3d-source-and-selection]] | 3 | closed | Reconstructed the original session that chose OmniObject3D, verified textured meshes under `raw_scans`, and fixed the subset constraints that led to `bread`, `biscuit`, and `box` |
| 2026-04-19 20:26 | 2026-04-19 20:45 | Codex | `019da848-7d0e-71c0-97bb-625ab08ac20f` | [[Projects/3dor2d/Commits/2026-04-19 2026 - subset-build-runtime-check]] | 1 | closed | Reconstructed the runtime-check session that explained the long OpenXLab download and extraction job behind the final dataset |
| 2026-04-21 19:32 | 2026-04-21 19:57 | Codex | `2026-04-21-3dor2d-initial-review` | [[Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim]] | 4 | open | Skimmed the new repo, corrected the benchmark goal to recognition, traced the OmniObject3D provenance of the paired 2D views, and backfilled the historical acquisition procedure |

## Progress
### Session 2026-04-19 - Codex - 019da7b6-2106-7c20-bd59-0d7b0772e1f1
- [17:49] Identified `OmniObject3D` as the upstream source and recorded the official project page, GitHub repository, OpenXLab host, and partial-download CLI flow.
- [17:55] Verified that the 3D branch should come from `raw_scans` because it contains `Scan.obj`, `Scan.mtl`, and `Scan.jpg` for the full textured mesh.
- [18:19] Translated the user's fairness requirement into an exact subset rule: three similar categories, `80` exact same-object pairs per class, and a fixed official view budget for the 2D side.
- [18:51] Narrowed the final subset to `bread`, `biscuit`, and `box` after checking which categories in the official `24`-view branch actually met the `80`-object floor.

### Session 2026-04-19 - Codex - 019da848-7d0e-71c0-97bb-625ab08ac20f
- [20:45] Preserved the user check-in explaining that the long runtime came from downloading and unpacking large OpenXLab category archives, not from the small final count of `5760` PNGs alone.

### Session 2026-04-21 - Codex - 2026-04-21-3dor2d-initial-review
- [19:32] Opened the new 3Dor2D project, reviewed the top-level notes, and confirmed the repo is currently dataset-centric rather than code-centric.
- [19:32] Verified that the selected data is a curated `OmniObject3D` subset with 3 categories, 80 objects per category, official 24-view images per object, paired meshes, and per-view camera transforms.
- [19:40] Corrected the project goal from segmentation to recognition and traced the exact provenance of the local subset to the official OpenXLab `raw/raw_scans/<category>.tar.gz` and `raw/blender_renders_24_views/img/<category>.tar.gz` archives for `bread`, `biscuit`, and `box`.
- [19:57] Backfilled the missing 2026-04-19 project history into reconstructed commit notes and added a durable rebuild procedure note with the exact OpenXLab archive paths, staging directory, selection rule, and verification steps.

## Commit Threads
- [[Projects/3dor2d/Commits/2026-04-19 1749 - omniobject3d-source-and-selection]] - closed - 2026-04-19 17:49
- [[Projects/3dor2d/Commits/2026-04-19 2026 - subset-build-runtime-check]] - closed - 2026-04-19 20:26
- [[Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim]] - open - 2026-04-21 19:32

## Scope Notes
- Global notes that affect this project: none.
- Machine notes that affect this project: none.
- Project-scoped learned notes: `Projects/3dor2d/Learned/2026-04-21 1940 - omniobject3d-subset-provenance.md`, `Projects/3dor2d/Learned/2026-04-21 1957 - omniobject3d-subset-rebuild-procedure.md`
- Learned notes stored in this project: `Projects/3dor2d/Learned/2026-04-21 1940 - omniobject3d-subset-provenance.md`, `Projects/3dor2d/Learned/2026-04-21 1957 - omniobject3d-subset-rebuild-procedure.md`
- Generated learned view: `Projects/3dor2d/learnedIndex.md`

## References
- `C:\Users\micha\Projects\3Dor2D\Goal.md`
- `C:\Users\micha\Projects\3Dor2D\datasets.md`
- `C:\Users\micha\Projects\3Dor2D\Dataset\selection_manifest.txt`
- `Projects/3dor2d/Learned/2026-04-21 1940 - omniobject3d-subset-provenance.md`
- `Projects/3dor2d/Learned/2026-04-21 1957 - omniobject3d-subset-rebuild-procedure.md`
