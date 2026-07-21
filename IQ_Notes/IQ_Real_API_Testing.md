# Switch — Real-World Example: HTTP Status Code Handling

## What is it?
This is a practical, real-world flavored example of `switch`: instead of days of the week, it checks an HTTP response status code (a number a web server sends back, like `200` for success or `404` for "not found") and prints a human-readable message for it.

## Why do we need it?
In API testing (and web development generally), you constantly need to react differently depending on the status code a server returns. `switch` is a very natural fit for "if the code is this, say that; if it's this other thing, say that instead."

## Syntax
```js
switch (statusCode) {
  case 200:
    // handle success
    break;
  case 404:
    // handle not found
    break;
  default:
    // handle anything else
}
```

## Example
```js
let responseCode = 404;

switch (responseCode) {

    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not found!");
        break;
    default:
        console.log("Not status code match");

}
```

## Line-by-Line Explanation
- `let responseCode = 404;` — simulates a server response code you might get back from an API call.
- `switch (responseCode) {` — start checking `responseCode` against each case.
- `case 200:` — skipped, since `responseCode` (`404`) does not equal `200`.
- `case 404:` — matches! Runs `console.log("404 Not found!");`, then `break;` exits the switch immediately.
- `default:` — never reached, because `case 404` already matched and broke out.

## Why the Output Occurs
`responseCode` is `404`, which strictly equals the `case 404:` label, so that block's code runs and prints the matching message, then exits via `break` before reaching `default`.

**Output:** `404 Not found!`

## Operator(s) / Keywords Summary
| Keyword | Meaning | Effect here |
|---|---|---|
| `switch (responseCode)` | Compares the status code against each case | Finds the `404` match |
| `case 404:` | Runs only if `responseCode === 404` | This is the one that executes |
| `break;` | Stops the switch here | Prevents falling into `default` |
| `default:` | Fallback for unrecognized codes | Skipped, since `404` was recognized |
