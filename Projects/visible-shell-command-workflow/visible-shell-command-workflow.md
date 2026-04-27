---
note_type: project
title: "Visible Shell Command Workflow"
project_id: "2026-04-21-visible-shell-command-workflow"
project_slug: "visible-shell-command-workflow"
project_type: "workflow"
created: "2026-04-21 01:02"
last_active: "2026-04-21 19:30"
last_session: "2026-04-21 19:30"
resolved: true
status: "resolved"
sessions_count: 2
commit_threads_count: 2
total_prompt_entries: 7
project_folder: "Projects/visible-shell-command-workflow/"
learned_folder: "Projects/visible-shell-command-workflow/Learned/"
current_commit_thread: "Projects/visible-shell-command-workflow/Commits/2026-04-21 1846 - launch-codex-in-visible-shell.md"
matching_mode: "default_new_unless_explicit_continue"
scope_summary: "Reusable Windows workflow for opening a visible PowerShell window, keeping it alive, sending later commands into that same shell, and verifying results with a per-session transcript."
reuse_when: "Reuse this project when the user wants a watchable Windows shell that Codex can continue controlling after launch."
do_not_merge_with: "Do not merge this workflow with ordinary task projects that merely happen to use shell commands."
merge_status: "none"
agents_touched:
  - "Codex"
tags:
  - project
---

# Visible Shell Command Workflow

## Overview
- Canonical objective: preserve a reusable workflow for opening a visible PowerShell window, keeping that exact shell alive, and sending later commands into it while the user watches.
- Why this project exists: the user wanted more than a one-shot visible demo and explicitly asked whether Codex could keep control of the same shell for later commands such as `npm -v`.
- Current owner agent: Codex
- Workflow note: this is a workflow project and the front page is the canonical reusable procedure.

## Workflow
- Workflow role: start a visible PowerShell session that stays open, track its exact identity, queue later commands into that same shell, and verify outputs through a per-session transcript plus command-status files.
- When to use it: use this when the user wants to watch commands execute in a real Windows shell and then ask for additional commands in that exact same window.
- Preconditions: Windows desktop session, `powershell.exe`, and write access to the workflow project folder so the visible shell can watch a per-session command directory.
- Expected result: a visible PowerShell window opens and stays open, Codex can run later commands in that exact shell, and the session transcript records both the command and its output.
- Verification status: re-verified on 2026-04-21 on `MICHAEL-ROG`; the live shell at PID `3740` consumed queued commands from `Projects/visible-shell-command-workflow/live-visible-shell-commands-20260421-192906`, recorded `Write-Host '__QUEUE_OK__'` in `Projects/visible-shell-command-workflow/live-visible-shell-20260421-192906.txt`, and launched `codex` from `C:\Users\micha`, leaving `node.exe` PID `14692` running after startup.
- Known limits: this still is not a native attached PTY; monitoring is transcript-plus-status-file based rather than direct terminal state capture, and interactive TUIs such as `codex` are only indirectly observable once running.
1. Start a fresh live session with `Projects/visible-shell-command-workflow/start-live-visible-shell.ps1`. This opens a visible PowerShell window with `-ExecutionPolicy Bypass`, creates a unique window title, transcript path, and command-directory path, and writes the current PID plus those metadata paths into the project folder.
2. Wait until the session transcript path from `Projects/visible-shell-command-workflow/live-visible-shell.transcript.txt` exists on disk and the command-directory path from `Projects/visible-shell-command-workflow/live-visible-shell.command-dir.txt` is present. That confirms the visible shell started and the command queue is ready.
3. Send a command into that exact shell with `Projects/visible-shell-command-workflow/send-live-visible-shell-command.ps1 -Command '<command>'`. The sender script writes the command into the current session command directory and waits for a matching `.started.json` file that proves the visible shell picked it up.
4. Read the current session transcript path from `Projects/visible-shell-command-workflow/live-visible-shell.transcript.txt` and inspect the per-command `.started.json` or `.done.json` files in the current command directory to verify pickup, completion, or both.
5. Leave the window open for further commands, or stop the transcript manually inside the visible shell when the session is complete.

## Matching
- Scope summary: reusable Windows visible-shell control workflow with same-shell queued command delivery and transcript verification.
- Reuse this project when: the user wants a shell they can watch and later instruct Codex to run more commands in without opening a new window.
- Do not merge with: terminal setup, shell configuration, or repo task projects that are not about the visible-shell control workflow itself.
- Merge candidates to review with the user: none right now.
- Merge decision status: not needed.

## Goals
- Open a visible shell window the user can watch.
- Keep control of that exact shell after launch.
- Verify same-shell command execution with transcript-backed evidence.

## Problems
- The normal Codex shell tool is not user-visible.
- A one-shot launch is weaker than the user asked for because it does not preserve later control of the exact same shell.

## Constraints
- Keep the workflow harmless and reversible.
- Preserve a visible shell window rather than replacing it with a hidden background process.
- Use the knowledge-base workflow and save the result as a real workflow project.

## Success Criteria
- A visible PowerShell window opens and stays open.
- Later commands can be delivered into that exact same shell.
- The transcript from that exact shell proves what ran.
- The front page is enough for a future agent to reuse the workflow.

## Current State
- Stable state right now: the current canonical method is the queue-backed live-control workflow built around `start-live-visible-shell.ps1`, `visible-shell-live-session.ps1`, and `send-live-visible-shell-command.ps1`. It is re-verified and still marked done; `Projects/visible-shell-command-workflow/live-visible-shell-20260421-192906.txt` contains the verified queue probe and the queued `codex` launch line, while `Projects/visible-shell-command-workflow/live-visible-shell-commands-20260421-192906/20260421-192934-029.command.started.json` proves the visible shell picked up the `codex` command.
- What changed this session: reopened the workflow to launch `codex` in a visible shell, discovered that the older clipboard/window-focus sender misdirected commands in this environment, replaced it with a per-session command-directory queue, verified the queue with `Write-Host '__QUEUE_OK__'`, launched `codex` from `C:\Users\micha`, and cleaned up the first failed shell from this run.
- Remaining risk: transcript and status files prove command pickup and launch, but they do not expose full live state from inside interactive terminal UIs once those tools are running.

## Resolution
- Current resolution state: resolved and done.
- Why this is resolved or unresolved: the workflow now supports later commands in the same visible shell without relying on focus-stealing GUI injection, and this session directly used it to launch `codex` in a visible PowerShell window for the user.
- Reopen when: the user wants a Windows Terminal variant, a true attached PTY, or richer live state from interactive tools than transcript-plus-status verification can provide.

## Next Steps
- No immediate work. Reuse the live session scripts for future visible-shell commands by queueing them through `send-live-visible-shell-command.ps1`, or start a fresh live session when the current window is no longer the one the user wants to control.

## Session Index
| Session Start | Last Prompt | Agent | Session ID | Commit Thread | Prompt Count | Status | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-21 18:46 | 2026-04-21 19:30 | Codex | `2026-04-21-visible-shell-codex-queue` | [[Projects/visible-shell-command-workflow/Commits/2026-04-21 1846 - launch-codex-in-visible-shell]] | 3 | closed | Reworked visible-shell control to a queue-backed command path, launched a fresh visible shell, and started `codex` in it |
| 2026-04-21 01:02 | 2026-04-21 01:32 | Codex | `<current-session>` | [[Projects/visible-shell-command-workflow/Commits/2026-04-21 0102 - verify-visible-shell-command-control]] | 4 | closed | Verified visible-shell launch, proved later command injection into the same shell with `npm -v` and `node -v`, and saved the current method as the resolved workflow |

## Progress
> Add one progress bullet after every prompt.
>
> In the current session subsection only, you may rewrite or remove bullets that were fully reversed later in the same session so this section reflects stable state rather than temporary churn.
>
> Do not rewrite prior-session subsections. If an older session was wrong, add a new correction entry instead.

### Session 2026-04-21 - Codex - <current-session>
- [01:02] Proved a visible PowerShell window could be opened and run a harmless scripted command sequence with a transcript.
- [01:09] Upgraded the workflow to a live controllable visible shell and verified same-shell command injection with `npm -v`, which returned `11.11.0`.
- [01:31] Ran `node -v` in the same still-open live shell and verified transcript output `v24.14.1`.
- [01:32] Saved the current live-control method as the canonical workflow and closed the project as done/resolved.

### Session 2026-04-21 - Codex - 2026-04-21-visible-shell-codex-queue
- [18:46] Reopened the workflow to start a visible shell and run `codex`, and confirmed the saved clipboard/window-focus sender did not reliably deliver commands in this environment.
- [18:46] Kept the work in this existing workflow project after reading the front-page procedure and the machine-scoped learned note, because the issue was with the saved sender implementation rather than project matching.
- [19:30] Reworked the workflow to use a per-session command directory, verified queue pickup with `Write-Host '__QUEUE_OK__'`, launched `codex` from `C:\Users\micha`, and left the working visible shell open.

## Commit Threads
- [[Projects/visible-shell-command-workflow/Commits/2026-04-21 1846 - launch-codex-in-visible-shell]] - closed - 2026-04-21 18:46
- [[Projects/visible-shell-command-workflow/Commits/2026-04-21 0102 - verify-visible-shell-command-control]] - closed - 2026-04-21 01:02

## Scope Notes
- Global notes that affect this project: `Projects/llm-knowledge-base-system/Learned/2026-04-21 0039 - workflow-projects-store-canonical-procedure-on-front-page.md`
- Machine notes that affect this project: `Machines/MICHAEL-ROG/Learned/2026-04-21 0109 - visible-powershell-shell-can-be-controlled-after-launch.md`
- Project-scoped learned notes: none.
- Learned notes stored in this project: none.
- Generated learned view: `Projects/visible-shell-command-workflow/learnedIndex.md`

## References
- `Projects/visible-shell-command-workflow/start-live-visible-shell.ps1`
- `Projects/visible-shell-command-workflow/visible-shell-live-session.ps1`
- `Projects/visible-shell-command-workflow/send-live-visible-shell-command.ps1`
- `Projects/visible-shell-command-workflow/live-visible-shell.command-dir.txt`
- `Projects/visible-shell-command-workflow/run-visible-shell-demo.ps1`
- `Projects/visible-shell-command-workflow/visible-shell-demo-transcript.txt`
- `Projects/visible-shell-command-workflow/live-visible-shell-20260421-010825.txt`
- `Projects/visible-shell-command-workflow/live-visible-shell-20260421-192906.txt`
- `Templates/Project.md`
- `Templates/Commit.md`
- `Templates/Learned.md`
