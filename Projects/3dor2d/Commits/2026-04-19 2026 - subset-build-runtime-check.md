---
note_type: commit_thread
title: "Subset Build Runtime Check"
commit_id: "2026-04-19-2026-subset-build-runtime-check"
project_note: "Projects/3dor2d/3dor2d.md"
project_slug: "3dor2d"
agent: "Codex"
session_id: "019da848-7d0e-71c0-97bb-625ab08ac20f"
started: "2026-04-19 20:26"
last_updated: "2026-04-19 20:46"
status: "closed"
prompt_count: 1
merge_review_status: "not_needed"
tags:
  - commit
---

# Subset Build Runtime Check

## Session Context
- Project: [[Projects/3dor2d/3dor2d]]
- Why this commit exists: this note was reconstructed from the separate user check-in that happened while the long OmniObject3D subset-build job was still running.
- Scope for this session: explain why the build was taking so long and preserve the evidence showing that the dataset was being pulled from large OpenXLab archives and then normalized into the current folder structure.

## Merge Review
- Explicit continue from user: yes, this was a follow-on question within the same project while the dataset build was underway.
- Overlap suspected: none beyond the same project.
- User merge decision: not needed.

## Prompt Log
### Prompt 01 - 2026-04-19 20:45
- User request: "why is the codex thing still running. i have 240 objects, with 24 pictures per object, its only 5.7k images no? why take so long"
- Action: inspected the still-running earlier rollout log and preserved the explanation for runtime. The log showed that the process was not just counting `5760` final PNGs. It was downloading six large category archives from OpenXLab, including `raw/raw_scans/{bread,biscuit,box}.tar.gz` and `raw/blender_renders_24_views/img/{bread,biscuit,box}.tar.gz`, then running a long Python extraction routine that intersected object IDs across the two branches, copied only the selected objects into `Dataset/<category>/<object_id>/{mesh,images}`, wrote `selection_manifest.txt`, verified every object, and removed staging directories.
- Reason: the user saw only the final intended image count, but the actual work included multi-gigabyte archive transfers plus a full extraction-and-filtering pass over the tarballs.
- Commands / tools: `Get-Content -Tail` over the earlier rollout log, inspection of the logged OpenXLab download commands and the Python extraction script, plus later verification output from the same long-running session.
- Files / notes touched: no repo data was edited directly in this check-in; this session documented the work happening in the earlier acquisition session.
- Scope impact: preserved why the dataset build runtime was dominated by archive downloads and extraction, not by the small final image count.
- Outcome: the runtime explanation is now explicit. The build process later completed with `bread=80`, `biscuit=80`, and `box=80`, zero invalid objects, and a cleaned dataset root containing only the three category folders plus `selection_manifest.txt`.
- Follow-up impact: future readers can distinguish between the compact final dataset and the much heavier acquisition pipeline that produced it.

## Scope Notes
- Global notes created or updated: none.
- Machine notes created or updated: none.
- Project notes created or updated: historical reconstruction only; this note was backfilled later from rollout logs.

## Handoff / Closeout
- Current state: this checkpoint explains the long runtime and links the final `Dataset` tree to the OpenXLab archive downloads and the subsequent extraction script.
- Open issues: none inside this historical checkpoint; the build completed successfully in the earlier long-running session.
- Suggested next prompt: record the exact category archive paths and extraction procedure in a durable project note so the dataset can be rebuilt later without replaying the raw rollout logs.
