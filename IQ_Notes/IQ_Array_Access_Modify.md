# Accessing and Modifying Array Items

## What is it?

This file shows how to **read** items out of an array (using `[]` and `.at()`), how to **change** an existing item, and how `.at()` behaves when you ask for a position that goes too far back.

## Why do we need it?

An array isn't very useful if you can only create it - you also need to look at specific items and update them when things change (e.g., a test that was "pass" is now "blocked"). This file demonstrates exactly those everyday operations.

## Syntax

```js
myArray[index];        // read an item by position
myArray.at(index);     // read an item by position, negative numbers count from the end
myArray[index] = newValue; // overwrite an item at that position
myArray.length;         // count of items
```

## Example - `10_Chapter_Array/67_Array_Access_Modify.js`

```js
// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);


console.log(statuses.at(-1));
console.log(statuses.at(-2));

console.log(statuses.at(-4));

// Modify
statuses[1] = "blocked";
console.log(statuses);

// Length
console.log(statuses.length);
```

### Line-by-line explanation

| Line | Code | What it does | Output |
|---|---|---|---|
| 3 | `let statuses = ["pass", "fail", "skip"];` | Creates an array with 3 items at positions `0`, `1`, `2` | - |
| 5 | `console.log(statuses[0]);` | Reads the item at position `0` | `pass` |
| 6 | `console.log(statuses[2]);` | Reads the item at position `2` (the last one) | `skip` |
| 9 | `console.log(statuses.at(-1));` | `.at(-1)` = last item, counting from the end | `skip` |
| 10 | `console.log(statuses.at(-2));` | `.at(-2)` = second-from-last item | `fail` |
| 12 | `console.log(statuses.at(-4));` | The array only has 3 items, so counting back 4 positions goes past the first item entirely | `undefined` |
| 15 | `statuses[1] = "blocked";` | Overwrites the item at position `1` (previously `"fail"`) with the new text `"blocked"` | - |
| 16 | `console.log(statuses);` | Prints the whole array after the change | `["pass", "blocked", "skip"]` |
| 19 | `console.log(statuses.length);` | The array still has 3 items - modifying an item doesn't add or remove any | `3` |

### Why the output occurs

- Reading with `[]` or `.at()` never changes the array - it just looks at what's already there. `statuses[2]` and `statuses.at(-1)` both point to the same last item (`"skip"`), just counted from opposite directions.
- `statuses.at(-4)` returns `undefined` because a 3-item array only has valid "from the end" positions of `-1`, `-2`, and `-3` - `-4` reaches past the beginning, where nothing exists.
- Assigning `statuses[1] = "blocked";` directly replaces whatever was stored at position `1` - this is how you **update** an array item without removing or re-creating the whole array.
- `.length` stays `3` after the modification because replacing an item's *value* doesn't change how many *positions* the array has - only adding (like `.push()`) or removing (like `.pop()`) items does that (see [[IQ_Array_Adding_Remove]]).

### The concepts being demonstrated

- **Reading with `[]`**: direct positional access, 0-based, no negative-number support.
- **Reading with `.at()`**: same as `[]` for positive numbers, but also supports negative numbers to count backwards from the end - convenient for "give me the last/second-to-last item" without doing `length - 1` math yourself.
- **Modifying with `[] =`**: assigning a new value to an existing index overwrites that slot in place.
- **`.length`**: reflects the number of positions/slots in the array, unaffected by simply changing what's stored inside an existing slot.

## Note

- This file builds directly on the indexing and `.at()` ideas introduced in [[IQ_Array1]] - here they're combined with the new idea of **modifying** an array in place.
- Modifying an array with `arr[i] = value` changes the *original* array - if other code elsewhere is also looking at that same array, it will see the change too.
