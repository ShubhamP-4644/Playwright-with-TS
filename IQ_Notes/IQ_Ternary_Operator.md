# Ternary (Conditional) Operator

## What is it?
Imagine you're deciding between two things based on one yes/no question — like "Is it raining? If yes, take an umbrella, if no, don't." The ternary operator lets you write exactly that kind of decision, but in a single, short line of code instead of several lines.

In plain terms: it's a shortcut for "if this is true, do one thing; otherwise, do another thing" — squeezed into one line. That's why it's also called the "conditional operator" — it picks a value based on a condition.

## Why do we need it?
Normally, to make a decision in code, you'd write a full `if...else` block spanning multiple lines. That's fine, but when the decision is simple (just picking between two values), writing a whole `if...else` feels like overkill.

In real-world testing/QA work, you constantly need quick yes/no decisions — for example, checking if someone meets an age requirement, like whether a person is old enough to vote. The ternary operator lets you write that check and assign the result in one clean line, making scripts shorter and easier to read at a glance.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```
Read it as: "condition — question mark — value if true — colon — value if false."

## Example
```js
// ## Ternary Operator Also referred as Conditional Operator
// Condition, either this or either that. 
let age = 20;
let Are_You_Going_To_Vote = age > 18 ? "Yes" : "No";
console.log("This person will vote ? ", Are_You_Going_To_Vote, "Because he is older than 18 ",);

// condition ?  value(if true)  : value (if false)
```

## Line-by-Line Explanation
- `let age = 20;` — Creates a variable called `age` and stores the number `20` in it.
- `let Are_You_Going_To_Vote = age > 18 ? "Yes" : "No";` — This is the ternary operator in action:
  - `age > 18` is the **condition** — it asks "is age greater than 18?"
  - `? "Yes"` — if the condition is `true`, the whole expression becomes `"Yes"`.
  - `: "No"` — if the condition is `false`, the whole expression becomes `"No"`.
  - Whatever value comes out of this decision gets stored in `Are_You_Going_To_Vote`.
- `console.log(...)` — Prints a message to the console, showing the decision that was made along with an explanation.

## Why the Output Occurs
1. JavaScript first looks at the condition: `age > 18`.
2. It substitutes the value of `age`, which is `20`, so the check becomes `20 > 18`.
3. Since `20` is indeed greater than `18`, the condition evaluates to `true`.
4. Because the condition is `true`, the ternary operator picks the **first** value after the `?`, which is `"Yes"`.
5. `"Yes"` gets stored in `Are_You_Going_To_Vote`.
6. The `console.log` then prints: `This person will vote ?  Yes Because he is older than 18`.

## Operator(s) Summary
| Operator | Meaning | Example | Result |
|---|---|---|---|
| `? :` | Ternary/conditional operator — picks one of two values based on a condition | `age > 18 ? "Yes" : "No"` (age = 20) | `"Yes"` |
| `>` | Greater than — comparison used inside the condition | `20 > 18` | `true` |
