# LLMKnowledgeBase

Shared Obsidian-based knowledge base for Codex, Claude, and future agents.

## Repository Role
- `main` is the explicit release branch.
- `dev` is the default branch for routine tracked vault changes from a machine that has canonical repo write access.
- `.gitignore` defines which files are part of the public GitHub distribution surface and which stay local.

## Vault Layout
- `AGENTS.md` and `CLAUDE.md` hold the shared operating protocol.
- `Projects/` stores project notes, commits, and learned notes.
- `Machines/` stores machine-scoped learned notes.
- `User/User.md` stores the small shared user profile.
- `Templates/` holds note templates.
- `Scripts/update-knowledge-base.mjs` regenerates derived views.

## Notes
- After cloning, run `node Scripts/update-knowledge-base.mjs --full` if you want to rebuild all generated views from the local contents immediately.
- Local workspace state, incremental cache, `MichaelsNotes/` contents, and runtime shell artifacts stay untracked unless explicitly requested otherwise.
