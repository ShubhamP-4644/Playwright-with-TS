# JavaScript Data Types

## What is it?
A "data type" is simply a label for what kind of value something is — is it a word (text), a number, a true/false answer, or something more complex like a list or a box full of labeled items? JavaScript sorts every value you can create into one of these labels. Some labels are for simple, single values (called **primitive** types), and some are for more complex, container-like values (called **reference** or **non-primitive** types).

## Why do we need it?
Different kinds of data need to be handled differently. You can do math with numbers but not (sensibly) with plain text. You can check a box for true/false but not with a list of items in the same way. Knowing the data type of a value tells JavaScript (and you, the programmer) what operations make sense, how much memory to use, and how the value is stored and copied behind the scenes.

## Syntax
```js
// Declaring a variable — JavaScript figures out the type automatically
let variableName = value;

// Examples of each primitive type
let str = "hello";        // String
let num = 42;              // Number
let isTrue = true;         // Boolean
let big = 123n;            // BigInt
let notAssigned;           // undefined
let empty = null;          // null
let sym = Symbol("id");    // Symbol

// Examples of reference (non-primitive) types
let arr = [1, 2, 3];        // Array
function greet() {}         // Function
let obj = { name: "Shubham" }; // Object
```

## Example
```js
        // Data Types in JavaScript

        // Premitive Data Types 

        // String
        // Number
        // Boolean
        // BigInt
        // undefined
        // null
        // Symbol
        // Array

        // Reference OR Non premitive data types

        // Array
        // Function
        // Objects

        // ----------------Assignment Operator----------------------//
        let x = 10;
        x = "ShubhamPrajapati";
        console.log(x);
        

        //----------------Arithmatic Operator----------------------//
```

## Line-by-Line Explanation
- The block of comments at the top lists out the two big families of data types in JavaScript: **Primitive Data Types** (String, Number, Boolean, BigInt, undefined, null, Symbol) and **Reference/Non-primitive Data Types** (Array, Function, Objects).
- `let x = 10;` — creates a variable called `x` and stores the **Number** `10` in it.
- `x = "ShubhamPrajapati";` — reassigns `x` to now hold the **String** `"ShubhamPrajapati"`. This is allowed because JavaScript variables declared with `let` are not locked to one data type; the same variable can hold a number first and a string later.
- `console.log(x);` — prints the current value of `x` to the console. At this point `x` holds the string `"ShubhamPrajapati"`.
- The last comment line is just a heading for the next topic (Arithmetic Operators) and has no code under it in this file.

> **Note on the source comments:** In the original file, `Array` is accidentally listed under *both* "Primitive Data Types" and "Reference OR Non premitive data types". This is a mistake in the comment — **Array is actually a reference (non-primitive) type**, not a primitive one. Primitives hold a single simple value; an Array is a container that can hold many values and is stored/copied by reference, so it belongs only in the reference/non-primitive group.

## Why the Output Occurs
- `console.log(x);` prints `ShubhamPrajapati` because the last value assigned to `x` before the log statement was the string `"ShubhamPrajapati"`. Even though `x` started out as the number `10`, JavaScript variables (declared with `let`) can be reassigned to hold a value of a different type, and only the most recent assignment matters when you read the variable.

## Operator(s) Summary
This file is primarily conceptual (listing data types), but it does use the assignment operator:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `=` | Assigns a value to a variable | `let x = 10; x = "ShubhamPrajapati";` | `x` becomes `"ShubhamPrajapati"` |

### Data Type Reference Table

| Type | Category | Example |
|---|---|---|
| String | Primitive | `"hello"` |
| Number | Primitive | `42` |
| Boolean | Primitive | `true` / `false` |
| BigInt | Primitive | `123n` |
| undefined | Primitive | `let a;` |
| null | Primitive | `let a = null;` |
| Symbol | Primitive | `Symbol("id")` |
| Array | Reference (non-primitive) | `[1, 2, 3]` |
| Function | Reference (non-primitive) | `function greet() {}` |
| Object | Reference (non-primitive) | `{ name: "Shubham" }` |
