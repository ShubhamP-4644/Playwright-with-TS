# Putting It Together: A Realistic Array Example

## What is it?

This file combines several ideas you've already seen - `.length`, `.pop()`, `.shift()`, a `for` loop, and an `if` check - into one small, realistic scenario: starting with a list of browsers, trimming it down, then looping through what's left to flag a specific one.

## Why do we need it?

Real code rarely uses just one array feature in isolation - it combines them. This example shows a believable situation (a QA engineer removing unsupported browsers from a test list, then looping through the rest to flag a special case) using only the tools already introduced: [[IQ_Array_Adding_Remove]] for `pop`/`shift`, and [[IQ_For_Loop1]] for the loop.

## Syntax

No new syntax is introduced here - this file is a **combination exercise** using:

```js
arr.length      // count of items
arr.pop();      // remove last item
arr.shift();    // remove first item
for (let i = 0; i < arr.length; i++) { ... }   // loop through every item by index
if (value === "target") { ... }                 // check a specific item
```

## Example - `10_Chapter_Array/69_Array_REAL.js`

```js
let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
// console.log(browser);

let removed = browser.shift();
// console.log(browser);
// console.log(removed);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
    }
}
```

### Step-by-step trace

| Step | Code | Array state after | Notes |
|---|---|---|---|
| Start | `let browser = [...]` | `['chrome', 'firefox', 'safari', 'opera', 'edge']` | 5 items |
| 1 | `console.log(browser.length);` | (unchanged) | Prints `5` |
| 2 | `browser.pop();` | `['chrome', 'firefox', 'safari', 'opera']` | Removes `'edge'` from the end (its return value isn't stored, so it's discarded) |
| 3 | `let removed = browser.shift();` | `['firefox', 'safari', 'opera']` | Removes `'chrome'` from the beginning and **stores** the removed value in `removed` |
| 4 | `for (let i = 0; i < browser.length; i++)` | (unchanged, now 3 items) | Loops `i` = `0`, `1`, `2` |

### The loop, iteration by iteration

| `i` | `browser[i]` | `console.log(browser[i])` prints | Is it `"opera"`? | Extra output |
|---|---|---|---|---|
| 0 | `"firefox"` | `firefox` | No | - |
| 1 | `"safari"` | `safari` | No | - |
| 2 | `"opera"` | `opera` | Yes | `Opera doesn't support Automation Now!` |

### Full output

```
5
firefox
safari
opera
Opera doesn't support Automation Now!
```

### Why the output occurs

- `browser.length` is `5` at the very start, before anything is removed, so that's the very first line printed.
- `.pop()` removes `'edge'` (the last item) and `.shift()` removes `'chrome'` (the first item) - after both, only `'firefox'`, `'safari'`, and `'opera'` remain, in that order. Neither removal is printed because those `console.log` lines are **commented out** (`//`), so they don't run at all.
- The `for` loop then walks through the **remaining 3 items** by index (`browser.length` is now `3`, so `i` goes `0, 1, 2`), printing each one.
- Inside the loop, the `if (browser[i] === "opera")` check compares the current item to the exact text `"opera"` using `===` (strict equality - see [[IQ_Comparison_Operator]] if that file exists, otherwise: it checks both value and type match exactly). Only when `i` is `2` does this match, triggering the extra warning message.

### The concept being demonstrated

This shows how array-modifying methods (`pop`, `shift`) and array-reading tools (a `for` loop with `.length` and `[]` indexing) work **together** in a realistic flow: shrink the list first, *then* process whatever remains. It also shows that a loop combined with an `if` check inside its body is a common pattern for "do something for every item, but do something *extra* for one specific item."

## Note

- Commented-out lines (`// console.log(browser);`) don't execute - they're left in the file as a way to show *what you could check* while writing/debugging the code, without cluttering the actual output.
- Because `.pop()` and `.shift()` modify `browser` directly, the `for` loop afterward automatically sees the **already-shrunk** array - there's no need to manually recalculate anything.
