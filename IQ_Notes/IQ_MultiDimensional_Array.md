# Multi-Dimensional Arrays

A normal (1D) array is like a **single row of lockers** — locker 0, locker 1, locker 2... Each locker holds one thing.

A **2D array (array of arrays)** is like a **whole locker room with rows AND columns** — a grid. To find a locker you now need two numbers: "which row" and "which locker in that row."

## 1. From 1D to 2D (`122_Array_1D.js`)

```js
let arr = ["PASS", "FAIL", "PASS"];   // one row of lockers

let grid = [
    [1, 2, 3],     // row 0
    [4, 5, 6],     // row 1
    [7, 8, 9]      // row 2
];

for (let i = 0; i < 3; i++) {        // i = which row
    for (let j = 0; j < 3; j++) {    // j = which locker in that row
        process.stdout.write(grid[i][j] + "");
    }
    console.log("");
}
```

Real world: think of a **classroom seating chart**. `grid[1][2]` means "go to row 1, then seat 2 in that row" — same as `grid` being a bunch of little 1D arrays stacked on top of each other.

## 2. Reading, changing, and looping a grid (`123_Array2.js`)

```js
let grid = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

console.log(grid[0][0]);   // 10
grid[0][0] = 99;           // you can change a single cell, just like a normal array
console.log(grid.length);  // 3 -- number of ROWS (not total cells!)
```

Three ways to walk through every cell — all do the same thing, like three different ways to hand out worksheets to a classroom row by row:

```js
// 1. classic index loop
for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[i].length; j++) {
        process.stdout.write(mtrx[i][j] + " ");
    }
}

// 2. for...of  (rarely used per the file's own comment, but reads nicely)
for (let row of mtrx) {
    for (let cell of row) { process.stdout.write(cell + " "); }
}

// 3. forEach
mtrx.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
});
```

## 3. Doing real work on a grid (`124_Array_Fn.js`)

```js
let scores = [
    [85, 90, 78],   // student 0's three test scores
    [60, 45, 70],   // student 1's
    [95, 88, 92]    // student 2's
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b));
console.log(rowSums);   // [253, 175, 275] -- total per student
```

Real world: imagine a **report card spreadsheet** — each row is one student, each column is one subject's score. `map` walks row by row (student by student), and inside each row `reduce` adds up that student's scores into one total, like a teacher totaling one student's row before moving to the next.

```js
let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];
// find every test that failed, across every suite (row) and every test (column)
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) console.log(suiteResults[i][j]);
    }
}
```

Real world: this is like a QA dashboard with test **suites** as rows and individual **tests** as columns — you scan suite by suite, test by test, and flag anything that says "fail," the same way you'd scan a printed test report for red marks.

## 4. Nested loops for pattern printing (`125`–`127`)

Star patterns are the classic way to *practice* nested loops — outer loop = which row, inner loop = how many stars/spaces in that row.

```js
// Right-angled triangle (125_Right_Pattern.js)
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) process.stdout.write("*");   // row i has i stars
    console.log("");
}
// *
// **
// ***
// ****
// *****
```

```js
// Mirrored triangle (126_Left_Pattern.js) -- start big, shrink each row
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) process.stdout.write("*");
    console.log("");
}
// *****
// ****
// ***
// **
// *
```

```js
// Pyramid (127_Pyramid_Pattern.js) -- spaces to center it, then odd number of stars
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) row += " ";       // leading spaces shrink each row
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";   // stars grow by 2 each row (1,3,5,7...)
    console.log(row);
}
//    *
//   ***
//  *****
// *******
```

Real world: think of **stacking bricks to build a pyramid** — each row needs fewer side-spaces and more bricks (stars) than the row above, and the two nested loops are just "for each row, do this many small steps."

## Comparison

| Aspect | 1D Array | 2D Array (Array of Arrays) |
|---|---|---|
| Definition | A single list of values | A list of lists — rows, each containing its own list |
| Real-world analogy | One row of lockers | A grid of lockers (rows × columns) / a spreadsheet |
| Access | `arr[i]` | `grid[i][j]` — row `i`, column `j` |
| `.length` | Number of elements | Number of **rows** (each row may have its own `.length` for columns) |
| Looping | One `for` loop | Nested `for` loops (outer = row, inner = column) |
| Typical use here | Simple list of pass/fail results | Tables (student scores), test suite results, star patterns |

## Flow — reading `grid[1][2]`

```
grid = [
  [1, 2, 3]   <- row 0
  [4, 5, 6]   <- row 1        grid[1]    → [4, 5, 6]
  [7, 8, 9]   <- row 2        grid[1][2] → 6
]
        row index (i=1)   column index (j=2)
             │                    │
             ▼                    ▼
        pick the row  ──►  pick the cell inside that row
```
