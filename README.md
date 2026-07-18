# Playwright-with-TS

Personal learning repo for JavaScript/TypeScript fundamentals and Playwright, organized as chapter-wise code examples plus a collection of interview-prep notes (`IQ_Notes`).

## Chapters

| Chapter | Topic | Files |
|---|---|---|
| [01_Chapter_Basics](01_Chapter_Basics) | Hello World / basics | `01_HelloWorld.js` |
| [02_Chapter_JS_Basics](02_Chapter_JS_Basics) | `let` and variable declarations | `02_let_concept.js` |
| [03_Chapter_Identifier](03_Chapter_Identifier) | Identifier rules, comments | `03_Identifier_Rules_Part1.js`, `04_Identifier_Rules_Part2.js`, `05_Comments.js`, `06_Identifier_IQ.js` |
| [04_Chapter_Literals](04_Chapter_Literals) | Literals, `null`/`undefined`, numbers | `07_Literals.js`, `08_Null_Undefined.js`, `09_Null_IQ.js`, `10_Literals_part2.js`, `11_Number.js`, `12_Number_Part2.js` |
| [05_Chapter_Operators](05_Chapter_Operators) | Data types, assignment/arithmetic/comparison/logical/ternary/typeof/increment/decrement/nullish-coalescing operators, interview questions | `13_DatatTypes.js`, `14_Assigment_Operator.js`, `15_Arithmetic_Operator.js`, `16_Comparison_Operator.js`, `17_Logical-Operators.js`, `18_Confusing_Comparison1.js`, `19_Confusing_Comparison2`, `20_Question_Interview.js`, `21_String_Operator.js`, `22_Ternary_Operator.js`, `23_Interview_Question.js`, `24_Interview_Question2.js`, `25_Interview_Question3.js`, `26_Interview_Question4.js`, `27_Interview_Question5.js`, `28_Nested_Ternary_Operator.js`, `29_IQ_NestedTernary1.js`, `30_IQ_NestedTernary2.js`, `31_TypeOf_Operator.js`, `32_Increment_Decrement_Operator.js`, `33_Advance_Increment.js`, `34_Increment_Part2.js`, `35_Decrement_Operator.js`, `36_Null_Coalescing_Operator.js` |

## IQ_Notes (Interview Prep / Concept Notes)

| Note | Topic |
|---|---|
| [IQ_SourceCode_ByteCode_BinaryCode.md](IQ_Notes/IQ_SourceCode_ByteCode_BinaryCode.md) | Source code vs byte code vs binary code |
| [IQ_JavaScriptEngine.md](IQ_Notes/IQ_JavaScriptEngine.md) | How the V8 JavaScript engine works |
| [IQ_Keywords.md](IQ_Notes/IQ_Keywords.md) | JavaScript keywords, categorized |
| [IQ_Identifier.md](IQ_Notes/IQ_Identifier.md) | Identifier naming rules |
| [IQ_Null_Vs_Undefined.md](IQ_Notes/IQ_Null_Vs_Undefined.md) | `null` vs `undefined` |
| [IQ_Commands_windows.md](IQ_Notes/IQ_Commands_windows.md) | VS Code shortcuts (Windows) |
| [IQ_Commands_mac.md](IQ_Notes/IQ_Commands_mac.md) | VS Code shortcuts (Mac) |
| [IQ_Prompt_Skills_Agent.md](IQ_Notes/IQ_Prompt_Skills_Agent.md) | Prompt vs Skill vs Agent |
| [IQ_DatatTypes.md](IQ_Notes/IQ_DatatTypes.md) | JavaScript data types (primitive vs reference) |
| [IQ_Assigment_Operator.md](IQ_Notes/IQ_Assigment_Operator.md) | Assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`) |
| [IQ_Arithmetic_Operator.md](IQ_Notes/IQ_Arithmetic_Operator.md) | Arithmetic operators (`+ - * / % **`) |
| [IQ_Comparison_Operator.md](IQ_Notes/IQ_Comparison_Operator.md) | Comparison operators (`==`, `===`, `!=`, `!==`, etc.) |
| [IQ_Logical-Operators.md](IQ_Notes/IQ_Logical-Operators.md) | Logical operators (`&&`, `\|\|`, `!`) |
| [IQ_Confusing_Comparison1.md](IQ_Notes/IQ_Confusing_Comparison1.md) | Confusing comparisons — empty string vs `0` |
| [IQ_Confusing_Comparison2.md](IQ_Notes/IQ_Confusing_Comparison2.md) | Confusing comparisons — `null` vs `undefined` |
| [IQ_Question_Interview.md](IQ_Notes/IQ_Question_Interview.md) | Loose vs strict equality interview question |
| [IQ_String_Operator.md](IQ_Notes/IQ_String_Operator.md) | String concatenation operator (`+`) |
| [IQ_Ternary_Operator.md](IQ_Notes/IQ_Ternary_Operator.md) | Ternary (conditional) operator |
| [IQ_Interview_Question.md](IQ_Notes/IQ_Interview_Question.md) | Ternary — test result pass/fail example |
| [IQ_Interview_Question2.md](IQ_Notes/IQ_Interview_Question2.md) | Ternary — environment-based URL selection |
| [IQ_Interview_Question3.md](IQ_Notes/IQ_Interview_Question3.md) | Ternary — CI vs local browser mode |
| [IQ_Interview_Question4.md](IQ_Notes/IQ_Interview_Question4.md) | Ternary — SLA check and template literals |
| [IQ_Interview_Question5.md](IQ_Notes/IQ_Interview_Question5.md) | Ternary — redundant boolean ternary |
| [IQ_Nested_Ternary_Operator.md](IQ_Notes/IQ_Nested_Ternary_Operator.md) | Nested ternary operator |
| [IQ_NestedTernary1.md](IQ_Notes/IQ_NestedTernary1.md) | Nested ternary — HTTP status code categorization |
| [IQ_NestedTernary2.md](IQ_Notes/IQ_NestedTernary2.md) | Nested ternary — temperature feel categorization |
| [IQ_TypeOf_Operator.md](IQ_Notes/IQ_TypeOf_Operator.md) | The `typeof` operator |
| [IQ_Increment_Decrement_Operator.md](IQ_Notes/IQ_Increment_Decrement_Operator.md) | Increment/decrement operators (`++`, `--`, pre vs post) |
| [IQ_Advance_Increment.md](IQ_Notes/IQ_Advance_Increment.md) | Advanced increment — multiple `++` in one expression |
| [IQ_Increment_Part2.md](IQ_Notes/IQ_Increment_Part2.md) | Increment/decrement interview-style puzzles |
| [IQ_Decrement_Operator.md](IQ_Notes/IQ_Decrement_Operator.md) | Decrement operator (pre vs post) |
| [IQ_Null_Coalescing_Operator.md](IQ_Notes/IQ_Null_Coalescing_Operator.md) | Nullish coalescing operator (`??`) |

## Custom Commands

- `/iq-note <topic>` — explains a concept and saves it as a new note under `IQ_Notes/`, following the same format as the notes above.
