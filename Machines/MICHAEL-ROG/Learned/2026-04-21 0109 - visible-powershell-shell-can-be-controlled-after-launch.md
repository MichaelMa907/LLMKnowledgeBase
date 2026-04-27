---
note_type: learned
title: "Visible PowerShell Shell Can Be Controlled After Launch"
learn_id: "2026-04-21-0109-visible-powershell-shell-can-be-controlled-after-launch"
summary: "On MICHAEL-ROG, Codex can keep controlling a visible PowerShell window after launch by having the visible shell watch a per-session command directory and verifying pickup through transcript and status files."
scope: "machine"
global: false
importance: 0.91
machine_id: "MICHAEL-ROG"
project_note: "Projects/visible-shell-command-workflow/visible-shell-command-workflow.md"
project_slug: "visible-shell-command-workflow"
commit_note: "Projects/visible-shell-command-workflow/Commits/2026-04-21 1846 - launch-codex-in-visible-shell.md"
category: "workflow"
source: "verification"
confidence: 0.95
created: "2026-04-21 01:09"
last_updated: "2026-04-21 19:30"
status: "active"
tags:
  - learned
---

# Visible PowerShell Shell Can Be Controlled After Launch

## Scope
- Applies at: machine.
- Why this scope is correct: the verified behavior depends on this Windows machine's PowerShell host, visible desktop shell behavior, and the file-backed queue pattern used by the session script.
- Promotion or demotion notes: keep machine-scoped unless the same mechanism is intentionally standardized and re-verified across other machines.

## Truth
- What is true: on `MICHAEL-ROG`, Codex can open a visible PowerShell window, keep it alive, and later run commands in that exact same shell more reliably by having the visible shell watch a per-session command directory and execute queued `.ps1` command files.
- Why it matters: this enables a user-visible shell workflow with continuity across prompts instead of only one-shot launch scripts.
- When to reuse it: reuse when the user wants to watch a visible PowerShell session and later ask for additional commands in that same window.

## Evidence
- How this was learned: the original focus-and-clipboard sender misdirected a `codex` launch attempt during the 2026-04-21 reuse session, so the workflow was reworked to start the visible shell with a per-session command directory. The new session verified queue pickup with `Write-Host '__QUEUE_OK__'`, then queued `Set-Location 'C:\Users\micha'; & 'C:\Users\micha\Packages\node-v24.14.1-win-x64\codex.ps1'`; the transcript `Projects/visible-shell-command-workflow/live-visible-shell-20260421-192906.txt` recorded the launch line, `20260421-192934-029.command.started.json` proved pickup, and `node.exe` PID `14692` stayed running after startup.
- Limits or caveats: this still is not a native terminal attachment API; it verifies command pickup and launch through transcript plus status files, and interactive TUIs such as `codex` are still only indirectly observable once running.
- Re-check trigger: re-check if the queue-backed session script stops consuming commands correctly, if interactive tools need richer live state than transcript-plus-process verification, or if a true attached PTY path becomes available.

## Links
- Origin project: `Projects/visible-shell-command-workflow/visible-shell-command-workflow.md`
- Origin commit: [[Projects/visible-shell-command-workflow/Commits/2026-04-21 1846 - launch-codex-in-visible-shell]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`
- Related files or references: `Projects/visible-shell-command-workflow/start-live-visible-shell.ps1`, `Projects/visible-shell-command-workflow/visible-shell-live-session.ps1`, `Projects/visible-shell-command-workflow/send-live-visible-shell-command.ps1`, `Projects/visible-shell-command-workflow/live-visible-shell.command-dir.txt`, `Projects/visible-shell-command-workflow/live-visible-shell-20260421-192906.txt`

## Sources
- Local verification on `MICHAEL-ROG` during the 2026-04-21 visible-shell workflow session.
