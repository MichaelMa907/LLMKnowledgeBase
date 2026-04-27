---
note_type: commit_thread
title: "Build Barron 3500 Study Sheet"
commit_id: "2026-04-26-2037-build-barron-3500-study-sheet"
project_note: "Projects/sat-prep/sat-prep.md"
project_slug: "sat-prep"
agent: "Codex"
session_id: "codex-20260426-2037"
started: "2026-04-26 20:37"
last_updated: "2026-04-26 20:47"
status: "closed"
prompt_count: 2
merge_review_status: "not_needed"
tags:
  - commit
---

# Build Barron 3500 Study Sheet

## Session Context
- Project: [[Projects/sat-prep/sat-prep]]
- Why this commit exists: Create the requested SAT vocabulary study sheet from the Barron 3500 PDF in the user's `Ms.Lee` folder.
- Scope for this session: Extract the PDF entries, write the two-column Markdown file, and verify the result.

## Merge Review
- Explicit continue from user: No.
- Overlap suspected: No.
- User merge decision: Not needed.

## Prompt Log
### Prompt 01 - 2026-04-26 20:37
- User request: "ok new project called SAT Prep. porject folder in C:\\Users\\micha\\Desktop\\Ms.Lee. using \"C:\\Users\\micha\\Desktop\\Ms.Lee\\Barron 3500.pdf\", make a new md file with just words on one side and its definition+description on the other side. think about it like this, i should be able to cover the right side of the screen and only see the words, i should be able to cover the left side and only see the full definitions. when you are done, verify its correct"
- Action: Created a local Node extraction workflow, parsed the source PDF into vocabulary entries, generated a two-column Markdown table in the target folder, and verified the output with row-count and source-page spot checks.
- Reason: The user asked for an immediately usable SAT study sheet with explicit left/right study behavior and verification.
- Commands / tools: `Get-Content`; `Get-ChildItem`; `Get-Date`; `npm.cmd init -y`; `npm.cmd install pdf-parse`; `npm.cmd install word-list`; `node`; `apply_patch`; `view_image`.
- Files / notes touched: `Projects/sat-prep/sat-prep.md`; `Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet.md`; `C:\Users\micha\Desktop\Ms.Lee\SAT Prep - Barron 3500 Vocabulary.md`; `C:\Users\micha\Temp\sat-prep-pdf-work\build-sat-prep.js`.
- Scope impact: Establishes the SAT Prep project and produces its first study artifact in the user's external project folder.
- Outcome: The final Markdown file was created with 3491 rows and verified against representative entries on source PDF pages 1, 35, and 69.
- Follow-up impact: Future work can revise this sheet into flashcards, quizzes, or chunked study sets without redoing the extraction setup.

### Prompt 02 - 2026-04-26 20:47
- User request: "good, before every word create a little number indexing which word this is, also there should be a wordlist indication like this is wordlist 1, below this is word list 2, ect"
- Action: Updated the generator to preserve the PDF's 50 `Word List` boundaries, prepend a global running number to each word, rebuild the Markdown file, and verify the new structure.
- Reason: The user wanted the same study sheet format with clearer numbering and visible section boundaries matching the source material.
- Commands / tools: `Get-Content`; `node`; `Select-String`; `apply_patch`.
- Files / notes touched: `Projects/sat-prep/sat-prep.md`; `Projects/sat-prep/Commits/2026-04-26 2037 - build-barron-3500-study-sheet.md`; `C:\Users\micha\Desktop\Ms.Lee\SAT Prep - Barron 3500 Vocabulary.md`; `C:\Users\micha\Temp\sat-prep-pdf-work\build-sat-prep.js`.
- Scope impact: Refines the existing SAT Prep study artifact without changing project scope.
- Outcome: The output now includes 50 section headers and numbered word entries, with verified section starts such as `1. abase`, `87. adulation`, `1721. inchoate`, and `3491. zephyr`.
- Follow-up impact: The sheet is easier to navigate by list and by absolute word number during study.

## Scope Notes
- Global notes created or updated:
- Machine notes created or updated:
- Project notes created or updated: `Projects/sat-prep/sat-prep.md`

## Handoff / Closeout
- Current state: The vocabulary sheet exists with running numbering and 50 `Word List` sections, and the revised structure has been verified.
- Open issues: The source PDF's formatting introduces minor normalization artifacts in some example text, but the extracted study sheet is structurally correct and readable.
- Suggested next prompt: "split this SAT sheet into smaller study chunks" if the user wants the material broken into more manageable sections.
