---
note_type: project
title: "Keyboard Layout Recommendations"
project_id: "2026-04-25-keyboard-layout-recommendations"
project_slug: "keyboard-layout-recommendations"
project_type: "task"
created: "2026-04-25 17:53"
last_active: "2026-04-25 19:16"
last_session: "2026-04-25 19:16"
resolved: true
status: "resolved"
sessions_count: 1
commit_threads_count: 1
total_prompt_entries: 11
project_folder: "Projects/keyboard-layout-recommendations/"
learned_folder: "Projects/keyboard-layout-recommendations/Learned/"
current_commit_thread: "Projects/keyboard-layout-recommendations/Commits/2026-04-25 1753 - recommend-layout-options.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Recommend currently available keyboards that place thumb keys farther right, similar to the NuType F1-style preference the user described."
reuse_when: "Reuse when continuing this same keyboard-shopping question or refining options around Alice and split ergonomic layouts."
do_not_merge_with: "Separate from unrelated peripheral-shopping tasks unless the user explicitly continues this recommendation thread."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
  - keyboard
  - shopping
  - ergonomics
---

# Keyboard Layout Recommendations

## Overview
- Canonical objective: Recommend current keyboards with a bottom-row / thumb-key feel closer to `Alt` under `X` and a spacebar shifted right.
- Why this project exists: The user described a specific layout preference inspired by the NuType F1 and asked for recommendations.
- Current owner agent: Codex

## Matching
- Scope summary: Current product recommendations for Alice-layout and split ergonomic keyboards with more right-shifted thumb keys than a standard layout.
- Reuse this project when: Narrowing the shortlist further by budget, switch type, low-profile preference, or willingness to adapt to split / columnar layouts.
- Do not merge with: Generic keyboard theory or unrelated desk-setup shopping.
- Merge candidates to review with the user: None.
- Merge decision status: Not needed.

## Goals
- Identify the layout families that best match the described thumb-key preference.
- Recommend current products from official vendor pages.
- Separate the "closest familiar layout" options from the "better ergonomic but bigger adaptation" options.

## Problems
- The user's requested key geometry is niche and is not usually described in product listings with the exact "Alt under X" wording.
- Standard 60/65/75/TKL layouts usually will not match the requested bottom-row feel.

## Constraints
- Prefer currently available products from official sources.
- Keep the recommendations concise and practical.

## Success Criteria
- Explain which layout families actually match the request.
- Give a short, decision-oriented shortlist instead of a broad catalog.

## Current State
- Stable state right now: The geometry-pass pool now splits into two useful families. The strongest gaming option is the `AJAZZ` / `Attack Shark x AJAZZ` one-handed Hall-effect keypad family that matches the required two-edge layout while also offering `8000Hz`, `0.125ms`, and `0.01mm` actuation precision. Current official pages show the same board sold on `ajazzstore.com` as `AJAZZ AK029` and on `attackshark.com` as `ATTACK SHARK x AJAZZ AK029`, so the safe conclusion is that this keypad is at least a co-branded shared model; the pages alone do not prove full corporate identity between the two brands. For channel choice, the hardware case currently favors `Attack Shark` if its listing is cheaper, but the fulfillment case favors Amazon: `Attack Shark`'s current shipping pages are internally inconsistent for U.S. standard shipping, with one section saying `US warehouse ... United States ... 3-4 days` while another says in-stock orders ship within `3 working days` and standard shipping then takes `2-3 weeks` after shipment. That means there is no reliable basis to promise a Tuesday-style delivery date from the `Attack Shark` storefront unless checkout shows a concrete estimate or the buyer upgrades to express. Older but still geometry-matching compact boards include `Razer Joro`, `NuPhy NuType F1`, `NIZ Atom66`, and `Filco Majestouch Minila-R Convertible`. A newly compared fallback, the Amazon `RedThunder` 35-key one-handed keypad, is much weaker on paper than the `AJAZZ`: it is a membrane board with a claimed `3ms` response time, anti-ghosting, two macro layers, RGB, and plug-and-play support, but no magnetic switches, no rapid trigger, and no high-polling-rate claims. The local artifacts from this research live mainly in `C:\Users\micha\Downloads\` as manually saved reference images plus a couple of clipboard screenshots in `C:\Users\micha\AppData\Local\Temp\`. Strong gaming boards that were checked and rejected on geometry include `EPOMAKER HE30`, `KiiBOOM Cybrix29`, `Lemokey L0 HE`, `Keychron C0 HE`, and `Redragon K585 HE`.
- What changed this session: The search expanded from standard keyboards into one-handed gaming keypads after the user accepted that category.
- Remaining risk: The deepest remaining candidates may live on Amazon or smaller storefronts where product naming and specs are less consistent than major official brand pages.

## Resolution
- Current resolution state: Resolved with a geometry-only filter.
- Why this is resolved or unresolved: The user clarified that the key legends do not matter, so the result set should be based only on physical bottom-row alignment rather than whether the key is labeled `Alt`, `cmd`, or something else.
- Reopen when: The user wants the geometry interpreted even more strictly against additional product photos or wants gaming-first ranking within the geometry-matching pool.

## Next Steps
- Present the surviving passers in ranked buy order for gaming.
- Call out that some listings under the same model family show different rendered bottom rows, so the recommendation should point to the exact passing listings that were visually verified.
- Keep the earlier near-miss and fail pool separate for future reference.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-25 17:53 | 2026-04-26 08:56 | Codex | `codex-20260425-1753` | [[Projects/keyboard-layout-recommendations/Commits/2026-04-25 1753 - recommend-layout-options]] | 15 | closed | Expanded the hunt into one-handed gaming keypads after the user accepted that category, ranked the passers for gaming, compared a cheap RedThunder keypad against the AJAZZ family, clarified the current AJAZZ versus Attack Shark branding relationship, checked whether the cheaper Attack Shark storefront outweighs Amazon's faster delivery, and identified the local file locations used during the research |

## Progress
### Session 2026-04-25 - Codex - codex-20260425-1753
- [17:53] Opened this project and started [[Projects/keyboard-layout-recommendations/Commits/2026-04-25 1753 - recommend-layout-options]].
- [17:53] Identified Alice-layout boards as the closest familiar fit for the requested bottom row.
- [17:53] Identified ZSA Voyager, ZSA Moonlander, and Dygma Defy as stronger ergonomic matches when the user is willing to adapt.
- [18:04] User clarified that similarity to the `ROG Zephyrus G14 2025` layout matters more than generic ergonomics, so the shortlist shifted to low-profile laptop-like boards with Mac-style modifier geometry and remapping.
- [18:15] Verified the `G14` photo and candidate product images, confirming that cheap exact matches are rare; the closest budget mainstream options are `Keychron` low-profile boards, while the closest true gaming geometry match is `Wooting 60HE v2` with split spacebar.
- [18:25] Compared additional official product images for `Razer`, `Apple`, `Logitech`, `Satechi`, `NuPhy`, and `Keychron`, then grouped the findings into direct matches versus boards that require remapping to make the key next to the spacebar behave as `Alt`.
- [18:33] User confirmed the requirement is literal, so the `Keychron K3 Max` screenshot was rejected and the exact-only pool was narrowed further.
- [18:41] User clarified that legends do not matter, only the physical edges of the bottom-row buttons, so Mac-style boards such as the `K3 Max` were restored as geometry matches.
- [18:44] User posted the `Keychron K3 Max` product image for direct inspection against the geometry-only rule, so the judgment shifted from family-level inclusion to this specific image-based check.
- [18:47] User stated the exact rule explicitly: the button under `X` must end at `X`'s right edge and the next big button must start at `C`'s right edge.
- [19:00] A wider official-image pass reduced the verified passers to `NuType F1` and `Razer Joro`; boards such as `Keychron K3 Max`, `Apple Magic Keyboard`, `MK LowKey70`, `MelGeek O2`, and `Lofree Flow 2 84` were rejected as exact-rule failures.
- [19:10] Checked `Satechi Slim X1` directly from the official product image and rejected it under the exact two-edge rule.
- [19:16] User accepted one-handed gaming keypads, so the search reopened around keypad-style products and shifted toward a gaming-ranked final list.
- [19:16] The deeper keypad search found that `Attack Shark x AJAZZ AK029` and the Amazon `AJAZZ` one-handed magnetic keypad are the clearest gaming-first passers, while `EPOMAKER HE30`, `KiiBOOM Cybrix29`, `Lemokey L0 HE`, `Keychron C0 HE`, and `Redragon K585 HE` all fail the exact geometry despite stronger gaming specs.
- [19:25] Compared the user's Amazon `RedThunder` 35-key one-handed keypad against the `Attack Shark x AJAZZ AK029` and confirmed that the `RedThunder` is an older membrane design with macro keys and anti-ghosting, but far behind the `AJAZZ` family on switch technology and latency-focused specs.
- [19:29] Verified that the same keypad is listed on `ajazzstore.com` as `AJAZZ AK029` and on `attackshark.com` as `ATTACK SHARK x AJAZZ AK029`, so the reliable conclusion is co-branding or shared distribution rather than a proven single-brand identity.
- [19:34] Compared the buy-channel tradeoff between the Amazon `AJAZZ` listing and the cheaper `Attack Shark` storefront, noting that the storefront pages currently give conflicting U.S. standard-shipping guidance and therefore do not support a firm delivery-date promise.
- [08:56] Located the local artifacts from the research session: product-reference images were saved mostly under `C:\Users\micha\Downloads\`, while a couple of temporary clipboard screenshots landed in `C:\Users\micha\AppData\Local\Temp\`.

## Commit Threads
- [[Projects/keyboard-layout-recommendations/Commits/2026-04-25 1753 - recommend-layout-options]] - closed - 2026-04-25 17:53

## Scope Notes
- Global notes that affect this project:
- Machine notes that affect this project:
- Project-scoped learned notes:
- Learned notes stored in this project:
- Generated learned view: `Projects/keyboard-layout-recommendations/learnedIndex.md`
