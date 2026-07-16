# Ternary Operator — CI vs Local Browser Mode

## What is it?
Once again, this is the ternary (conditional) operator — the one-line "if this is true, use one value, otherwise use another value" shortcut — this time used to decide how a browser should open, depending on whether the code is running on a real person's computer or on an automated build server.

## Why do we need it?
When running automated browser tests (for example, with Playwright), the browser can run in two modes:
- **Headed mode** — the browser window actually opens and you can visually watch it click around. Useful for a developer/tester debugging locally.
- **Headless mode** — the browser runs invisibly in the background, with no window shown. This is faster and required on servers that have no screen, like CI (Continuous Integration) build machines.

Test scripts usually need to automatically pick the right mode: headless when running in CI, headed when a person is running it locally to watch and debug. The ternary operator makes this a one-line decision instead of a multi-line `if...else`.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Example
```js

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");
```

## Line-by-Line Explanation
- `let isCI = true;` — Stores a boolean flag indicating whether the code is currently running inside a CI (Continuous Integration) pipeline. Here it's set to `true`.
- `let browserMode = isCI ? "headless" : "headed";` — The ternary operator:
  - `isCI` is the condition by itself — since it's already a boolean (`true`/`false`), it can be used directly without needing a comparison operator.
  - If `isCI` is `true`, `browserMode` becomes `"headless"`.
  - If `isCI` is `false`, `browserMode` becomes `"headed"`.
- `console.log("Launching browser in:", browserMode, "mode");` — Prints a message describing which mode the browser will launch in.

## Why the Output Occurs
1. JavaScript evaluates the condition, which here is simply the variable `isCI`.
2. `isCI` holds the value `true`.
3. Since the condition is already `true`, the ternary operator picks the value **before** the colon: `"headless"`.
4. `"headless"` is stored in `browserMode`.
5. `console.log(...)` prints: `Launching browser in: headless mode`.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `isCI ? "headless" : "headed"` (isCI = true) | `"headless"` |
| (boolean variable as condition) | A variable already holding `true`/`false` can be used directly as the condition, no comparison needed | `isCI` | `true` |
