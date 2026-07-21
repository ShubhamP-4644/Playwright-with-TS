# Getting User Input in the Browser — `prompt()`

## What is it?
`prompt()` is a built-in **browser** function that pops up a small dialog box asking the user to type something in, then hands that typed text back to your code as a **string**. It's one of the simplest possible ways to ask a real person for input directly on a web page.

## Why do we need it?
Programs are far more useful when they can react to what a person actually types, instead of only working with values that are hard-coded in the file. `prompt()` is the quickest way to experiment with "take input, then do something with it" — like checking whether a typed number is even or odd.

**Important environment note:** `prompt()` only works when JavaScript is running **inside a web browser** (e.g. in the browser's developer console, or a script loaded by an HTML page). It does **not** exist when running a file with Node.js from a terminal (`node 48_JS.js`) — running it there will throw a `prompt is not defined` error. That's exactly why this chapter also shows other approaches (`readline`, `prompt-sync`, `fs`) for getting input when working in Node.js instead of a browser.

## Syntax
```js
let userInput = prompt("Message shown to the user:");
// userInput is ALWAYS a string, even if the person types digits
```

## Example
```js
let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
```

## Line-by-Line Explanation
- `let num = prompt("Enter a number:");` — shows a popup dialog with the message "Enter a number:" and a text box. Whatever the user types and confirms gets stored in `num` — but always as **text (a string)**, even if they type `15`.
- `num = Number(num);` — converts that string into an actual number, so math and comparisons work correctly. Without this step, `num` would still be the string `"15"` instead of the number `15`.
- `if (num % 2 === 0) { ... } else { ... }` — uses the modulus operator (`%`) to get the remainder when `num` is divided by `2`. If the remainder is exactly `0`, the number is even; otherwise, it's odd.
- `console.log(num + " is Even");` / `console.log(num + " is Odd");` — prints the result, concatenating the number with a descriptive label using the `+` string-concatenation operator.

## Why the Output Occurs
Suppose the user types `15` into the prompt:
1. `num` starts as the **string** `"15"`.
2. `Number(num)` converts it to the **number** `15`.
3. `15 % 2` evaluates to `1` (15 divided by 2 is 7 remainder 1), so `1 === 0` is `false`.
4. The `else` branch runs, printing: `15 is Odd`.

If the user instead typed `4`: `Number("4")` → `4`; `4 % 2` → `0`; `0 === 0` is `true`; the `if` branch runs, printing `4 is Even`.

## Operator(s) / Concept Summary
| Operator/Function | Meaning | Example | Result |
|---|---|---|---|
| `prompt(message)` | Shows a browser dialog and returns the typed text as a string | `prompt("Enter a number:")` | `"15"` (string) |
| `Number(value)` | Converts a string (or other value) into a number | `Number("15")` | `15` (number) |
| `%` (modulus) | Gives the remainder of a division — used here to test even/odd | `15 % 2` | `1` (odd) |
| `===` | Strict equality — checks value and type match | `1 === 0` | `false` |
