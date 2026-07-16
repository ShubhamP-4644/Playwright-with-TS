# Nested Ternary — Temperature Feel Categorization

## What is it?
This is the same "chained ternary" idea seen in the HTTP status code example, applied to a different everyday scenario: describing how a temperature *feels* (Very Hot, Hot, Warm, Cool, or Cold). Multiple ternaries are stacked in a row, each one only running if the previous condition was false.

## Why do we need it?
Categorizing a numeric value into human-friendly labels (like turning `35` degrees into the word `"Hot"`) is an extremely common real-world task — think weather apps, thermostats, or health dashboards. A chained ternary lets you express several range checks compactly, instead of writing a longer block of `if / else if` statements.

## Syntax
```js
let label = value >= threshold1 ? "Label A" :
            value >= threshold2 ? "Label B" :
            value >= threshold3 ? "Label C" : "Default Label";
```

## Example
```js


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);
```

## Line-by-Line Explanation
- `let temp = 35;` — Creates a variable holding the number `35`, representing a temperature (in whatever unit, e.g., Celsius).
- `let feel = ... ;` — A single chained ternary expression, checked in order from highest threshold to lowest:
  - `(temp >= 40) ? "Very Hot" :` — if temp is 40 or higher, it's `"Very Hot"`.
  - `(temp >= 30) ? "Hot" :` — otherwise, if temp is 30 or higher, it's `"Hot"`.
  - `(temp >= 20) ? "Warm" :` — otherwise, if temp is 20 or higher, it's `"Warm"`.
  - `(temp >= 10) ? "Cool" :` — otherwise, if temp is 10 or higher, it's `"Cool"`.
  - `"Cold"` — if none of the above matched (temp is below 10), it's `"Cold"`.
- `console.log("7. Temperature:", temp, "| Feel:", feel);` — Prints multiple comma-separated values. `console.log` with commas prints each value separated by a space, so this prints the label text, the temp value, another label, and the feel value, all on one line.

## Why the Output Occurs
Tracing through with `temp = 35`:

1. **First check:** `temp >= 40` → `35 >= 40` → `false`. Move to the next check.
2. **Second check:** `temp >= 30` → `35 >= 30` → `true`. This one matches!
3. Because this check is `true`, its result `"Hot"` is chosen, and none of the remaining checks (`>= 20`, `>= 10`, or the final `"Cold"` fallback) are even evaluated.
4. So `feel` becomes `"Hot"`.
5. The final printed line is: `7. Temperature: 35 | Feel: Hot`

Just like the HTTP status code example, this works because the checks are ordered from the highest threshold down to the lowest. As soon as one condition is `true`, JavaScript stops and uses that branch's value — it never bothers checking the remaining, lower thresholds.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `?` `:` | Ternary — shorthand if/else | `temp >= 30 ? "Hot" : "Other"` | Picks one of two values |
| `>=` | Greater than or equal to | `35 >= 30` | `true` |
| Chained `?:` | Multiple ternaries stacked like else-if | `a ? v1 : b ? v2 : v3` | Acts like an if/else-if/else ladder |
