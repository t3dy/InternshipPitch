---
name: Journey Audit
description: Analyzes conversation logs and artifacts to summarize learning milestones and technical growth.
---

# Journey Audit Skill

Use this skill to perform a deep-dive analysis of a "vibe coding" journey, extracting technical milestones, time estimates, and learning themes.

## Instructions

1. **Scan Logs**: Read all system-generated logs in the current conversation or specified directory.
2. **Identify Technical Milestones**:
    - Look for successful builds, deployments, or resolved blockers.
    - Categorize by CS concepts (IPC, State, Build, etc.).
3. **Calculate Time Metrics**:
    - Count chat turns (USER vs ASSISTANT).
    - Estimate human interaction duration vs background computer processing.
4. **Thematic Synthesis**:
    - Map the journey to external frameworks (e.g., Digital Humanities, PKD themes).
    - Identify the "current state" vs "starting state" of the project.

## Scripts & Tools

- Use `grep_search` to find specific technical keywords (e.g., "IPC", "Vite").
- Use `list_dir` to find all system-generated log files.
- Return a structured summary in Markdown format.
