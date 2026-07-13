# null vs undefined

## Simple Definitions

- **undefined** → A variable exists, but it has not been assigned any value yet. JavaScript itself sets this automatically.
- **null** → A variable exists, but the developer explicitly assigns "no value" or "empty". It is an intentional absence of any value.

## Example

```js
var x;
console.log(x); // undefined

var audi = null;
console.log(audi); // null

// Undefined
let userName;  // declared but not defined
console.log(userName);        // undefined
console.log(typeof userName); // "undefined"

function greet(){
    // does not return anything
    // no return statement
}
console.log(greet()); // undefined

// Null
let profilePicture = null;
console.log(profilePicture);        // null
console.log(typeof profilePicture); // "object" (historical bug in JS)
```

## Key Differences (Comparison Table)

| Feature | undefined | null |
|---|---|---|
| Meaning | Not assigned yet | Intentionally empty |
| Who sets it? | JavaScript automatically | Developer manually |
| Type (`typeof`) | `undefined` | `object` (historical bug in JS) |
| `==` comparison | `null == undefined` → `true` | `null == undefined` → `true` |
| `===` comparison | `null === undefined` → `false` | `null === undefined` → `false` |
