# Promises

A **Promise** is JavaScript's way of saying: *"I don't have your pizza yet, but here's a ticket (a promise) that I WILL either bring you the pizza, or tell you the kitchen burned down."* It ends in exactly one of two ways: **resolved** (success) or **rejected** (failure) — never both, never neither.

## 1. Creating a Promise (`136_Promise.js`)

```js
let order = new Promise(function (resolve, reject) {
    let foodready = false;
    if (foodready) {
        resolve("Pizza is delivered!");   // success ticket
    } else {
        reject("Order cancelled");        // failure ticket
    }
});
```

Real world: `resolve` is the waiter saying "here's your pizza," `reject` is the waiter saying "sorry, we're out." The `order` variable itself is just the **ticket/receipt** — it doesn't print the pizza's name, it holds a *pending/fulfilled/rejected* status.

## 2. Reacting to success — `.then()` (`137_Real_Promise.js`)

```js
let apicall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "user data" });
});

apicall.then(function (response) {
    console.log(response);         // {status: 200, body: "user data"}
    console.log(response.status);  // 200
});
```

`.then()` is your instruction: **"when the ticket turns into success, do THIS with what I got."** Real world: like telling the front desk "text me when my package arrives, and when you do, I'll come pick it up."

## 3. Reacting to failure — `.catch()` (`138_Real_Promise.js`)

```js
let apiCall = new Promise(async function (resolve, reject) {
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Data is success!!");     // SKIPPED entirely
}).catch(function (error) {
    console.log(error);                    // "500 Error" -- this runs instead
});
```

If the promise is rejected, `.then()` is **completely skipped** and only `.catch()` runs. Real world: if the pizza never arrives, you don't open an empty pizza box — you go straight to complaining to customer support (`catch`).

## 4. Always run something — `.finally()` (`139_Promise_Finally.js`)

```js
apiCall.then(function (data) {
    console.log(data);              // runs if resolved
}).catch(function (error) {
    console.log(error);             // runs if rejected
}).finally(function () {
    console.log("I will be executed anyhow!!");  // ALWAYS runs, win or lose
});
```

Real world: `.finally()` is like **turning off the stove** — whether the dish turned out great or burnt, you always turn off the stove at the end.

## 5. Chaining Promises — one step returns the next (`140_Promise_Real.js`)

```js
openBrowser()
    .then(function (msg) { console.log("Step 1", msg); return goToLogin(); })
    .then(function (msg) { console.log("Step 2 :", msg); return enterCredentials(); })
    .then(function (msg) { console.log("Step 3 :", msg); return clickLogin(); })
    .then(function (msg) { console.log("Step 4 :", msg); })
    .catch(function (error) { console.log("Error:", error); })
    .finally(function () { console.log("Done execution!"); });
```

This is the exact same "login flow" from [[IQ_CallBack]]'s "callback hell" example — but instead of nesting deeper and deeper (`{{{{...}}}}`), each step just **returns the next promise** and chains flat with `.then()`. Real world: like a relay race where each runner hands the baton to the next — one after another, in a straight line, not a pile of runners standing inside each other.

## 6. Running several Promises together — `Promise.all()` (`141_Promise_All.js`)

```js
Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);   // waits for ALL three, then gives you all results together
});

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),   // if even ONE fails...
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });  // ...the WHOLE thing fails
```

Real world: `Promise.all` is like **waiting for 3 friends to arrive before starting a movie** — if even one friend cancels (rejects), the whole movie plan is cancelled too, even if the other two showed up fine.

## 7. Running several, but never giving up early — `Promise.allSettled()` (`142`, `144`, `145`)

```js
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
});
```

Unlike `Promise.all`, `allSettled` **never short-circuits** — it waits for every promise and reports each one's own status (`"fulfilled"` or `"rejected"`), success or failure. Real world: a **school report card** — even if you failed Math, the report card still shows your grades for English and Science too, instead of throwing the whole report card away.

## 8. What happens after a rejection in a chain (`145_IQ.js`)

```js
Promise.reject("Test failed")
    .then(function (data) { console.log("Data:", data); })   // SKIPPED
    .catch(function (err) { console.log("Error:", err); })    // runs: "Error: Test failed"
    .finally(function () { console.log("Cleanup done"); });   // always runs
```

Once a promise is rejected, every `.then()` in the chain is skipped until the **first** `.catch()` — same rule as #3, just inside a longer chain.

## Comparison

| Aspect | `.then()` | `.catch()` | `.finally()` | `Promise.all()` | `Promise.allSettled()` |
|---|---|---|---|---|---|
| Runs when | Promise resolves (success) | Promise rejects (failure) | Always, success or failure | All promises resolve | Always, regardless of individual outcomes |
| Skips? | Skipped entirely if rejected | Skipped entirely if resolved | Never skipped | Stops early ("short-circuits") on first rejection | Never stops early |
| Real-world analogy | "Text me when it's ready" | "Call support if it fails" | "Turn off the stove no matter what" | "Wait for all 3 friends, cancel if one bails" | "Report card shows every subject's grade" |
| Good for | Handling a successful result | Handling one specific error | Cleanup (closing browser, logging done) | Steps that must ALL succeed together | Tests/checks you want a full report on |

## Flow — a chained login Promise

```
openBrowser()
     │ resolve("Browser opened")
     ▼
  .then(msg) ──► return goToLogin()
                       │ resolve("Login page loaded")
                       ▼
                    .then(msg) ──► return enterCredentials()
                                         │ resolve("Credentials entered")
                                         ▼
                                      .then(msg) ──► return clickLogin()
                                                            │ resolve("Logged in successfully")
                                                            ▼
                                                         .then(msg) ──► (any error anywhere above)
                                                                              │
                                                                        .catch(error)
                                                                              │
                                                                        .finally()  ← always runs
```
