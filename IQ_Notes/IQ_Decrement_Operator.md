# Decrement Operator

## What is it?
The decrement operator (`--`) is the mirror image of increment (`++`) — it subtracts 1 from a variable instead of adding 1. Just like increment, it comes in two flavors: **pre-decrement** (`--x`, subtract first then use the new value) and **post-decrement** (`x--`, use the current value first then subtract).

## Why do we need it?
Counting down is just as common as counting up — countdown timers, retry-attempts-remaining, reverse loops, stacks/queues shrinking, etc. `--` gives a short, familiar way to express "reduce by one."

## Syntax
```js
x--     // post-decrement: use x's current value, THEN subtract 1
--x     // pre-decrement: subtract 1 from x FIRST, then use the new value
```

## Example
```js
let a = 10;
let b = --a;
console.log(b);
console.log(a);

let x = 10;
let y = x--;
console.log(y);
console.log(x);
```

## Line-by-Line Explanation
- `let a = 10; let b = --a;` — **pre-decrement**. `a` is reduced to `9` *first*, and that new value is what gets assigned to `b`.
- `console.log(b); console.log(a);` — both print the state *after* the decrement already happened, so both show `9`.
- `let x = 10; let y = x--;` — **post-decrement**. `y` gets `x`'s *old* value (`10`), and only *after* that does `x` become `9`.
- `console.log(y); console.log(x);` — `y` still holds the old snapshot (`10`), while `x` reflects the change (`9`).

## Why the Output Occurs
1. `console.log(b)` → `9` (pre-decrement: `a` becomes `9` *before* being assigned to `b`).
2. `console.log(a)` → `9` (same value, `a` was already changed).
3. `console.log(y)` → `10` (post-decrement: `y` captures `x`'s value *before* the change).
4. `console.log(x)` → `9` (the change to `x` happens right after `y` was assigned, so `x` is now one less than before).

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `--x` (pre-decrement) | Decrease by 1 first, then return the new value | `a=10; b=--a` | `b = 9`, `a = 9` |
| `x--` (post-decrement) | Return the current value first, then decrease by 1 | `x=10; y=x--` | `y = 10`, `x = 9` |
