# Switch — Grouping Multiple Cases Together (Intentional Fall-Through)

## What is it?
This shows the **good, intentional** use of fall-through: stacking several `case` labels back-to-back with no code (and no `break`) between them, so that all of those values share the exact same block of code. It's the opposite of the "forgot the break" bug shown elsewhere in this chapter — here, the missing `break`s between case labels are deliberate and useful.

## Why do we need it?
Sometimes several different input values should all be treated identically. Rather than repeating the same `console.log` (or any code) once per case, you can "stack" the case labels together so they all fall through into one shared block. This keeps the code shorter and easier to maintain.

## Syntax
```js
switch (value) {
  case a:
  case b:
  case c:
    // this ONE block runs for a, b, OR c
    break;
  default:
    // ...
}
```

## Example
```js
let browser = "Brave";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}
```

## Line-by-Line Explanation
- `let browser = "Brave";` — the value being checked.
- `switch (browser) {` — begin checking `browser` against each case.
- `case "Chrome":`, `case "Edge":`, `case "Brave":`, `case "Opera":` — these four case labels are stacked with no code between them. `browser` matches `case "Brave"` specifically, but because there's nothing to run between `"Chrome"`, `"Edge"`, `"Brave"`, and `"Opera"`, all four labels effectively point to the same single block of code below them.
- `console.log("Chromium Project!"); break;` — this is the shared code that runs for any of Chrome, Edge, Brave, or Opera. Since `browser` is `"Brave"`, this is what executes.
- `case "Firefox":` and `case "Safari":` — never reached, since the switch already matched `"Brave"` and exited via `break`.
- `default:` — never reached either, for the same reason.

## Why the Output Occurs
`browser` is `"Brave"`, which matches the `case "Brave":` label. Since none of the grouped case labels (`"Chrome"`, `"Edge"`, `"Brave"`, `"Opera"`) have their own code or `break` before the shared `console.log`, JavaScript runs straight through from the matched label down to the first real statement, which is `console.log("Chromium Project!")`. The `break;` right after it then exits the switch.

**Output:** `Chromium Project!`

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| Stacked `case` labels | Multiple values sharing one code block | Chrome, Edge, Brave, and Opera all print the same message |
| `break;` | Exits after the shared block runs | Prevents falling into Firefox/Safari/default |
| `default:` | Runs only for browsers not listed at all | Skipped here, since "Brave" was matched |

**Note:** This is the same underlying "fall-through" mechanic as the accidental-bug example elsewhere in this chapter — the difference is purely intent: here it's used on purpose to group cases, not left in by mistake.
