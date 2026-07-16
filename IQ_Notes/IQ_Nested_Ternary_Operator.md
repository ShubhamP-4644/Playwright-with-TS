# Nested Ternary Operator

## What is it?
A ternary operator is a shortcut way of writing a simple "if this, then that, otherwise that other thing" decision, all in one line, using a question mark (`?`) and a colon (`:`).

A **nested** ternary operator is when you put one ternary operator *inside* another one. Think of it like a decision tree: you ask the first question, and depending on the answer, instead of giving a final answer right away, you ask a *second* question to decide what the final answer should be. You can keep nesting more and more, but it's most common to nest just one or two levels for beginners to understand.

## Why do we need it?
In real life, decisions are often not just "yes or no" — they can depend on multiple conditions checked one after another. For example: "Is this person old enough to enter the venue? If yes, are they old enough to drink?" That's two related questions, and a nested ternary lets you express both in a single, compact expression instead of writing several separate `if` statements.

## Syntax
```js
let result = condition1
  ? (condition2 ? valueIfBothTrue : valueIfFirstTrueSecondFalse)
  : valueIfFirstFalse;
```

## Example
```js


// Multiple Condition

let age = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let Will_Shubham_Drink = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(`Can Shubham Drink? : ${Will_Shubham_Drink}`);
```

## Line-by-Line Explanation
- `let age = 26;` — Creates a variable called `age` and stores the number `26` in it.
- The two `//` comment lines are just notes the author left for themselves to explain the logic in plain words. They're a bit rough around the edges (typos like "goa" and "not else"), but the intention is: first check if age is over 18, and if so, check a second condition about whether age is over 25/26 to decide the drink answer.
- `let Will_Shubham_Drink = age > 18 ? (age > 26 ? "Drink" : "No") : false;` — This is the nested ternary itself:
  - First it checks `age > 18` (the **outer** condition).
  - If that's `true`, instead of picking a plain value, it runs *another* ternary: `age > 26 ? "Drink" : "No"` (the **inner** condition).
  - If `age > 18` is `false`, the whole expression just becomes `false` (no drinking, no further questions asked).
- `console.log(\`Can Shubham Drink? : ${Will_Shubham_Drink}\`);` — Prints the final answer using a template literal (the backtick string with `${}` inside it), which inserts the value of `Will_Shubham_Drink` into the sentence.

## Why the Output Occurs
Let's trace through it step by step with `age = 26`:

1. **Outer condition:** `age > 18` → `26 > 18` → `true`.
2. Because the outer condition is `true`, JavaScript now evaluates the **inner** ternary instead of jumping to `false`.
3. **Inner condition:** `age > 26` → `26 > 26` → `false` (26 is not *greater than* 26, it's *equal* to it).
4. Since the inner condition is `false`, the inner ternary picks its "false" branch, which is the string `"No"`.
5. So `Will_Shubham_Drink` ends up being `"No"`.
6. The final printed line is: `Can Shubham Drink? : No`

The key trick to notice: the inner check uses `>` (strictly greater than), not `>=`, so being *exactly* 26 does not satisfy `age > 26`. This is a common gotcha in these kinds of interview questions — always double check whether the comparison is `>` or `>=`.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `?` `:` | Ternary — shorthand if/else | `age > 18 ? "yes" : "no"` | `"yes"` if age is over 18, otherwise `"no"` |
| `>` | Greater than (strict) | `26 > 26` | `false` |
| Nested `?:` | A ternary used as the result of another ternary | `a ? (b ? x : y) : z` | Picks `x`, `y`, or `z` depending on `a` and `b` |
