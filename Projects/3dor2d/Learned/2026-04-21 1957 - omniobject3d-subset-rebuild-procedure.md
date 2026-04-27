---
note_type: learned
title: "OmniObject3D Subset Rebuild Procedure"
learn_id: "2026-04-21-1957-omniobject3d-subset-rebuild-procedure"
summary: "Rebuild the current 3Dor2D dataset by downloading six specific OpenXLab category archives and extracting the first 80 shared object IDs per class into the normalized mesh/images layout."
scope: "project"
global: false
importance: 0.9
machine_id: ""
project_note: "Projects/3dor2d/3dor2d.md"
project_slug: "3dor2d"
commit_note: "Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim.md"
category: "workflow"
source: "verification"
confidence: 0.98
created: "2026-04-21 19:57"
last_updated: "2026-04-21 19:57"
status: "active"
tags:
  - learned
---

# OmniObject3D Subset Rebuild Procedure

## Scope
- Applies at: `Projects/3dor2d`
- Why this scope is correct: this is the exact rebuild procedure for the current `3Dor2D` subset and normalized folder layout.
- Promotion or demotion notes: do not promote globally unless another project intentionally wants this same `bread` / `biscuit` / `box` subset and local layout.

## Truth
- What is true: the current dataset was rebuilt from official OpenXLab category archives, not rendered locally. The process downloaded six category tarballs, intersected object IDs that existed in both the scan and image branches, kept the first `80` sorted shared objects per category, and copied the official files into `Dataset/<category>/<object_id>/mesh` and `Dataset/<category>/<object_id>/images`.
- Why it matters: this is the shortest path to reproducing exactly what is currently in `C:\Users\micha\Projects\3Dor2D\Dataset`.
- When to reuse it: reuse this whenever the subset needs to be rebuilt, audited, or explained to another reader.

## Procedure
1. Use the official OpenXLab repository `omniobject3d/OmniObject3D-New`.
2. Set `PYTHONIOENCODING=utf-8` before invoking the CLI on this Windows machine.
3. Use the local CLI at `C:\Users\micha\Packages\Python310-11\Scripts\openxlab.exe`.
4. Download these six archives into `C:\Users\micha\Projects\3Dor2D\Dataset\_stage\downloads`:

```powershell
$env:PYTHONIOENCODING='utf-8'
$openxlab = 'C:\Users\micha\Packages\Python310-11\Scripts\openxlab.exe'
$target = 'C:\Users\micha\Projects\3Dor2D\Dataset\_stage\downloads'
$paths = @(
  '/raw/raw_scans/bread.tar.gz',
  '/raw/raw_scans/biscuit.tar.gz',
  '/raw/raw_scans/box.tar.gz',
  '/raw/blender_renders_24_views/img/bread.tar.gz',
  '/raw/blender_renders_24_views/img/biscuit.tar.gz',
  '/raw/blender_renders_24_views/img/box.tar.gz'
)
foreach ($path in $paths) {
  & $openxlab dataset download --dataset-repo omniobject3d/OmniObject3D-New --source-path $path --target-path $target
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
```

5. Treat `C:\Users\micha\Projects\3Dor2D\Dataset\_stage\downloads\omniobject3d___OmniObject3D-New\raw` as the archive root.
6. For each category in `bread`, `biscuit`, and `box`, open both tarballs and compute the shared top-level object IDs:
   - scan tar: `raw_scans/<category>.tar.gz`
   - image tar: `blender_renders_24_views/img/<category>.tar.gz`
7. Sort the shared object IDs lexically and keep the first `80` IDs.
8. For each kept object:
   - copy `Scan.obj`, `Scan.mtl`, and `Scan.jpg` from `<object_id>/Scan/` into `Dataset/<category>/<object_id>/mesh/`
   - copy the full image branch for that object into `Dataset/<category>/<object_id>/images/`
9. Write `selection_manifest.txt` with the category list, the `80`-object rule, and the kept object IDs.
10. Verify that every object has:
    - `mesh/Scan.obj`
    - `mesh/Scan.mtl`
    - `mesh/Scan.jpg`
    - `images/transforms.json`
    - exactly `24` `.png` files
11. Remove the staging folders so the dataset root contains only `bread`, `biscuit`, `box`, and `selection_manifest.txt`.

## Exact Extraction Logic
```python
root = Path(r'C:\Users\micha\Projects\3Dor2D\Dataset')
downloads = root / '_stage' / 'downloads' / 'omniobject3d___OmniObject3D-New' / 'raw'
categories = ['bread', 'biscuit', 'box']

for category in categories:
    scan_tar_path = downloads / 'raw_scans' / f'{category}.tar.gz'
    img_tar_path = downloads / 'blender_renders_24_views' / 'img' / f'{category}.tar.gz'

    scan_objs = top_level_ids_from_tar(scan_tar_path, prefix=f'{category}_')
    img_objs = top_level_ids_from_tar(img_tar_path, prefix=f'{category}_')
    selected[category] = sorted(scan_objs & img_objs)[:80]

for category in categories:
    extract_scan_files_into_mesh_folder(...)
    extract_image_branch_into_images_folder(...)

write_selection_manifest(...)
verify_mesh_triplet_and_24_pngs(...)
```

## Evidence
- Exact 2D source paths used in the old rollout logs:
  - `/raw/blender_renders_24_views/img/bread.tar.gz`
  - `/raw/blender_renders_24_views/img/biscuit.tar.gz`
  - `/raw/blender_renders_24_views/img/box.tar.gz`
- Exact 3D source paths used in the old rollout logs:
  - `/raw/raw_scans/bread.tar.gz`
  - `/raw/raw_scans/biscuit.tar.gz`
  - `/raw/raw_scans/box.tar.gz`
- Exact selection rationale: only five categories in the official `24`-view branch met the `80`-object floor, and `bread`, `biscuit`, and `box` were the viable non-figurine trio that satisfied the user's `80 x 3` requirement.
- Exact verification result: `bread=80`, `biscuit=80`, `box=80`, with zero invalid objects and all `24` views present for every kept object.

## Links
- Origin project: `Projects/3dor2d/3dor2d.md`
- Origin commit: `Projects/3dor2d/Commits/2026-04-21 1932 - initial-project-skim.md`
- Related notes: `Projects/3dor2d/Learned/2026-04-21 1940 - omniobject3d-subset-provenance.md`
- Related files or references: `C:\Users\micha\Projects\3Dor2D\Dataset\selection_manifest.txt`, `C:\Users\micha\Projects\3Dor2D\datasets.md`

## Sources
- Local rollout `C:\Users\micha\.codex\sessions\2026\04\19\rollout-2026-04-19T17-47-04-019da7b6-2106-7c20-bd59-0d7b0772e1f1.jsonl`
- Local rollout `C:\Users\micha\.codex\sessions\2026\04\19\rollout-2026-04-19T20-26-56-019da848-7d0e-71c0-97bb-625ab08ac20f.jsonl`
