# Switch — Duplicate Case Values (Unreachable Code)

## What is it?
This example shows what happens when you accidentally write **two `case` labels with the exact same value**. JavaScript doesn't warn you or throw an error — it simply matches the **first** one it finds and completely ignores the second, identical one.

## Why do we need it?
This is a subtle bug that's easy to introduce by copy-pasting a case block and forgetting to update its value. Recognizing it helps you notice "dead code" (code that can never run) during code review — most linters will actually flag this as an error/warning, but it's important to understand *why* it's a problem even before a tool tells you.

## Syntax
```js
switch (value) {
  case 10:
    // this runs if value === 10
    break;
  case 10:   // duplicate! unreachable — never runs, no matter what
    break;
}
```

## Example
```js
let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}
```

## Line-by-Line Explanation
- `let x = 10;` — the value being checked.
- `switch (x) {` — begin comparing `x` against each case, **in order, top to bottom**.
- `case 10:` (first one) — `x === 10` is true, so this is the match. Its code runs:
  - `let b1 = 1; console.log(b1);` — prints `1`.
  - `break;` — exits the switch immediately.
- `case 10:` (second one) — even though this ALSO equals `10`, it is never even reached, because the switch already found its match in the *first* `case 10:` and exited via `break` before getting here. This entire second block, including `let b2 = 2;` and its `console.log(b2);`, is unreachable — it can never execute for any value of `x`.
- `default:` — also never reached, for the same reason.

## Why the Output Occurs
JavaScript's `switch` scans cases from top to bottom and stops at the **first** case whose value strictly equals the switch's value. It does not check for or complain about duplicate case values further down — it just never gets to them once an earlier match has been found and exited via `break`.

**Output:** `1`

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `case 10:` (1st occurrence) | Matches `x === 10` | This one always wins — it's checked first |
| `case 10:` (2nd occurrence) | Also technically matches `x === 10` | Permanently unreachable dead code |
| `break;` | Exits after the first case's code runs | Guarantees the second `case 10:` is never reached |

**Key takeaway:** duplicate `case` values are a silent bug — always double-check that every case value in a `switch` is unique.
