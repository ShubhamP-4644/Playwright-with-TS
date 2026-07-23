# Nested `for` Loops

## What is it?

A **nested loop** is a loop placed **inside** another loop. The inner loop runs completely (all of its repetitions) for **every single repetition** of the outer loop.

Think of it like a clock: the outer loop is the hour hand, the inner loop is the minute hand. For every one movement of the hour hand, the minute hand goes all the way around completely.

## Why do we need it?

Some problems need every combination of two counters - for example, coordinates on a grid (row and column), or comparing every item in one list against every item in another. A single loop can only track one changing value at a time; nesting a second loop inside it lets you track two (or more) changing values together.

## Syntax

```js
for (INIT_OUTER; CONDITION_OUTER; UPDATE_OUTER) {
    for (INIT_INNER; CONDITION_INNER; UPDATE_INNER) {
        // this runs once for every single combination of outer and inner values
    }
}
```

## Example - `09_Chapter_Loops/63_NestedFor_Loop.js`

```js
// Nested the For Loop
// 1 Array - W

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}
```

### Line-by-line explanation

| Line | Code | What it does |
|---|---|---|
| 4 | `for (let i = 0; i < 3; i++)` | Outer loop: `i` goes `0, 1, 2` |
| 5 | `for (let j = 0; j < 3; j++)` | Inner loop: for **each** value of `i`, `j` goes `0, 1, 2` again from scratch |
| 6 | `console.log(i, j);` | Print the current pair of `i` and `j` values, space-separated |

### Why the output occurs

```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

Here's how to read it:

- While `i` is `0` (outer loop's first round), the **entire inner loop runs from start to finish**: `j` goes `0`, `1`, `2`, printing `0 0`, `0 1`, `0 2`.
- Only after the inner loop **completely finishes** does the outer loop move to its next value: `i` becomes `1`.
- While `i` is `1`, the inner loop runs all over again from `j = 0`: printing `1 0`, `1 1`, `1 2`.
- Then `i` becomes `2`, and the inner loop runs once more: printing `2 0`, `2 1`, `2 2`.
- After `i` reaches `3`, the outer condition `i < 3` becomes false, and everything stops.

In total, the inner loop's body runs **3 × 3 = 9 times** - once for every combination of an outer value (`0, 1, 2`) and an inner value (`0, 1, 2`).

### The concept being demonstrated

This is a **nested `for` loop**, which is commonly used to walk through two dimensions at once (think rows and columns of a grid, or a table). The key rule to remember: the **inner loop resets and runs to completion for every single repetition of the outer loop** - it doesn't continue from where it left off; it starts over from its own INIT value (`j = 0`) each time.

## Note

- If the outer loop runs `n` times and the inner loop runs `m` times, the innermost code runs `n × m` times total - here, `3 × 3 = 9`.
- The comment `// 1 Array - W` in the file hints at a common real-world use for this pattern: visiting every cell of a 2D grid/array (rows and columns), though this particular snippet just prints the index pairs rather than working with an actual array.
