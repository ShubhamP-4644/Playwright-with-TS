# Getting User Input in Node.js — the `prompt-sync` Package

## What is it?
`prompt-sync` is a small third-party package (installed via `npm install prompt-sync`) that brings browser-style `prompt()` behavior into Node.js. Unlike Node's built-in `readline` (which is asynchronous and needs a callback), `prompt-sync` is **synchronous** — it pauses the program right there on that line and waits for the user to type an answer, then hands it straight back, just like the browser's `prompt()` does.

## Why do we need it?
Node's built-in `readline` works fine, but its asynchronous, callback-based style can feel awkward for small scripts where you just want a quick, linear "ask, then use the answer on the very next line" flow. `prompt-sync` gives you that simpler, synchronous style — at the cost of needing to install an external package, since it isn't built into Node.js itself.

## Syntax
```js
const prompt = require("prompt-sync")();   // set up the synchronous prompt function
let answer = prompt("Your question here: ");  // pauses and waits for typed input
```

## Example
```js
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

## Line-by-Line Explanation
- `const prompt = require("prompt-sync")();` — loads the `prompt-sync` package and immediately calls it (note the extra `()`) to get back a ready-to-use `prompt` function. (This package must be installed first with `npm install prompt-sync` — it is not part of Node.js itself.)
- `let num = Number(prompt("Enter a number: "));` — this line does two things at once, from the inside out:
  1. `prompt("Enter a number: ")` prints the message, pauses the program, and waits until the user types something and presses Enter — then returns whatever they typed, as a **string**.
  2. `Number(...)` immediately converts that string result into an actual number.
  - Both steps happen before `num` is ever assigned, so `num` ends up holding a ready-to-use number in one line.
- `if (num % 2 === 0) { ... } else { ... }` — the same even/odd check used throughout this chapter: divide by 2 using `%` (modulus) and see if the remainder is `0`.

## Why the Output Occurs
Suppose the user types `20` and presses Enter:
1. `prompt("Enter a number: ")` returns the string `"20"`.
2. `Number("20")` converts it to the number `20`.
3. `num` becomes `20`.
4. `20 % 2` evaluates to `0`, so `0 === 0` is `true`.
5. The `if` branch runs: `console.log("20 is Even")`.

## Operator(s) / Concept Summary
| Concept | Meaning | Notes |
|---|---|---|
| `require("prompt-sync")()` | Loads the package and creates a usable `prompt` function | Requires `npm install prompt-sync` first — not built into Node |
| `prompt(message)` | Pauses execution, shows `message`, and returns the typed text | Synchronous — behaves like the browser's `prompt()`, but works in a terminal |
| `Number(value)` | Converts the typed string into a number | Same conversion step seen in every file in this chapter |
| `%` (modulus) | Remainder of division, used for the even/odd check | `20 % 2` → `0` (even) |

**Key difference from `readline`:** `prompt-sync` reads on the *same line* you call it (synchronous, no callback needed), while `readline`'s `rl.question()` only gives you the answer later, inside a callback function (asynchronous).
