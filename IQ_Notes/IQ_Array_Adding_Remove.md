# Adding and Removing Array Items: `push`, `pop`, `unshift`, `shift`, `splice`

## What is it?

Arrays aren't fixed in size - JavaScript gives you built-in tools (methods) to add or remove items from either the **end** or the **beginning** of an array, or from **anywhere in the middle**. This file walks through the five most common ones: `push`, `pop`, `unshift`, `shift`, and `splice`.

## Why do we need it?

Real lists change over time: a new test gets added, an old result gets removed, an item needs replacing in the middle. Instead of rebuilding the whole array by hand every time something changes, these methods let you make a targeted change in one line.

## Syntax

```js
arr.push(item1, item2, ...);      // add one or more items to the END, returns the new length
arr.pop();                        // remove the LAST item, returns the removed item

arr.unshift(item);                // add an item to the BEGINNING, returns the new length
arr.shift();                      // remove the FIRST item, returns the removed item

arr.splice(startIndex, deleteCount, item1, item2, ...);
// starting at startIndex: remove `deleteCount` items, then insert item1, item2, ... in their place
```

## Example - `10_Chapter_Array/68_Array_Adding_Remove.js`

```js
let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);
```

### Step-by-step trace

| Step | Code | What it does | Array afterward |
|---|---|---|---|
| Start | `let arr = [1, 2, 3];` | Creates the initial array | `[1, 2, 3]` |
| 1 | `arr.push(4);` | Adds `4` to the **end** | `[1, 2, 3, 4]` |
| 2 | `arr.pop();` | Removes the **last** item (`4`) | `[1, 2, 3]` |
| 3 | `arr.push(5, 6);` | Adds `5` and `6` to the end, in order (`push` accepts multiple items at once) | `[1, 2, 3, 5, 6]` |
| 4 | `arr.unshift(0);` | Adds `0` to the **beginning**, shifting everything else one position over | `[0, 1, 2, 3, 5, 6]` |
| 5 | `arr.shift();` | Removes the **first** item (`0`) | `[1, 2, 3, 5, 6]` |
| 6 | `arr.splice(2, 1);` | Starting at index `2` (the value `3`), remove `1` item | `[1, 2, 5, 6]` |
| 7 | `arr.splice(2, 0, 99);` | Starting at index `2`, remove `0` items, and **insert** `99` there | `[1, 2, 99, 5, 6]` |
| 8 | `arr.splice(1, 2, 10, 20);` | Starting at index `1`, remove `2` items (`2` and `99`), and insert `10, 20` in their place | `[1, 10, 20, 5, 6]` |

### Why the output occurs

- **`push`/`pop`** work at the **end** of the array: `push` grows it, `pop` shrinks it by one from the tail.
- **`unshift`/`shift`** work at the **beginning**: `unshift` inserts at the front (everything else shifts right by one position), `shift` removes from the front (everything else shifts left by one position).
- **`splice`** is the most flexible tool - it can remove, insert, or do both at once, at **any position**, based on the three things you give it: where to start, how many to delete, and what (if anything) to insert in their place.
  - `arr.splice(2, 1)` - "at position 2, delete 1 item, insert nothing" → pure deletion.
  - `arr.splice(2, 0, 99)` - "at position 2, delete 0 items, insert 99" → pure insertion (nothing removed).
  - `arr.splice(1, 2, 10, 20)` - "at position 1, delete 2 items, insert 10 and 20" → replace two items with two new ones (the count of removed vs. inserted items doesn't even need to match).

### The concept being demonstrated

| Method | Where it acts | Adds or removes? |
|---|---|---|
| `push` | End | Adds |
| `pop` | End | Removes |
| `unshift` | Beginning | Adds |
| `shift` | Beginning | Removes |
| `splice` | Anywhere | Both (can add, remove, or replace) |

`push`/`pop` and `unshift`/`shift` are simple, fast tools for the two ends of an array. `splice` is the general-purpose tool for changing the *middle* of an array (or really, anywhere), and it's the only one of the five that can both remove and insert items in a single call.

## Note

- `pop` and `shift` both **return** the item they removed (useful if you need that value), while `push` and `unshift` return the array's **new length** instead.
- `splice` **changes the original array directly** (like all the methods here) - it doesn't return a new array; it mutates the one you call it on.
- The comment `// [ 1, 2, 3, 5, 6 ]` in the file is simply confirming what the array looks like at that exact point, right before the `splice` calls begin.
