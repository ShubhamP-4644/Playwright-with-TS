# Confusing Comparisons in JavaScript — null and undefined

## What is it?
`null` and `undefined` are two special values in JavaScript that both mean "nothing" or "no value" — but they mean it in slightly different ways. `null` usually means "this was intentionally set to have no value," while `undefined` usually means "this hasn't been given a value yet." This note is about a famous, confusing gotcha: how `null` behaves differently depending on whether you compare it with `==`/`===` versus with relational operators like `>=`, `>`, `<`, `<=`.

## Why do we need it?
Because this is one of the most commonly asked JavaScript interview questions, and also a real source of bugs. If you assume `null` behaves consistently across all kinds of comparisons, you can write code that silently does the wrong thing — for example, checking `if (value > 0)` thinking it excludes `null`, when actually `null > 0` is `false` but `null >= 0` is `true`. Knowing the exact rules prevents these silent logic errors.

## Syntax
```js
null == undefined     // special case: loosely equal to EACH OTHER only
null === undefined    // strict equality: false (different types)
null == 0             // false (== does NOT convert null to a number)
null >= 0             // true  (relational operators DO convert null to 0)
null > 0              // false (0 is not greater than 0)
```

## Example
```js
// Rule of Thumb

// Loose equality 
// Strict equality
console.log("- confusing comparison in JS");

//---------------Null and Undefined------------------//
console.log(null == undefined);     // True
console.log(null === undefined);       // False
console.log(null == 0);                 // False
console.log(null >= 0);                 // True
console.log(null > 0);                  // False
console.log(null == 0 || null > 0);     // False
```

## Line-by-Line Explanation
- `console.log("- confusing comparison in JS");` — Just prints a plain label string to mark the section; not a comparison.
- `console.log(null == undefined);` — Checks loose equality between `null` and `undefined`. JavaScript has a special rule that treats these two as loosely equal to each other (and to nothing else).
- `console.log(null === undefined);` — Checks strict equality. `null` and `undefined` are different types in JavaScript, so strict equality says they are not equal.
- `console.log(null == 0);` — Checks loose equality between `null` and the number `0`. Even though `==` normally converts types to compare them, `null` is specifically NOT converted to a number for `==`/`!=` comparisons — it only loosely equals `undefined` (and itself). So this is `false`.
- `console.log(null >= 0);` — Uses a relational operator (`>=`) instead of an equality operator. Relational operators use different conversion rules: they convert `null` to the number `0`. So this becomes `0 >= 0`, which is `true`.
- `console.log(null > 0);` — Same conversion happens: `null` becomes `0`, so this becomes `0 > 0`, which is `false` (0 is not strictly greater than 0).
- `console.log(null == 0 || null > 0);` — Combines the previous two false-ish comparisons with `||` (logical OR). Since `null == 0` is `false` and `null > 0` is `false`, `false || false` is `false`.

## Why the Output Occurs

1. **`null == undefined` → `true`**
   This is a special, hard-coded rule in JavaScript: `null` and `undefined` are loosely equal ONLY to each other (and to themselves). No numeric conversion is involved — the JavaScript spec simply says "when comparing null and undefined with `==`, always return true."

2. **`null === undefined` → `false`**
   Strict equality requires both the type and the value to match. `null` and `undefined` are considered different types/values in JavaScript, so strict equality is `false`.

3. **`null == 0` → `false`**
   This is the famous gotcha. You might expect `null` to convert to `0` for this comparison (like it does elsewhere), but the specification explicitly excludes `null` (and `undefined`) from being converted to a number during `==` comparisons. The ONLY things `null` loosely equals are `null` itself and `undefined`. So `null == 0` is `false`.

4. **`null >= 0` → `true`**
   Relational operators (`<`, `>`, `<=`, `>=`) follow a *different* set of coercion rules than `==`. For these operators, `null` IS converted to a number, and it becomes `0`. So the comparison becomes `0 >= 0`, which is `true`.

5. **`null > 0` → `false`**
   Same conversion as above: `null` becomes `0`. The comparison becomes `0 > 0`. Since `0` is not strictly greater than `0`, this is `false`.

6. **`null == 0 || null > 0` → `false`**
   We already know `null == 0` is `false` and `null > 0` is `false`. The `||` (OR) operator returns `true` if at least one side is truthy; here both sides are `false`, so the whole expression is `false`.

### The Big Gotcha, Summarized
This is one of JavaScript's most-cited "weird parts": `null` refuses to be numerically compared under `==`, but relational operators (`<`, `>`, `<=`, `>=`) happily convert `null` to `0` behind the scenes. That's why `null >= 0` is `true` but `null == 0` is `false` — even though intuitively you might expect them to behave the same way. Always remember: equality operators and relational operators use different coercion rules for `null`.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Loose equality — special case: null equals only null/undefined | `null == undefined` | `true` |
| `===` | Strict equality — different types never match | `null === undefined` | `false` |
| `==` | Loose equality — null is NOT converted to a number | `null == 0` | `false` |
| `>=` | Relational — null IS converted to 0 for comparison | `null >= 0` | `true` |
| `>` | Relational — null converted to 0, but 0 is not > 0 | `null > 0` | `false` |
| `\|\|` | Logical OR — true if either side is truthy | `null == 0 \|\| null > 0` | `false` |
