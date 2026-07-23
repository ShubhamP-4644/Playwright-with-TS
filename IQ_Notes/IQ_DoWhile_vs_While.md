# `do...while` vs `while` - Same Code, Different Guarantee

## What is it?

This file uses the **exact same code** as [[IQ_While_Vs_For]] to make one specific point crystal clear: a `do...while` loop **guarantees at least one run** of its body, while a plain `while` loop does **not** - it can run zero times if its condition is false from the start.

## Why do we need it?

It's easy to think "`while` and `do...while` are basically the same thing, just written differently." This example proves they can produce **completely different results** even with identical starting values, purely because of *when* each one checks its condition (before vs. after the body runs).

## Syntax

```js
// while: check condition FIRST -> body may run 0 times
while (CONDITION) {
    // body
}

// do...while: run body FIRST, check condition AFTER -> body runs >= 1 time, always
do {
    // body
} while (CONDITION);
```

## Example - `09_Chapter_Loops/62_DoWhile_vs_While.js`

```js
let x = 10;
while (x < 10) {
    console.log(x);
    x++;
}

let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);
```

### Part 1 - `while (x < 10)` with `x` starting at `10`

| Step | What happens |
|---|---|
| Check condition | `x < 10` → `10 < 10` → `false` |
| Result | Condition fails on the very first check, so the body (`console.log(x); x++;`) **never runs** |

Nothing is printed for this loop, and `x` stays `10`.

### Part 2 - `do...while (a < 10)` with `a` starting at `10`

| Step | What happens |
|---|---|
| Run body (unconditionally) | `console.log(a)` prints `10`, then `a++` makes `a` become `11` |
| Check condition (after) | `a < 10` → `11 < 10` → `false` |
| Result | Loop stops, but it already printed once |

This loop prints `10` exactly once, even though the condition (`a < 10`) turns out to be false, because the check only happens **after** the first run.

### Why the output occurs

```
10
```

Only one line of output appears, and it comes from the `do...while` loop, not the `while` loop. Both loops start with their variable at `10` and use the identical condition shape (`< 10`), but they disagree on *when* to check that condition:

| | `while` | `do...while` |
|---|---|---|
| Condition checked | Before the body | After the body |
| Body guaranteed to run at least once? | No | Yes |
| Output in this example | Nothing | `10` |

### The concept being demonstrated

This is the defining behavioral difference between the two loop types:

- **`while`**: "look before you leap" - if the condition is already false, you never even start.
- **`do...while`**: "leap first, look after" - you always get one attempt, and only *subsequent* attempts depend on the condition.

## Note

- Use `do...while` when the action must happen at least once regardless of any condition (e.g., show a prompt once, then decide whether to repeat it).
- Use plain `while` when it's fine - or even required - to skip the action entirely if the condition starts out false (see [[IQ_While1]] and [[IQ_While2]] for typical `while` usage).
