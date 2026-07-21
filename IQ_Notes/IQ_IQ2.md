# Switch with `break` — No Match Falls to `default`

## What is it?
This example shows the "well-behaved" version of a `switch`: every case has a proper `break;`, and it demonstrates what happens when the value being checked **doesn't match any case at all** — control goes straight to `default`.

## Why do we need it?
Real-world data isn't always valid. A `switch` needs a safe fallback for values it wasn't built to handle (e.g., an out-of-range day number, an unexpected status code, bad user input). `default` is that safety net.

## Syntax
```js
switch (value) {
  case a:
    // ...
    break;
  default:
    // runs when value matches NONE of the cases above
}
```

## Example
```js
// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 10;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review")
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}
```

## Line-by-Line Explanation
- `let day = 10;` — the value to check. Notice this chapter's days only go from `0` to `6`.
- `switch (day) {` — begin comparing `day` (`10`) against `case 0`, `case 1`, ... `case 6`, in order.
- Every single `case` (`0` through `6`) is checked and none of them equal `10`, so none of their code blocks run.
- `default:` — since nothing matched, this block runs: `console.log("Invalid day value");`.

## Why the Output Occurs
`day` is `10`, but the only defined cases are `0` through `6`. Since `10` doesn't strictly equal (`===`) any of them, JavaScript skips every `case` block entirely and falls into `default`, which is designed exactly for this "none of the above" situation.

**Output:** `Invalid day value`

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `case x:` | Matches only if `value === x` | None matched, since `10` isn't `0`–`6` |
| `break;` | Exits the switch right after a matching case's code runs | Present on every case here, so there's no accidental fall-through |
| `default:` | The fallback when no `case` matched | This is the only block that runs |
