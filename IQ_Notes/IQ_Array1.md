# Arrays - Basic Indexing, `.length`, and `.at()`

## What is it?

An **array** is a single container that holds a list of items, in order, like a shelf with numbered slots. Instead of creating a separate variable for every item (`browser1`, `browser2`, `browser3`...), you put them all in one array and refer to each item by its **position** (called an "index").

## Why do we need it?

Most real data comes as a list: browsers to test, students in a class, products in a cart. Arrays let you store an entire list under one variable name, and give you tools to look at its size, grab items from either end, and check for items that don't exist - all without writing a new variable for every single item.

## Syntax

```js
let myArray = [];                 // empty array
let myArray = [item1, item2, ...]; // array with items, comma-separated

myArray[index]      // access an item by position (0-based)
myArray.at(index)   // access an item by position, supports negative numbers
myArray.length       // how many items are in the array
```

## Example - `10_Chapter_Array/64_Array1.js`

```js
let fruit = [];
let browser = ["Chrome", "Firefox", "Webkit"];
console.log(browser[0]);
console.log(browser.at(-1)); // Start from reverse .at() is an inbuilt function
console.log(browser.length);        // 3
console.log(fruit.length);          // 0

console.log(browser[-1]);     // Undefined

console.log(browser.at(-4));       // Undefined

console.log(browser.at(0));     // Chrome

// Length is different from indexing length start from 1 as normal numbering 
// Indexing always starts from 0
```

### Line-by-line explanation

| Line | Code | What it does | Output |
|---|---|---|---|
| 1 | `let fruit = [];` | Creates an **empty array** - a list with zero items inside | - |
| 2 | `let browser = ["Chrome", "Firefox", "Webkit"];` | Creates an array with 3 text items, stored at positions `0`, `1`, and `2` | - |
| 3 | `console.log(browser[0]);` | Accesses the item at index `0` (the **first** item) | `Chrome` |
| 4 | `console.log(browser.at(-1));` | `.at(-1)` counts from the **end** of the array: `-1` means "the last item" | `Webkit` |
| 5 | `console.log(browser.length);` | `.length` tells you how many items are in the array | `3` |
| 6 | `console.log(fruit.length);` | `fruit` has no items, so its length is `0` | `0` |
| 8 | `console.log(browser[-1]);` | Square-bracket indexing does **not** support negative numbers - there's no item at a position called `"-1"` | `undefined` |
| 10 | `console.log(browser.at(-4));` | The array only has 3 items (positions `-1`, `-2`, `-3` from the end), so `-4` goes **past** the start of the array | `undefined` |
| 12 | `console.log(browser.at(0));` | `.at(0)` behaves the same as `browser[0]` for positive numbers - the first item | `Chrome` |

### Why the output occurs

- Arrays are **zero-indexed**: the first item lives at position `0`, not `1`. That's why an array of 3 items has valid positions `0`, `1`, `2` - and `.length` (`3`) is one more than the highest valid index (`2`).
- `browser[-1]` gives `undefined` because square brackets (`[]`) only understand actual property names/positions that exist on the array - `"-1"` is not a real stored position, so JavaScript reports nothing found there.
- `browser.at(-1)` gives `"Webkit"` because `.at()` is a **built-in method** that specifically understands negative numbers as "count backwards from the end" (`-1` = last item, `-2` = second-to-last, etc.).
- `browser.at(-4)` gives `undefined` because counting backwards 4 positions from a 3-item array goes past the very first item - there's nothing there.

### The concepts being demonstrated

- **Indexing with `[]`**: direct access by position, starting at `0`. Does not understand negative numbers.
- **`.at()` method**: a modern, more flexible way to access items - works exactly like `[]` for positive numbers, but also supports negative numbers to count from the end, which is handy for "give me the last item" without needing to know the array's length.
- **`.length` property**: tells you the total count of items - useful for loops and for checking if an array is empty (`length === 0`).

## Note

- `.length` counts items starting from 1 (a 3-item array has `length` `3`), but **indexing** starts from 0 (valid positions are `0`, `1`, `2`). This mismatch trips up a lot of beginners - the last valid index is always `length - 1`.
- Prefer `.at(-1)` over `array[array.length - 1]` when you just want the last item - it's shorter and easier to read.
