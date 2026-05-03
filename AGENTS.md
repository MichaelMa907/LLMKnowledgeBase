# Codex Knowledge Base Protocol

This vault is a shared memory and truth system for Codex, Claude, and future agents. Raw history lives in commit threads, current stable state lives in project notes, cross-project truth is lifted into global or machine-scoped notes, and shared user metadata lives in `User/User.md`.

## Current Codex Environment
- This public starter file intentionally avoids machine-specific paths, hostnames, and installed-tool claims
- Store local Codex skills, MCP servers, runtime versions, and instruction-entrypoint details in `Machines/<machine-id>/Learned/` instead of publishing them in the starter release
- If Codex gains or loses a skill or MCP in a local vault, update the relevant machine-scoped note in the same task that changed the environment

## Truth Model
- `User/User.md` stores the canonical small shared user profile for cross-project identity, durable preferences, working style, and enduring interests
- `Globals/globalIndex.md` is a generated directory of learned notes marked `global: true`; it links to the real note files and is not their storage location
- `Machines/<machine-id>/Learned/` stores machine-specific truths, local constraints, installed-tool quirks, and workarounds
- `Projects/<project-slug>/` stores project-specific truth, current state, commit history, and the learned notes created from work inside that project
- Commit threads are episodic history, not the highest-precedence truth layer

## Truth Precedence
1. `User/User.md` for durable user-specific facts and preferences
2. Learned notes surfaced by `Globals/globalIndex.md` where `global: true`
3. `Machines/<machine-id>/Learned`
4. Project note current-state sections and project learned notes that are not global
5. Commit threads as append-only historical record

If two notes at the same scope conflict, prefer the more explicit and more recently updated note. If the conflict matters and is not clearly resolved by recency or clarity, ask the user instead of guessing.

## Vault Layout
- `User/User.md` is the canonical shared user profile note for all agents; default to keeping user memory in this single file unless the user explicitly asks for a broader structure
- `Projects/<project-slug>/<project-slug>.md` is the canonical project note created from `Templates/Project.md`
- `Projects/<project-slug>/MichaelsNotes/` is a user-owned notes folder reserved for Michael's manual notes and must exist in every real project folder
- `Projects/<project-slug>/Commits/<YYYY-MM-DD HHmm> - <commit-slug>.md` is one session-specific commit thread created from `Templates/Commit.md`
- `Projects/<project-slug>/Learned/<YYYY-MM-DD HHmm> - <learn-slug>.md` stores learned notes created from `Templates/Learned.md` for that project; notes marked `global: true` stay here and are indexed globally instead of being moved
- `Machines/<machine-id>/Learned/<YYYY-MM-DD HHmm> - <learn-slug>.md` stores machine-scoped learned notes created from `Templates/Learned.md`; if one is marked `global: true`, the global index links to it in place
- `Globals/globalIndex.md` is a generated global directory of links to notes marked `global: true`
- `Templates/Project.md`, `Templates/Commit.md`, and `Templates/Learned.md` are the source templates for this workflow
- `Scripts/update-knowledge-base.mjs` updates generated views from the changed roots passed to it
- `Scripts/knowledge-base-state.json` is the generated incremental state cache used by the updater script

## Generated Views
- `activeProjects.md` is generated from project metadata and lists unresolved projects touched within the last 30 days, sorted by `sessions_count` descending
- `inactiveProjects.md` is generated from project metadata and lists resolved projects plus stale projects not touched for more than 30 days, sorted by `last_active` descending
- `Globals/globalIndex.md` is generated from active learned notes where `global=true`; it links to the real learned files in their origin folders and is sorted by `importance` and `confidence`
- `Machines/<machine-id>/machineIndex.md` is generated from machine-scoped learned notes, sorted by `importance` and `confidence`
- `Projects/<project-slug>/learnedIndex.md` is generated from learned notes stored in that project's `Learned/` folder, sorted by `importance` and `confidence`
- Do not hand-edit generated index files or `Scripts/knowledge-base-state.json`

## Git Publishing Rules
- `.gitignore` defines the public GitHub distribution surface for this vault; ignored files stay local and must not be force-added by default
- The public GitHub repo is a starter release surface plus `Projects/llm-knowledge-base-system/` as the system reference project; do not track other live `Projects/`, `Machines/`, `User/`, `.obsidian/`, or generated root/global/cache files there unless the user explicitly asks for a non-starter export
- Do not create or maintain personal/external project folders in this public knowledge-base repo by default. If the user names an external project folder, work in that folder and keep only knowledge-base-system changes in `Projects/llm-knowledge-base-system/`.
- On a machine that has write access to the canonical GitHub repo for this vault, when a knowledge-base-wide change modifies tracked files, commit and push those changes to `dev`
- Push to `main` only when the user explicitly asks for a release or explicit main update
- Treat local Obsidian workspace state, live projects other than `Projects/llm-knowledge-base-system/`, all machine-scoped notes, `User/User.md`, generated root/global/cache files, runtime shell artifacts, and `Projects/*/MichaelsNotes/` contents as local-only unless the user explicitly asks otherwise

## External Project Boundary
- If a user task is about a separate personal, school, job, application, code, or research project, do not store that project as a live project under this repo unless the user explicitly asks to add it to the knowledge base.
- When the user gives a concrete external project path, treat that path as the project home. Read and write project artifacts there, not in `Projects/<project-slug>/` inside this vault.
- Use `Projects/llm-knowledge-base-system/` only for changes to this knowledge-base system itself: protocol edits, templates, scripts, release rules, and learned notes about operating the knowledge base.
- Retrieval from this vault is allowed when the user asks for prior context, but do not convert retrieved context into new personal project notes in this public repo by default.

## External Project Artifact Placement
- For an actual user project outside this knowledge-base vault, do not place loose Codex-created support files directly in the project root or arbitrary project folders.
- If a Codex-created file is important enough to keep with that external project but is not a normal source file, config file, asset, or document that belongs in the project's established structure, create or reuse `Codex's Corner/` inside that project and put the file there.
- Claude should use `Claude's Corner/` for the same purpose; do not put Codex artifacts in `Claude's Corner/` or Claude artifacts in `Codex's Corner/`.
- Keep truly temporary scratch artifacts in `C:\Users\micha\Temp` instead of a project corner folder.
- If the user explicitly names an exact destination, or the file is part of the project's real source tree and must live in a specific path for the project to work, use that destination and document it in the response.

## Project Matching Rules
- Default to a new project unless the user explicitly says to continue a previous conversation, continue a known project, or work inside a named existing project
- If the user explicitly says this is a new project or new task, do not merge it into an older project even if it looks similar
- If overlap with an older project is detected later and the user did not explicitly mark the task as new, ask the user whether to merge before merging notes or histories
- Never auto-merge project histories silently
- Use the project note's `reuse_when`, `do_not_merge_with`, `scope_summary`, paths, systems, and repo hints to judge overlap

## Required Workflow Per Prompt
1. Decide whether the prompt explicitly continues an existing project; if not, default to a new project
2. Create or open the project note
3. If this session has not touched that project yet, create a new commit thread
4. Append one prompt entry to the active commit thread after every prompt
5. Update the project note metadata, progress, current state, and next steps
6. Lift durable truth to the right scope: global, machine, or project
7. Keep commit history append-only
8. Run `node Scripts/update-knowledge-base.mjs` with the smallest set of changed roots so generated views stay current

Use this command pattern after every prompt:
`node Scripts/update-knowledge-base.mjs --changed Projects/<project-slug>`

Add more `--changed` arguments only for the scopes that actually changed:
- `--changed Projects/<project-slug>/Learned`
- `--changed Machines/<machine-id>/Learned`

When creating a new project folder, also create `Projects/<project-slug>/MichaelsNotes/`.

If a legacy project is touched and `Projects/<project-slug>/MichaelsNotes/` is missing, create it in the same task that updates that project.

If a note with `global: true` was created, replaced, or deleted, include the root that actually contains that note, usually `Projects/<project-slug>` or `Machines/<machine-id>/Learned`; the updater will refresh `Globals/globalIndex.md` from there.

## Session-Start Retrieval
- At the start of every new session, read `AGENTS.md` and `User/User.md` if it exists before deciding what other retrieval is needed
- If the user explicitly continues a known project after that, resolve the project, then open the project note before doing deeper retrieval
- After opening the project note, read these sections first: `Overview`, `Current State`, `Workflow` when present, `Resolution`, `Next Steps`, `Session Index`, `Progress`, and `Scope Notes`
- Do not treat `Projects/<project-slug>/MichaelsNotes/` as mandatory default retrieval when opening a project; read it only when the user asks or when the agent judges it directly useful to the active task
- Create a new commit thread for that project once the match is confirmed for the new session
- Use generated indexes as retrieval surfaces, not as replacements for the real notes:
  - `Projects/<project-slug>/learnedIndex.md`
  - `Globals/globalIndex.md`
  - `Machines/<machine-id>/machineIndex.md` when machine context matters
- Do not read every global note, every learned note, or every commit by default
- Open the specific learned notes linked from the project note or indexes when they appear relevant or high-importance
- Do not replay all historical commits by default; read the most recent prior commit thread only when the project note and learned notes do not answer the current prompt or when unresolved recent context matters
- If `project_type: workflow`, treat the front-page `Workflow` section plus `Current State` as the canonical reusable procedure before falling back to older commits

## MichaelsNotes Rules
- `Projects/<project-slug>/MichaelsNotes/` is user-owned space for Michael's manual notes
- This protection is nonnegotiable for Codex, Claude, and future agents
- Never write, modify, move, rename, or delete `Projects/<project-slug>/MichaelsNotes/` or anything inside it unless the user explicitly asks for that exact change
- Never populate `MichaelsNotes/` with agent-created placeholders, summaries, or status files by default
- Reading `MichaelsNotes/` is allowed when the user asks or when the agent judges it directly useful to the active task, but it is not part of required session-start retrieval

## User Profile Rules
- `User/User.md` is the canonical shared user profile for all agents
- Keep `User/User.md` small and curated: at most 30 active entries total, merging overlap instead of growing by accumulation
- Store only durable cross-project user metadata there, such as identity, enduring collaboration preferences, stable strengths, and long-lived interests or dislikes
- Do not store project-specific tool choices, repo conventions, system editing rules, generated-view policy, or temporary task preferences in `User/User.md`; those belong in project notes or learned notes
- Default to a single-file user profile under `User/User.md`; do not split it into extra files or a larger tree unless the user explicitly asks or the single file can no longer stay concise
- When a new durable user fact is learned and is likely to matter across sessions, update `User/User.md` in the same task

## Scoped Truth Rules
- Use `scope: global` only for truths that should apply across projects; set `global: true` there, but keep the file in its origin project or machine learned folder
- Use `scope: machine` for truths that only apply on one machine, even if many projects depend on them
- Use `scope: project` for truths that are only relevant inside one project
- `global: true` controls inclusion in `Globals/globalIndex.md`; it does not move the file
- Add a short `summary` in learned frontmatter so generated indexes can show what a note is about without opening it
- `importance` and `confidence` drive generated learned-index ordering; higher values appear first
- Keep one durable truth per learned note instead of collapsing unrelated facts into one giant learned file
- Learned note bodies can stay lightweight as long as the truth, scope, reuse context, and links are clear

## Graph View Rules
- Use wiki links only for the simple structural graph the user should see:
- `activeProjects.md` may wiki-link active project notes
- `inactiveProjects.md` may wiki-link inactive project notes
- `activeProjects.md` and `inactiveProjects.md` may also end with `[[Templates/Project|Project]]` so both generated list hubs connect to the shared project-template node in the graph
- Project notes must not wiki-link commit threads; list commit thread paths as plain text or code-formatted paths so project pages do not become commit hubs
- Commit notes may wiki-link only their parent project
- Learned notes may wiki-link only one origin commit; origin projects, follow-up commits, related commits, related projects, and richer provenance must be plain text paths or non-linked references
- When a prompt discovered inside an ordinary project also requires updating shared protocol files, keep the learned note and origin commit attached to the project where the issue was discovered unless the user explicitly switches work into the knowledge-base-system project
- In real instantiated notes, live wiki links must be bare `[[...]]` links, never wrapped in backticks or other code formatting, or Obsidian will not treat them as links in the graph
- Keep richer relationships for agent reading as plain text paths, summaries, or non-linked references instead of extra wiki links
- Generated index files should list titles, summaries, and paths without wiki links so they do not become graph hubs
- Template files must not contain live placeholder wiki links such as `[[Projects/<project-slug>/<project-slug>]]`, because Obsidian will treat them as real graph edges and create phantom nodes
- In `Templates/*.md`, show placeholder link syntax inside backticks or plain text; when instantiating a real commit note or origin-commit learned link, replace those placeholders with bare live wiki links rather than leaving the backticks in place
- After changing graph-link behavior or doing a broad graph cleanup, run `node Scripts/audit-wikilinks.mjs` and fix every reported live wiki link before relying on Obsidian graph results

## Critical Vault Editing Conventions
- Do not hand-edit generated files such as `activeProjects.md`, `inactiveProjects.md`, `Globals/globalIndex.md`, `Machines/<machine-id>/machineIndex.md`, `Projects/<project-slug>/learnedIndex.md`, or `Scripts/knowledge-base-state.json`; update the real source notes and rerun `node Scripts/update-knowledge-base.mjs`
- Commit threads are append-only historical records; never delete or rewrite earlier prompt entries in them
- Keep wiki links structural only along the intended graph path: project lists to projects, commits to parent projects, and learned notes to one origin commit; keep richer relationships as plain text paths or non-linked references
- Preserve frontmatter readability when editing on Windows: do not use Windows PowerShell `Set-Content -Encoding utf8` for Markdown frontmatter files unless you also verify or strip the UTF-8 BOM; generated views depend on frontmatter being parseable from the first `---`
- Never leave a real live wiki link inside backticks, inline code, or fenced code blocks in instantiated notes; code-formatted wiki links are display text, not graph edges
- Template and instructional files must not contain live placeholder wiki links; keep placeholder link syntax in backticks or plain text so Obsidian does not create phantom nodes
- `Projects/<project-slug>/MichaelsNotes/` is protected user-owned space; never write, modify, move, rename, or delete it unless the user explicitly asks for that exact change

## Project Rules
- One commit thread equals one project within one agent session
- Commit threads are append-only; never delete or rewrite older prompt entries
- Project progress tracks stable state and may be cleaned up only within the current session when later prompts fully reverse temporary churn
- Earlier-session progress must not be rewritten
- Keep `resolved` accurate; the generator script uses it when building `activeProjects.md` and `inactiveProjects.md`

## Workflow Project Rules
- If the user asks to learn, document, or preserve a reusable procedure as a project, set `project_type: workflow`
- Mention in `Overview` that the note is a workflow or reference workflow project
- Store the full currently preferred procedure on the project front page in `Workflow` so a future agent can execute it without replaying the whole commit history
- Keep the front-page workflow updated to the latest verified procedure while commit threads preserve discovery history
- If the workflow is learned, verified, and has no immediate open work, set `resolved: true` and explain that outcome in the front-page `Resolution` section
- If the workflow is still experimental or blocked, keep `resolved: false` and list the missing verification or unknowns in `Next Steps`

## Multi-Agent Editing
- Prefer additive edits over replacing existing narrative
- Do not rewrite prior-session commit history
- Be conservative when changing shared metadata if another agent may also be working in the same project
- If a merge decision is needed, ask the user before collapsing projects together

## Maintenance Rules
- When a learned note introduces or clarifies a cross-vault editing invariant whose violation could corrupt the vault, create phantom graph nodes, break generated views or indexing, rewrite protected history, or alter user-owned content, promote the operational rule into both `AGENTS.md` and `CLAUDE.md` in the same task
- Keep the learned note as supporting rationale, provenance, examples, or edge-case context; do not rely on learned notes alone for critical editing invariants
- When promoting a critical invariant, place the concise command in the most relevant protocol section or in `Critical Vault Editing Conventions` if no better home exists
- Keep the storage and retrieval rules for `User/User.md` aligned across `AGENTS.md` and `CLAUDE.md`; it is a shared cross-agent memory surface
- Keep `AGENTS.md` and `CLAUDE.md` aligned on the shared workflow; only agent-specific capability sections should differ
- Keep `.gitignore` aligned with the intended GitHub distribution surface and the live `dev`/`main` publishing workflow
- Update this file whenever the Codex-specific skill list, MCP list, scope model, matching rules, or generator workflow changes
- Preserve append-only historical notes; do not clean up history by deleting prior work logs
