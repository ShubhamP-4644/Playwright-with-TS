# `while` Loop - A Practical Retry Counter

## What is it?

This file shows a very common real-world use of a `while` loop: **counting attempts**, like tracking how many times someone has tried to log in before giving up.

## Why do we need it?

Programs often need to repeat something a limited number of times and keep track of "which attempt is this?" - for example, retrying a failed network request, or letting a user retry a password. A `while` loop paired with a counter variable is a simple, common way to do this. (Compare with [[IQ_While1]] for the basic mechanics of a `while` loop.)

## Syntax

```js
let counter = 0;
while (counter < limit) {
    // do something, referencing counter if needed
    counter++;
}
```

## Example - `09_Chapter_Loops/58_While2.js`

```js
let attempts = 0; // Init

while (attempts < 3) {
    console.log("Attempt", attempts);
    attempts++;
}
```

### Line-by-line explanation

| Line | Code | What it does |
|---|---|---|
| 1 | `let attempts = 0; // Init` | Create a counter called `attempts`, starting at `0`. The comment `// Init` labels this as the initialization step. |
| 3 | `while (attempts < 3)` | Before every repetition, check: is `attempts` still less than `3`? |
| 4 | `console.log("Attempt", attempts);` | Print the text `"Attempt"` followed by the current value of `attempts`. Passing two arguments to `console.log` prints them space-separated on the same line. |
| 5 | `attempts++;` | Increase `attempts` by 1 |

### Why the output occurs

```
Attempt 0
Attempt 1
Attempt 2
```

- Iteration 1: `attempts` is `0`, condition `0 < 3` is `true` → prints `Attempt 0`, then `attempts` becomes `1`.
- Iteration 2: `attempts` is `1`, condition `1 < 3` is `true` → prints `Attempt 1`, then `attempts` becomes `2`.
- Iteration 3: `attempts` is `2`, condition `2 < 3` is `true` → prints `Attempt 2`, then `attempts` becomes `3`.
- Check again: `attempts` is `3`, condition `3 < 3` is `false` → loop stops.

So exactly **3 attempts** (numbered `0`, `1`, `2`) get logged, matching a real "you get 3 tries" scenario.

### The concept being demonstrated

This is the **`while` loop** used for a counting/retry pattern:

- The variable name `attempts` (instead of a generic `i` or `j`) makes the code's *purpose* obvious just from reading it - this is called giving a variable a **meaningful name**.
- `console.log("Attempt", attempts)` shows that `console.log` can take multiple arguments, printing them together separated by a space - useful for labeling a printed value instead of just printing the raw number.

## Note

- This is the same underlying mechanism as [[IQ_While1]] (condition-check, body, manual increment) - just applied to a meaningful real-world scenario (limited retry attempts) instead of a plain number sequence.
