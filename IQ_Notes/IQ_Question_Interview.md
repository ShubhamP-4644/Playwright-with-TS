# Interview Question — Loose vs Strict Equality with Numbers and Strings

## What is it?
This is a small example that tests whether you understand the difference between "loose" equality/inequality (`==`, `!=`) and "strict" equality/inequality (`===`, `!==`) when comparing a number to a string that looks like that number, such as `5` and `"5"`.

## Why do we need it?
This exact comparison (`5 == "5"`) is one of the most commonly asked JavaScript interview questions because it tests whether you truly understand type coercion. In real code, values often arrive as strings (for example, from form inputs, URL parameters, or API responses), so knowing whether `5 == "5"` is treated as equal — and why — helps you avoid subtle bugs when comparing user input to numbers.

## Syntax
```js
value1 == value2     // loose equality: converts types, then compares
value1 != value2      // loose inequality: converts types, then compares, negates
value1 === value2    // strict equality: no conversion, compares type AND value
value1 !== value2    // strict inequality: no conversion, negates strict equality
```

## Example
```js


console.log(5 == "5");                  // true
console.log(5 != "5");                  // false
console.log(5 != "5"); // loose                  // false
console.log(5 !== "5");  // strict               // true
```

## Line-by-Line Explanation
- `console.log(5 == "5");` — Compares the number `5` to the string `"5"` using loose equality. JavaScript converts the string to a number before comparing.
- `console.log(5 != "5");` — Compares the number `5` to the string `"5"` using loose inequality (the opposite of `==`). Same coercion rules apply, then the result is negated.
- `console.log(5 != "5"); // loose` — This is the exact same comparison as the line above, just with a comment reminding us it's the "loose" version. It produces the same result.
- `console.log(5 !== "5");  // strict` — Compares the number `5` to the string `"5"` using strict inequality. No type conversion happens, so a number and a string are automatically considered "not equal," making `!==` return `true`.

## Why the Output Occurs

1. **`5 == "5"` → `true`**
   With `==`, when one side is a number and the other is a string, JavaScript converts the string to a number first. `"5"` becomes `5`. The comparison becomes `5 == 5`, which is `true`.

2. **`5 != "5"` → `false`**
   `!=` is just the negation of `==`. Since we just established `5 == "5"` is `true`, `5 != "5"` must be the opposite: `false`.

3. **`5 != "5"` (again) → `false`**
   Identical comparison to the line above — same coercion, same result: `false`.

4. **`5 !== "5"` → `true`**
   `!==` is the negation of `===` (strict equality). Strict equality never converts types, and since `5` is a number and `"5"` is a string, they are different types — so `5 === "5"` is `false`, meaning `5 !== "5"` (its negation) is `true`.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Loose equality — converts types before comparing | `5 == "5"` | `true` |
| `!=` | Loose inequality — converts types, then negates | `5 != "5"` | `false` |
| `===` | Strict equality — no conversion (used to derive `!==` below) | `5 === "5"` | `false` |
| `!==` | Strict inequality — no conversion, negates strict equality | `5 !== "5"` | `true` |
