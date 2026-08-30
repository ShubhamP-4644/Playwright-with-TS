# Objects in JavaScript

Think of an **object** like a **backpack with labeled pockets**. Each pocket has a name (the "key") and something inside it (the "value"). You can say "give me what's in the *name* pocket" instead of remembering which pocket number it is.

## 1. Creating an object and reading its pockets (`116_Objects.js`)

```js
let a = {status: "PASS"};
console.log(a.status);     // "PASS"  -> dot, like pointing at the pocket label
console.log(a["status"]);  // "PASS"  -> square brackets, like reading the label from a list
```

Both `a.status` and `a["status"]` open the **same pocket**. Use `["..."]` when the pocket name is stored in a variable, e.g. `a[key]`.

**Keys are case-sensitive** — `status` and `Status` are two totally different pockets, just like "Ram" and "ram" are different words to JavaScript:

```js
let a2 = {status: 'FAIL', Status: 'ERROR'};
console.log(a2.status); // FAIL
console.log(a2.Status); // ERROR
```

### JS object vs JSON

```js
const t_js  = { Name: "ShubhamP", Age: 19 };        // JS object literal — keys unquoted
const t_json = { "Name": "Shubham", "Age": 20 };     // looks like JSON — keys in quotes
```
JSON is basically the "letter format" you send between programs/computers — every key **must** be in quotes. A JS object is the "in-memory backpack" a program uses while running — quotes on keys are optional.

## 2. Objects live at an address (reference), not a copy (`116_Objects.js`)

```js
let a3 = {status: "PASS"};
let b = a3;          // b doesn't get a NEW backpack, it gets the SAME backpack's address
b.status = "FAIL";
console.log(a3.status); // "FAIL" -- changed too!
console.log(b.status);  // "FAIL"

let c = {status: "PASS"};
let d = {status: "PASS"};
console.log(c === d);   // false -- two different backpacks that just look the same
```

Real world: if you and your friend are told "the same house address," and you paint the door red, your friend sees a red door too — because it's the **same house**, not two identical houses.

## 3. Objects inside objects — nested objects (`117_Object_Person.js`)

```js
const user = {
    name: "Shubham",
    Age: 21,
    address: {              // a backpack inside a backpack!
        city: "Gurugram",
        street: 21,
        Zipcode: 202201
    }
};
```

Real world: your school ID card has your name and age directly on it, but it also has a small mini-card stapled to it (your address) which itself has city, street, zip. To read the city you'd go `user.address.city` — open the big backpack, then open the small backpack inside it.

## 4. Objects can hold functions too — "methods" (`118_Objects2.js`)

```js
const user = {
    name: "Pramod",
    getName() {              // a pocket that holds an ACTION, not just data
        return this.name;    // "this" means "my own backpack"
    }
};
```

Real world: a vending machine (the object) has a button (the method) — press `getName()` and it hands you back what's in its own `name` pocket. `this` is the machine saying "look inside *me*," not some other machine.

## 5. Adding, modifying, and deleting pockets (`119_Objects3.js`, `120_Config.js`)

```js
const user = { Name: "Shubham", Age: 21, Email: "shubham@xyz.com" };

user.City = "Gurugram";   // add a brand-new pocket
user.Age = 22;             // change what's already in a pocket
```

```js
let config = {};           // an empty backpack
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 4500;     // overwritten, no error for changing it
delete config.browser;     // rip the pocket clean off the backpack
```

Real world: `config` is like a settings sheet you fill out one line at a time — you can add a new setting, change your mind about a value, or cross a setting out entirely with `delete`.

## 6. Call by Value vs Call by Reference

```js
let a = 10;
let b = a;      // b gets its OWN COPY of the number
b = 99;
console.log(a); // 10 -- untouched
console.log(b); // 99

let obj1 = { Vol: 10 };
let obj2 = obj1;   // obj2 gets the SAME ADDRESS as obj1, not a copy
obj2.Vol = 99;
console.log(obj1.Vol); // 99 -- changed too!
```

Real world: numbers/strings/booleans are like **texting someone a copy of a photo** — they get their own picture, editing theirs doesn't touch yours. Objects are like **sharing a Google Doc link** — there's only one real document, and anyone with the link edits the same one.

## Comparison

| Aspect | Primitive (Number, String, Boolean, null, undefined) | Object (Object, Array, Function) |
|---|---|---|
| Definition | A single, simple value | A collection of key–value pockets |
| Copy behavior | Call by Value — copies the actual value | Call by Reference — copies the address, points to same data |
| Real-world analogy | Photo texted to a friend (independent copies) | Shared Google Doc link (one shared document) |
| Equality check (`===`) | Compares the values directly | Compares addresses, not contents (`c === d` is `false` even with identical pockets) |
| Access pattern | Used directly, e.g. `a` | Accessed via `.key` or `["key"]` |
| Can hold functions? | No | Yes — called "methods" |
| Nesting | Not applicable | Objects can contain other objects (`address` inside `user`) |
| Mutability | Reassigning creates a new value | Mutating a property changes the shared object everywhere it's referenced |

## Flow — how a nested object is read

```
user
 ├── name      → "Shubham"
 ├── Age       → 21
 └── address                (an object nested inside user)
       ├── city    → "Gurugram"
       ├── street  → 21
       └── Zipcode → 202201

user.address.city
   │      │      │
   │      │      └─ open the innermost pocket
   │      └──────── open the "address" pocket (itself a backpack)
   └─────────────── start at the "user" backpack
```
