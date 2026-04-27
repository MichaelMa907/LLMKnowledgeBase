# LLMKnowledgeBase

Starter Obsidian-based knowledge base for Codex, Claude, and future agents.

## Repository Role
- `main` is the explicit release branch.
- `dev` is the staging branch for tracked starter-vault changes before release.
- The public repo is intentionally a blank starter surface, not a mirror of one machine's live vault history.

## What The Release Includes
- `AGENTS.md` and `CLAUDE.md` for the shared operating protocol.
- `Templates/` for project, commit, and learned-note scaffolding.
- `Scripts/update-knowledge-base.mjs` for rebuilding generated views locally.
- Empty starter directories for `Globals/`, `Machines/`, `Projects/`, and `User/`.

## What Stays Local
- Real project history under `Projects/`.
- Machine-specific notes under `Machines/`.
- User profile content under `User/`.
- `.obsidian/` workspace settings and generated files such as `activeProjects.md`, `inactiveProjects.md`, `Globals/globalIndex.md`, and `Scripts/knowledge-base-state.json`.

## Setup
1. Clone the repo and open it in Obsidian if you use Obsidian.
2. Add your own `User/User.md` and project notes as needed.
3. Run `node Scripts/update-knowledge-base.mjs --full` after you create local notes to generate your local indexes and cache.
