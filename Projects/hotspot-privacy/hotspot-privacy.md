---
note_type: project
title: "Hotspot Privacy"
project_id: "2026-04-26-hotspot-privacy"
project_slug: "hotspot-privacy"
project_type: "task"
created: "2026-04-26 23:31"
last_active: "2026-04-27 00:11"
last_session: "2026-04-27 00:11"
resolved: false
status: "active"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 6
project_folder: "Projects/hotspot-privacy/"
learned_folder: "Projects/hotspot-privacy/Learned/"
current_commit_thread: "Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Research whether a computer can route traffic through an iPhone so the computer's network identity blends with the phone's output, and what non-VPN options exist."
reuse_when: "Use for questions about iPhone hotspot behavior, tethering, privacy implications, and tools that route a computer's traffic through an iPhone."
do_not_merge_with: "Do not merge with unrelated VPN shopping, phone hardware privacy, or generic networking projects unless the user explicitly continues this work."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
  - iphone
  - hotspot
  - privacy
---

# Hotspot Privacy

> Canonical note path: `Projects/hotspot-privacy/hotspot-privacy.md`
>
> This note is the stable current-state view of the Hotspot Privacy project.

## Overview
- Canonical objective: Determine how to route a computer's traffic through an iPhone so outside observers or remote services have a harder time distinguishing computer traffic from phone-originated traffic.
- Why this project exists: The user wants the computer to blend behind the iPhone's network path and asked whether there are non-VPN app options beyond the obvious VPN approach.
- Current owner agent: Codex

## Workflow
> Not a reusable workflow project. This section records the current decision surface.

- Workflow role: Research current iPhone tethering and routing options.
- When to use it: When evaluating whether built-in iPhone tethering or third-party apps can make a computer's traffic appear to come through the iPhone.
- Preconditions: The user has an iPhone and wants the computer routed through it.
- Expected result: A clear recommendation on whether built-in Personal Hotspot is enough and what app-based alternatives exist.
- Verification status: Initial answer delivered; PairVPN client/server direction and hotspot setup flow confirmed from the vendor site.
- Known limits: App availability and carrier behavior can change over time.
1. Verify Apple's current Personal Hotspot behavior and supported connection modes.
2. Check whether current iPhone apps can act as routing/tunnel endpoints for a computer.
3. Explain the practical privacy tradeoffs and recommend the simplest reliable path.

## Matching
- Scope summary: Hotspot Privacy covers routing a computer through an iPhone and the privacy implications of hotspot, tethering, and tunnel apps.
- Reuse this project when: The user asks about iPhone tethering, hiding or blending a computer's network identity behind a phone, or similar routing/privacy questions.
- Do not merge with: Unrelated security tooling or general VPN recommendations.
- Merge candidates to review with the user: None currently.
- Merge decision status: No merge review needed.

## Goals
- Identify the simplest way to route a computer through the iPhone.
- Clarify whether non-VPN apps exist for this use case.
- Explain limits so the user does not assume stronger anonymity than the setup really provides.

## Problems
- The user's wording leaves some ambiguity about whether the concern is local observers, websites, or carrier-visible traffic.
- iOS restricts what third-party apps can do compared with built-in tethering.

## Constraints
- The solution should work with an iPhone.
- Recommendations should reflect current support rather than stale memory.

## Success Criteria
- The answer distinguishes built-in tethering from app-based tunneling.
- The recommendation is practical and current.
- The explanation includes privacy limits.

## Current State
- Stable state right now: The PairVPN setup is working. The computer is still using the iPhone hotspot as the underlying link, while PairVPN overlays a local tunnel on top of that link so the phone proxies the traffic. For iPhone USB tethering, Personal Hotspot still needs to be enabled because USB is just another connection method for the hotspot service. Switching the computer to the USB-tethered Ethernet interface did not automatically improve throughput and in this case made performance worse.
- What changed this session: Created the project record, researched current tethering and tunnel options, answered the initial routing question, confirmed PairVPN mode direction from the vendor FAQ, confirmed the hotspot-specific setup order from the vendor hotspot page, explained the difference between the underlying hotspot transport and the overlay tunnel, clarified that USB tethering still relies on Personal Hotspot being on, and recorded that USB tethering can be slower in practice.
- Remaining risk: The user may still mean browser/device fingerprint indistinguishability rather than only network-path indistinguishability, which would require different mitigations.

## Resolution
- Current resolution state: unresolved
- Why this is resolved or unresolved: The technical answer is not yet delivered in the project note; the prompt is still active.
- Reopen when: Continue researching or implementing routing/privacy options for computer-through-iPhone traffic.

## Next Steps
- Refine the advice if the user clarifies whether they care about websites, local network observers, or someone physically inspecting devices.
- If needed, give exact setup steps for Personal Hotspot versus PairVPN.
- If needed, diagnose why USB tethering is slower on this setup by comparing radio conditions, tunnel mode, and CPU/battery behavior on the iPhone.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-26 23:31 | 2026-04-26 23:33 | Codex | `codex-20260426-2331` | [[Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research]] | 2 | open | Researched hotspot and tunnel options, then confirmed PairVPN client/server direction |

## Progress
### Session 2026-04-26 - Codex - codex-20260426-2331
- [23:31] Created the Hotspot Privacy project and started current-state research on iPhone hotspot and tunnel-app options.
- [23:33] Confirmed from PairVPN's FAQ that the iPhone should run in server mode and the computer in client mode when the goal is to route the computer through the iPhone.
- [23:35] Confirmed PairVPN's hotspot workflow: connect the computer to the phone's hotspot first, run PairVPN client on the computer, pair once, connect, and keep the iPhone server app active.
- [23:38] Recorded that PairVPN working does not replace the hotspot transport itself: Wi-Fi hotspot remains the visible local link unless the user switches to USB tethering, which may improve speed and stability.
- [23:40] Clarified that on iPhone, USB tethering still uses Personal Hotspot, so hotspot must be enabled even when the physical connection is by cable.
- [00:11] Recorded the user's result that USB tethering switched the computer to an Ethernet interface but slowed performance, confirming that USB is not inherently faster in this setup.

## Commit Threads
- [[Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research]] - open - 2026-04-26 23:31

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/hotspot-privacy/learnedIndex.md`

## References
- `Templates/Project.md`
- `Templates/Commit.md`
- `https://support.apple.com/guide/iphone/share-your-internet-connection-iph45447ca6/ios`
- `https://apps.apple.com/us/app/pairvpn/id1347012179`
