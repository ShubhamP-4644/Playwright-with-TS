# The `do...while` Loop

## What is it?

A `do...while` loop is like a `while` loop, but flipped: it **runs its body first**, and only checks the condition **afterward**, to decide whether to run again. This guarantees the body executes **at least once**, no matter what the condition is.

## Why do we need it?

Some tasks need to happen at least one time before you even have information to check a condition - like trying something once, then asking "should I retry?" A regular `while` loop can't guarantee that first run (it checks before doing anything), but `do...while` can.

## Syntax

```js
do {
    // code to repeat - runs at least once, guaranteed
} while (CONDITION);
```

Note the semicolon (`;`) after `while (CONDITION)` - it's required for a `do...while` loop, unlike a regular `while` loop.

## Example - `09_Chapter_Loops/61_Do_While.js`

```js
let retry = 0;
do {
    console.log("Execute a Code!");
    console.log("RETRYing.......", retry);
    retry++;
} while (retry < 3);
```

### Line-by-line explanation

| Line | Code | What it does |
|---|---|---|
| 1 | `let retry = 0;` | Create a counter `retry`, starting at `0` |
| 2 | `do {` | Start the loop body - this will run immediately, without checking anything first |
| 3 | `console.log("Execute a Code!");` | Print the text `"Execute a Code!"` |
| 4 | `console.log("RETRYing.......", retry);` | Print `"RETRYing......."` followed by the current value of `retry` |
| 5 | `retry++;` | Increase `retry` by 1 |
| 6 | `} while (retry < 3);` | Only **now**, after the body has run, check: is `retry` still less than `3`? If yes, go back and run the body again. If no, stop. |

### Why the output occurs

```
Execute a Code!
RETRYing....... 0
Execute a Code!
RETRYing....... 1
Execute a Code!
RETRYing....... 2
```

Walking through it:

- **1st run**: body executes unconditionally (`retry` is `0` at print time), then `retry` becomes `1`. Check: `1 < 3` → `true` → run again.
- **2nd run**: prints with `retry` at `1`, then `retry` becomes `2`. Check: `2 < 3` → `true` → run again.
- **3rd run**: prints with `retry` at `2`, then `retry` becomes `3`. Check: `3 < 3` → `false` → stop.

So the body runs exactly 3 times, printing `retry` values `0`, `1`, and `2` - and it would have run at least once even if the starting condition had been false, because the check happens **after** the first run, not before.

### The concept being demonstrated

`do...while` is a loop that guarantees **"run at least once, then keep repeating while the condition holds."** This is the opposite order from a regular `while` loop, which checks first and might skip the body entirely (compare with [[IQ_While_Vs_For]], where a `while` loop with an already-false condition runs zero times).

## Note

- The variable name `retry` and the message `"RETRYing......."` make the intent of this loop obvious: "try something up to 3 times."
- Don't forget the semicolon after `} while (retry < 3);` - it's part of the required `do...while` syntax.
