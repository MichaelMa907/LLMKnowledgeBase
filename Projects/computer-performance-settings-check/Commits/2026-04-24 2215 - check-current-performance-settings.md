---
note_type: commit_thread
title: "Check Current Performance Settings"
commit_id: "2026-04-24-2215-check-current-performance-settings"
project_note: "Projects/computer-performance-settings-check/computer-performance-settings-check.md"
project_slug: "computer-performance-settings-check"
agent: "Codex"
session_id: "<current-session>"
started: "2026-04-24 22:15"
last_updated: "2026-04-24 23:28"
status: "closed"
prompt_count: 14
merge_review_status: "not_needed"
tags:
  - commit
---

# Check Current Performance Settings

## Session Context
- Project: [[Projects/computer-performance-settings-check/computer-performance-settings-check]]
- Why this commit exists: inspect the current Windows performance-related settings and answer whether the machine is already at the fastest possible setting.
- Scope for this session: active power plan, processor power-management settings, current AC power state, and concise interpretation.

## Merge Review
- Explicit continue from user: no, this is a new project.
- Overlap suspected: no, this is separate from the earlier visible-shell workflow project.
- User merge decision: not needed.

## Prompt Log
> Duplicate the block below for each new prompt in the same session.
>
> Every entry must include at least `Action` and `Reason`.

### Prompt 01 - 2026-04-24 22:15
- User request: look at the computer settings right now and say whether it is already on the fastest possible setup or whether anything obvious is sticking out that could affect performance.
- Action: inspected the active Windows power plan with `powercfg`, checked processor power-management values with `powercfg /QH SCHEME_CURRENT SUB_PROCESSOR`, and used a direct Win32 `GetSystemPowerStatus` call to confirm current AC power state.
- Reason: those settings are the fastest way to determine whether Windows is obviously limiting CPU performance right now.
- Commands / tools: `powercfg /GETACTIVESCHEME`, `powercfg /L`, `powercfg /QH SCHEME_CURRENT SUB_PROCESSOR`, and a PowerShell `Add-Type` call wrapping `GetSystemPowerStatus` from `kernel32.dll`.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: created one resolved task project recording the checked settings and interpretation.
- Outcome: the machine is on `Balanced`, so it is not in the fastest possible Windows power mode; on AC power there is no obvious hard CPU cap in the inspected settings because max CPU is 100%, boost is enabled, cooling is active, and all cores are available.
- Follow-up impact: if the user wants absolute max-performance mode, the next step would be switching to `High performance` or `Ultimate Performance` and optionally inspecting vendor/BIOS performance profiles.


### Prompt 02 - 2026-04-24 22:26
- User request: explain why Windows still appeared to say "best performance" and change the computer to best performance.
- Action: inspected the AMD Power Slider overlay inside the current `Balanced` plan, found that AC was only `Better performance` (`2`), changed the AC overlay to `Best performance` (`3`), and verified the new value with `powercfg`.
- Reason: on this machine the user-facing performance mode is separate from the base plan name, so changing the overlay was the direct way to satisfy the request.
- Commands / tools: `powercfg /q`, `powercfg /SETACVALUEINDEX SCHEME_CURRENT c763b4ec-0e50-4b6b-9bed-2b92a6ee884e 7ec1751b-60ed-4588-afb5-9819d3d77d90 3`, and `powercfg /q SCHEME_CURRENT c763b4ec-0e50-4b6b-9bed-2b92a6ee884e 7ec1751b-60ed-4588-afb5-9819d3d77d90`.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: updated the existing project with the clarification that the named plan and the AMD overlay are separate and recorded the successful AC-mode change.
- Outcome: the named plan still shows `Balanced`, but the AMD AC overlay is now `Best performance` (`3`).
- Follow-up impact: if the user wants battery mode changed too, the DC overlay still remains at `Better performance` (`2`).

### Prompt 03 - 2026-04-24 22:32
- User request: react to the observation that the benchmark never exceeded `74C`, which seemed low for this computer.
- Action: interpreted the benchmark behavior qualitatively and explained that a relatively low peak temperature combined with a below-average score points away from thermal throttling and more toward the GPU not reaching its usual power or utilization level.
- Reason: temperature alone is not the target; if the score is low and the GPU stays cool, that usually means the hardware was not being driven hard enough rather than being thermally limited.
- Commands / tools: no additional machine changes; used the already observed benchmark result and temperature behavior.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: refined the interpretation of the observed benchmark behavior without changing system state.
- Outcome: the low `74C` peak was identified as suspicious in the context of the low score because it suggests underutilization, hybrid-graphics routing, vendor-mode limits, or another power/path constraint instead of thermal throttling.
- Follow-up impact: the next useful checks would be a rerun after the AC overlay change and, if still low, inspection of dGPU-only mode, vendor performance profile, and GPU wattage behavior.

### Prompt 04 - 2026-04-24 22:32
- User request: share the benchmark monitoring graph and ask for interpretation.
- Action: interpreted the graph directly, separating CPU and GPU signals: `GPU Load` stayed pegged near `100%`, GPU temperature sat in the low `70s C`, GPU and memory clocks looked stable, CPU utilization stayed modest, and the large dips were in `CPU Clock Frequency`, not GPU clock.
- Reason: the graph narrows the diagnosis from generic underperformance to a more specific GPU-bound run with likely non-thermal limits.
- Commands / tools: no additional system commands; used the uploaded monitoring graph.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: refined the benchmark interpretation with evidence from the graph itself.
- Outcome: the graph does not look like classic thermal throttling. It looks more like a GPU-bound workload running at full load but below expected performance, shifting suspicion toward GPU wattage limits, vendor profile limits, or hybrid-graphics behavior rather than temperature.
- Follow-up impact: the next high-signal check would be logging actual GPU power draw in HWiNFO, MSI Afterburner, or similar during the same test.

### Prompt 05 - 2026-04-24 22:45
- User request: explain how to log GPU power draw for the next test.
- Action: checked whether HWiNFO or MSI Afterburner appeared to be installed locally and then prepared the exact sensor-logging workflow to use on the next rerun.
- Reason: a practical logging recipe is more useful than generic advice, and whether the tools are already installed affects the fastest path.
- Commands / tools: `Get-Command HWiNFO64,MSIAfterburner -ErrorAction SilentlyContinue` and directory checks under common install paths.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: added the recommended next diagnostic step for confirming whether the GPU is being power-limited.
- Outcome: HWiNFO and MSI Afterburner do not appear to be installed locally, and the next step is to install one and log GPU power, clocks, utilization, and any limit flags during the same benchmark run.
- Follow-up impact: once the user captures a wattage log, the diagnosis can move from “likely power/path limit” to a more concrete root cause.

### Prompt 06 - 2026-04-24 23:05
- User request: review the completed HWiNFO log from the rerun that scored about `3100`.
- Action: parsed the finished CSV, extracted the NVIDIA GPU benchmark columns, and summarized the loaded portion of the run.
- Reason: the log could confirm whether the low score was caused by power limiting, thermal limiting, voltage limiting, PCIe issues, or low utilization.
- Commands / tools: local CSV parsing of `C:\Users\micha\Downloads\logreal.CSV`.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: converted the earlier qualitative suspicion into a concrete logged diagnosis.
- Outcome: during loaded samples, `GPU Load` stayed at about `99-100%`, `GPU Power` averaged about `94.6 W` and peaked about `94.9 W`, `GPU Temperature` averaged about `70.7C` and peaked about `74.4C`, `PCIe Link Speed` stayed at `16.0 GT/s`, `CPU Package Power` stayed low, and `Performance Limit - Power` was `Yes` for all loaded samples while thermal and voltage-related limiters stayed `No`, confirming a power cap rather than thermal throttling.
- Follow-up impact: the next useful check is not more thermal tuning; it is finding which ASUS/NVIDIA/platform setting is holding the GPU to this power behavior.

### Prompt 07 - 2026-04-24 23:12
- User request: continue the diagnosis.
- Action: inspected the active ASUS-side control software, read the live GHelper config and log, and cross-checked the mode mapping against the official GHelper documentation.
- Reason: once the benchmark log proved a power cap, the next likely control point was ASUS vendor mode, GPU mode, or MUX state rather than Windows itself.
- Commands / tools: local reads of `C:\Users\micha\AppData\Roaming\GHelper\config.json` and `log.txt`, plus official GHelper GitHub documentation for mode mapping.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: identified the most likely remaining bottleneck on the current configuration.
- Outcome: the machine appears to already be in GHelper `Turbo` mode, so a plain performance-mode bump is probably not the missing piece. The more important remaining setting is GPU routing: `Mux flag : 0` indicates the machine is still in `Standard`/hybrid GPU mode rather than `Ultimate`/dGPU-only mode.
- Follow-up impact: the next high-signal action is switching to `Ultimate`/dGPU-only mode in GHelper and rerunning the benchmark.

### Prompt 08 - 2026-04-24 23:15
- User request: point out what the machine is missing by comparing it to the same-hardware leaderboard screenshot and note that the system is already in `Ultimate`.
- Action: compared the benchmark's logged GPU behavior against the clock data shown in the uploaded same-hardware leaderboard screenshot.
- Reason: that comparison shows what kind of headroom the faster systems have that this machine is not reaching.
- Commands / tools: used the previously parsed HWiNFO benchmark log and the uploaded leaderboard screenshot.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: refined the diagnosis from generic power-limited behavior to a more concrete missing-clock-headroom comparison.
- Outcome: compared with same-hardware leaderboard entries, this machine is missing a large amount of GPU clock headroom. The logged run averaged about `1742 MHz` effective GPU clock and peaked under `1900 MHz`, while the screenshot shows leaderboard entries at about `2422-2587 MHz` GPU core clock and memory around `1778-1800`. That means the machine is not reaching the same boost/power envelope, and the very top results likely include overclocked or unusually favorable entries.
- Follow-up impact: the next useful step is to find why the laptop is not getting that extra GPU frequency/power headroom, not to chase temperatures.

### Prompt 09 - 2026-04-24 23:17
- User request: inspect the uploaded GHelper GPU tuning screen and interpret what it implies about the missing performance.
- Action: read the values shown on the GHelper GPU tuning page and compared them against the already parsed HWiNFO benchmark log and same-hardware leaderboard comparison.
- Reason: the GHelper power and offset values are the most direct ASUS-side explanation for why the machine's logged GPU behavior does not match the faster same-hardware runs.
- Commands / tools: used the uploaded GHelper screenshot together with the previously parsed `C:\Users\micha\Downloads\logreal.CSV`.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: refined the diagnosis from a generic vendor/platform power cap to the current concrete GPU tuning envelope shown in GHelper.
- Outcome: the screenshot shows `GPU Power = 80W`, `Dynamic Boost = 25W`, `Core Clock Offset = 0 MHz`, `Memory Clock Offset = 0 MHz`, and `Temperature Target = 87C`. That lines up closely with the logged benchmark behavior around `94.6 W` and explains why the run is well below the faster same-hardware entries: the machine is currently operating with conservative GPU power/boost settings and no extra clock offset, while the stronger leaderboard results are likely getting more boost headroom and in some cases overclocking.
- Follow-up impact: the next meaningful checks are whether the machine can be allowed a higher GPU power target than the currently shown setting and whether a cautious GPU overclock changes the score materially.

### Prompt 10 - 2026-04-24 23:19
- User request: clarify that the newer GHelper screenshot shows the highest values the sliders will go to.
- Action: compared the updated GHelper screenshot against the prior screenshot and earlier benchmark interpretation.
- Reason: if the sliders are already maxed, that rules out the simplest remaining software-side explanation and narrows the diagnosis further.
- Commands / tools: used the newly uploaded GHelper screenshot.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: corrected the ASUS-side tuning conclusion to reflect that the exposed GHelper GPU limits are already at their maximums.
- Outcome: the visible GHelper GPU controls are already maxed at `95W` GPU power, `25W` Dynamic Boost, `+300 MHz` core offset, `+500 MHz` memory offset, and `2995 MHz` core clock limit. If benchmark performance is still materially low after these settings are active, the remaining explanation is more likely a real platform/vBIOS ceiling, the settings not fully taking effect during the run, or the leaderboard including unusually favorable/overclocked results.
- Follow-up impact: the next best validation is a fresh rerun plus fresh HWiNFO log with these maxed values active, to verify that the live benchmark behavior actually changes.

### Prompt 11 - 2026-04-24 23:21
- User request: ask whether the current maxed GPU settings are actually safe to use, especially with respect to degradation, given that the machine is only meant to use the dGPU while plugged in.
- Action: assessed the risk profile of the shown GHelper settings in the context of the machine's observed temperatures, power behavior, and the fact that the values are limited by the laptop's normal exposed controls.
- Reason: the user needs practical safety guidance, not just benchmark diagnosis.
- Commands / tools: no additional machine changes; used the existing benchmark and GHelper findings.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: added practical operating guidance for the maxed GPU profile.
- Outcome: these settings are generally reasonable to test and use for plugged-in gaming or benchmarking because they are still within the vendor-exposed GHelper limits, but they are not risk-free. The likely failure mode is instability, artifacting, or driver resets before permanent hardware damage. Long-term degradation risk mainly comes from sustaining higher heat and power for long periods, not from occasional benchmark or gaming use. The safer approach is to use this as a performance profile, validate it with repeated runs, and back off if temperatures, crashes, or artifacts appear.
- Follow-up impact: if the user wants a practical recommendation, suggest keeping the maxed profile for plugged-in heavy loads only and using a calmer daily profile the rest of the time.

### Prompt 12 - 2026-04-24 23:24
- User request: report a new `3741` score that is above average for this configuration and ask what to do next, especially whether clock offsets are really safe compared with simply increasing power.
- Action: interpreted the new result in the context of the earlier low-score diagnosis and distilled the practical safety tradeoff between power increases and clock offsets.
- Reason: once the user has a successful above-average run, the best guidance shifts from diagnosis to validation and sensible long-term tuning.
- Commands / tools: no new machine commands; used the already established benchmark and tuning context.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: updated the project record with the fact that the current tuned profile can score above average and added guidance on next-step tuning.
- Outcome: a `3741` result means the current settings are working and are no longer clearly underperforming. The main practical risk from clock offsets is instability rather than immediate hardware damage, while sustained extra power and heat are the bigger contributors to long-term wear. The best next step is to keep the plugged-in performance profile only if it stays stable, then back down the offsets to find the lowest settings that preserve the desired score and behavior.
- Follow-up impact: if the user wants a safer daily setup, suggest keeping the power limit but reducing the core and memory offsets until performance drops or instability disappears.

### Prompt 13 - 2026-04-24 23:26
- User request: ask which of the six visible GPU tuning settings matters the most.
- Action: ranked the six GHelper GPU controls by likely performance impact for this machine and benchmark pattern.
- Reason: the user wants to know where to focus tuning effort instead of treating every slider as equally important.
- Commands / tools: no new machine commands; used the established benchmark and tuning context.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: added a practical prioritization for the visible GPU controls.
- Outcome: for this machine the most important controls are `GPU Power` and `Dynamic Boost`, because the earlier HWiNFO run showed a persistent power limiter. Next most important are `Core Clock Offset` and then `Memory Clock Offset`, which can materially improve score but mainly by adding stable frequency headroom. `Temperature Target` matters only if the machine is actually hitting thermal limits, which it was not, and `Core Clock Limit` usually matters least unless it is set low enough to cap boost.
- Follow-up impact: if the user wants a lower-risk daily profile, the cleanest reduction path is to keep the power settings and trim the clock offsets first.

### Prompt 14 - 2026-04-24 23:28
- User request: report that a lower-offset profile shown in the latest screenshot produced even better benchmark results.
- Action: interpreted the improved result from the milder OC profile in the context of the earlier maxed-profile discussion.
- Reason: better performance at lower offsets changes the practical tuning recommendation and says something important about this GPU's stable sweet spot.
- Commands / tools: used the uploaded GHelper screenshot and the reported benchmark outcome.
- Files / notes touched: `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and this commit thread.
- Scope impact: refined the tuning guidance from “maxed profile can work” to “this machine appears to prefer a milder OC profile.”
- Outcome: the better score with roughly `+200 MHz` core and `+300 MHz` memory means the previous max offsets were likely beyond the GPU's best efficiency or stability point. This is common: pushing further can trigger clock error correction, transient instability, or poorer sustained behavior even if the system does not fully crash.
- Follow-up impact: the best daily tuned profile is likely closer to this milder setting than the fully maxed offsets, while keeping `GPU Power` and `Dynamic Boost` high.
## Scope Notes
- Global notes created or updated: none.
- Machine notes created or updated: none.
- Project notes created or updated: `Projects/computer-performance-settings-check/computer-performance-settings-check.md`

## Handoff / Closeout
- Current state: this one-off settings check is complete and resolved, the requested AC power mode change to `Best performance` has been applied, the HWiNFO log confirms a non-thermal GPU-side power limit rather than thermal throttling, and the leaderboard comparison shows that the remaining gap is mainly missing GPU clock/power headroom.
- Open issues: vendor utilities, firmware settings, and thermals were not inspected in this pass.
- Suggested next prompt: inspect NVIDIA/ASUS platform limits, overclock settings, or vendor power behavior to explain why the GPU is not reaching the higher same-hardware clock envelope.
- Before closing this commit, update `Projects/computer-performance-settings-check/computer-performance-settings-check.md` and run `node Scripts/update-knowledge-base.mjs` with the changed roots for this prompt.


