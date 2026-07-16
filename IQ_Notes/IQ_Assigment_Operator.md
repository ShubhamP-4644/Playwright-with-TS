# Assignment Operators

## What is it?
An assignment operator is how you put a value "into" a variable — like writing a value on a sticky note and putting that note into a labeled box. The plain `=` sign puts a brand-new value into the box. The "compound" assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`) are shortcuts that say "take what's already in the box, do some math with it, and put the answer back in the same box."

## Why do we need it?
In real programs you constantly need to update a value based on its current value — for example, adding points to a score, reducing a countdown, or doubling a price. Writing `y = y + 5` works, but it's repetitive to type `y` twice. Compound assignment operators like `y += 5` let you do the same thing more briefly, which makes code shorter and easier to read once you're used to the pattern.

## Syntax
```js
variable = value;        // plain assignment

variable += value;       // same as: variable = variable + value
variable -= value;       // same as: variable = variable - value
variable *= value;       // same as: variable = variable * value
variable /= value;       // same as: variable = variable / value
variable %= value;       // same as: variable = variable % value
```

## Example
```js


 // ----------------Assignment Operator----------------------//
        let x = 10;
        x = "ShubhamPrajapati";
        console.log(x);




let y = 10;
y += 5;     // y = y + 5; --> 15
console.log(y);

y -= 3;     // y = y - 3;  --> 12
console.log(y);

y *= 2;        // y = y * 2;  --> 24
console.log(y);

y /= 3;        // y = y / 3;  --> 8
console.log(y);

y %= 4;        // y = y % 4;  --> 0
console.log(y);
```

## Line-by-Line Explanation
- `let x = 10;` — creates variable `x` holding the number `10`.
- `x = "ShubhamPrajapati";` — uses the plain `=` operator to overwrite `x` with the string `"ShubhamPrajapati"`.
- `console.log(x);` — prints `x`, which is now `"ShubhamPrajapati"`.
- `let y = 10;` — creates a new variable `y` starting at `10`.
- `y += 5;` — means `y = y + 5`. Since `y` was `10`, it becomes `10 + 5 = 15`.
- `console.log(y);` — prints `15`.
- `y -= 3;` — means `y = y - 3`. Since `y` was `15`, it becomes `15 - 3 = 12`.
- `console.log(y);` — prints `12`.
- `y *= 2;` — means `y = y * 2`. Since `y` was `12`, it becomes `12 * 2 = 24`.
- `console.log(y);` — prints `24`.
- `y /= 3;` — means `y = y / 3`. Since `y` was `24`, it becomes `24 / 3 = 8`.
- `console.log(y);` — prints `8`.
- `y %= 4;` — means `y = y % 4` (remainder after division). Since `y` was `8`, `8 % 4 = 0` (8 divides evenly by 4 with nothing left over).
- `console.log(y);` — prints `0`.

## Why the Output Occurs
Tracing the value of `y` step by step through the file:

| Line | Operation | Calculation | New value of `y` | Console Output |
|---|---|---|---|---|
| `let y = 10;` | initialize | — | 10 | (not logged yet) |
| `y += 5;` | `10 + 5` | `15` | 15 | `15` |
| `y -= 3;` | `15 - 3` | `12` | 12 | `12` |
| `y *= 2;` | `12 * 2` | `24` | 24 | `24` |
| `y /= 3;` | `24 / 3` | `8` | 8 | `8` |
| `y %= 4;` | `8 % 4` (remainder) | `0` | 0 | `0` |

Each `console.log(y)` prints whatever `y` currently holds *at that exact point in the code* — since each compound operator updates `y` immediately before the next log statement runs, the outputs form the running sequence: `15`, `12`, `24`, `8`, `0`.

The very first `console.log(x)` prints `ShubhamPrajapati` for the same reason explained in the Data Types note: `x` was reassigned from `10` to that string before being logged.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `=` | Assigns a value directly to a variable | `x = "ShubhamPrajapati";` | `x` becomes `"ShubhamPrajapati"` |
| `+=` | Adds the right value to the variable, then stores it back | `y += 5;` (y was 10) | `y` becomes `15` |
| `-=` | Subtracts the right value from the variable, then stores it back | `y -= 3;` (y was 15) | `y` becomes `12` |
| `*=` | Multiplies the variable by the right value, then stores it back | `y *= 2;` (y was 12) | `y` becomes `24` |
| `/=` | Divides the variable by the right value, then stores it back | `y /= 3;` (y was 24) | `y` becomes `8` |
| `%=` | Divides the variable by the right value and stores the remainder | `y %= 4;` (y was 8) | `y` becomes `0` |
