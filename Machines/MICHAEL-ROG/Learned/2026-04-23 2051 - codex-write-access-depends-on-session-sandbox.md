---
note_type: learned
title: "Codex Write Access Depends On Session Sandbox"
learn_id: "2026-04-23-2051-codex-write-access-depends-on-session-sandbox"
summary: "On MICHAEL-ROG, Codex can read trusted paths broadly, but write access outside the current workspace only exists when the session sandbox actually includes those paths or is full access."
scope: "machine"
global: false
importance: 0.89
machine_id: "MICHAEL-ROG"
project_note: "Projects/ultralight-mouse/ultralight-mouse.md"
project_slug: "ultralight-mouse"
commit_note: "Projects/ultralight-mouse/Commits/2026-04-23 2051 - install-project-into-knowledge-base.md"
category: "runtime"
source: "verification"
confidence: 0.98
created: "2026-04-23 20:51"
last_updated: "2026-04-23 20:51"
status: "active"
tags:
  - learned
  - codex
  - sandbox
  - permissions
---

# Codex Write Access Depends On Session Sandbox

## Scope
- Applies at: `Machines/MICHAEL-ROG`
- Why this scope is correct: The behavior depends on how Codex sessions are launched on this machine, not on any single project's content.
- Promotion or demotion notes: Keep this in machine scope unless multiple machines are confirmed to behave the same way.

## Truth
- What is true: Trusted-project entries in `C:\Users\micha\.codex\config.toml` do not grant write access by themselves. Codex can only write outside the current workspace when the active session is launched with those paths as writable roots, or when the session sandbox is actually full access.
- Why it matters: A session can appear permissive in the UI while still arriving at the agent as `workspace-write`, which causes writes to `C:\Users\micha\Projects\LLMKnowledgeBase` to fail even though reads succeed.
- When to reuse it: Reuse whenever Codex needs to modify the knowledge base or any sibling project outside the current working directory.

## Evidence
- How this was learned: One session on 2026-04-23 created the initial Ultralight Mouse knowledgebase record only as a local draft because writes to `C:\Users\micha\Projects\LLMKnowledgeBase` were rejected. A later session verified direct create/write/read/delete access once the runtime sandbox truly had full access.
- Limits or caveats: UI permission labels can be misleading if the spawned agent inherits a narrower sandbox than expected.
- Re-check trigger: Re-check if Codex permission handling changes in a future release or if `config.toml` semantics change.

## Links
- Origin project: `Projects/ultralight-mouse/ultralight-mouse.md`
- Origin commit: `Projects/ultralight-mouse/Commits/2026-04-23 2051 - install-project-into-knowledge-base.md`
- Related notes:
- Related files or references: `C:\Users\micha\.codex\config.toml`

## Sources
- Verified by direct file create/write/read/delete test against `C:\Users\micha\Projects\LLMKnowledgeBase` in the 2026-04-23 20:51 session.
