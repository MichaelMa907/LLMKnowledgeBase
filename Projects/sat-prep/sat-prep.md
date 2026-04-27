---
note_type: project
title: "SAT Prep"
project_id: "2026-04-26-sat-prep"
project_slug: "sat-prep"
project_type: "task"
created: "2026-04-26 20:37"
last_active: "2026-04-26 20:47"
last_session: "2026-04-26 20:47"
resolved: true
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 2
project_folder: "Projects/sat-prep/"
learned_folder: "Projects/sat-prep/Learned/"
current_commit_thread: "Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Create a two-column SAT vocabulary study sheet from the Barron 3500 PDF in the user's Ms.Lee folder."
reuse_when: "The user wants more SAT study materials built from the Ms.Lee folder or wants this Barron 3500 study sheet updated."
do_not_merge_with: "Other schoolwork or unrelated PDF extraction tasks that are not part of this SAT prep folder."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# SAT Prep

> Canonical note path: `Projects/sat-prep/sat-prep.md`
>
> This note is the stable current-state view of the project.
>
> Every real project folder must include a user-owned `MichaelsNotes/` directory alongside this note.
>
> Agents may read `MichaelsNotes/` when the user asks or when the agent judges it directly useful to the active task, but they must never write, modify, move, rename, or delete it unless the user explicitly asks for that exact change.

## Overview
- Canonical objective: Build a two-column SAT vocabulary study sheet from `C:\Users\micha\Desktop\Ms.Lee\Barron 3500.pdf`.
- Why this project exists: The user wants a Markdown sheet where the left side shows only the vocabulary word and the right side shows the full definition and description, so either side can be covered while studying.
- Current owner agent: Codex

## Matching
- Scope summary: SAT prep materials created from the `C:\Users\micha\Desktop\Ms.Lee` folder.
- Reuse this project when: The user wants this vocabulary sheet revised, split, reformatted, or extended with more SAT prep files from the same folder.
- Do not merge with: Generic PDF conversion work or unrelated knowledge-base edits.
- Merge candidates to review with the user: None.
- Merge decision status: Not needed.

## Goals
- Extract the Barron 3500 vocabulary entries from the source PDF.
- Generate a readable two-column Markdown study sheet in the user's `Ms.Lee` folder.
- Verify that the output lines up with the source content.

## Problems
- The source vocabulary list is embedded in a PDF with layout artifacts that make direct copy/paste unreliable.

## Constraints
- Write the final study sheet in `C:\Users\micha\Desktop\Ms.Lee`.
- Keep the format usable for covering either the left or right side during study.
- Verify the generated content against the source PDF instead of assuming the first extraction pass is clean.

## Success Criteria
- A Markdown file exists in `C:\Users\micha\Desktop\Ms.Lee` with a left column for words and a right column for definitions and descriptions.
- The output contains the extracted vocabulary rows from the source PDF in order.
- Spot-check verification confirms representative entries near the beginning, middle, and end of the PDF.

## Current State
- Stable state right now: `C:\Users\micha\Desktop\Ms.Lee\SAT Prep - Barron 3500 Vocabulary.md` exists as a two-column HTML-table Markdown sheet with a global running number before each word and 50 `Word List` section headers.
- What changed this session: The PDF was parsed with a local Node workflow, 3491 vocabulary rows were generated, then the file was revised to group entries under `Word List 1` through `Word List 50` while preserving the study-table format.
- Remaining risk: The source PDF's pronunciation and bilingual gloss formatting were intentionally omitted from the left column, and a small number of body texts may still reflect source-text OCR/layout normalization rather than perfect typography.

## Resolution
- Current resolution state: Resolved.
- Why this is resolved or unresolved: The requested study sheet was created in the target folder and verified against the source PDF.
- Reopen when: The user wants a different layout, flashcard format, split files, or further cleanup of extracted wording.

## Next Steps
- Use the study sheet as-is or request a different format such as flashcards, alphabetical chunks, or quiz cards.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-26 20:37 | 2026-04-26 20:47 | Codex | `codex-20260426-2037` | [[Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet]] | 2 | closed | Built and then reformatted the Barron 3500 SAT vocabulary sheet with numbering and word-list sections |

## Progress
### Session 2026-04-26 - Codex - codex-20260426-2037
- [20:37] Opened this project and started [[Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet]].
- [20:37] Parsed `C:\Users\micha\Desktop\Ms.Lee\Barron 3500.pdf` and generated `C:\Users\micha\Desktop\Ms.Lee\SAT Prep - Barron 3500 Vocabulary.md`.
- [20:37] Verified the output by confirming 3491 generated rows and spot-checking entries on PDF pages 1, 35, and 69.
- [20:47] Updated the vocabulary sheet to prepend a running number before each word and split the file into 50 source-aligned `Word List` sections.
- [20:47] Verified the revised layout by confirming all 50 `Word List` headings were present and spot-checking numbered section starts including `1. abase`, `87. adulation`, `1721. inchoate`, and `3491. zephyr`.

## Commit Threads
- [[Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet]] - closed - 2026-04-26 20:37

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/sat-prep/learnedIndex.md`

## References
- `C:\Users\micha\Desktop\Ms.Lee\Barron 3500.pdf`
- `C:\Users\micha\Desktop\Ms.Lee\SAT Prep - Barron 3500 Vocabulary.md`
