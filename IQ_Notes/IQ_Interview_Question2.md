# Ternary Operator — Environment-Based URL Selection

## What is it?
This is the ternary (conditional) operator again — the one-line "if this is true, use one value, otherwise use another value" shortcut — used here to choose between two different web addresses (URLs) depending on which environment the code is running in.

## Why do we need it?
When teams build and test software, they usually run it in more than one place: a "staging" environment (a safe practice copy used for testing) and a "prod" (production) environment (the real, live system that real users use). Each environment has its own separate URL/API address.

Test automation scripts need to know which URL to talk to. Instead of hardcoding one URL or writing a long `if...else` block, the ternary operator lets you pick the right base URL in a single line, based on the current environment setting. This is an extremely common pattern in real test automation configuration files.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Example
```js

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);
```

## Line-by-Line Explanation
- `let environment = "staging";` — Stores the name of the environment the code is currently meant to run against — here, `"staging"`.
- `let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";` — The ternary operator (written across multiple lines for readability, but it's still one single expression):
  - `environment === "prod"` is the condition — checks if `environment` is exactly the string `"prod"`.
  - If `true`, `baseUrl` becomes the production URL `"https://api.example.com"`.
  - If `false`, `baseUrl` becomes the staging URL `"https://staging-api.example.com"`.
- `console.log(baseUrl);` — Prints whichever URL was chosen.

## Why the Output Occurs
1. JavaScript evaluates the condition `environment === "prod"`.
2. It substitutes the value of `environment`, which is `"staging"`, so the check becomes `"staging" === "prod"`.
3. `"staging"` and `"prod"` are different strings, so the condition evaluates to `false`.
4. Since the condition is `false`, the ternary operator picks the value **after** the colon: `"https://staging-api.example.com"`.
5. That URL is stored in `baseUrl`.
6. `console.log(baseUrl)` prints `https://staging-api.example.com` to the console.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `environment === "prod" ? urlA : urlB` (environment = "staging") | `urlB` (staging URL) |
| `===` | Strict equality — compares both value and type for an exact match | `"staging" === "prod"` | `false` |
