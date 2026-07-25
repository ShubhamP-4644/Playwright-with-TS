# Finding Items by Condition: `find`, `findIndex`, `findLast`, `findLastIndex`

## What is it?

These four methods let you search an array not just for an exact value (like `.indexOf()` does in [[IQ_Array_Searching]]), but for the **first or last item that matches a rule you describe** - for example, "the first number greater than 20."

The rule is written as a small function - here using **arrow function** syntax (`n => n > 20`), which just means "for each item (call it `n`), check if `n > 20` is true."

## Why do we need it?

Sometimes you don't know the exact value you're looking for - you know a *condition* it should meet (the first failing test, the first score above a passing grade, the last error in a log). `.indexOf()`/`.includes()` can only check for an exact match; `.find()` and its relatives let you search using any condition you can write as a yes/no check.

## Syntax

```js
arr.find(item => condition);        // returns the FIRST item that satisfies the condition, or undefined
arr.findIndex(item => condition);   // returns the INDEX of the first match, or -1

arr.findLast(item => condition);       // returns the LAST item that satisfies the condition, or undefined
arr.findLastIndex(item => condition);  // returns the INDEX of the last match, or -1
```

## Example - `10_Chapter_Array/71_IQ.js`

```js
let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3
```

### `nums` array with its indexes

| Index | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Value | `10` | `25` | `30` | `45` |
| `> 20`? | No | Yes | Yes | Yes |

### Line-by-line explanation

| Line | Code | What it does | Result |
|---|---|---|---|
| 1 | `let nums = [10, 25, 30, 45];` | Creates the array | - |
| 2 | `let result = nums.find(temp => temp > 20);` | Checks each item **from the start**, and stops at the **first** one where `temp > 20` is true. `10 > 20` is false, `25 > 20` is true → stop here. | `result` is `25` |
| 3 | `console.log(result);` | Prints `result` | `25` |
| 6 | `let index = nums.findIndex(n => n > 20);` | Same search as `.find()`, but returns the **position** of the match instead of the value itself. The match (`25`) is at index `1`. | `index` is `1` |
| 7 | `console.log(index);` | Prints `index` | `1` |
| 9 | `nums.findLast(n => n > 20);` | Checks each item **from the end backwards**, and stops at the **first** one it hits going that direction where `n > 20` is true - that's `45` (index `3`). Not stored or printed, but the comment shows what it would be. | Would be `45` |
| 10 | `nums.findLastIndex(n => n > 20);` | Same as above, but returns the **position** (`3`) instead of the value. Not stored or printed. | Would be `3` |

### Full output when run

```
25
1
```

(Lines 9 and 10 compute a result but never print it, since they aren't wrapped in `console.log(...)` or saved to a variable that gets logged - only the comments tell us what those results would be.)

### Why the output occurs

- `.find()` walks the array from index `0` upward and returns the *value* of the first item where the condition is `true`. `10` fails the check (`10 > 20` is false), so it moves to `25`, which passes - search stops there, giving `25`.
- `.findIndex()` does the identical search, but instead of handing back the matching value, it hands back **where** that value was found - `1`.
- `.findLast()` and `.findLastIndex()` do the same kind of search, but starting from the **end** of the array and moving backward - so they find the *last* item/position that matches, rather than the first. Since `25`, `30`, and `45` all satisfy `n > 20`, the last one encountered going backward is `45` at index `3`.

### The concepts being demonstrated

| Method | Searches from | Returns |
|---|---|---|
| `.find(condition)` | Start | The matching **value** |
| `.findIndex(condition)` | Start | The matching **index** |
| `.findLast(condition)` | End | The matching **value** |
| `.findLastIndex(condition)` | End | The matching **index** |

The "condition" itself (`n => n > 20`) is an **arrow function** - a compact way of writing "for a given item `n`, evaluate this expression." It's the same idea used with `.forEach()` and `.map()` (see [[IQ_Array_Iterate]]).

## Note

- If nothing matches, `.find()`/`.findLast()` return `undefined`, and `.findIndex()`/`.findLastIndex()` return `-1` - similar in spirit to how `.indexOf()` returns `-1` for "not found" (see [[IQ_Array_Searching]]).
- Use `.find()`/`.findIndex()` when you want the **first** match, and `.findLast()`/`.findLastIndex()` when you specifically want the **last** match instead.
