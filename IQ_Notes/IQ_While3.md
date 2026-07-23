# `while (true)` with `break` - Stopping a Loop from the Inside

## What is it?

`while (true)` creates a loop whose condition is **always true**, meaning it would normally never stop by itself (it's intentionally an infinite loop). The `break` keyword is what lets you exit such a loop **from inside its body**, based on some check you write yourself.

## Why do we need it?

Sometimes the "should I stop?" decision doesn't fit neatly into a simple `while (condition)` at the top of the loop - you might need to run some code first, then decide whether to stop partway through. `while (true)` combined with an `if` check and `break` gives you full control over exactly when and where the loop exits, instead of only being able to check a condition at the very top.

## Syntax

```js
while (true) {
    // always runs
    if (someCondition) {
        break; // immediately exits the loop, skipping any remaining code in this iteration
    }
    // more code, only reached if we didn't break
}
```

## Example - `09_Chapter_Loops/59_While3.js`

```js
let age = 7;
while (true) {
    if (age > 10) {
        break;
    }
    else {
        console.log(age);
    }
    age++;
}
```

### Line-by-line explanation

| Line | Code | What it does |
|---|---|---|
| 1 | `let age = 7;` | Create `age` and set it to `7` |
| 2 | `while (true)` | Start a loop whose condition is always `true` - it will never stop on its own |
| 3 | `if (age > 10)` | Check whether `age` is greater than `10` |
| 4 | `break;` | If the check above is `true`, immediately stop the loop entirely (jump to the line right after the loop's closing `}`) |
| 6-7 | `else { console.log(age); }` | If `age` is **not** greater than `10`, print the current value of `age` instead |
| 9 | `age++;` | Increase `age` by 1 (only reached if `break` did **not** run) |

### Why the output occurs

```
7
8
9
10
```

Walking through it:

- `age = 7`: `7 > 10` is `false` → goes to `else`, prints `7`, then `age` becomes `8`.
- `age = 8`: `8 > 10` is `false` → prints `8`, then `age` becomes `9`.
- `age = 9`: `9 > 10` is `false` → prints `9`, then `age` becomes `10`.
- `age = 10`: `10 > 10` is `false` → prints `10`, then `age` becomes `11`.
- `age = 11`: `11 > 10` is now `true` → `break` runs, and the loop stops **immediately** - `age` is never printed and `age++` on line 9 is never reached for this round.

So the numbers `7` through `10` get printed, and `11` never appears anywhere - as soon as the condition to stop becomes true, `break` exits before anything else in that round can run.

### The concept being demonstrated

- **`while (true)`**: an intentional infinite loop - it never stops based on its own condition.
- **`break`**: a keyword that immediately exits the nearest enclosing loop, no matter where it appears inside the loop's body. Execution jumps straight past the loop's closing `}` and continues with whatever code comes after it.
- Combining the two lets you write "keep going forever, until *this specific thing inside* happens" - which is more flexible than a simple `while (condition)` check at the top, because the stopping check can live anywhere in the body, surrounded by other logic.

## Note

- Without the `if (age > 10) { break; }` check, this `while (true)` loop would never stop - it's the `break` that makes it safe and finite in practice.
- `break` exits the loop **before** any code below it (in that same iteration) runs - that's why `age++` never executes on the final round.
