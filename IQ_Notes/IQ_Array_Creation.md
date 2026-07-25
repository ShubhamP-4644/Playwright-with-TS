# Creating Arrays - Literal, Constructor, `Array.of()`, `Array.from()`

## What is it?

There are several different ways to create an array in JavaScript. This file walks through the most common ones: the simple `[...]` **literal** syntax (the one you should reach for by default), the `new Array(...)` **constructor** (which has a confusing special case), `Array.of(...)` (a safer alternative to the constructor), and `Array.from(...)` (which builds an array out of something else, like text).

## Why do we need it?

Not every situation hands you data as a ready-made list. Sometimes you know the exact items up front (use a literal). Sometimes you want to reserve empty slots to fill in later. Sometimes you have something *array-like* (such as a string of characters) and need to turn it into a real array to use array tools on it. Knowing these options - and their quirks - prevents surprising bugs.

## Syntax

```js
let a = [item1, item2, item3];   // array literal (preferred)

let b = new Array(5);            // SPECIAL CASE: a single number creates an EMPTY array of that length
let c = new Array(1, 2, 3);      // multiple arguments create an array containing those values

let d = Array.of(5);             // always creates an array containing that value, e.g. [5] - no special case
let e = Array.from(iterableOrArrayLike); // converts something iterable (like a string) into a real array
```

## Example - `10_Chapter_Array/66_Array_Creation.js`

```js
// Array literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor
let scores = new Array(3); // creates [empty x 3]
scores[0] = "1";
console.log(scores);

let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);


// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
```

### 1. Array literal - `let browsers = ["Chrome", "Firefox", "Safari"];`

This is the simplest and most common way: list the items directly inside square brackets, separated by commas. This is the recommended way to create an array whenever you already know its contents.

### 2. Array constructor with a single number - `new Array(3)`

```js
let scores = new Array(3); // creates [empty x 3]
scores[0] = "1";
console.log(scores);
```

- `new Array(3)` does **not** create an array containing the number `3`. Instead, when you pass it exactly **one number**, it creates an array with **that many empty slots** - here, 3 empty slots, and `length` is `3`.
- `scores[0] = "1";` then fills the first slot with the text `"1"`.
- `console.log(scores);` prints something like `["1", <2 empty items>]` (the exact display depends on the environment, but it shows one filled slot and two still empty).

This is a well-known JavaScript "gotcha" - a single-number argument to `new Array()` behaves completely differently from every other way of creating an array.

### 3. Array constructor with multiple values - `new Array(1, 2, 3)`

```js
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]
console.log(scores2);
```

- When you pass **two or more** arguments to `new Array(...)`, it creates an array containing exactly those values, in order.
- Output: `[1, 2, 3]`.

```js
let numbers = new Array(100, 200, 300, 400);
```

- Same idea: 4 arguments → an array of those 4 numbers, `[100, 200, 300, 400]` (not printed in this file, but created the same way).

### 4. `Array.of(...)` - a safer alternative

```js
let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);
```

- `Array.of(...)` always creates an array containing exactly the arguments you give it - **even if you only pass one number**. Unlike `new Array(3)`, `Array.of(3)` would create `[3]` (a 1-item array containing the number 3), not 3 empty slots.
- Here, 5 arguments are given, so `test` becomes `[10, 20, 30, 40, 50]`, and `test.length` prints `5`.

### 5. `Array.from(...)` - converting something else into an array

```js
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
```

- `Array.from()` takes something **iterable** (something you can step through one piece at a time - like a string of characters) and turns it into a real array.
- A string is iterable character-by-character, so `Array.from("hello")` produces an array of its individual letters: `["h", "e", "l", "l", "o"]`.

### Why the output occurs

| Call | Result | Why |
|---|---|---|
| `new Array(3)` | 3 empty slots (length `3`) | Special case: a *single number* argument means "make this many empty slots," not "an array holding this number" |
| `new Array(1, 2, 3)` | `[1, 2, 3]` | Multiple arguments are treated as the actual items to store |
| `Array.of(10, 20, 30, 40, 50)` | `[10, 20, 30, 40, 50]`, length `5` | `Array.of` always uses its arguments as items - no special single-number case |
| `Array.from("hello")` | `["h", "e", "l", "l", "o"]` | Splits an iterable (the string) into an array of its individual pieces (characters) |

### The concepts being demonstrated

- **Array literal (`[...]`)**: the simplest, most predictable, and generally preferred way to create an array.
- **`new Array(...)` constructor**: has a confusing special case with a single numeric argument (creates empty slots instead of a 1-item array) - a common source of beginner bugs.
- **`Array.of(...)`**: exists specifically to avoid that constructor gotcha - it always treats its arguments as the array's contents.
- **`Array.from(...)`**: converts an iterable or array-like value (a string, for example) into a genuine array, so you can then use array methods like `.push()`, `.map()`, etc. on it.

## Note

- Prefer the array literal (`[...]`) for everyday code - it's clear and has no hidden surprises.
- Avoid `new Array(singleNumber)` unless you specifically want pre-sized empty slots - it's easy to mistake for creating a 1-item array. Use `Array.of(singleNumber)` if that's what you actually want.
