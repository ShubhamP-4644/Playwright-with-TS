# `for` Loop Edge Cases: Zero Iterations, Infinite Loops, and Combining with `if/else`

## What is it?

This file walks through four `for` loops that each teach a different edge case:

1. A normal inclusive loop (`<=`).
2. A loop whose condition is **false from the very start**, so it never runs at all.
3. A loop with **no condition**, which never stops on its own - an **infinite loop**.
4. A loop that combines a counter with an `if/else` check inside its body.

## Why do we need it?

Real-world loops don't always behave the way you expect. Knowing what happens when a condition is false immediately, or missing entirely, helps you avoid two very common bugs: loops that silently do nothing, and loops that never stop (which can freeze or crash a program).

## Syntax

```js
for (INIT; CONDITION; UPDATE) {
    // CONDITION is checked BEFORE every run, including the first one
}

for (INIT; ; UPDATE) {
    // an empty CONDITION is treated as always `true` -> infinite loop
}
```

## Example - `09_Chapter_Loops/56_For_Loop3.js`

### Part 1 - a normal inclusive loop

```js
for (let _1 = 0; _1 <= 10; _1++) {
    console.log(_1);
}
```

- `_1` starts at `0`, and the condition `_1 <= 10` includes `10`.
- Output: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10` (11 numbers). This is the same pattern explained in [[IQ_For_Loop2]].

### Part 2 - a condition that is false immediately (zero iterations)

```js
for (let spg = 0; spg > 1; spg++) {
    console.log(spg);
}
```

- `spg` starts at `0`.
- Before running the body even once, JavaScript checks the condition: `spg > 1` → `0 > 1` → **`false`**.
- Because the very first check already fails, **the loop body never runs at all** - nothing is printed, and `console.log(spg)` never executes.

This proves an important rule: a `for` loop's condition is checked **before** every repetition, including the first one. If it's false from the start, the loop body is skipped entirely.

### Part 3 - a missing condition (infinite loop)

```js
for (let gtm = 0; ; gtm++) {
    console.log(gtm);
}
```

- The middle part (the CONDITION) is left **empty**.
- When there's no condition, JavaScript treats it as always `true`.
- That means this loop **never stops on its own** - it will keep printing `0, 1, 2, 3, 4, 5, ...` forever, increasing without end, until something external stops it (closing the program, running out of memory, or the environment timing out).

> ⚠️ **Caution:** This is an *infinite loop*. If you actually run this snippet by itself, it will not finish - it will keep printing numbers until you manually stop the program (e.g. `Ctrl+C` in the terminal). This file demonstrates the *mistake* of forgetting a condition, not a pattern to copy.

### Part 4 - combining a loop counter with `if/else`

```js
for (let shubham = 0; shubham < 18; shubham++) {
    if (shubham > 15) {
        console.log("Gift from papa, iphone this year")
    } else {
        console.log("No Gift, iphone only barbie doll")
    }
}
```

- `shubham` counts from `0` up to `17` (`shubham < 18` stops it at `18`).
- On **every** repetition, an `if/else` check decides what to print:
  - While `shubham` is `0` to `15` (i.e., `shubham > 15` is `false`), it prints `"No Gift, iphone only barbie doll"` - that's 16 times (`0` through `15`).
  - Once `shubham` becomes `16` or `17` (i.e., `shubham > 15` is `true`), it prints `"Gift from papa, iphone this year"` - that's 2 times.
- Total output: 16 lines of "No Gift..." followed by 2 lines of "Gift from papa...".

This shows that a loop's body isn't limited to one simple statement - it can contain any code, including its own decision-making with `if/else`, and that decision can depend on the loop's own counter.

### Why the output occurs

Each part demonstrates a different rule of how the `for` loop's condition governs behavior:

| Part | Condition behavior | Result |
|---|---|---|
| 1 | True for a known range | Runs a fixed, predictable number of times |
| 2 | False on the very first check | Runs **zero** times |
| 3 | Missing (always true) | Runs **forever** (infinite loop) |
| 4 | True for `shubham < 18`, with extra `if/else` logic inside | Runs 18 times, printing different messages depending on the counter |

## Note

- Always double-check your condition can eventually become `false` - otherwise you've written an infinite loop by accident (Part 3).
- A condition that's false from the start isn't a bug in JavaScript - it's valid syntax, but it usually means the programmer made a mistake in their starting value or comparison (Part 2).
