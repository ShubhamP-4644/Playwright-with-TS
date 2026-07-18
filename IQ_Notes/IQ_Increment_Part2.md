# Increment Operator — Part 2 (Interview-Style Puzzles)

## What is it?
This file is a collection of classic "what does this print?" interview puzzles, all built from the same idea as before: pre-increment (`++x`) changes the variable *before* it's used in the expression, post-increment (`x++`) changes it *after*. The trick in every puzzle here is carefully tracking the variable's value one step at a time, left to right.

## Why do we need it?
These puzzles don't represent good coding style (real code should never cram this many side effects into one line) — but they're extremely common in technical interviews to test whether you truly understand evaluation order, so it's worth being able to trace through them confidently.

## Syntax
```js
a++        // use current value, then increment
++a        // increment, then use new value
a--        // use current value, then decrement
--a        // decrement, then use new value
```

## Example
```js
let a = 10;
console.log(++a +a + a++);
console.log(a);


let i = 1;
let result = i++ + ++i;
console.log(result, i);


let k = 10
console.log(++k + ++k);
console.log(k);


let g = 34;
let result2 = g++;
console.log(result2);
console.log(g);

let s = 100;
console.log(s++ + ++s + s++ + ++s);
console.log(s);

let t = 37;
console.log(--t + t--);
console.log(t);

let u = 5;
let v = u-- - --u;
console.log(v, u);

let w = 1;
let x = w++ >1 ? w++ :++w;
console.log(x, w);
```

## Line-by-Line Explanation & Why the Output Occurs

### 1. `console.log(++a + a + a++); console.log(a);` (a starts at 10)
- `++a` → a becomes 11, contributes 11.
- `a` → reads current a (11), contributes 11.
- `a++` → contributes current a (11), then a becomes 12.
- Sum: `11 + 11 + 11 = 33`. Then `a` is `12`.
- **Output:** `33` then `12`.

### 2. `let result = i++ + ++i; console.log(result, i);` (i starts at 1)
- `i++` → contributes current i (1), then i becomes 2.
- `++i` → i becomes 3, contributes 3.
- Sum: `1 + 3 = 4`. `i` ends at `3`.
- **Output:** `4 3`.

### 3. `console.log(++k + ++k); console.log(k);` (k starts at 10)
- `++k` → k becomes 11, contributes 11.
- `++k` → k becomes 12, contributes 12.
- Sum: `11 + 12 = 23`. `k` ends at `12`.
- **Output:** `23` then `12`.

### 4. `let result2 = g++; console.log(result2); console.log(g);` (g starts at 34)
- `g++` → result2 gets the OLD value `34`, then g becomes `35`.
- **Output:** `34` then `35`.

### 5. `console.log(s++ + ++s + s++ + ++s); console.log(s);` (s starts at 100)
- `s++` → contributes 100, s becomes 101.
- `++s` → s becomes 102, contributes 102.
- `s++` → contributes 102, s becomes 103.
- `++s` → s becomes 104, contributes 104.
- Sum: `100 + 102 + 102 + 104 = 408`. `s` ends at `104`.
- **Output:** `408` then `104`.

### 6. `console.log(--t + t--); console.log(t);` (t starts at 37)
- `--t` → t becomes 36, contributes 36.
- `t--` → contributes current t (36), then t becomes 35.
- Sum: `36 + 36 = 72`. `t` ends at `35`.
- **Output:** `72` then `35`.

### 7. `let v = u-- - --u; console.log(v, u);` (u starts at 5)
- `u--` → contributes current u (5), then u becomes 4.
- `--u` → u becomes 3, contributes 3.
- `v = 5 - 3 = 2`. `u` ends at `3`.
- **Output:** `2 3`.

### 8. `let x = w++ >1 ? w++ :++w; console.log(x, w);` (w starts at 1)
- `w++` (inside the condition) → contributes current w (1) for the comparison, then w becomes 2.
- Comparison: `1 > 1` → `false`.
- Since the condition is false, the `: ++w` branch runs: w becomes `3`, contributes `3`. `x = 3`.
- **Output:** `3 3`.

## Operator(s) Summary
| Operator | Meaning | Reads (contributes) | Mutates |
|---|---|---|---|
| `x++` | Post-increment | Current value, before change | Right after being read |
| `++x` | Pre-increment | New value, after change | Immediately |
| `x--` | Post-decrement | Current value, before change | Right after being read |
| `--x` | Pre-decrement | New value, after change | Immediately |

**Golden rule:** work through the expression strictly left to right, one operator at a time, updating the variable's value in your head the instant each `++`/`--` is evaluated.
