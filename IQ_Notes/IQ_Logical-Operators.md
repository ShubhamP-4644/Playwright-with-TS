# Logical Operators

## What is it?
Logical operators let you combine or flip `true`/`false` values, much like everyday logic. `&&` (AND) asks "are both things true?". `||` (OR) asks "is at least one of these things true?". `!` (NOT) simply flips a value — turning `true` into `false` and `false` into `true`.

## Why do we need it?
Real decisions in code often depend on more than one condition at once — for example, "allow entry only if the user is logged in AND has a valid ticket" (`&&`), or "show a discount if it's a holiday OR the user has a coupon" (`||`). The `!` operator is handy for checking the opposite of a condition, like "if the user is NOT logged in, show the login page."

## Syntax
```js
a && b     // AND — true only if BOTH a and b are true
a || b     // OR  — true if AT LEAST ONE of a or b is true
!a         // NOT — flips the boolean value of a
```

## Example
```js
    // && --> AND gate
    // || --> OR gate

let a = true;
let b = false;
console.log(a && b);          // false
console.log(a || b);         // true
console.log(!a);      // false

```

## Line-by-Line Explanation
- The comments describe `&&` as an "AND gate" and `||` as an "OR gate" — a nod to how these behave like electronic logic gates.
- `let a = true;` — creates variable `a` holding the boolean `true`.
- `let b = false;` — creates variable `b` holding the boolean `false`.
- `console.log(a && b);` — checks whether **both** `a` and `b` are `true`. Since `a` is `true` but `b` is `false`, not both conditions are satisfied.
- `console.log(a || b);` — checks whether **at least one** of `a` or `b` is `true`. Since `a` is `true`, this is enough to satisfy `||`, regardless of `b`.
- `console.log(!a);` — flips the value of `a`. Since `a` is `true`, `!a` turns it into `false`.

### Analogy
- **AND (`&&`)** is like two light switches wired in series: the light only turns on if **both** switches are flipped on. If even one is off, the light stays off.
- **OR (`||`)** is like two switches wired in parallel: the light turns on if **at least one** switch is on.
- **NOT (`!`)** is like a switch that inverts a signal: if the input is on, the output is off, and vice versa.

## Why the Output Occurs
- `console.log(a && b);` → `false` — because `&&` requires both sides to be `true`, but `b` is `false`, so the whole expression is `false`.
- `console.log(a || b);` → `true` — because `||` only needs one side to be `true`, and `a` is `true`, so the whole expression is `true` (it doesn't matter that `b` is `false`).
- `console.log(!a);` → `false` — because `!` flips `a`'s value; since `a` is `true`, `!a` becomes `false`.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `&&` | AND — true only if both sides are true | `a && b` (true && false) | `false` |
| `\|\|` | OR — true if at least one side is true | `a \|\| b` (true \|\| false) | `true` |
| `!` | NOT — flips true to false and false to true | `!a` (!true) | `false` |
