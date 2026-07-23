# `for` Loop - Variable Names and Boundaries (`<` vs `<=`, Start Value)

## What is it?

This file shows that a `for` loop doesn't care what you **name** your counter variable, and it shows how small changes to the **condition** (`<` vs `<=`) or the **starting value** change exactly which numbers get printed.

## Why do we need it?

Once you understand the basic `for` loop shape from [[IQ_For_Loop1]], the next important skill is reading the loop's three parts carefully to predict *exactly* how many times it runs and what the first/last values will be. Off-by-one mistakes (running one time too many or too few) are one of the most common beginner bugs, so seeing them side by side helps build that intuition.

## Syntax

```js
for (let name = start; name <operator> end; name++) {
    // repeated code
}
```

The variable name (`i`, `j`, `shubham`, anything) is just a label - it has no special meaning to JavaScript.

## Example - `09_Chapter_Loops/55_For_Loop2.js`

```js
for (let shubham = 0; shubham < 10; shubham++) {
    console.log(shubham);
}

for (let spg = 0; spg <= 10; spg++) {
    console.log(spg);
}

for (let gtm = 1; gtm <= 10; gtm++) {
    console.log(gtm);
}
```

### Loop 1: `shubham < 10`, starting at `0`

| Part | Value |
|---|---|
| Start | `0` |
| Condition | `shubham < 10` (strictly less than) |
| Prints | `0, 1, 2, 3, 4, 5, 6, 7, 8, 9` |
| Count | 10 numbers |

`shubham` stops being incremented once it reaches `10`, because `10 < 10` is `false`. So `10` itself is never printed.

### Loop 2: `spg <= 10`, starting at `0`

| Part | Value |
|---|---|
| Start | `0` |
| Condition | `spg <= 10` (less than **or equal to**) |
| Prints | `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10` |
| Count | 11 numbers |

Because the condition uses `<=` instead of `<`, the loop keeps running when `spg` equals `10` too (since `10 <= 10` is `true`). That's one extra number compared to Loop 1.

### Loop 3: `gtm <= 10`, starting at `1`

| Part | Value |
|---|---|
| Start | `1` |
| Condition | `gtm <= 10` |
| Prints | `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` |
| Count | 10 numbers |

Starting at `1` instead of `0` shifts the whole range up by one, so this loop prints `1` through `10` instead of `0` through `10`.

### Why the output occurs

Every `for` loop's output is fully determined by three things: **where it starts**, **which comparison operator** is used in the condition (`<` vs `<=`), and **how it updates** (`++` adds 1 each time here). Changing any one of those three shifts or extends the sequence of printed numbers, as the comparison above shows.

### The concept being demonstrated

- The **variable name** in a `for` loop (`shubham`, `spg`, `gtm`) is arbitrary - it's just an identifier, like naming a box before you put something in it. It doesn't change how the loop behaves.
- The **comparison operator** in the condition (`<` vs `<=`) controls whether the final boundary number is included or excluded.
- The **starting value** controls where the sequence of numbers begins.

## Note

- A common beginner mistake is assuming `< 10` and `<= 10` produce the same count - they don't. `< 10` starting from `0` gives 10 numbers; `<= 10` starting from `0` gives 11 numbers.
