---
note_type: commit_thread
title: "Initial Hotspot Routing Research"
commit_id: "2026-04-26-2331-initial-hotspot-routing-research"
project_note: "Projects/hotspot-privacy/hotspot-privacy.md"
project_slug: "hotspot-privacy"
agent: "Codex"
session_id: "codex-20260426-2331"
started: "2026-04-26 23:31"
last_updated: "2026-04-27 00:11"
status: "open"
prompt_count: 6
merge_review_status: "not_needed"
tags:
  - commit
---

# Initial Hotspot Routing Research

## Session Context
- Project: [[Projects/hotspot-privacy/hotspot-privacy]]
- Why this commit exists: Record the first prompt for the new Hotspot Privacy project.
- Scope for this session: Determine whether the user can route a computer through an iPhone without relying only on a conventional VPN service.

## Merge Review
- Explicit continue from user: No. The user explicitly said this is a new project.
- Overlap suspected: No.
- User merge decision: Not needed.

## Prompt Log
### Prompt 01 - 2026-04-26 23:31
- User request: "new project, called Hotspot Privacy. i wish to make it so that if someone is looking at my phones output, they will not be able to destinguish which part is from computer and which is from iphone. i cna do this with a vpn, but is there other apps that just routes computer through the iphone"
- Action: Read the knowledgebase protocol, opened the shared user profile, created the new project, and researched current Apple Personal Hotspot behavior plus current app-based tunnel options.
- Reason: The local knowledgebase requires a new project and commit thread for a new task, and the technical question depends on current iPhone support and current app availability.
- Commands / tools: Read AGENTS and templates with PowerShell, created project folders, used web search for Apple Support and App Store sources.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Established the project record and gathered enough evidence to answer that built-in Personal Hotspot is the primary native solution, with limited app-based alternatives such as PairVPN.
- Follow-up impact: If the user wants, next steps can compare hotspot over USB against tunnel apps and clarify whether the threat model is local observers or websites.

### Prompt 02 - 2026-04-26 23:33
- User request: "do i choose run as vpn client or run as vpn server"
- Action: Verified PairVPN's client/server terminology from the vendor FAQ before answering.
- Reason: The direction matters; using the wrong mode would invert the route.
- Commands / tools: Web search for PairVPN FAQ and App Store listing.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Confirmed that the iPhone should run as VPN server and the computer as VPN client when routing the computer through the iPhone.
- Follow-up impact: The next useful step is a short setup sequence or a comparison against built-in USB Personal Hotspot.

### Prompt 03 - 2026-04-26 23:35
- User request: "pair vpn started on iphone as server, what do i do now."
- Action: Verified the hotspot-specific setup sequence from PairVPN's current vendor page and FAQ.
- Reason: The next steps depend on the required ordering between hotspot, pairing, and tunnel connection.
- Commands / tools: Web search for PairVPN hotspot instructions and FAQ.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Confirmed that the computer should first join the iPhone hotspot, then run PairVPN as client, pair using the 6-digit code, connect, and verify the tunnel shows local while the iPhone app remains active.
- Follow-up impact: If the user hits an error, the next step is troubleshooting based on whether the tunnel shows local, remote, or relayed.

### Prompt 04 - 2026-04-26 23:38
- User request: "it works, but what now. if i tether my phone is it gonna be faster? why is wifi still showing up as the hotspot"
- Action: Explained the distinction between the underlying hotspot transport and the PairVPN overlay, and answered the speed question for USB tethering versus Wi-Fi hotspot.
- Reason: Once the tunnel works, the user needs to understand what changed and what did not.
- Commands / tools: None beyond project-note updates.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Clarified that Wi-Fi still shows because the computer is still physically connected over the hotspot link, while PairVPN only changes how traffic is proxied over that link. USB tethering can be better for stability and often latency, with speed depending on radio conditions and device support.
- Follow-up impact: If the user wants, the next step is a direct A/B test between Wi-Fi hotspot and USB tethering.

### Prompt 05 - 2026-04-26 23:40
- User request: "for tethering to work, do i need to enable hotspot"
- Action: Answered based on the already verified Apple Personal Hotspot documentation.
- Reason: On iPhone, USB tethering is a transport mode of Personal Hotspot rather than a separate feature.
- Commands / tools: None beyond project-note updates.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Clarified that Personal Hotspot must be enabled for tethering to work.
- Follow-up impact: The next useful step is the exact Windows USB-tether setup if the user wants to switch from Wi-Fi.

### Prompt 06 - 2026-04-27 00:11
- User request: "when i started tethering, ethernet is enabled on computer, but it actually slowed down"
- Action: Recorded the observed behavior and prepared to explain why USB tethering can underperform Wi-Fi hotspot in a real setup.
- Reason: The user has a concrete test result that changes the recommendation.
- Commands / tools: None beyond project-note updates.
- Files / notes touched: `Projects/hotspot-privacy/hotspot-privacy.md`; `Projects/hotspot-privacy/Commits/2026-04-26 2331 - initial-hotspot-routing-research.md`
- Scope impact: Project
- Outcome: Established that the Ethernet interface appearing on Windows simply reflects USB tether activation, not a guarantee of better speed.
- Follow-up impact: The next useful step is troubleshooting whether the slowdown comes from PairVPN tunnel mode, iPhone power state, cable/USB link quality, or plain cellular variability.

## Scope Notes
- Global notes created or updated:
- Machine notes created or updated:
- Project notes created or updated: `Projects/hotspot-privacy/hotspot-privacy.md`

## Handoff / Closeout
- Current state: Research complete enough for the first answer.
- Open issues: Exact threat model remains slightly ambiguous.
- Suggested next prompt: "I care about websites seeing the same IP" or "I care about someone on the same network seeing only the iPhone."
