# `while` vs `do...while` - Does the Condition Get Checked Before or After?

## What is it?

This file compares a `while` loop and a `do...while` loop using the **same starting value and the same false condition**, to highlight their one key difference: **when** the condition gets checked.

> Note: although the file is named `While_Vs_For`, the actual code inside compares `while` against `do...while`, not `for` - the explanation below follows the real code.

## Why do we need it?

At first glance, `while` and `do...while` look almost identical - both repeat code based on a condition. But they check that condition at **opposite ends** of the loop, and that difference can completely change whether the loop's body runs even once. Seeing them side-by-side with an already-false condition makes that difference obvious.

## Syntax

```js
// while: condition checked BEFORE the body - may run zero times
while (CONDITION) {
    // body
}

// do...while: condition checked AFTER the body - always runs at least once
do {
    // body
} while (CONDITION);
```

## Example - `09_Chapter_Loops/60_While_Vs_For.js`

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

### Part 1 - `while` loop

```js
let x = 10;
while (x < 10) {
    console.log(x);
    x++;
}
```

- `x` starts at `10`.
- Before running the body **even once**, JavaScript checks `x < 10` → `10 < 10` → **`false`**.
- Because a `while` loop checks its condition **first**, and it's already false, the body **never runs**. Nothing is printed, `x` stays `10` forever (in this snippet).

### Part 2 - `do...while` loop

```js
let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);
```

- `a` starts at `10`.
- A `do...while` loop runs its body **first, unconditionally**, before checking anything.
- So `console.log(a)` runs once, printing `10`, and then `a` becomes `11`.
- **Only after** that first run does it check the condition: `a < 10` → `11 < 10` → **`false`**.
- Since the condition is now false, the loop stops - having run its body exactly **once**.

### Why the output occurs

```
10
```

Only the `do...while` loop produces output (`10`), and only once. The `while` loop produces **no output at all**, because its condition was already false the very first time it was checked - and a `while` loop checks *before* doing anything.

| Loop type | When is the condition checked? | Result here |
|---|---|---|
| `while (x < 10)` | Before the body runs | Condition is false immediately → body runs **0 times** |
| `do { ... } while (a < 10)` | After the body runs | Body always runs **at least once**, regardless of the condition → runs **1 time** here |

### The concept being demonstrated

This is the core difference between `while` and `do...while`:

- **`while`**: "check first, then maybe run" - can result in the body never running if the condition starts out false.
- **`do...while`**: "run first, then check" - guarantees the body runs **at least once**, no matter what the condition is.

## Note

- If you need code to run **at least one time** regardless of any condition (e.g., showing a menu once before asking "run again?"), `do...while` is the right tool - a plain `while` might skip it entirely, as shown here.
- See [[IQ_Do_While]] for a closer look at `do...while` on its own, and [[IQ_DoWhile_vs_While]] for another direct comparison.
