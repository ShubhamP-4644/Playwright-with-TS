# Ternary Operator — Test Result Pass/Fail Example

## What is it?
This is the same ternary (conditional) operator from before — a one-line shortcut for "if this is true, use one value, otherwise use another value" — now applied to a very common real situation: comparing two numbers to see if they match.

## Why do we need it?
In QA/testing work, one of the most repeated tasks is comparing an **actual result** you got back from a system against the **expected result** you wanted. For example, when you call an API, it responds with a status code (like `200` for "OK"). You compare the actual status code your test received against the expected status code, and instantly decide: did the test pass or fail?

The ternary operator is perfect here — it lets you turn that comparison directly into a human-readable "PASS" or "FAIL" label in a single line, which is exactly what test scripts and reports need.

Note that the condition uses `===` (strict equality), which checks that both the value **and** the type match exactly — this avoids accidental false matches (e.g., `"200"` the string vs `200` the number).

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Example
```js


let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);
```

## Line-by-Line Explanation
- `let actualStatusCode = 200;` — Stores the status code that was actually returned (e.g., from an API call under test).
- `let expectedStatusCode = 200;` — Stores the status code we expected to get if everything works correctly.
- `let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";` — The ternary operator:
  - `actualStatusCode === expectedStatusCode` is the condition — using strict equality (`===`) to compare both value and type.
  - If the condition is `true`, `testResult` becomes `"✅ PASS"`.
  - If the condition is `false`, `testResult` becomes `"❌ FAIL"`.
- `console.log(testResult);` — Prints the final pass/fail verdict.

## Why the Output Occurs
1. JavaScript evaluates the condition `actualStatusCode === expectedStatusCode`.
2. It substitutes the values: `200 === 200`.
3. Both the value (`200`) and the type (`number`) are identical on both sides, so strict equality returns `true`.
4. Since the condition is `true`, the ternary operator picks the value before the colon: `"✅ PASS"`.
5. `"✅ PASS"` is stored in `testResult`.
6. `console.log(testResult)` prints `✅ PASS` to the console.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `200 === 200 ? "✅ PASS" : "❌ FAIL"` | `"✅ PASS"` |
| `===` | Strict equality — compares both value and type, no automatic type conversion | `200 === 200` | `true` |
