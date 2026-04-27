---
note_type: project
title: "Ultralight Mouse"
project_id: "2026-04-23-ultralight-mouse"
project_slug: "ultralight-mouse"
project_type: "task"
created: "2026-04-23 20:11"
last_active: "2026-04-23 23:02"
last_session: "2026-04-23 23:02"
resolved: false
status: "active"
sessions_count: 4
commit_threads_count: 4
total_prompt_entries: 5
project_folder: "Projects/ultralight-mouse/"
learned_folder: "Projects/ultralight-mouse/Learned/"
current_commit_thread: "Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Ultralight Mouse is the full passive-mouse plus active-sensing-mousepad project, including eddy-current tracking, hall-effect button sensing, prototypes, firmware, calibration, and system validation."
reuse_when: "Use for work on the passive mouse, active mousepad, sensing architecture, prototype circuits, firmware, calibration, test plans, and tracking or button-detection validation for the Ultralight Mouse system."
do_not_merge_with: "Do not merge with unrelated mouse concepts or generic electronics experiments that are not part of the passive-mouse plus active-pad sensing system."
merge_status: "corrected_from_prototype_only_scope"
agents_touched:
  - "Codex"
tags:
  - project
  - ultralight-mouse
  - eddy-current-sensing
  - hall-effect-sensing
  - passive-mouse
---

# Ultralight Mouse

> Canonical note path: `Projects/ultralight-mouse/ultralight-mouse.md`
>
> This note is the stable current-state view of the Ultralight Mouse project.

## Overview
- Canonical objective: Build a fully passive ultralight mouse whose motion and button states are sensed by an active mousepad, with the long-term goal of high-rate high-precision tracking in a practical pad form factor.
- Why this project exists: The design moves sensing and computation out of the mouse and into the pad so the mouse can remain extremely light while still supporting precise motion tracking and button detection.
- Current owner agent: Codex

## Workflow
> Not a reusable workflow project. This section captures the current engineering direction for the Ultralight Mouse system.

- Workflow role: System design, prototype validation, and measurement planning for the passive-mouse plus active-pad architecture.
- When to use it: When planning, building, testing, or documenting any part of the Ultralight Mouse project.
- Preconditions: The high-level system concept is defined in `Plan3.9.2026.md`. Prototype One already demonstrated a measurable eddy-current response from aluminum near the coil. Prototype Two direction is now a synchronous-demodulation eddy-current measurement chain.
- Expected result: Verified evidence that the sensing stack can produce repeatable low-noise signals that can eventually support accurate motion tracking and button detection.
- Verification status: Early experimental stage; sub-millimeter tracking is not yet proven.
- Known limits: Full multi-coil XY reconstruction, large-area scalability, lift/tilt robustness, and end-to-end polling performance remain unverified.
1. Preserve the full-project scope around a passive mouse and active sensing pad rather than treating the work as an isolated prototype.
2. Advance the eddy-current tracking path from envelope detection to synchronous detection so distance response can be measured with better noise rejection and stability.
3. Use prototype data to decide whether the architecture can support the eventual Ultralight Mouse performance targets.

## Matching
- Scope summary: Ultralight Mouse covers the entire passive mouse plus active mousepad system, including sub-prototypes such as the lock-in-based eddy-current front end.
- Reuse this project when: The work concerns the passive mouse body, sensing targets, mousepad sensing hardware, signal chain design, firmware, calibration, test fixtures, or measurement results for this system.
- Do not merge with: Unrelated pointing-device concepts or stand-alone experiments that are not part of the Ultralight Mouse architecture.
- Merge candidates to review with the user: Future sub-project notes created only for a narrow prototype phase of this same system.
- Merge decision status: The earlier prototype-only framing was corrected; this canonical project now represents the whole Ultralight Mouse effort.

## Goals
- Keep the mouse fully passive with no onboard electronics.
- Keep mouse mass extremely low while pushing sensing complexity into the pad.
- Use eddy-current sensing for XY tracking and hall-effect sensing for button detection.
- Reach tracking precision on the order of plus or minus 0.25 mm with an update rate above 800 Hz if the architecture supports it.
- Validate whether the sensing stack can scale beyond a tiny proof-of-concept area.

## Problems
- The architecture is broader than the earlier prototype-only knowledgebase record, so future retrieval would have been misleading without this correction.
- Prototype One proved detectable signal change but not measurement precision, repeatability, or system-level tracking.
- The current hardware path still needs controlled fixture design, calibration method, and quantified noise characterization.
- Multi-coil tracking, XY reconstruction, and button sensing integration remain future work.

## Constraints
- The mouse is intended to stay fully passive; sensing and compute must live in the pad.
- Current available hardware includes ESP32-S3, TLV2462IP, CD74HC4053E, AO3400A, SN74HCT14N, breadboards, a 12 uH wireless charging receiver coil, aluminum sensing material, and the Prototype One parts.
- Existing drive code already produces a 100 kHz square wave on GPIO4.
- The pad must eventually combine eddy-current tracking and hall-effect button sensing without unacceptable interference.

## Success Criteria
- The project note correctly represents the full Ultralight Mouse scope for future sessions.
- The eddy-current prototype produces a stable monotonic measurement versus target distance with quantified noise and repeatability.
- Later stages show a credible path from single-channel sensing to multi-channel tracking and button detection.
- Architecture decisions are grounded in measured results rather than only theory.

## Current State
- Stable state right now: Ultralight Mouse is the canonical project. Prototype One established baseline eddy-current detectability. The immediate next hardware step is the synchronous-demodulation eddy-current prototype using `ESP32 -> 74HCT14 -> MOSFET -> coil`, `coil -> TLV2462 -> CD74HC4053 -> low-pass -> ESP32 ADC`.
- What changed this session: Corrected the project identity from a prototype-only note to the broader Ultralight Mouse project, incorporated the system plan from `Plan3.9.2026.md`, recorded the lock-in-based eddy-current prototype as the next concrete build/test step, repaired the broken live wikilinks that were preventing proper Obsidian graph edges, and kept the provenance of that lesson attached to Ultralight Mouse while still promoting the rule into the global instruction files.
- Remaining risk: The new synchronous-demodulation chain is still unbuilt and unmeasured, and the broader system still has no verified path yet for multi-coil XY tracking or button integration.

## Resolution
- Current resolution state: unresolved
- Why this is resolved or unresolved: The project scope is now correctly recorded, but the sensing architecture still requires substantial validation before performance claims are credible.
- Reopen when: Continue any Ultralight Mouse design, prototyping, firmware, calibration, or measurement work.

## Next Steps
- Define the exact `CD74HC4053` synchronous-demod wiring so the analog path performs true sign inversion or equivalent subtraction rather than a vague pseudo-lock-in.
- Choose the initial RC low-pass target around the desired measurement bandwidth and document expected response-time versus noise tradeoffs.
- Build the second eddy-current prototype and capture waveforms at the drive node, coil tap, op-amp output, demod output, and filtered ADC input.
- Measure monotonicity, volts-per-millimeter slope, RMS noise, and repeatability at fixed distances.
- Use those measurements to decide whether the architecture can realistically support eventual XY tracking goals.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-23 20:11 | 2026-04-23 20:11 | Codex | `codex-20260423-2011` | [[Projects/ultralight-mouse/Commits/2026-04-23 2011 - initialize-prototype-two-project]] | 1 | open | Started the initial knowledgebase record from the prototype materials |
| 2026-04-23 20:51 | 2026-04-23 20:51 | Codex | `codex-20260423-2051` | [[Projects/ultralight-mouse/Commits/2026-04-23 2051 - install-project-into-knowledge-base]] | 1 | open | Installed the project into the canonical knowledge base and documented the write-access constraint |
| 2026-04-23 21:54 | 2026-04-23 21:54 | Codex | `codex-20260423-2154` | [[Projects/ultralight-mouse/Commits/2026-04-23 2154 - rename-project-and-set-next-step]] | 1 | open | Corrected the project scope to Ultralight Mouse and recorded the lock-in prototype as the next step |
| 2026-04-23 22:47 | 2026-04-23 23:02 | Codex | `codex-20260423-2247` | [[Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes]] | 2 | open | Fixed the broken live wikilinks, promoted the bare-wikilink rule globally, and kept the graph provenance attached only to Ultralight Mouse |

## Progress
> Do not rewrite prior-session subsections. If an older session was wrong, add a new correction entry instead.

### Session 2026-04-23 - Codex - codex-20260423-2011
- [20:11] Read Prototype One and Prototype Two vault materials, identified Prototype One as completed validation and Prototype Two as sub-millimeter accuracy validation.
- [20:11] Created a knowledgebase-compatible project draft in the writable Ultralight Mouse vault because direct knowledgebase writes were denied.

### Session 2026-04-23 - Codex - codex-20260423-2051
- [20:51] Verified real write access to `C:\Users\micha\Projects\LLMKnowledgeBase` by completing a create/write/read/delete test.
- [20:51] Moved the prepared Prototype Two draft into the canonical knowledge-base project path and preserved the protected `MichaelsNotes/` directory.
- [20:51] Added a machine-scoped learned note documenting that Codex write access depends on the actual session sandbox, not just trusted-project config.

### Session 2026-04-23 - Codex - codex-20260423-2154
- [21:54] Read `Plan3.9.2026.md` and corrected the project identity so future retrieval uses `Ultralight Mouse` rather than a prototype-only name.
- [21:54] Updated the canonical project scope to the full passive mouse plus active mousepad system and recorded the synchronous-demodulation eddy-current build as the immediate next step.

### Session 2026-04-23 - Codex - codex-20260423-2247
- [22:47] Fixed the broken live Ultralight Mouse wikilinks, updated the shared protocol so instantiated notes must use bare `[[...]]` links, and recorded the invariant as a global learned note.
- [23:02] Re-homed that learned note and session commit into Ultralight Mouse so the Obsidian graph attributes the lesson only to the project where it was actually discovered.

## Commit Threads
- [[Projects/ultralight-mouse/Commits/2026-04-23 2011 - initialize-prototype-two-project]] - open - 2026-04-23 20:11
- [[Projects/ultralight-mouse/Commits/2026-04-23 2051 - install-project-into-knowledge-base]] - open - 2026-04-23 20:51
- [[Projects/ultralight-mouse/Commits/2026-04-23 2154 - rename-project-and-set-next-step]] - open - 2026-04-23 21:54
- [[Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes]] - open - 2026-04-23 22:47

## Scope Notes
- Global notes that affect this project:
  `Projects/ultralight-mouse/Learned/2026-04-23 2247 - real-notes-must-use-bare-wikilinks.md`
- Machine notes that affect this project: `Machines/MICHAEL-ROG/Learned/2026-04-23 2051 - codex-write-access-depends-on-session-sandbox.md`
- Project-scoped learned notes:
- Learned notes stored in this project:
  `Projects/ultralight-mouse/Learned/2026-04-23 2247 - real-notes-must-use-bare-wikilinks.md`
- Generated learned view: `Projects/ultralight-mouse/learnedIndex.md`

## References
- `C:\Users\micha\Projects\Ultralight Mouse\Plan3.9.2026.md`
- `C:\Users\micha\Projects\Ultralight Mouse\PrototypeOne4.13.2026\ProjectOutline.md`
- `C:\Users\micha\Projects\Ultralight Mouse\PrototypeOne4.13.2026\ProcessNotes.md`
- `C:\Users\micha\Projects\Ultralight Mouse\PrototypeOne4.13.2026\Schema.md`
- `C:\Users\micha\Projects\Ultralight Mouse\PrototypeTwo4.18.2026\ProjectOutline.md`
- `C:\Users\micha\Projects\Ultralight Mouse\PrototypeTwo4.18.2026\CoilTest\CoilTest.ino`
- `Templates/Project.md`
- `Templates/Commit.md`
