# Looping Through Arrays: `for`, `for...of`, `forEach`, `.entries()`, `for...in`

## What is it?

There isn't just one way to "go through every item in an array" in JavaScript - there are several, and each has a slightly different style and purpose. This file walks through five of them, using the same small array so you can compare them directly.

## Why do we need it?

Almost everything you do with an array (printing it, transforming it, checking every item) starts with visiting each item one at a time. Knowing multiple ways to do this lets you pick whichever is clearest for the situation: sometimes you need the index, sometimes you just need the value, sometimes you want both together.

## Syntax

```js
for (let i = 0; i < arr.length; i++) { arr[i] }   // classic index-based loop

for (let item of arr) { item }                     // for...of - gives you each VALUE directly

arr.forEach((item, index) => { ... });              // forEach - runs a function for each item

for (let [i, item] of arr.entries()) { ... }        // entries() - gives you INDEX + VALUE pairs

for (let key in arr) { arr[key] }                   // for...in - gives you each INDEX (as a string)
```

## Example - `10_Chapter_Array/72_Array_Iterate.js`

```js
let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
```

### 1. Classic `for` loop with an index

```js
for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}
```

- `i` counts from `0` to `2` (since `tests.length` is `3`), and `tests[i]` looks up the value at that position each time (this is the same pattern covered in [[IQ_For_Loop1]]).
- Output:
  ```
  0 login
  1 checkout
  2 search
  ```
- **Use this when** you need the index for something (like comparing positions, or accessing a second, related array at the same index).

### 2. `for...of` - the cleanest way to get just the values

```js
for (let test of tests) {
    console.log(test) // value
}
```

- `for...of` hands you each **value** directly, one at a time, without needing an index variable or `tests[i]` lookups at all.
- Output:
  ```
  login
  checkout
  search
  ```
- **Use this when** you only care about the values themselves, not their positions - it's shorter and less error-prone than managing an index by hand.

### 3. `forEach` - run a function for every item

```js
tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
});
```

- `.forEach()` is an array **method** that takes a small function and runs it once for every item. That function receives the current item (`test`) and, optionally, its index (`index`).
- `` `${index}: ${test}` `` is a **template literal** - text wrapped in backticks (`` ` ``) that lets you drop variables directly inside `${...}` instead of gluing strings together with `+`.
- Output:
  ```
  0: login
  1: checkout
  2: search
  ```
- **Use this when** you want to run some action for every item and don't need to `break` out early (unlike `for`/`for...of`, `forEach` can't be stopped partway through with `break`).

### 4. `.entries()` - index and value together, destructured

```js
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
```

- `tests.entries()` produces a sequence of `[index, value]` pairs: `[0, "login"]`, `[1, "checkout"]`, `[2, "search"]`.
- `for (let [i, test] of ...)` uses **array destructuring** to instantly split each pair into two separate variables, `i` and `test`, in one step.
- Output:
  ```
  0 login
  1 checkout
  2 search
  ```
- **Use this when** you want the readability of `for...of` (no manual indexing) but still need the index available too.

### 5. `for...in` - looping over an array's keys

```js
let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
```

- `for...in` loops over an object's (or array's) **keys**. For an array, the "keys" are its indexes - but `for...in` gives them to you as **text** (`"0"`, `"1"`, `"2"`, `"3"`), not numbers.
- Despite the variable being named `student`, each value of `student` here is actually an **index string**, not a student's name - `students[student]` is what looks up the actual name.
- Output (roughly):
  ```
  0  ->  methis
  1  ->  senthil
  2  ->  ajay
  3  ->  rahul
  ```
- The comment `// index = in` is the file author's reminder that `for...in` gives you the **index/key**, not the value directly - the opposite of what `for...of` gives you.

### Why the output occurs

Every technique above visits the same 3 (or 4) items in the same order, but each hands you different information directly: `for` and `for...in` naturally give you the **index/key** (you then use `[]` to get the value); `for...of` gives you the **value** directly; `forEach` gives you both as arguments to your function; `.entries()` gives you both, bundled as a pair you can destructure.

### Comparison table

| Technique | Gives you directly | Needs `[]` lookup? | Can `break` early? |
|---|---|---|---|
| `for (let i = 0; ...)` | Index `i` | Yes (`arr[i]`) | Yes |
| `for...of` | Value | No | Yes |
| `.forEach()` | Value + index (as function arguments) | No | No |
| `.entries()` with destructuring | Index + value together | No | Yes |
| `for...in` | Key (index as a **string**) | Yes (`arr[key]`) | Yes |

## Note

- `for...in` is generally **not recommended** for arrays (it's designed for looping over an object's properties) - it's shown here mainly to contrast with `for...of`, and to highlight that it gives you the index as a string, not the value.
- Template literals (`` `${index}: ${test}` ``) are a cleaner alternative to string concatenation (`index + ": " + test`) - useful any time you're mixing text and variables together.
