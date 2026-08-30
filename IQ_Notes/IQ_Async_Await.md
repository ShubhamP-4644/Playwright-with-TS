# Async / Await

`async`/`await` is just a **nicer costume** worn by Promises (see [[IQ_Promise]]). Instead of writing `.then().then().then()`, you write code that *looks* like it runs top-to-bottom, step by step — even though it's still waiting on Promises behind the scenes.

Real world: it's like reading a **recipe written in plain steps** ("1. Preheat oven. 2. Mix batter. 3. Bake for 20 min.") instead of a recipe written as "when the oven is preheated, THEN mix the batter, and WHEN THAT'S done, THEN bake it" — same actions, much easier to read.

## 1. `.then()` chain vs `async`/`await` (`146.js`)

```js
// Promise style
getToken().then(function (token) {
    return getUser(token);
}).then(function (user) {
    console.log(user);
});

// async/await style -- same thing, reads top to bottom
async function run() {
    let token = await getToken();   // wait here until getToken's promise resolves
    let user = await getUser(token);
    console.log(user);
}
```

Two rules baked into this:
- `async` in front of a function means "this function secretly returns a Promise, and I'm allowed to use `await` inside it."
- `await` in front of a call means "pause **this function** right here until the Promise settles, then hand me the resolved value" — it does **not** freeze the whole program, only this function's own progress.

Real world: `await` is you standing at a vending machine, waiting for YOUR snack to drop — other people (other code) can still walk up to other machines while you wait; the whole store doesn't freeze.

## 2. Rewriting a Promise chain as async/await (`147_BestWay.js`)

```js
function openBrowser() { return new Promise(resolve => resolve("Browser opened!")); }
function goToLogin()    { return new Promise(resolve => resolve("Login page loaded")); }
function enterCredentials() { return new Promise(resolve => resolve("Credentials entered")); }
function clickLogin()   { return new Promise(resolve => resolve("Logged in successfully")); }

async function runLoginFlow() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);

    let msg2 = await goToLogin();
    console.log("Step 2:", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}
```

The commented-out block below it in the same file is the **old** `.then()` chain version of this exact login flow (from [[IQ_Promise]]'s chaining example). Compare them side by side — same 4 steps, same order, same result — `async/await` just removes all the nested `.then(function (msg) {...})` wrapping and reads like a normal to-do list.

Real world: this is like following a **checklist for getting ready for school** written as plain numbered steps (1. open browser, 2. go to login, 3. enter credentials, 4. click login) instead of a tangle of "after this happens, then do that."

## 3. Error handling with async/await

The chapter's `.then()` examples use `.catch()`/`.finally()` for errors ([[IQ_Promise]]). With `async/await`, you get the same protection using plain `try/catch/finally` — the same tool you'd use for any regular error:

```js
async function runLoginFlow() {
    try {
        let msg1 = await openBrowser();
        console.log("Step 1:", msg1);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Done execution!");
    }
}
```

## Comparison

| Aspect | Promise `.then()` chain | `async`/`await` |
|---|---|---|
| Definition | Attach callback functions to a Promise's success/failure | Write Promise-based code that reads like plain step-by-step code |
| Real-world analogy | "When X happens, then do Y, then do Z" instructions | A plain numbered recipe/checklist read top to bottom |
| Syntax shape | Chained `.then(function(){...})` blocks, can nest/indent | Flat `let x = await someFn();` lines |
| Error handling | `.catch()` / `.finally()` | `try { } catch { } finally { }` |
| Underlying mechanism | Same — both ARE Promises | Same — `async/await` is "syntax sugar" over Promises |
| Readability for multi-step flows | Gets harder to read as steps grow | Stays flat and readable no matter how many steps |
| Requires | Nothing special | Function must be marked `async` to use `await` inside it |

## Flow — how `await` pauses just one function

```
async function runLoginFlow() {
    Step 1: await openBrowser()      ──► (pause HERE until resolved) ──► msg1 = "Browser opened!"
    Step 2: await goToLogin()        ──► (pause HERE until resolved) ──► msg2 = "Login page loaded"
    Step 3: await enterCredentials() ──► (pause HERE until resolved) ──► msg3 = "Credentials entered"
    Step 4: await clickLogin()       ──► (pause HERE until resolved) ──► msg4 = "Logged in successfully"
}
                     meanwhile, the REST of the program keeps running normally —
                     only this function's own next line waits at each `await`
```
