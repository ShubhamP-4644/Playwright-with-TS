# Ternary Operator — SLA Check and Template Literals

## What is it?
This continues the ternary (conditional) operator pattern — the one-line "if this is true, use one value, otherwise use another value" shortcut — applied to checking whether something happened fast enough. It also introduces a second, related beginner concept: **template literals**, a way of building strings that lets you insert variable values directly inside text.

## Why do we need it?
In real-world testing and performance monitoring, systems often have an **SLA** (Service Level Agreement) — a promised maximum time within which a response must come back (e.g., "the API must respond within 1000ms"). Testers regularly need to check: did the actual response time stay within the agreed SLA, or was it breached?

The ternary operator lets you turn that check into a readable status label ("Within SLA" or "SLA breached") in one line. Then, template literals let you neatly combine that status with the actual numbers into one clear printed message — something you'll do constantly when writing test logs and reports.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Example
```js
let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);
```

## Line-by-Line Explanation
- `let responseTime = 850;` — Stores the actual time (in milliseconds) that the response took.
- `let sla = 1000;` — Stores the agreed maximum allowed time (in milliseconds) per the SLA.
- `let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";` — The ternary operator:
  - `responseTime <= sla` is the condition — checks if the response time is less than or equal to the SLA limit.
  - If `true`, `slaStatus` becomes `"Within SLA ✅"`.
  - If `false`, `slaStatus` becomes `"SLA breached ❌"`.
- `console.log(\`Response: ${responseTime}ms — ${slaStatus}\`);` — Uses a template literal to print a combined message with both the response time and the SLA status inserted into the text.
- `console.log(\`What is the SLA time ? - ${sla}\`);` — Another template literal, this time just printing the SLA value inside a sentence.

## Why the Output Occurs
1. JavaScript evaluates the condition `responseTime <= sla`.
2. It substitutes the values: `850 <= 1000`.
3. `850` is indeed less than or equal to `1000`, so the condition evaluates to `true`.
4. Since the condition is `true`, the ternary operator picks the value before the colon: `"Within SLA ✅"`.
5. `"Within SLA ✅"` is stored in `slaStatus`.
6. The first `console.log` uses a template literal to substitute `${responseTime}` with `850` and `${slaStatus}` with `"Within SLA ✅"`, producing: `Response: 850ms — Within SLA ✅`.
7. The second `console.log` substitutes `${sla}` with `1000`, producing: `What is the SLA time ? - 1000`.

## Bonus: Template Literals
A template literal is a string written with **backticks** (`` ` ``) instead of regular quotes (`'` or `"`). Its superpower is that you can insert a variable's value directly inside the string using `${variableName}`, instead of gluing strings together with `+`.

- Without template literals: `"Response: " + responseTime + "ms — " + slaStatus`
- With template literals: `` `Response: ${responseTime}ms — ${slaStatus}` ``

Both produce the same result, but the template literal version is easier to read and less error-prone, especially when combining several variables into one message — which is exactly why it's used here alongside the ternary operator.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `850 <= 1000 ? "Within SLA ✅" : "SLA breached ❌"` | `"Within SLA ✅"` |
| `<=` | Less than or equal to — comparison used inside the condition | `850 <= 1000` | `true` |
| `` ` ` `` + `${}` | Template literal — builds a string with variables inserted directly inside it | `` `Response: ${responseTime}ms` `` | `"Response: 850ms"` |
