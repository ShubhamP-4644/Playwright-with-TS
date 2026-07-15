# Prompt vs Skill vs Agent

## Simple Definitions

- **Prompt** → The raw input/instruction given to an LLM for a single request. It's just text telling the model what to do — no memory, no tools, no autonomy of its own.
- **Skill** → A reusable, packaged set of instructions/knowledge (often with a name/trigger) that teaches the model *how* to do a specific recurring task well. It's invoked on demand and executed by the same model — it doesn't run independently.
- **Agent** → An autonomous unit that can plan, use tools, make its own decisions across multiple steps, and run independently (sometimes in the background) to complete a broader goal — not just answer one prompt.

## Example (from this project)

```
Prompt  → "Explain the difference between null and undefined in a table"
          (a one-off instruction, answered directly)

Skill   → /iq-note <topic>
          (.claude/commands/iq-note.md — a reusable, saved instruction set
           that always follows the same steps: explain concept, save as
           IQ_Notes/IQ_<Topic>.md in a fixed format)

Agent   → The "Explore" or "general-purpose" agent spawned via the Agent tool
          to search the whole codebase, read multiple files, and return a
          synthesized answer — running its own multi-step loop independently,
          then reporting back a single result.
```

## Comparison Table

| Aspect | Prompt | Skill | Agent |
|---|---|---|---|
| Definition | A single instruction/question given to the model | A reusable, packaged instruction set for a specific recurring task | An autonomous entity that plans and executes multi-step work using tools |
| Scope | One-off, single request | Repeatable task template, triggered by name/keyword | Broad goal, can involve many steps/tool calls |
| Memory/State | None — exists only for that one exchange | None of its own — just structured instructions reused each time it's invoked | Can carry its own working context/state across multiple steps of a task |
| Uses tools? | Not by itself | Only if invoked in an environment that has tools available | Yes — actively decides which tools to call and when |
| Autonomy | None — the model responds passively to it | None — still executed step by step by the calling model/session | High — can independently decide next actions, retry, or run in the background |
| Example in this repo | "Create IQ_Keywords.md explaining JS keywords" | `/iq-note` slash command (`.claude/commands/iq-note.md`) | `Explore` agent searching the codebase and returning a synthesized report |
| Analogy | A single question you ask a person | A saved recipe/checklist you hand someone to follow every time | Hiring someone to independently go do a multi-step task and report back |

## Relationship Between Them

```
Prompt
  └── the basic unit of instruction

Skill
  └── a named, reusable prompt template/procedure
        (still executed by a single model turn-by-turn)

Agent
  └── a model given autonomy + tools to execute
        potentially many prompts/skills across multiple steps
        to achieve one larger goal
```
