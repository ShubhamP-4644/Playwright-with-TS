# Switch Fall-Through — Multiple Prints from One Match

## What is it?
Another demonstration of what happens when `break` is left out of every case: one matching case can trigger a cascade of `console.log` calls all the way down to `default`, even though logically only one option should have applied.

## Why do we need it?
This reinforces the fall-through lesson with a different, very relatable example (fruit selection) — the more examples you trace through by hand, the more automatic it becomes to notice a missing `break` before it causes a real bug.

## Syntax
```js
switch (value) {
  case a:
    // no break
  case b:
    // this runs too if value === a
  default:
    // and so does this
}
```

## Example
```js
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}
```

## Line-by-Line Explanation
- `let fruit = "banana";` — the value being checked.
- `switch (fruit) {` — begin checking `fruit` against each case.
- `case "apple":` — skipped, `fruit` is not `"apple"`.
- `case "banana":` — matches! Runs `console.log("Banana selected");`. There's no `break`, so execution keeps going downward.
- `case "cherry":` — its label is ignored (JavaScript doesn't re-check the condition once it's already inside a fall-through run), and its code executes anyway: `console.log("Cherry selected");`.
- `case "date":` — same thing, runs `console.log("Date selected");`.
- `default:` — also runs, since there was never a `break` to stop the cascade: `console.log("Default reached");`.

## Why the Output Occurs
Once `fruit` matched `case "banana"`, JavaScript just executes every line of code from that point on, top to bottom, completely ignoring the `case`/`default` labels as "checkpoints" — they only matter for finding the *first* match, not for anything after that. Since none of the four `case`s or the `default` have a `break`, all of their `console.log`s run in sequence:

1. `Banana selected` (the real match)
2. `Cherry selected` (fell through)
3. `Date selected` (fell through)
4. `Default reached` (fell all the way to the end)

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `case x:` (no `break`) | Marks where to start running code for a match | Only used to *find* the entry point; doesn't stop anything afterward |
| `break;` (missing everywhere) | Would stop execution after each case | Its total absence causes every remaining line to run |
| `default:` | Meant as a fallback for "no match" | Runs here anyway, purely due to fall-through, not because nothing matched |
