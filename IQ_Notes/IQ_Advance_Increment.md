# Advanced Increment — Multiple `++` in One Expression

## What is it?
This builds on the basic increment operator by putting *multiple* `++` uses of the *same variable* inside a single expression. JavaScript evaluates the expression strictly left to right, and each `++`/`a++` immediately updates the variable right when it's evaluated — so later reads of that same variable in the same line see the updated value.

## Why do we need it?
You rarely need to write code this dense on purpose — but this exact pattern shows up constantly in coding interviews and "what does this print?" quizzes, because it tests whether you understand *when* pre- vs post-increment actually mutate the variable. Understanding it also helps you avoid writing confusing code with side effects buried inside expressions.

## Syntax
```js
++x + x + x++
// read left to right:
// 1. ++x   -> x changes now, contributes the NEW value
// 2. x     -> reads whatever x currently is (already updated by step 1)
// 3. x++   -> contributes the CURRENT value, x changes AFTER this is read
```

## Example
```js
let e = 3;
console.log(++e + e);
console.log(e);


let a = 10;
console.log(++a + a + a++);
console.log(a);
```

## Line-by-Line Explanation
- `let e = 3; console.log(++e + e);` — same as the basic increment example: `++e` runs first (`e` becomes `4`, contributes `4`), then the plain `e` is read (already `4`). Sum: `4 + 4 = 8`.
- `console.log(e);` — `e` is now `4`.
- `let a = 10; console.log(++a + a + a++);` — three terms, evaluated strictly left to right:
  1. `++a` → `a` becomes `11` immediately, this term contributes `11`.
  2. `a` → reads the *current* `a`, which is already `11` (from step 1). Contributes `11`.
  3. `a++` → contributes the *current* value of `a` (`11`), and only **after** being read does `a` become `12`.
  - Total: `11 + 11 + 11 = 33`.
- `console.log(a);` — by now `a` has been bumped by both `++a` (step 1) and `a++` (step 3), ending at `12`.

## Why the Output Occurs
1. `console.log(++e + e)` → `8` (explained above).
2. `console.log(e)` → `4`.
3. `console.log(++a + a + a++)` → `33`. The key insight: `a` only ever holds ONE value at a time — every term reads whatever `a` is *at that instant*. `++a` changes it before being read; `a++` changes it after being read; a plain `a` just reads the current snapshot.
4. `console.log(a)` → `12`. Two increments happened total to `a` in the whole expression (`++a` and `a++`), taking it from `10` → `11` → `12`.

## Operator(s) Summary
| Operator | Meaning | Contributes to sum | Side effect timing |
|---|---|---|---|
| `++a` | Pre-increment | The value *after* incrementing | Happens immediately when evaluated |
| `a` (plain read) | No operator | Whatever `a` currently is | No side effect, just reads current state |
| `a++` | Post-increment | The value *before* incrementing | `a` changes right after being read, but before the next term evaluates |
