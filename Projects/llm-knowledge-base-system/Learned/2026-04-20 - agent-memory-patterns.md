---
note_type: learned
title: "Agent Memory Patterns"
learn_id: "2026-04-20-2228-agent-memory-patterns"
summary: "Summarizes common long-term memory patterns from agent systems and how they informed this vault design."
scope: "global"
global: true
importance: 0.70
machine_id: ""
project_note: "Projects/llm-knowledge-base-system/llm-knowledge-base-system.md"
project_slug: "llm-knowledge-base-system"
commit_note: "Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing.md"
category: "reference"
source: "research"
confidence: 0.90
created: "2026-04-20 22:28"
last_updated: "2026-04-20 22:28"
status: "active"
tags:
  - learned
---

# Agent Memory Patterns

## Scope
- Applies at: global
- Why this scope is correct: these are cross-project design patterns for how agent memory systems are normally structured.
- Promotion or demotion notes: keep global as reference guidance, but give it lower `importance` than hard workflow rules.

## Truth
- What is true: common memory systems separate short-lived conversational history from durable facts, use scoped memory such as user or app/session layers, and generate retrieval views instead of relying only on raw append-only logs.
- Why it matters: this supports using commit threads as episodic history, scoped truth notes for durable facts, and generated indexes for retrieval.
- When to reuse it: reuse when changing the vault architecture, retrieval strategy, or truth-layer design.

## Evidence
- How this was learned:
  - LangGraph documents semantic, episodic, and procedural memory, and distinguishes profile-style memory from collection-style memory.
  - Mem0 documents memory scopes such as user, session/run, and organization/application.
  - LlamaIndex documents short-term memory plus structured memory blocks for long-lived agent context.
  - Zep documents graph-based memory and fact extraction for long-term agent context.
  - MemMachine argues for preserving full episodes and optimizing retrieval rather than collapsing memory too aggressively during ingestion.
- Limits or caveats: this vault is intentionally more project-oriented than most generic memory systems, so the design adapts these patterns rather than copying them literally.
- Re-check trigger: re-check if the vault starts failing retrieval or if later automation needs stronger global-memory loading behavior.

## Links
- Origin project: `Projects/llm-knowledge-base-system/llm-knowledge-base-system.md`
- Origin commit: [[Projects/llm-knowledge-base-system/Commits/2026-04-20 2228 - tiered-memory-and-indexing]]
- Related notes: `Projects/llm-knowledge-base-system/Learned/2026-04-20 - truth-precedence.md`, `Projects/llm-knowledge-base-system/Learned/2026-04-20 - project-matching-and-merge-policy.md`
- Related files or references: `AGENTS.md`, `CLAUDE.md`

## Sources
- LangGraph memory docs: https://docs.langchain.com/oss/javascript/langgraph/memory
- Mem0 memory types docs: https://docs.mem0.ai/core-concepts/memory-types
- LlamaIndex memory docs: https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents/memory/
- Zep documentation: https://help.getzep.com/graphiti/graphiti/overview
- MemMachine paper: https://arxiv.org/abs/2501.07522
