# Nested Ternary — HTTP Status Code Categorization

## What is it?
This is another example of a nested (chained) ternary operator, but this time the ternaries are chained one after another in a row, like a staircase, instead of just being nested one level deep. Each step asks "is this true? if not, move to the next question" until one of them matches.

## Why do we need it?
When you're testing APIs (which is very common in QA/automation work, like Playwright testing), servers respond with numeric status codes such as `200`, `301`, `404`, or `500`. Each range of numbers means something different: success, redirect, client mistake, or server mistake. Instead of writing a long chain of `if / else if / else if / else` statements, a chained ternary lets you express this categorization compactly in one readable expression.

## Syntax
```js
let category = condition1 ? valueA :
               condition2 ? valueB :
               condition3 ? valueC : defaultValue;
```

## Example
```js


let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);
```

## Line-by-Line Explanation
- `let statusCode = 404;` — Creates a variable holding the number `404`, a real HTTP status code meaning "Not Found".
- `let category = ... ;` — This is one single ternary expression spread across multiple lines (JavaScript doesn't care about the line breaks/indentation, it's just written this way for readability). It checks conditions in order:
  - `statusCode < 300 ? "Success" :` — if the status code is under 300, categorize it as `"Success"` (e.g., 200 OK).
  - `statusCode < 400 ? "Redirect" :` — otherwise, if it's under 400, categorize it as `"Redirect"` (e.g., 301, 302).
  - `statusCode < 500 ? "Client Error" :` — otherwise, if it's under 500, categorize it as `"Client Error"` (e.g., 404).
  - `"Server Error"` — if none of the above matched, it must be 500 or above, so it's a `"Server Error"` (e.g., 500, 503).
- `console.log(\`Status ${statusCode}: ${category}\`);` — Prints a template literal string showing both the status code and its resulting category.

## Why the Output Occurs
Tracing through with `statusCode = 404`:

1. **First check:** `statusCode < 300` → `404 < 300` → `false`. Move to the next check.
2. **Second check:** `statusCode < 400` → `404 < 400` → `false`. Move to the next check.
3. **Third check:** `statusCode < 500` → `404 < 500` → `true`. This one matches!
4. Because this check is `true`, its result `"Client Error"` is chosen, and JavaScript stops here — it never even looks at the final `"Server Error"` fallback.
5. So `category` becomes `"Client Error"`.
6. The final printed line is: `Status 404: Client Error`

This chained-ternary pattern behaves exactly like:
```js
if (statusCode < 300) {
  category = "Success";
} else if (statusCode < 400) {
  category = "Redirect";
} else if (statusCode < 500) {
  category = "Client Error";
} else {
  category = "Server Error";
}
```
It's the same logic, just written more compactly. However, many teams intentionally avoid deeply chained/nested ternaries like this in production code because they can be harder to read at a glance compared to a proper `if / else if` ladder — especially for someone new to the codebase. Ternaries are best kept simple (one condition, one nesting level at most) for readability; chains like this one are more of an interview-question / compactness exercise.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `?` `:` | Ternary — shorthand if/else | `x < 300 ? "Success" : "Other"` | Picks one of two values |
| `<` | Less than | `404 < 500` | `true` |
| Chained `?:` | Multiple ternaries stacked like else-if | `a ? v1 : b ? v2 : v3` | Acts like an if/else-if/else ladder |
