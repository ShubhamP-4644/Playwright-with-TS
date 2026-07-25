# Searching Inside Arrays: `indexOf`, `lastIndexOf`, `includes`

## What is it?

These are built-in tools for answering "is this value in the array, and if so, where?" without writing your own loop to check every item by hand.

## Why do we need it?

Checking "does this list contain X?" or "where is X located?" is one of the most common things you do with a list of data - for example, checking if a test result already includes an `"error"`, or finding the position of a specific value to remove or update it. JavaScript provides ready-made methods for exactly this, so you don't need to write a manual search loop every time.

## Syntax

```js
arr.indexOf(value);       // returns the index of the FIRST match, or -1 if not found
arr.lastIndexOf(value);   // returns the index of the LAST match, or -1 if not found
arr.includes(value);      // returns true or false - does the array contain this value at all?
```

## Example - `10_Chapter_Array/70_Array_Searching.js`

```js
//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");

// includes — returns boolean
results.includes("error"); // true
```

> **Note before diving in:** none of these lines use `console.log(...)`. That means if you run this file as-is, **nothing gets printed to the screen** - each method still runs and produces a result, but that result is simply thrown away because it isn't logged or stored anywhere. The comments (`//1`, `// -1`, `// true`) tell you what each call *would* return if you did print it.

### `results` array with its indexes

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Value | `"pass"` | `"fail"` | `"pass"` | `"error"` | `"fail"` |

### Line-by-line explanation

| Line | Code | What it would return | Why |
|---|---|---|---|
| 7 | `results.indexOf("fail");` | `1` | `.indexOf()` searches from the **start** and returns the position of the **first** match - `"fail"` first appears at index `1` |
| 8 | `results.indexOf("skip");` | `-1` | `"skip"` doesn't exist anywhere in the array, so `.indexOf()` returns `-1` (a special "not found" signal) |
| 11 | `results.lastIndexOf("fail");` | `4` | `.lastIndexOf()` searches from the **end** backwards and returns the position of the **last** match - `"fail"` last appears at index `4` |
| 14 | `results.includes("error");` | `true` | `.includes()` doesn't care about position - it just answers yes/no: is `"error"` in the array anywhere? It is, at index `3`, so the answer is `true` |

### Why the output occurs

- `.indexOf("fail")` scans the array left-to-right and stops at the **first** index where the value matches - that's index `1`, not index `4` (even though `"fail"` also appears there).
- `.indexOf("skip")` scans the whole array and never finds a match, so it returns `-1` - a number that can never be a real index, making it a safe way to represent "not found."
- `.lastIndexOf("fail")` is the mirror image of `.indexOf()`: it scans from the **end** toward the start (or equivalently, finds the highest index that matches), landing on index `4`.
- `.includes("error")` doesn't tell you *where* the value is, just *whether* it's there at all - it returns a plain `true`/`false`, which is often simpler to use in an `if` check than comparing an index to `-1`.

### The concepts being demonstrated

| Method | Direction searched | Returns | Use it when... |
|---|---|---|---|
| `.indexOf(value)` | Start → End | Index number (or `-1`) | You need the position of the **first** match |
| `.lastIndexOf(value)` | End → Start | Index number (or `-1`) | You need the position of the **last** match |
| `.includes(value)` | Anywhere | `true` / `false` | You only care **whether** the value exists, not where |

## Note

- `results.indexOf("skip") === -1` is a very common pattern for "this value is NOT in the array" - checking against `-1` because arrays don't have a negative index.
- `.includes()` is usually clearer than `.indexOf(value) !== -1` when you only need a yes/no answer - it says exactly what it means.
- Remember: calling these methods without `console.log(...)` (as in this file) computes a result but doesn't show it anywhere - always wrap the call in `console.log(...)` if you want to actually see the value.
