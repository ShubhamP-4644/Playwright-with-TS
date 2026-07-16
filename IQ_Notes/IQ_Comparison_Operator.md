# Comparison Operators

## What is it?
Comparison operators let you ask a yes-or-no question about two values — "Is this bigger than that?", "Are these two equal?" — and the answer JavaScript gives back is always one of two words: `true` or `false`. This `true`/`false` answer is called a **Boolean**.

## Why do we need it?
Programs constantly need to make decisions: "if the age is 18 or more, allow login", "if the cart total is greater than 500, apply a discount". Comparison operators are how you express the "question" part of that decision, and the `true`/`false` result is what an `if` statement (or similar) then acts on.

## Syntax
```js
a > b     // greater than
a < b     // less than
a >= b    // greater than or equal to
a <= b    // less than or equal to

a == b    // loose equality  (compares value only, converts types if needed)
a === b   // strict equality (compares value AND type, no conversion)

a != b    // loose inequality  (opposite of ==)
a !== b   // strict inequality (opposite of ===)
```

## Example
```js

//-----------Comparison Operator----------------------//
// Comparison operator will always result in the boolean, true OR false

// =, ==, ===
// = --> Assignment operator
// == --> Loose comparison
// === --> Strict comparison

console.log(4 > 5);
console.log(4 < 5);
console.log(4 >= 4);

console.log( 8 == "8");     // Loose comparison --> Either value OR data type comparison

console.log( 8 === "8");     // Strict comparison --> Value comparison with data type 

console.log( 7 == "8"); 
console.log( "7" == "8"); 

console.log(8 != "8");      // Loose Data type OR Value --> FALSE
console.log(8 !== "8");      // Strict --> TRUE
```

## Line-by-Line Explanation
- The opening comments remind us that comparisons always produce a Boolean (`true` or `false`), and clarify the difference between `=` (assignment, not a comparison), `==` (loose comparison), and `===` (strict comparison).
- `console.log(4 > 5);` — asks "is 4 greater than 5?"
- `console.log(4 < 5);` — asks "is 4 less than 5?"
- `console.log(4 >= 4);` — asks "is 4 greater than or equal to 4?"
- `console.log(8 == "8");` — asks "does 8 loosely equal the string "8"?" With `==`, JavaScript first converts one side so the types match, then compares the values.
- `console.log(8 === "8");` — asks "does 8 strictly equal the string "8"?" With `===`, JavaScript does **not** convert types — if the types differ, the result is automatically `false`, no matter the value.
- `console.log(7 == "8");` — asks "does 7 loosely equal the string "8"?" After type conversion, the values (`7` vs `8`) are still different.
- `console.log("7" == "8");` — asks "does the string "7" loosely equal the string "8"?" Both are already strings, but `"7"` and `"8"` are different values.
- `console.log(8 != "8");` — asks "does 8 NOT loosely equal "8"?" This is the opposite of `==`.
- `console.log(8 !== "8");` — asks "does 8 NOT strictly equal "8"?" This is the opposite of `===`.

### Key beginner confusion: `==` vs `===`
`==` (loose equality) is willing to convert types before comparing — so it will turn the string `"8"` into the number `8` first, and then compare `8` to `8`, which match. `===` (strict equality) refuses to convert anything — it looks at the number `8` and the string `"8"` and immediately sees they are different *types* (`number` vs `string`), so it says `false` without even needing to compare the "8" part. This is the single most common trip-up for beginners: `==` cares only about the value after conversion, `===` cares about both the value and the original type.

## Why the Output Occurs
- `console.log(4 > 5);` → `false` — because 4 is not greater than 5.
- `console.log(4 < 5);` → `true` — because 4 is indeed less than 5.
- `console.log(4 >= 4);` → `true` — because 4 is equal to 4, and `>=` accepts "equal to" as satisfying the condition.
- `console.log(8 == "8");` → `true` — because `==` converts the string `"8"` into the number `8` before comparing, and `8` equals `8`.
- `console.log(8 === "8");` → `false` — because `===` does not convert types; a `number` (`8`) is never strictly equal to a `string` (`"8"`), regardless of the digits matching.
- `console.log(7 == "8");` → `false` — because even after converting `"8"` to the number `8`, `7` does not equal `8`.
- `console.log("7" == "8");` → `false` — both sides are strings already (no conversion needed), and `"7"` is simply not the same text as `"8"`.
- `console.log(8 != "8");` → `false` — since `8 == "8"` is `true`, its opposite (`!=`) must be `false`.
- `console.log(8 !== "8");` → `true` — since `8 === "8"` is `false`, its opposite (`!==`) must be `true`.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `>` | Greater than | `4 > 5` | `false` |
| `<` | Less than | `4 < 5` | `true` |
| `>=` | Greater than or equal to | `4 >= 4` | `true` |
| `==` | Loose equality (converts types, then compares value) | `8 == "8"` | `true` |
| `===` | Strict equality (compares value AND type, no conversion) | `8 === "8"` | `false` |
| `==` | Loose equality | `7 == "8"` | `false` |
| `==` | Loose equality | `"7" == "8"` | `false` |
| `!=` | Loose inequality (opposite of `==`) | `8 != "8"` | `false` |
| `!==` | Strict inequality (opposite of `===`) | `8 !== "8"` | `true` |
