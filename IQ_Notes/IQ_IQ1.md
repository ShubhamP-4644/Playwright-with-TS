# Switch Fall-Through (Missing `break`)

## What is it?
"Fall-through" is what happens when a `switch` case has **no `break`** at the end of it. Instead of stopping after the matching case, JavaScript keeps running every case *after* the match too, one after another, until it hits a `break` or reaches the very end of the `switch`.

## Why do we need it?
This example isn't showing something you *want* to do by accident — it's showing a very common beginner bug. Understanding fall-through is essential so you don't get surprised when a `switch` block prints way more than you expected. (There's a good, intentional use of fall-through in another file in this chapter — grouping multiple cases together — but here, forgetting `break` is simply a mistake worth recognizing.)

## Syntax
```js
switch (value) {
  case a:
    // no break here!
  case b:
    // this ALSO runs if value === a, because there was no break above
}
```

## Example
```js
// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}
```

## Line-by-Line Explanation
- `let day = 2;` — the value to check.
- `switch (day) {` — begin checking `day` against each case, in order.
- `case 0:` and `case 1:` — skipped over (not matched), since `day` is `2`, not `0` or `1`.
- `case 2:` — this is the actual match: `day === 2`. Its line runs: `console.log("Tuesday — Development");`.
- Because there's **no `break;`** after that line, JavaScript does NOT stop — it just continues straight into `case 3`'s code, then `case 4`'s, then `case 5`'s, then `case 6`'s, and finally `default`'s, printing every single one of them, even though only `case 2` actually "matched."

## Why the Output Occurs
Once a `case` matches, JavaScript doesn't check the remaining cases' conditions again — it just executes code line by line from that point downward, ignoring the `case`/`default` labels as if they weren't there, until it meets a `break` or runs out of code. Since none of these cases have a `break`, execution "falls through" all the way to the bottom:

1. `console.log("Tuesday — Development")` (the real match, `case 2`)
2. `console.log("Wednesday — Code Review")` (fell through from case 2)
3. `console.log("Thursday — Testing")` (fell through)
4. `console.log("Friday — Deployment & Retro")` (fell through)
5. `console.log("Saturday — Rest Day")` (fell through)
6. `console.log("Invalid day value")` (fell all the way through into `default`)

So this one `switch`, meant to print just one day, actually prints **6 lines**.

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `case x:` (no `break`) | Marks a starting point, but does not stop execution afterward | Causes fall-through into every case below it |
| `break;` (missing) | Would normally stop the switch right after the matching case | Its absence is the entire cause of this bug |
| `default:` | Runs if nothing matched, OR is fallen into from above | Executed here purely due to fall-through, not because `day` was actually invalid |

**Takeaway:** Always add `break;` (or `return;` inside a function) at the end of each case unless you are *intentionally* grouping cases together.
