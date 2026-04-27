---
note_type: project
title: "Computer Performance Settings Check"
project_id: "2026-04-24-computer-performance-settings-check"
project_slug: "computer-performance-settings-check"
project_type: "task"
created: "2026-04-24 22:15"
last_active: "2026-04-24 23:28"
last_session: "2026-04-24 23:28"
resolved: true
status: "resolved"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 14
project_folder: "Projects/computer-performance-settings-check/"
learned_folder: "Projects/computer-performance-settings-check/Learned/"
current_commit_thread: "Projects/computer-performance-settings-check/Commits/2026-04-24 2215 - check-current-performance-settings.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Checked the current Windows performance-related settings to see whether the machine is already running in the fastest possible mode."
reuse_when: "Reuse this project when the user wants to verify whether current Windows power settings are obviously limiting performance."
do_not_merge_with: "Do not merge this project with deeper benchmark, overclocking, BIOS-tuning, or app-specific troubleshooting projects unless the user explicitly says to continue it."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# Computer Performance Settings Check

## Overview
- Canonical objective: determine whether the computer's current Windows settings are already at the fastest possible mode or whether anything obvious is limiting performance.
- Why this project exists: the user asked whether anything in the current computer settings sticks out as affecting performance right now.
- Current owner agent: Codex

## Workflow
- Workflow role: not a workflow project; this is a one-off system-state inspection.
- When to use it: reuse this note only as a record of the settings observed on 2026-04-24.
- Preconditions: local shell access on `MICHAEL-ROG`.
- Expected result: a concise answer about whether Windows is in a max-performance mode and whether any obvious throttling settings are active.
- Verification status: verified from local `powercfg` output plus a direct Win32 power-status call.
- Known limits: vendor utilities, BIOS options, thermals, and workload-specific behavior were not inspected here.
1. Read the active Windows power plan.
2. Inspect processor power-management settings that would obviously cap performance.
3. Check whether the machine is currently on AC power.
4. Summarize whether anything obvious is limiting performance right now.

## Matching
- Scope summary: current Windows power and performance setting check on `MICHAEL-ROG`.
- Reuse this project when: the user asks what the machine's current Windows power/performance settings are and whether they are obviously limiting speed.
- Do not merge with: benchmark runs, BIOS tuning, GPU tuning, or unrelated troubleshooting.
- Merge candidates to review with the user: none.
- Merge decision status: not needed.

## Goals
- Confirm the active Windows power plan.
- Confirm whether CPU performance is being hard-capped on AC power.
- Identify any obvious current settings that would keep the machine from being in a max-performance mode.

## Problems
- The user asked a broad "is anything sticking out" question, which could include settings outside Windows.
- Some deeper checks such as vendor-specific utilities and firmware settings were outside this quick pass.

## Constraints
- Base the answer on the current local machine state.
- Keep the inspection focused on settings that materially affect performance.
- Avoid overstating what was not directly checked.

## Success Criteria
- The active plan is identified.
- CPU-related Windows power settings are checked for obvious caps.
- The answer clearly states whether the machine is on the fastest possible setting right now.

## Current State
- Stable state right now: the active named Windows power plan still shows `Balanced`, but the AMD power-slider overlay for AC power is now set to `Best performance` (`3`). The benchmark evidence now points primarily to GPU power/boost tuning rather than Windows settings or thermals.
- What changed this session: first confirmed that on AC power the current plan allows `Maximum processor state = 100%`, `Minimum processor state = 5%`, `Processor performance boost mode = Enabled`, `System cooling policy = Active`, `Processor core parking min cores = 100%`, and `Processor core parking max cores = 100%`; a direct Win32 power-status call reported `ACLineStatus = 1`, so the machine is currently on AC power. Then checked the AMD Power Slider overlay, found AC was only `Better performance` (`2`), and changed AC to `Best performance` (`3`). Later parsed the benchmark log and then inspected the active ASUS-side control state through GHelper. The GHelper tuning screens together now show both the earlier conservative state and the exposed maximums: the earlier screen showed `GPU Power = 80W`, `Dynamic Boost = 25W`, `Core Clock Offset = 0 MHz`, `Memory Clock Offset = 0 MHz`, and `Temperature Target = 87C`, while the newer screen shows the sliders already raised to their exposed limit at `GPU Power = 95W`, `Dynamic Boost = 25W`, `Core Clock Offset = 300 MHz`, `Memory Clock Offset = 500 MHz`, and `Core Clock Limit = 2995 MHz`. That means the obvious GHelper software sliders are no longer the remaining missing step; the machine is already at the highest GPU tuning values GHelper currently exposes.
- Remaining risk: Windows itself is not showing an obvious AC hard cap, but vendor performance modes, firmware settings, GPU wattage behavior, hybrid-graphics routing, or other workload-specific limits could still affect real-world speed.

## Resolution
- Current resolution state: resolved.
- Why this is resolved or unresolved: the user's question was answered from the current machine state and the requested change was applied. The key clarification is that the machine can still show the named plan `Balanced` while also using the AMD power-slider overlay, and that overlay is now `Best performance` on AC even though the base plan name did not change. The later benchmark discussion also clarified that a low peak temperature with a below-average score points more toward underutilization or a power-routing limit than thermal throttling, and the uploaded monitoring graph showed `GPU Load` pinned near `100%` with stable GPU temperatures and clocks while the large oscillations were in `CPU Clock Frequency`, not GPU clock. The later HWiNFO log confirmed that diagnosis more concretely: during the loaded part of the run, `GPU Load` stayed at about `99-100%`, `GPU Power` averaged about `94.6 W`, `GPU Temperature` averaged about `70.7C` and peaked around `74.4C`, `PCIe Link Speed` stayed at `16.0 GT/s`, `CPU Package Power` stayed low, and `Performance Limit - Power` was `Yes` for every loaded sample while thermal and voltage limiters stayed `No`. Compared with same-hardware leaderboard entries, the machine is missing a large amount of GPU clock headroom: the shown results were running about `2422-2587 MHz` GPU core clock with memory around `1778-1800`, while the logged benchmark run was only around `1742 MHz` average effective GPU clock and peaked under `1900 MHz`. The newest GHelper screenshot changes one important conclusion: the obvious software-exposed GPU tuning is already maxed, with `95W` GPU power, `25W` Dynamic Boost, `+300 MHz` core offset, `+500 MHz` memory offset, and a `2995 MHz` core clock limit. So if performance is still low after those settings are applied, the remaining gap is more likely due to the laptop's real platform/vBIOS ceiling, the settings not actually taking effect during the run, benchmark instability/retry needs, or the leaderboard including unusually favorable or overclocked entries.
- Reopen when: the user wants to switch to a max-performance plan, inspect Armoury Crate or BIOS settings, or check thermals and benchmark behavior.

## Next Steps
- Optional: switch the active power plan to `High performance` or `Ultimate Performance` if the goal is the most aggressive Windows-side performance posture.
- Optional: inspect vendor-specific performance profiles, dGPU-only mode, GPU wattage, or BIOS settings if the user wants a deeper answer than Windows settings alone.
- Optional: log GPU power draw, clocks, utilization, and limits during the benchmark with HWiNFO or MSI Afterburner to confirm whether the GPU is hitting an unexpectedly low wattage ceiling.
- Optional: inspect Armoury Crate performance mode, NVIDIA/ASUS hybrid-vs-discrete GPU mode, and any platform power limits because the completed HWiNFO log now strongly suggests a power cap rather than a thermal issue.
- Optional: compare the run against non-overclocked same-hardware results rather than the absolute top entries, since the leaderboard shows some entries with clearly higher GPU core clocks that are likely boosted or manually overclocked.
- Optional: rerun the benchmark and a fresh HWiNFO log with the current maxed GHelper settings (`95W`, `+300`, `+500`) to verify that they are actually taking effect during the run.
- Optional: inspect whether BIOS or vBIOS allows a higher real GPU power target than the currently exposed `95W` plus `25W` Dynamic Boost, since GHelper itself now appears to already be at its visible maximums.
- Optional: treat the maxed GPU settings as a plugged-in performance profile rather than a permanent everyday default; they are generally reasonable to test, but stability, temperatures, and long-term wear are the tradeoff to watch.
- Optional: now that a `3741` result has landed above the shown average, tune for the lowest stable offsets that preserve the performance you actually want rather than assuming the maximum exposed offsets are the best long-term daily choice.
- Optional: prioritize tuning in this rough order for this machine and workload: `GPU Power`, `Dynamic Boost`, `Core Clock Offset`, `Memory Clock Offset`, then `Temperature Target`, with `Core Clock Limit` usually mattering the least unless it is set too low.
- Optional: because a lower-offset profile improved the score, favor the best-performing stable middle ground over the maximum exposed offsets; this machine appears to reward moderation rather than simply maxing every OC slider.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-24 22:15 | 2026-04-24 23:28 | Codex | `<current-session>` | [[Projects/computer-performance-settings-check/Commits/2026-04-24 2215 - check-current-performance-settings]] | 14 | closed | Checked the power settings, confirmed a GPU power limit from the HWiNFO log, compared the logged clocks against same-hardware leaderboard entries, established that the visible GHelper GPU sliders are already maxed, recorded safety guidance for using them, validated that the current profile can score above average, ranked which GPU tuning controls matter most, and confirmed that a milder OC profile can outperform the maxed one |

## Progress
> Add one progress bullet after every prompt.
>
> In the current session subsection only, you may rewrite or remove bullets that were fully reversed later in the same session so this section reflects stable state rather than temporary churn.
>
> Do not rewrite prior-session subsections. If an older session was wrong, add a new correction entry instead.

### Session 2026-04-24 - Codex - <current-session>
- [22:15] Checked the current Windows power/performance settings and confirmed that the machine was on the named plan `Balanced`, while still allowing full 100% max CPU on AC.
- [22:26] Confirmed that the AMD power-slider overlay was only `Better performance` on AC and changed it to `Best performance`.
- [22:32] Interpreted the benchmark behavior: a peak temperature around `74C` together with a below-average score suggests the GPU was not being pushed to its normal thermal/power envelope, which points more toward underutilization or a power/path limit than thermal throttling.
- [22:32] Interpreted the uploaded monitoring graph: `GPU Load` stayed near `100%`, GPU temperature and GPU clocks were steady, CPU utilization stayed low, and the visible large oscillations were in `CPU Clock Frequency`, which points more toward a GPU power-limit or similar non-thermal limiter than CPU or thermal throttling.
- [22:45] Confirmed that HWiNFO and MSI Afterburner do not appear to be installed locally and documented the exact sensor logging workflow to capture GPU wattage on the next benchmark run.
- [23:05] Parsed the completed HWiNFO benchmark log and confirmed the likely root cause: the GPU was fully loaded, temperatures were modest, PCIe speed was normal, and `Performance Limit - Power` was `Yes` on every loaded sample, indicating a power cap rather than thermal throttling.
- [23:12] Inspected the active ASUS-side control state in GHelper and confirmed that the laptop appears to already be in `Turbo` mode while still using `Standard`/hybrid GPU routing instead of `Ultimate`/dGPU-only mode.
- [23:15] Compared the logged clocks against the same-hardware leaderboard and found that the remaining gap is mostly GPU frequency/power headroom; the top leaderboard entries also appear to be running significantly higher clocks, likely including some overclocked results.
- [23:17] Inspected the current GHelper GPU tuning page and found `80W` GPU power, `25W` Dynamic Boost, and zero clock offsets, which lines up closely with the logged `~95W` benchmark behavior and explains why the machine is below the faster same-hardware entries without pointing to a thermal problem.
- [23:19] Confirmed from a newer GHelper screenshot that the visible GPU sliders are already maxed at `95W`, `+300 MHz` core, and `+500 MHz` memory, so the remaining gap is no longer explainable by untouched GHelper sliders alone.
- [23:21] Added practical safety guidance: because these are the max values GHelper exposes rather than an unlocked firmware flash, they are generally reasonable to use for plugged-in gaming and benchmarks if the system is stable, but they are still an overclocked high-power profile and should be validated with temps, artifact checks, and crash-free runs rather than treated as risk-free.
- [23:24] Recorded the first successful tuned result at `3741`, which is above the shown average for the same configuration and indicates the current power/offset profile is materially improving performance; the next sensible step is to optimize for minimum stable settings rather than blindly keeping the maximum values.
- [23:26] Ranked the six visible GHelper GPU controls by likely real-world importance for this machine: power limits first, clock offsets next, and the hard clock limit last unless set too low.
- [23:28] Confirmed from a newer test that a milder profile with roughly `+200 MHz` core and `+300 MHz` memory performs better than the more aggressive offsets, indicating the maxed OC settings were likely beyond the most efficient or stable point for this GPU.

## Commit Threads
- [[Projects/computer-performance-settings-check/Commits/2026-04-24 2215 - check-current-performance-settings]] - closed - 2026-04-24 22:15

## Scope Notes
- Global notes that affect this project: none.
- Machine notes that affect this project: none added in this task.
- Project-scoped learned notes: none.
- Learned notes stored in this project: none.
- Generated learned view: `Projects/computer-performance-settings-check/learnedIndex.md`

## References
- `powercfg /GETACTIVESCHEME`
- `powercfg /L`
- `powercfg /QH SCHEME_CURRENT SUB_PROCESSOR`
- Win32 `GetSystemPowerStatus`
- `Templates/Project.md`
- `Templates/Commit.md`
- `Templates/Learned.md`


