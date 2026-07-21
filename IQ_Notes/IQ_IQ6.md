# Switch Uses Strict Comparison (`===`)

## What is it?
This example proves an important rule about `switch`: it compares the switch value against each `case` using **strict equality (`===`)** — meaning both the value AND its data type must match. It does not do the "loose" type-converting comparison that `==` does.

## Why do we need it?
It's easy to assume `switch` behaves like the loose `==` operator, especially with values like `0` and `false` that JavaScript often treats as "similar" in other contexts (like `if` statements, where both are falsy). This example shows that assumption is wrong for `switch`, which can prevent a confusing bug where you expect a case to match but it silently doesn't.

## Syntax
```js
switch (value) {
  case someValue:
    // only runs if value === someValue (SAME type AND SAME value)
}
```

## Example
```js
let status = 0;
console.log(typeof status)
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
// === Strict, value and data type both of them shoul be same.
// && ->  and gate
// ||  or gate
// & - bitwise, | bitwse, never use
// == -> loose comparsion - value or data type.
```

## Line-by-Line Explanation
- `let status = 0;` — `status` is the *number* `0`.
- `console.log(typeof status)` — prints the data type of `status`, which is `"number"` (not `"boolean"`).
- `switch (status) {` — begin comparing `status` against each case using strict equality (`===`).
- `case false:` — checks `status === false`. Even though `0` and `false` are often treated as "similar" (both are falsy in things like `if` statements), `===` also checks *type*: `status` is a `number`, `false` is a `boolean` — different types, so this is `false`, and the case does NOT match.
- `case 0:` — checks `status === 0`. Same value (`0`) AND same type (`number`), so this matches. Runs `console.log("0 matched"); break;`.

## Why the Output Occurs
1. `console.log(typeof status)` → `number` (confirms `status` is a number, not a boolean, before the switch even runs).
2. The `switch` then compares `status` against `case false` first: `0 === false` is `false` in JavaScript, because `===` requires matching types, and `number` ≠ `boolean`. So this case is skipped.
3. It then compares against `case 0`: `0 === 0` is `true` (same value, same type), so this case matches and runs.

**Output:**
```
number
0 matched
```

## Operator(s) / Keywords Summary
| Operator/Keyword | Meaning | Result here |
|---|---|---|
| `typeof status` | Returns the data type of a value as a string | `"number"` |
| `switch`'s internal comparison | Always strict (`===`) — checks value AND type | `0 === false` → `false`; `0 === 0` → `true` |
| `===` (strict equality) | Value and type must both match | Used here to explain why `case false` didn't match |
| `==` (loose equality, mentioned in comments, NOT used by switch) | Would convert types before comparing | `0 == false` would actually be `true` — but `switch` never uses `==` |

**Key takeaway:** `switch` always compares using strict equality (`===`). Values that are only "loosely equal" (like `0` and `false`) will NOT match each other inside a `switch`, even though they might behave similarly in other loose contexts.
