---
note_type: learned
title: "Starter Release Repo Omits Live Vault Data"
learn_id: "2026-04-27-0127-starter-release-repo-omits-live-vault-data"
summary: "The public GitHub release should track reusable starter-vault assets plus the `llm-knowledge-base-system` reference project, while omitting ordinary project history, machine notes, user profile data, Obsidian config, and generated root/global/cache files by default."
scope: "global"
global: true
importance: 0.92
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-27 0127 - starter-release-surface-cleanup.md"
category: "workflow"
source: "verification"
confidence: 0.97
created: "2026-04-27 01:27"
last_updated: "2026-04-27 01:27"
status: "active"
tags:
  - learned
---

# Starter Release Repo Omits Live Vault Data

## Scope
- Applies at: global
- Why this scope is correct: this rule governs how the knowledge-base repo should be published for reuse on any machine, not just this one vault instance.
- Promotion or demotion notes: keep global unless the repo later gains a separate export format that supersedes the starter-release model.

## Truth
- What is true: the public GitHub repo should track reusable starter-vault assets such as `AGENTS.md`, `CLAUDE.md`, `Templates/`, `Scripts/update-knowledge-base.mjs`, top-level documentation, empty starter directories, and `Projects/llm-knowledge-base-system/` as the system reference/sample project; do not track ordinary live `Projects/`, machine-scoped notes, `User/User.md`, `.obsidian/`, or generated root/global/cache files in the release branch unless the user explicitly asks for a non-starter export.
- Why it matters: publishing live vault contents leaks private task history and machine-specific state, and it makes the repo look like a personal data dump instead of a reusable knowledge-base framework.
- When to reuse it: reuse whenever the repo publishing surface, release process, or `.gitignore` rules are being changed or audited.

## Evidence
- How this was learned: verified from the tracked file list that the repo had published ordinary project notes, machine notes, user profile data, Obsidian settings, and generated files; then corrected the ignore rules and removed those paths from the git index while keeping the local files on disk, with `Projects/llm-knowledge-base-system/` restored as the intended reference project.
- Limits or caveats: generated root/global indexes are still local/regenerable by default, so a fresh clone should run the updater after local notes are added.
- Re-check trigger: re-check if the repo starts shipping sample content, a bootstrap package, or a scripted release/export workflow.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-27 0127 - starter-release-surface-cleanup]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-26 2341 - portable-bootstrap-excludes-project-and-machine-data.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-27 0018 - github-publishing-uses-dev-and-main-release-gates.md`
- Related files or references: `.gitignore`, `README.md`, `AGENTS.md`, `CLAUDE.md`

## Sources
- Repository state verified and corrected on 2026-04-27 in the live `LLMKnowledgeBase` vault.
