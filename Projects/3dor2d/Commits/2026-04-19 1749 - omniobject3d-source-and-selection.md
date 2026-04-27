---
note_type: commit_thread
title: "OmniObject3D Source And Selection"
commit_id: "2026-04-19-1749-omniobject3d-source-and-selection"
project_note: "Projects/3dor2d/3dor2d.md"
project_slug: "3dor2d"
agent: "Codex"
session_id: "019da7b6-2106-7c20-bd59-0d7b0772e1f1"
started: "2026-04-19 17:49"
last_updated: "2026-04-19 18:51"
status: "closed"
prompt_count: 3
merge_review_status: "not_needed"
tags:
  - commit
---

# OmniObject3D Source And Selection

## Session Context
- Project: [[Projects/3dor2d/3dor2d]]
- Why this commit exists: this note was reconstructed from the 2026-04-19 rollout logs to preserve how the dataset source was chosen and how the subset constraints were translated into a concrete acquisition plan.
- Scope for this session: identify the official OmniObject3D source, confirm that textured meshes exist, and choose a same-object 2D-plus-3D subset that satisfies the user's `240 = 80 x 3` requirement.

## Merge Review
- Explicit continue from user: yes, this was part of the same `3Dor2D` project history.
- Overlap suspected: none beyond the same project.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-19 17:49
- User request: "i wanna use omniobject 3D OmniObject3D, where do i download actual dataset if i wanna run 2D vs 3D object classification"
- Action: identified the official source stack for `OmniObject3D`: project page, GitHub repository, OpenDataLab/OpenXLab host, and Google Drive mirror. Documented the practical CLI flow around `openxlab login`, `openxlab dataset ls`, and partial archive downloads instead of a full dataset dump.
- Reason: the user wanted the authoritative source of the data and a practical way to pull only the pieces relevant to a 2D-vs-3D recognition comparison.
- Commands / tools: official source inspection, repo structure review, and rollout commentary summarizing a partial-download workflow.
- Files / notes touched: no durable local project files in this session phase.
- Scope impact: established the official upstream source for later dataset reconstruction.
- Outcome: the project committed to `omniobject3d/OmniObject3D-New` on OpenXLab rather than an ad hoc rendering pipeline or a mixed-source dataset.
- Follow-up impact: enabled the next step of deciding which OmniObject3D branches to use for the 2D and 3D sides.

### Prompt 02 - 2026-04-19 17:55
- User request: "i dont want just pointcloud, i want actual mesh and color and all that. what are all the categories in this dataset"
- Action: verified from the official dataset structure that the mesh assets live under `raw_scans/<category>/<object_id>/Scan/` as `Scan.obj`, `Scan.mtl`, and `Scan.jpg`. Confirmed that `OmniObject3D` includes full textured meshes and not just point clouds. Investigated category discovery through the public host and CLI paths, including direct API checks and the official CLI path convention.
- Reason: the user explicitly rejected a point-cloud-only representation and wanted the 3D side to preserve geometry plus texture.
- Commands / tools: OpenDataLab/OpenXLab tree probing, official repository structure inspection, and CLI path reasoning around `/raw/raw_scans`.
- Files / notes touched: none in the current repo; this phase was source discovery.
- Scope impact: changed the intended 3D branch from point clouds to textured meshes under `raw_scans`.
- Outcome: the acquisition plan became "3D from `raw_scans`, 2D from official rendered views tied to the same object IDs."
- Follow-up impact: made it possible to define a fair same-object subset instead of a looser category-level comparison.

### Prompt 03 - 2026-04-19 18:19
- User request: "okay so i want like 240 objects, 80 from each category. these 3 categories should be pretty similar, easy to confuse, because im training ai on it. then, for the same categories, i want you to download pictures for the exact objects. we are doing a fair comparison, so this is fair. if theres is like 200 images for each object, then decide how many you want/from which angles that will make the fairest comparison. download evreyhting to C:\\Users\\micha\\Projects\\3Dor2D\\Dataset. split them by the 3 categories, but you do not need to do any processing or put them into train and test splits. i will do that myself. go"
- Action: translated the request into a strict selection rule: three confusable categories, `80` exact shared objects per category, same physical object across both modalities, and a fixed number of official views per object. Tested capacity against the official rendered branch and discovered that some intuitive candidates such as `apple` failed the `80`-object floor. Continued metadata checks against the official `24`-view branch and found that only five categories satisfied the cutoff; from those, `bread`, `biscuit`, and `box` were the viable non-figurine trio.
- Reason: the user wanted a matched-information comparison, which required choosing categories deep enough in both the mesh and image branches, not just semantically similar categories in the abstract.
- Commands / tools: OpenXLab metadata checks, test archive inspection, and category-depth filtering against the official `24`-view branch.
- Files / notes touched: planned output root `C:\Users\micha\Projects\3Dor2D\Dataset`.
- Scope impact: fixed the final category trio and the exact object-count rule that the later download/build session had to satisfy.
- Outcome: `bread`, `biscuit`, and `box` became the chosen categories because they were confusable enough for recognition and compatible with the `80 x 3` requirement under the official paired data branches.
- Follow-up impact: the next acquisition step was to download the six category archives and assemble the normalized local dataset layout.

## Scope Notes
- Global notes created or updated: none.
- Machine notes created or updated: none.
- Project notes created or updated: historical reconstruction only; this note was backfilled later from rollout logs.

## Handoff / Closeout
- Current state: by the end of this session phase, the project had chosen `OmniObject3D`, committed to `raw_scans` for textured meshes, committed to official multi-view renders for the 2D side, and narrowed the subset to `bread`, `biscuit`, and `box` with `80` same-object pairs per class.
- Open issues: the actual archive downloads, extraction, and verification were still pending at this point.
- Suggested next prompt: materialize the six category archives from OpenXLab into `C:\Users\micha\Projects\3Dor2D\Dataset` and validate the final object counts.
