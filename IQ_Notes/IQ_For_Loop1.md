# The `for` Loop

## What is it?

A `for` loop is a way to repeat an action a **known number of times**. It packs three instructions into one line:

1. Where to start (INIT)
2. How long to keep going (CONDITION)
3. How to move forward each time (UPDATE)

This is often remembered with the short-hand **"ICU"**: **I**nit, **C**ondition, **U**pdate.

## Why do we need it?

As shown in [[IQ_Loop]], manually writing `console.log(1)`, `console.log(2)`, `console.log(3)`... for every number is unrealistic once the list gets long. The `for` loop lets you describe the *pattern* once - start here, stop there, move like this - and JavaScript takes care of repeating the action for you.

## Syntax

```js
for (INIT; CONDITION; UPDATE) {
    // code to repeat
}
```

- **INIT** - runs once, before the loop starts (usually creates a counter variable, e.g. `let i = 0`)
- **CONDITION** - checked before every repetition; the loop keeps running as long as this is `true`
- **UPDATE** - runs after every repetition (usually increases or decreases the counter)

## Example - `09_Chapter_Loops/53_For_Loop1.js`

```js
// For Loop
// Help you to repeat a block of code.

// ICU
// INIT - let i=0
// CONDITION -  i< 10

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Both are having same output

for (let j = 0; j < 10; ++j) {
    console.log(j);
}
```

### Line-by-line explanation

**First loop:**

| Part | Code | Meaning |
|---|---|---|
| INIT | `let i = 0` | Create a counter variable `i` and start it at `0` (this runs only once) |
| CONDITION | `i < 10` | Before each repetition, check: is `i` still less than `10`? If yes, keep going. If no, stop. |
| UPDATE | `i++` | After each repetition, increase `i` by 1 |
| Body | `console.log(i);` | Print the current value of `i` |

Step by step, `i` goes `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`. When `i` becomes `10`, the condition `i < 10` is `false`, so the loop stops. That's why the output is the numbers `0` through `9` (10 numbers total), not `10`.

**Second loop:**

```js
for (let j = 0; j < 10; ++j) {
    console.log(j);
}
```

This behaves **exactly the same way** as the first loop. The only difference is `++j` (pre-increment) instead of `j++` (post-increment) in the UPDATE part. When the increment is sitting by itself on its own line (not combined with an assignment like `let b = ++j`), `++j` and `j++` produce the identical effect on the loop: `j` still increases by 1 each time, in the same order. See [[IQ_Increment]] for when the position of `++` actually matters.

### Why the output occurs

The loop repeats its body for every value of the counter that satisfies the condition. Since `i`/`j` start at `0` and the condition stops them at `10` (exclusive), both loops print `0` through `9`.

## Note

- `i < 10` with `i` starting at `0` produces **10 iterations** (0 to 9), not 10 (because 0 counts as the first iteration).
- The comment `// ICU` in the file is just a memory aid for **I**nit, **C**ondition, **U**pdate - the three parts of a `for` loop.
