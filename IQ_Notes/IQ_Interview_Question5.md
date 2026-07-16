# Ternary Operator — Redundant Boolean Ternary

## What is it?
This is still the ternary (conditional) operator — the "if this is true, use one value, otherwise use another value" shortcut — but this example shows a very common beginner mistake: using the ternary operator when it isn't actually needed at all.

## Why do we need it?
Understanding when **not** to use a tool is just as important as understanding the tool itself. This example teaches a real anti-pattern that shows up often in beginner code (and sometimes in interview answers): writing `condition ? true : false` when `condition` is already a `true`/`false` value.

Recognizing this helps you write cleaner, more direct code, and it's a common interview question used to check whether someone truly understands what a ternary operator does versus just copying the pattern without thinking.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Example
```js


let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

```

## Line-by-Line Explanation
- `let condition = true;` — Stores a boolean value, `true`, in a variable named `condition`.
- `let isSKMale = condition ? true : false;` — The ternary operator:
  - `condition` is used directly as the condition — it's already `true` or `false`, so no comparison is needed.
  - If `condition` is `true`, `isSKMale` becomes `true`.
  - If `condition` is `false`, `isSKMale` becomes `false`.
- `console.log(isSKMale);` — Prints the resulting value.

## Why the Output Occurs
1. JavaScript checks the condition, which is simply the variable `condition`.
2. `condition` holds the value `true`.
3. Since the condition is `true`, the ternary operator picks the value before the colon, which is the literal `true`.
4. `true` is stored in `isSKMale`.
5. `console.log(isSKMale)` prints `true` to the console.

**The catch:** notice that the ternary operator here just outputs `true` when the condition is `true`, and `false` when the condition is `false` — it doesn't transform the value at all. Since `condition` is already a boolean, writing `condition ? true : false` produces exactly the same result as just writing `condition` by itself. This makes the ternary operator completely redundant in this case.

A cleaner, equivalent way to write this same line is:
```js
let isSKMale = condition;
```
This does exactly the same thing — assigns `true` or `false` to `isSKMale` — but without the unnecessary and confusing `? true : false` part. As a rule of thumb: only use a ternary operator when the two outcomes are genuinely different from the condition itself (like turning a number comparison into a string label). If your "true" and "false" branches are literally just `true` and `false`, you don't need the ternary operator at all.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `condition ? true : false` (condition = true) | `true` (but redundant — same as `condition`) |
| (boolean variable as condition) | A variable already holding `true`/`false` can be used directly, without `? true : false` | `let isSKMale = condition;` | `true` |
