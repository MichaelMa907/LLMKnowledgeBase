# LLMKnowledgeBase

Starter Obsidian-based knowledge base for Codex, Claude, and future agents.

## Repository Role
- `main` is the explicit release branch.
- `dev` is the staging branch for tracked starter-vault changes before release.
- The public repo is intentionally a starter surface with one system reference project, not a mirror of one machine's live vault history.

## What The Release Includes
- `AGENTS.md` and `CLAUDE.md` for the shared operating protocol.
- `Templates/` for project, commit, and learned-note scaffolding.
- `Scripts/update-knowledge-base.mjs` for rebuilding generated views locally.
- `Projects/llm-knowledge-base-system/` as the built-in system reference and sample project, including its learned notes.
- Empty starter directories for `Globals/`, `Machines/`, and `User/`.

## What Stays Local
- Real project history under `Projects/`, except for the included `Projects/llm-knowledge-base-system/` reference project.
- Machine-specific notes under `Machines/`.
- User profile content under `User/`.
- `.obsidian/` workspace settings and generated files such as `activeProjects.md`, `inactiveProjects.md`, `Globals/globalIndex.md`, and `Scripts/knowledge-base-state.json`.

## Setup
1. Install Node.js if `node --version` does not work in your terminal.
2. Clone this repo to the folder where you want the vault to live.
3. Open the cloned folder in Obsidian if you use Obsidian.
4. Run the setup command from the repo root to generate local indexes and the cache:

```powershell
.\Scripts\setup-knowledge-base.ps1
```

Or on Windows without PowerShell:

```bat
Scripts\setup-knowledge-base.cmd
```

Or directly with Node:

```bash
node Scripts/update-knowledge-base.mjs --full
```

The setup command generates local files such as `activeProjects.md`, `inactiveProjects.md`, `Globals/globalIndex.md`, and `Scripts/knowledge-base-state.json`. It builds `Globals/globalIndex.md` from learned notes marked `global: true`, including the learned notes in `Projects/llm-knowledge-base-system/Learned/`. These files are intentionally ignored by git.

## Agent Entrypoint Setup
Add an instruction block like this to the global instruction file for each agent you want to use with the vault. Replace the example path with the absolute path to your clone.

For Codex, put this in the Codex instruction file that is loaded before your sessions:

```markdown
## LLMKnowledgeBase
If any request or prompt requires reading or writing Codex memory, such as creating or continuing a project, reading a previous workflow, or updating learned notes, use the knowledge base at `C:\Users\<you>\Projects\LLMKnowledgeBase` and follow `C:\Users\<you>\Projects\LLMKnowledgeBase\AGENTS.md`.
## LLMKnowledgeBase
```

For Claude, put this in the Claude instruction file that is loaded before your sessions:

```markdown
## LLMKnowledgeBase
If any request or prompt requires reading or writing Claude memory, such as creating or continuing a project, reading a previous workflow, or updating learned notes, use the knowledge base at `C:\Users\<you>\Projects\LLMKnowledgeBase` and follow `C:\Users\<you>\Projects\LLMKnowledgeBase\CLAUDE.md`.
## LLMKnowledgeBase
```

Use the equivalent absolute path format for macOS or Linux, for example `/Users/<you>/Projects/LLMKnowledgeBase`.

## First Local Notes
After setup, create local notes for private user and machine context as needed. These are intentionally ignored by git.

- `User/User.md` stores a small profile for durable user preferences.
- `Machines/<machine-id>/Learned/` stores machine-specific facts such as installed tools, local paths, and runtime quirks.
- New project folders go under `Projects/<project-slug>/`.

Run `node Scripts/update-knowledge-base.mjs --full` again after adding or changing local notes if you want every generated index rebuilt from disk. During normal agent work, agents should run the updater with the smallest changed root, for example:

```bash
node Scripts/update-knowledge-base.mjs --changed Projects/<project-slug>
```
