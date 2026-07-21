# Getting User Input in Node.js — Reading stdin with `fs`

## What is it?
This is a more low-level way to read user input in Node.js: using the built-in `fs` (file system) module to read directly from **file descriptor `0`**, which is the technical name for "standard input" (`stdin`) — the stream of whatever the user types into the terminal. It treats keyboard input almost like reading from a file.

## Why do we need it?
This shows that "reading input" in Node isn't magic — under the hood, the terminal's keyboard input is just another readable stream, the same kind of thing you'd use to read a file. Knowing this technique is useful for understanding how the higher-level tools (`readline`, `prompt-sync`) work internally, and it also happens to be a common trick for quick scripts or reading **piped** input (e.g. `echo 15 | node 51_FS.js`).

## Syntax
```js
const data = require('fs').readFileSync(0, 'utf8');
// 0  -> file descriptor for standard input (stdin)
// 'utf8' -> decode the raw bytes as text
```

## Example
```js
console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);

// In the terminal:
// Type 15
// Press Enter
// Press Ctrl+D
```

## Line-by-Line Explanation
- `console.log("Enter the number!");` — prints a message asking the user to type something, before we start waiting for input.
- `const data = require('fs').readFileSync(0, 'utf8');` — loads Node's built-in `fs` module and immediately calls `readFileSync`, telling it to read from file descriptor `0` (standard input) rather than an actual file on disk. This call **blocks** (pauses) the program until it receives an "end of input" signal from the terminal.
  - `'utf8'` tells it to decode the incoming bytes as text, so `data` ends up as a readable string instead of raw binary data.
- `console.log("Hi", data);` — prints a greeting followed by whatever text was read from stdin.
- The comment at the bottom explains how to actually use this in a real terminal: type a value (e.g. `15`), press Enter, and then press **Ctrl+D** (on Windows, sometimes `Ctrl+Z` then Enter) to signal "no more input is coming" — that signal is what makes `readFileSync(0, ...)` finally stop waiting and return.

## Why the Output Occurs
Unlike `prompt()` or `readline`, this method doesn't stop after one line of input — it keeps reading from stdin until it receives an explicit "end of stream" signal (Ctrl+D). So if the user types `15` and presses Enter, then presses Ctrl+D:
1. `readFileSync(0, 'utf8')` collects everything typed so far — in this case, `"15\n"` (the number, plus the newline character from pressing Enter).
2. `data` becomes that string.
3. `console.log("Hi", data)` prints `Hi 15` followed by a blank line (from the trailing `\n` in `data`), since `console.log` with multiple comma-separated arguments prints them space-separated.

## Operator(s) / Concept Summary
| Concept | Meaning | Notes |
|---|---|---|
| `require('fs')` | Loads Node's built-in file system module | No installation needed |
| `readFileSync(0, 'utf8')` | Synchronously reads all input from file descriptor `0` (stdin), decoded as text | Blocks/pauses until it sees "end of input" |
| File descriptor `0` | The operating system's standard identifier for "standard input" | `1` = standard output, `2` = standard error, by the same convention |
| `Ctrl+D` (or `Ctrl+Z` + Enter on Windows) | Signals "end of input" from the terminal | Required for `readFileSync(0, ...)` to stop waiting and return |

**Key difference from the other files in this chapter:** this reads the *entire* input stream until it's explicitly closed, rather than just "one line, then continue" like `readline` or `prompt-sync` do.
