# The `while` Loop (and a `for` Loop with an External Counter)

## What is it?

A `while` loop repeats a block of code **as long as a condition stays true**. Unlike a `for` loop, it doesn't have a built-in place for "init" and "update" - you manage the counter yourself, outside and inside the loop.

This file also shows that a `for` loop's INIT part is optional if the counter variable is already created beforehand - which makes a `for` loop and a `while` loop look and behave very similarly.

## Why do we need it?

The `for` loop (see [[IQ_For_Loop1]]) is great when you know exactly how the counter should be set up, checked, and updated, all in one line. But sometimes you want to set up your counter separately, or the loop's condition depends on something other than a simple counter (a user's answer, a file being found, etc.). The `while` loop gives you that flexibility: "keep going as long as this condition is true," full stop.

## Syntax

```js
while (CONDITION) {
    // code to repeat
    // something must eventually make CONDITION false, or this never stops
}
```

## Example - `09_Chapter_Loops/57_While1.js`

```js
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
```

### Part 1 - a `for` loop with an empty INIT

```js
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
```

- Line 1 (`let i = 0;`) creates the counter **outside** the loop, instead of inside the parentheses.
- Line 2's `for (; i < 10; i++)` has an **empty first slot** (no INIT) - notice the loop starts directly with a semicolon (`;`). That's allowed because `i` was already created beforehand; there's nothing left to "initialize" inside the loop itself.
- The CONDITION (`i < 10`) and UPDATE (`i++`) work exactly as in a normal `for` loop.
- Output: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`.

### Part 2 - the equivalent `while` loop

```js
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
```

| Line | Code | What it does |
|---|---|---|
| 1 | `let j = 0;` | Create the counter `j`, starting at `0` (this is the "init" step, done manually before the loop) |
| 2 | `while (j < 10)` | Before every repetition, check: is `j` still less than `10`? If yes, run the body. If no, stop. |
| 3 | `console.log(j);` | Print the current value of `j` |
| 4 | `j++;` | Increase `j` by 1 (this is the "update" step, done manually inside the loop body) |

Step by step, `j` goes `0, 1, 2, ..., 9`, printing each value, and stops once `j` becomes `10` (because `10 < 10` is `false`).

### Why the output occurs

Both loops print the exact same sequence: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`. That's because they use the same three ingredients (start at `0`, keep going while less than `10`, add `1` each time) - a `for` loop just bundles those three ingredients into one line, while a `while` loop spreads them out: init before the loop, condition in the `while(...)`, and update as the last line inside the loop body.

### The concept being demonstrated

- **`while` loop**: repeats as long as its condition is `true`. You are responsible for making sure the condition eventually becomes `false` (here, by writing `j++;` yourself inside the body) - if you forget it, you get an infinite loop.
- **`for` loop with empty INIT**: proves that a `for` loop's three parts (INIT, CONDITION, UPDATE) are really just three optional slots separated by semicolons - if the counter already exists, you can leave the INIT slot empty.

## Note

- With a `while` loop, forgetting `j++;` inside the body means `j` never changes, `j < 10` stays `true` forever, and the loop never stops. The increment step is easy to forget in a `while` loop because - unlike `for` - nothing forces you to write it in an obvious, fixed spot.
