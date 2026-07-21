# Getting User Input in Node.js — the `readline` Module

## What is it?
`readline` is a module that comes built into Node.js (no installation needed) for reading text that a user types into the terminal. Unlike the browser's `prompt()`, which pauses everything and hands back an answer immediately, `readline` works **asynchronously** — it asks a question, then keeps running other code, and only reacts to the answer once the user actually presses Enter, via a callback function.

## Why do we need it?
When running JavaScript with Node.js (outside a browser), there's no `prompt()` available. If you want a terminal program to interactively ask the user something (like a number to check), `readline` is the standard, built-in way to do it without installing any extra packages.

## Syntax
```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,   // read from the keyboard/terminal
    output: process.stdout  // write prompts back to the terminal
});

rl.question("Your question here: ", (answer) => {
    // this code runs ONLY after the user types something and hits Enter
    rl.close(); // always close when done, or the program keeps running forever
});
```

## Example
```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    rl.close();
});
```

## Line-by-Line Explanation
- `const readline = require("readline");` — loads Node's built-in `readline` module so we can use it.
- `const rl = readline.createInterface({ input: process.stdin, output: process.stdout });` — creates a "reader" connected to the terminal: `process.stdin` is where the user's typed keystrokes come from, and `process.stdout` is where prompts/messages are printed to.
- `rl.question("Enter a number: ", (input) => { ... });` — prints `"Enter a number: "` to the terminal and then **waits** for the user to type something and press Enter. Once they do, everything inside the `(input) => { ... }` function (called a callback) runs, with `input` holding whatever text the user typed — as a string.
- `let num = Number(input);` — converts the typed string into an actual number, exactly like the browser example.
- `if (num % 2 === 0) { ... } else { ... }` — same even/odd check as before, using the modulus operator (`%`).
- `rl.close();` — shuts down the reading interface. Without this line, the Node.js program would keep running indefinitely, waiting for more input that never comes.

## Why the Output Occurs
Suppose the user types `7` and presses Enter:
1. `input` becomes the string `"7"`.
2. `Number("7")` converts it to the number `7`.
3. `7 % 2` evaluates to `1` (remainder when 7 is divided by 2), so `1 === 0` is `false`.
4. The `else` branch runs: `console.log("7 is Odd")`.
5. `rl.close()` then ends the program cleanly.

## Operator(s) / Concept Summary
| Concept | Meaning | Notes |
|---|---|---|
| `require("readline")` | Loads Node's built-in input/output module | No installation needed — it ships with Node.js |
| `readline.createInterface({...})` | Sets up a connection between your code and the terminal | `input`/`output` point to the keyboard and screen |
| `rl.question(prompt, callback)` | Asks a question, then runs `callback` once the user responds | Asynchronous — the rest of the file can keep running while it waits |
| `rl.close()` | Ends the input session | Required, or the program hangs waiting for more input |
| `%` (modulus) | Remainder of division, used for the even/odd check | Same as in the browser example |

**Key difference from `prompt()`:** `readline` is asynchronous (answer arrives later, inside a callback) and only works in Node.js, whereas `prompt()` is synchronous (pauses and waits immediately) and only works in a browser.
