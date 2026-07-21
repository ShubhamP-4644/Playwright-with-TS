# Switch(true) — Using Switch Like an if/else Ladder

## What is it?
Normally `switch` compares a value against fixed, specific options (like a number or a string). This example uses a clever variation: `switch (true)`, where each `case` is actually a **full boolean condition** (like `testScore >= 95`). JavaScript checks each condition in order and runs the first one that evaluates to `true`.

## Why do we need it?
Sometimes you need to check *ranges* or conditions rather than exact matches (e.g. "is this score in the 90s? the 80s? the 70s?"). A plain `switch` can't compare ranges directly since it only checks strict equality — but `switch (true)` cleverly repurposes it to behave like an `if / else if / else if` ladder, which some developers find reads more cleanly for a long list of range checks.

## Syntax
```js
switch (true) {
  case (condition1):
    // runs if condition1 is the FIRST true condition
    break;
  case (condition2):
    // runs if condition2 is the first true condition
    break;
  default:
    // runs if none of the conditions were true
}
```

## Example
```js
let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}
```

## Line-by-Line Explanation
- `let testScore = 85;` — the value being evaluated.
- `switch (true) {` — this switch is comparing each case's *condition* against the literal value `true`, not comparing `testScore` directly.
- `case (testScore >= 95):` — evaluates `85 >= 95`, which is `false`. Since `false !== true`, this case does not match, so it's skipped.
- `case (testScore >= 85):` — evaluates `85 >= 85`, which is `true`. Since `true === true`, this is the first matching case! Its code runs: `console.log("Excellent — Above expectations");`, then `break;` exits the switch.
- `case (testScore >= 70)`, `case (testScore >= 50)`, and `default` — never reached, because the switch already found its match and broke out. (Note: `85 >= 70` and `85 >= 50` are ALSO true, but they're never even checked, because the switch already stopped at the first true case above them.)

## Why the Output Occurs
`switch (true)` walks through the cases **in the order they're written** and stops at the *first* one whose condition evaluates to `true`. Even though `testScore` (`85`) would satisfy several of the later conditions too (`>= 70`, `>= 50`), those are never reached because `testScore >= 85` was already found true first.

**Output:** `Excellent — Above expectations`

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `switch (true)` | Compares each case's boolean condition against literal `true` | Lets `switch` act like an if/else-if ladder |
| `case (condition):` | Matches if `condition` evaluates to `true` | First true condition wins — order matters! |
| `break;` | Stops checking further conditions once one matches | Prevents also matching later, also-true conditions |
| `default:` | Runs only if every condition was false | Not reached here, since one condition was true |

**Key takeaway:** with `switch (true)`, always order your cases from most specific/narrow to most general, otherwise a broader condition earlier in the list could "steal" a match meant for a more specific one later.
