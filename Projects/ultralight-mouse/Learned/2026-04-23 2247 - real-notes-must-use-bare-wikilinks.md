---
note_type: learned
title: "Real Notes Must Use Bare Wikilinks"
learn_id: "2026-04-23-2247-real-notes-must-use-bare-wikilinks"
summary: "Instantiated notes must use bare `[[...]]` wiki links instead of wrapping live links in code formatting, because Obsidian does not treat code-formatted wikilinks as graph edges."
scope: "global"
global: true
importance: 0.96
project_slug: "ultralight-mouse"
project_note: "Projects/ultralight-mouse/ultralight-mouse.md"
commit_note: "Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes.md"
category: "instruction"
source: "dogfooding"
confidence: 1.0
created: "2026-04-23 22:47"
last_updated: "2026-04-23 22:47"
status: "active"
tags:
  - learned
  - wiki-links
  - obsidian
  - graph
---

# Real Notes Must Use Bare Wikilinks

## Scope
- Applies at: `global`
- Why this scope is correct: the distinction between inert template placeholder syntax and live instantiated wiki links affects every project note, commit note, learned note, and instruction file in the vault.
- Promotion or demotion notes: this is a vault-critical authoring rule and should remain in both learned form and the shared protocol files.

## Truth
- What is true: template files may show placeholder `[[...]]` syntax inside backticks or plain text so Obsidian does not create phantom graph nodes from template examples, but instantiated real notes must strip that code formatting and use bare live wiki links.
- Why it matters: Obsidian does not treat code-formatted wikilinks as real links, so wrapping a live `[[...]]` in backticks breaks graph edges and note-link traversal even though the text still looks superficially correct.
- When to reuse it: reuse whenever editing templates, generating notes, or reviewing whether a wiki link should be live versus inert example text.

## Evidence
- How this was learned: a real `Ultralight Mouse` commit note and project note were instantiated from template-style examples with backticks still around the live `[[...]]` links, which made the expected graph edges disappear in Obsidian.
- Limits or caveats: this rule is about live wiki links in real notes; code formatting is still correct for placeholder examples inside templates and instructional files that should not create real graph edges.
- Re-check trigger: re-check if Obsidian changes how it interprets wiki links inside code formatting.

## Links
- Origin project: `Projects/ultralight-mouse/ultralight-mouse.md`
- Origin commit: [[Projects/ultralight-mouse/Commits/2026-04-23 2247 - bare-wikilinks-in-real-notes]]
- Related notes:
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 0137 - template-placeholders-must-not-be-live-wikilinks.md`
  `Projects/llm-knowledge-base-system/Learned/2026-04-21 2121 - critical-vault-invariants-belong-in-agent-protocol.md`
- Related files or references:
  `AGENTS.md`
  `CLAUDE.md`
  `Templates/Commit.md`
  `Templates/Project.md`

## Sources
- Dogfooded directly against the broken `Ultralight Mouse` notes on 2026-04-23 and confirmed by the user report about missing graph links in Obsidian.
