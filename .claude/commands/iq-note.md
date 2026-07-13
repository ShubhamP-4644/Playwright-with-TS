---
description: Explain a concept and save it as a study note in IQ_Notes
---

The user's question/topic: $ARGUMENTS

Explain this concept clearly and save it as a markdown file in the `IQ_Notes/` folder, following the same style as `IQ_Notes/IQ_SourceCode_ByteCode_BinaryCode.md`:

1. Pick a concise filename in the form `IQ_<Topic>.md` (PascalCase/underscore, matching the topic).
2. If the question relates to code already present in this repo (e.g. a chapter file), reference and use it as the concrete example — read the actual file, don't invent one.
3. Structure the explanation as:
   - A short title (`# <Topic>`)
   - A "## Example" section using real code from the repo if relevant
   - A "## Comparison" section with a markdown table contrasting the key aspects/terms involved (definition, example, readability, execution, etc. — adapt columns to fit the concept)
   - If there's a natural sequence/flow (e.g. compilation pipeline, request lifecycle), add a small ASCII flow diagram section at the end
4. Keep it accurate and concise — no filler, no restating the obvious.
5. Save the file with Write, then tell the user the file path in one sentence — don't paste the whole content back into chat.
