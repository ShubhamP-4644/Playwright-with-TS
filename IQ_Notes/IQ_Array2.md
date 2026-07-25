# Arrays - Out-of-Bounds Access and Mixed Data Types

## What is it?

This file builds on [[IQ_Array1]] and shows two more array basics: what happens when you ask for a position that **doesn't exist**, and that a single array can hold **different types of values** at the same time (numbers, text, booleans, even nothing at all).

## Why do we need it?

Knowing what happens when you access a position beyond the array's actual items prevents confusion later (it doesn't crash - it just gives you `undefined`). And knowing arrays can freely mix data types explains why JavaScript arrays are so flexible compared to stricter, single-type lists in some other languages.

## Syntax

```js
let arr = [item1, item2, ...];
arr[outOfRangeIndex];  // returns undefined instead of an error
let mixed = [number, string, boolean, null, undefined]; // all allowed together
```

## Example - `10_Chapter_Array/65_Array2.js`

```js
let arr = [10, 20, 30, 40];
console.log(arr.length);
// 0 to 3
console.log(arr[4]); // undefined


let testResults = ["pass", "fail", "pass", "skip"];
console.log(testResults);

let mixed = [1, "hello", true, null, undefined];
console.log(mixed);
```

### Line-by-line explanation

| Line | Code | What it does | Output |
|---|---|---|---|
| 1 | `let arr = [10, 20, 30, 40];` | Creates an array of 4 numbers, stored at positions `0`, `1`, `2`, `3` | - |
| 2 | `console.log(arr.length);` | Prints how many items are in the array | `4` |
| 3 | `// 0 to 3` | A comment reminding us that the valid *indexes* for a 4-item array are `0`, `1`, `2`, `3` (not `4`) | - |
| 4 | `console.log(arr[4]);` | Tries to access position `4`, which doesn't exist (the last valid position is `3`) | `undefined` |
| 7 | `let testResults = ["pass", "fail", "pass", "skip"];` | Creates an array of 4 text values (note `"pass"` appears twice - arrays allow duplicates) | - |
| 8 | `console.log(testResults);` | Prints the entire array at once | `["pass", "fail", "pass", "skip"]` |
| 10 | `let mixed = [1, "hello", true, null, undefined];` | Creates an array with 5 items of **different types**: a number, a string, a boolean, `null`, and `undefined` | - |
| 11 | `console.log(mixed);` | Prints the entire mixed array | `[1, "hello", true, null, undefined]` |

### Why the output occurs

- `arr[4]` returns `undefined` (not an error) because JavaScript arrays don't complain when you ask for a position that isn't there - they simply report that there's "nothing" at that spot. This is different from many other languages, which would throw an error ("index out of bounds").
- `testResults` prints exactly as written because `console.log` on an array shows every item, in order, inside square brackets.
- `mixed` prints five very different kinds of values together because a JavaScript array doesn't force all its items to be the same type - unlike, say, a list that only accepts numbers.

### The concepts being demonstrated

- **Out-of-bounds access**: reading an index beyond the array's actual items gives `undefined` instead of crashing the program. This is useful to know so you don't panic when you see `undefined` - it usually means "there's nothing at that position," often because of an off-by-one mistake (see [[IQ_For_Loop2]] for a similar off-by-one idea with loop conditions).
- **Mixed-type arrays**: a single array can hold numbers, strings, booleans, `null`, and `undefined` all together. JavaScript doesn't require every item in an array to be the same "kind" of value.

## Note

- `arr[4]` being `undefined` is a common source of silent bugs - if you expect 4 items but accidentally loop one step too far, you won't get an error, just an unexpected `undefined` value.
- Being able to mix types in one array is convenient but can also make bugs harder to spot - if you expect an array to always hold numbers and it accidentally holds a string too, later math on that array can misbehave.
