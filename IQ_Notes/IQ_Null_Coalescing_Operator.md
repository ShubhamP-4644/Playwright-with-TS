# Nullish Coalescing Operator (`??`)

## What is it?
The nullish coalescing operator (`??`) gives you a fallback/default value, but ONLY when the left-hand value is `null` or `undefined` — nothing else. It reads as "use this... but if it's null or undefined, use that instead."

## Why do we need it?
It's extremely common to have a variable that *might* not have a value yet (e.g. missing config, an API response that hasn't arrived, an optional field) and you want a sensible default instead of working with `null`/`undefined`. `??` gives a clean way to say "use the real value if there is one, otherwise fall back," without accidentally overriding *legitimate* values like `0`, `""`, or `false` (which is a common bug when people use `||` for this instead — `||` falls back on ANY falsy value, not just `null`/`undefined`).

## Syntax
```js
let result = someValue ?? defaultValue;
// If someValue is null or undefined -> result = defaultValue
// Otherwise                          -> result = someValue
```

## Example
```js
let a = null;
let val = a ?? "Shubham"
console.log(val);



let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);
```

## Line-by-Line Explanation
- `let a = null; let val = a ?? "Shubham"` — `a` is `null`, so `??` immediately falls back to the right-hand side, `"Shubham"`. `val` becomes `"Shubham"`.
- `console.log(val);` — prints the fallback value that was used.
- `let api_response = null; let responsedata = api_response ?? "{}";` — same idea: `api_response` is `null`, so `responsedata` becomes the fallback string `"{}"` (often used to represent "an empty JSON object" as a safe default when an API call returns nothing).
- `console.log(responsedata);` — prints that fallback.

## Why the Output Occurs
In both cases, the variable on the left of `??` is exactly `null`, which is one of the two values (`null` or `undefined`) that trigger the fallback. So JavaScript ignores the left side entirely and evaluates to the right side instead.

1. `console.log(val)` → `Shubham`
2. `console.log(responsedata)` → `{}`

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `??` | Use left value unless it's `null`/`undefined`, then use right value | `null ?? "Shubham"` | `"Shubham"` |
| `??` | Does NOT fall back for other falsy values (`0`, `""`, `false`) — only `null`/`undefined` | `0 ?? "fallback"` | `0` (not `"fallback"`) |

**Note:** This is different from `||` (logical OR), which falls back on *any* falsy value (`0`, `""`, `false`, `NaN`, `null`, `undefined`). `??` is more precise when `0` or `""` are valid, meaningful values you don't want overridden.
