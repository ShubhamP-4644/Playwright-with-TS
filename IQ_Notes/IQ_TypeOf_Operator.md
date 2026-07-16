# The typeof Operator

## What is it?
`typeof` is a special word (operator) in JavaScript that answers one simple question: "What kind of value is this?" You put it in front of any value or variable, and it hands back a short text label (a string) telling you whether that value is a piece of text, a number, a true/false value, and so on.

## Why do we need it?
When you're writing code, you often don't know for certain what kind of data you're dealing with — especially data coming from user input, an API response, or a function you didn't write yourself. `typeof` lets you check the data's type before you use it, so you can avoid bugs like accidentally trying to do math on a piece of text, or calling a text method on a number. It's a basic but essential debugging and validation tool.

## Syntax
```js
typeof value
// or with parentheses (also valid):
typeof(value)
```

## Example
```js


//7. TypeOf Operators

// typeof hello --> string
console.log(typeof "hello");

// typeof numeric value (Int, Float) --> number 
console.log(typeof 123);
console.log(typeof 31.4); 

// typeof boolean --> true
console.log(typeof true);

// typeof undefined  --> undefined
console.log(typeof undefined);    


// typeof null --> object
console.log(typeof null);

// typeof array --> object
console.log(typeof []); 
console.log(typeof [2]);
```

## Line-by-Line Explanation
- `console.log(typeof "hello");` — `"hello"` is text wrapped in quotes, so its type is `"string"`. Prints: `string`
- `console.log(typeof 123);` — `123` is a whole number, so its type is `"number"`. Prints: `number`
- `console.log(typeof 31.4);` — `31.4` is a decimal number. JavaScript does not have separate types for whole numbers vs. decimals like some other languages do — they're both just `"number"`. Prints: `number`
- `console.log(typeof true);` — `true` is a boolean (true/false) value, so its type is `"boolean"`. Prints: `boolean`
- `console.log(typeof undefined);` — `undefined` represents "no value has been assigned yet." Its type is literally `"undefined"`. Prints: `undefined`
- `console.log(typeof null);` — `null` represents "intentionally no value." You might expect this to say `"null"`, but it actually prints `"object"`. See the explanation below — this is a well-known quirk.
- `console.log(typeof []);` — `[]` is an empty array. Arrays in JavaScript are technically a special kind of object, so this prints `"object"`.
- `console.log(typeof [2]);` — `[2]` is an array containing the number `2`. It's still an array, still technically an object, so this also prints `"object"`.

## Why the Output Occurs
Each `console.log(typeof ...)` line independently evaluates the type of the value given to it and prints the resulting label as a string:

1. `"hello"` is a string literal → `typeof` returns `"string"`.
2. `123` and `31.4` are both numeric values → `typeof` returns `"number"` for both, because JavaScript only has one general `"number"` type (it doesn't separate integers from floating-point/decimal numbers the way languages like Java or C do).
3. `true` is a boolean literal → `typeof` returns `"boolean"`.
4. `undefined` is its own special type representing an uninitialized value → `typeof` returns `"undefined"`.
5. `null` → `typeof` returns `"object"`. **This is one of JavaScript's most famous long-standing quirks/bugs.** Logically, `null` means "no object" and should arguably have its own type, but due to how the very first version of JavaScript was implemented internally (values were tagged with a type code, and `null` happened to share the same tag as objects), `typeof null` has always returned `"object"`. This has been recognized as a mistake for decades, but fixing it now would break too much existing code across the internet, so it was never changed. When you need to check for `null` specifically, you should compare directly: `value === null`, rather than relying on `typeof`.
6. `[]` and `[2]` → both return `"object"`, because in JavaScript an array is really just a specialized object under the hood (one that happens to have numbered indexes and array-specific methods like `.push()`). `typeof` has no way to tell a plain object apart from an array — they both come back as `"object"`. If you specifically need to know whether something is an array, the correct approach is `Array.isArray(value)`, which returns `true` for arrays and `false` for plain objects.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `typeof` | Returns a string naming the type of a value | `typeof "hello"` | `"string"` |
| `typeof` | On numbers (int or float, same type) | `typeof 31.4` | `"number"` |
| `typeof` | On booleans | `typeof true` | `"boolean"` |
| `typeof` | On undefined | `typeof undefined` | `"undefined"` |
| `typeof` | On null (famous quirk, not a true object) | `typeof null` | `"object"` |
| `typeof` | On arrays (arrays are a special object type) | `typeof [2]` | `"object"` |
| `Array.isArray()` | The correct way to check specifically for an array | `Array.isArray([2])` | `true` |
