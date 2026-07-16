# Arithmetic Operators

## What is it?
Arithmetic operators are the basic math symbols you already know from school — add, subtract, multiply, divide — plus two extras that JavaScript also gives you: the modulus operator (which finds the "leftover" amount after division) and the exponent operator (which raises a number to a power, like squaring or cubing it).

## Why do we need it?
Almost every program needs to do some kind of math — calculating a total price, splitting items evenly, checking if a number is odd or even, or computing compound growth. Arithmetic operators are the fundamental building blocks that let JavaScript perform these calculations on numbers.

## Syntax
```js
a + b     // addition
a - b     // subtraction
a * b     // multiplication
a / b     // division
a % b     // modulus (remainder after division)
a ** b    // exponentiation (a raised to the power of b)
```

## Example
```js


// +, -, *, /,

let a = 10;
let b = 5; 


//----------------Arithmetic Operator-----------------//


let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

//---------------Modulus Operator-------------------//

console.log(a % b);


//-------------Exponential ** power 2 ^ 3 = 8
console.log(2 ** 3);
console.log(a ** b);

```

## Line-by-Line Explanation
- `let a = 10;` and `let b = 5;` — create two number variables to use throughout the examples.
- `let sum = a + b;` — adds `a` and `b` together (`10 + 5`) and stores the result in `sum`.
- `let sub = a - b;` — subtracts `b` from `a` (`10 - 5`) and stores the result in `sub`.
- `let mul = a * b;` — multiplies `a` by `b` (`10 * 5`) and stores the result in `mul`.
- `let div = a / b;` — divides `a` by `b` (`10 / 5`) and stores the result in `div`.
- `console.log(sum); console.log(sub); console.log(mul); console.log(div);` — print each stored result in turn.
- `console.log(a % b);` — computes the modulus (remainder) of `a` divided by `b`: how much is "left over" after dividing `10` by `5` as many whole times as possible.
- `console.log(2 ** 3);` — computes `2` raised to the power of `3` (i.e., `2 * 2 * 2`).
- `console.log(a ** b);` — computes `a` raised to the power of `b`, i.e. `10` raised to the power of `5` (i.e., `10 * 10 * 10 * 10 * 10`).

## Why the Output Occurs
- `console.log(sum);` prints `15` because `sum = a + b = 10 + 5 = 15`.
- `console.log(sub);` prints `5` because `sub = a - b = 10 - 5 = 5`.
- `console.log(mul);` prints `50` because `mul = a * b = 10 * 5 = 50`.
- `console.log(div);` prints `2` because `div = a / b = 10 / 5 = 2` (divides evenly, no decimal).
- `console.log(a % b);` prints `0` because `10` divided by `5` goes evenly (twice) with nothing left over, so the remainder is `0`.
- `console.log(2 ** 3);` prints `8` because `2 ** 3` means `2 × 2 × 2 = 8`.
- `console.log(a ** b);` prints `100000` because `10 ** 5` means `10 × 10 × 10 × 10 × 10 = 100000`.

## Operator(s) Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `a + b` (10 + 5) | `15` |
| `-` | Subtraction | `a - b` (10 - 5) | `5` |
| `*` | Multiplication | `a * b` (10 * 5) | `50` |
| `/` | Division | `a / b` (10 / 5) | `2` |
| `%` | Modulus (remainder after division) | `a % b` (10 % 5) | `0` |
| `**` | Exponentiation (power) | `2 ** 3` | `8` |
| `**` | Exponentiation (power) | `a ** b` (10 ** 5) | `100000` |
