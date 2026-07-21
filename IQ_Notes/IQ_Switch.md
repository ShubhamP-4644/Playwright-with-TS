# The `switch` Statement

## What is it?
`switch` is a way to check one value against several possible options and run different code depending on which option matches — like a cleaner alternative to writing a long chain of `if / else if / else if / else`. You give it a value once, then list out each possible case it might equal, along with what to do for each one.

## Why do we need it?
Whenever you have one variable that could be several different known values (a day of the week, a status code, a menu choice, a browser name), `switch` reads more clearly than a long `if/else` chain, especially as the number of options grows. It also makes the intent obvious: "here are ALL the possibilities for this one value."

## Syntax
```js
switch (valueToCheck) {
  case option1:
    // code to run if valueToCheck === option1
    break;
  case option2:
    // code to run if valueToCheck === option2
    break;
  default:
    // code to run if none of the cases matched
}
```

## Example
```js
let day = 2;
// 1 - mon, 2 = tue
switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}
```

## Line-by-Line Explanation
- `let day = 2;` — the value we're going to check against every `case`.
- `switch (day) {` — start checking `day` against each case label below, top to bottom.
- `case 1: ... break;` — skipped, because `day` (`2`) does not match `1`.
- `case 2:` — this is the match! `day === 2` is true, so JavaScript jumps in here and runs everything until it hits a `break` (or the end of the switch).
  - `console.log('Tue');` — prints `Tue`.
  - `let a = 10; let b = 30; console.log(a + b);` — ordinary variable declarations and math, unrelated to `switch` itself; just runs like normal code. Prints `40`.
  - `break;` — stops here and exits the whole `switch` block, so none of `case 3` onward run.
- `case 3` through `case 7`, and `default` — never reached, because the `break` inside `case 2` already exited the switch.

## Why the Output Occurs
1. `console.log('Tue')` → `Tue` (because `day` matched `case 2`).
2. `console.log(a + b)` → `40` (`10 + 30`), still inside the same matched `case 2` block, since there's no `break` between it and the previous line.
3. Nothing else prints — the `break;` at the end of `case 2` exits the `switch` immediately, so `case 3`, `case 4`, ..., and `default` are all skipped entirely.

## Operator(s) / Keywords Summary
| Keyword | Meaning |
|---|---|
| `switch (value)` | Starts comparing `value` against each `case` below (using strict `===` comparison) |
| `case x:` | If `value === x`, start running code from here |
| `break;` | Immediately exits the `switch` block — without it, execution "falls through" into the next case (see other examples in this chapter) |
| `default:` | Runs if none of the `case` values matched anything (like the `else` in an `if/else` chain) |
