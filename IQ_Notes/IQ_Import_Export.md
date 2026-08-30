# Import / Export (ES Modules)

**Modules** let you split code across multiple files and share pieces between them. A file **exports** the values it wants to make available to others, and another file **imports** just what it needs. It's like a shop: the shop **exports** (puts on the shelf) the items customers can buy, and a customer **imports** (picks up) only the specific items they came for.

## 1. Named exports (`testutil.js`, `utils.js`)

```js
// testutil.js
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Pramod"; // NOT exported — stays private to this file
```

```js
// utils.js
export let BASE_URL = "https://api.example.com";

export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}

export function formatTestName2(name) {
    return "TC_" + name.toUpperCase();
}
```

A **named export** puts a specific, labeled item on the shelf (`export` in front of a `let`/`function`/`class`). Anything without `export` (like `fname`) never leaves the file — it's private, like stock kept in the back room. Notice both files independently export their own `BASE_URL` — they don't clash because each file is its own separate module.

## 2. Importing named exports (`155.js`)

```js
import { BASE_URL, formatUpperCaseString } from './testutil.js';

console.log(BASE_URL);

let result = formatUpperCaseString("Pramod");
console.log(result);

// console.log(fname);   // would fail — fname was never exported
```

You import named exports using `{ }` with the **exact names** they were exported with, and a relative path to the file. Trying to import something that wasn't exported (like `fname`) doesn't exist as far as the importing file is concerned.

## 3. Renaming imports with `as` (`156_Test.js` / `157.js`)

```js
import { BASE_URL as bul_util, formatTestName } from "./utils.js";
import { BASE_URL as bul_testtul } from "./testutil.js";

console.log(bul_util);
console.log(bul_testtul);
console.log(formatTestName("login"));
```

Both `utils.js` and `testutil.js` export something named `BASE_URL`. Importing both directly into the same file would clash (two things with the identical name `BASE_URL`). The `as` keyword renames an import on the way in — like relabeling two identical-looking boxes "Box A" and "Box B" the moment they arrive, so you can tell them apart once they're on your desk. (Note: `156_Test.js` and `157.js` contain the exact same code — likely one is a leftover copy of the other.)

## 4. Default export (`Logs/Logger.js`)

```js
// Default Export -> Export One Main Thing

export default function log(message) {
    console.log("[LOG] " + message);
}

export function logBetter(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}
```

A file can have **at most one** `export default` — it's the "main thing" this file is for (here, the basic `log` function), while everything else is exported by name as a bonus/secondary export (`logBetter`). A default export can be imported under **any name you choose** (no `{ }` needed), since there's only one obvious thing to grab:

```js
import log, { logBetter } from './Logs/Logger.js';
// or even: import myOwnName from './Logs/Logger.js';
```

## 5. Enabling modules — `package.json`

```json
{
  "type": "module"
}
```

By default, Node.js treats `.js` files as **CommonJS** (`require`/`module.exports`), not ES Modules. Adding `"type": "module"` to `package.json` tells Node "treat every `.js` file in this project as an ES Module," which is what allows the `import`/`export` syntax used throughout this chapter to actually run.

## Comparison

| Aspect | Named Export | Default Export |
|---|---|---|
| How many per file | As many as you want | Exactly one |
| Export syntax | `export let x = ...` / `export function f(){}` | `export default function f(){}` |
| Import syntax | `import { x } from './file.js'` (name must match) | `import anyNameYouWant from './file.js'` |
| Renaming on import | `import { x as y } from './file.js'` | Not needed — you already choose the name |
| Best for | Utility values/functions — multiple related helpers | The one "main" thing a file is built around |

## Flow — how these files depend on each other

```
testutil.js ──export { BASE_URL, formatUpperCaseString } ──► 155.js
                                                            (import { BASE_URL, formatUpperCaseString })

utils.js ──export { BASE_URL, formatTestName } ─┐
                                                  ├──► 156_Test.js / 157.js
testutil.js ──export { BASE_URL } ──────────────┘     (import ... as bul_util / bul_testtul)

Logs/Logger.js ──export default log, export logBetter ──► (any file that imports it)
```
