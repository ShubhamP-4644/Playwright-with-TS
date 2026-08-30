# Callbacks

A **callback** is just a function you hand to another function, saying: *"Do your job, and when you're done, call me back."* It's like giving the pizza shop your phone number — they don't stop everything to wait next to you, they just **call you back** when the pizza is ready.

## 1. The basic idea (`128_Callback.js`)

```js
function placeOrder(item, callback) {
    console.log("Order Placed....");
    callback();          // "call back" whoever was handed in
}

function print() { console.log("Normal Fn - Done with the order"); }

placeOrder("Burger", print);                              // pass a named function
placeOrder("Burger", function () { console.log("..."); }); // pass an anonymous function
placeOrder("Burger", () => { console.log("..."); });       // pass an arrow function
```

All three do the same thing — a function is just a value in JS, so you can pass it around like a name or a number. Real world: you can give the pizza shop your **name**, a **sticky note with a message**, or a **quick hand gesture** — different styles, same idea of "here's how you reach me."

## 2. Callbacks as a "when you're done" signal (`129_Callback.js`)

```js
function garimaStory(item, callMeWhenStoreIsEmpty) {
    console.log("Store is busy!");
    console.log("Store is empty!");
    callMeWhenStoreIsEmpty();
}

garimaStory("starting shopping", () => {
    console.log("lets start shopping....");
});
```

Real world: Garima waits outside a busy store. The store owner doesn't shout at her every second — he just **calls her back** the moment the store is empty and she can go in.

## 3. Synchronous vs Asynchronous callbacks (`130`, `131`)

```js
// SYNC callback -- forEach runs the callback immediately, one after another, no waiting
let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
testResults.forEach(function (result, index) {
    console.log("Test " + index + " -> " + result);
});
// prints all 4 lines instantly, in order -- nothing is "waited on"
```

```js
// ASYNC callback -- setTimeout waits 5 seconds before running the callback
console.log("Test 1: started");
setTimeout(function () {
    console.log("Test 2 : API response received!");
}, 5000);
console.log("Test 3: Moving to next last");

// Output order: Test 1 -> Test 3 -> (5 sec later) Test 2
```

Real world: `forEach` is like reading 4 items off a checklist **out loud, one by one, right now** (sync). `setTimeout` is like **putting a pizza in the oven and setting a timer** — you walk away and do other things (print "Test 3"), and only when the timer rings does the oven "call you back" with the pizza (Test 2).

## 4. Real QA use — chained async steps (`132_CallBackHell.js`)

```js
function openBrowser(callback) {
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback();
    }, 500);
}
// ...goToLoginPage, enterCredentials, clickLogin defined the same way

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test is Complete!");
            });
        });
    });
});
```

Each step must finish before the next can start (open browser → THEN go to login page → THEN enter credentials → THEN click login). Real world: **getting ready for school** — you can't put on shoes before socks. Each step "calls back" the next step only once it's actually done.

## 5. Callback Hell (`133_CallBack_Hell.js`)

The same "wait, then do the next thing" idea, but with **many** steps (login → profile → orders → order details → payment → shipping → product → email → notification → report), each nested one level deeper than the last, forms a staircase of `{` that keeps sliding right:

```js
loginUser(email, pass, function (err, user) {
    getUserProfile(user.id, function (err, profile) {
        getUserOrders(user.id, function (err, orders) {
            getOrderDetails(orders[0].id, function (err, order) {
                // ...and it keeps going deeper and deeper
            });
        });
    });
});
```

Real world: this is like a **Russian nesting doll of chores** — "after you make your bed, AND THEN after you brush your teeth, AND THEN after you pack your bag, AND THEN after..." By the 8th chore it's hard to even see where one instruction ends and the next begins. This deeply-nested, hard-to-read shape is exactly what **Promises and `async/await`** (see [[IQ_Promise]] and [[IQ_Async_Await]]) were invented to fix.

## 6. A callback that does math (`134_Call_Return.js`)

```js
function calculate(a, b, operation) {
    return operation(a, b);   // the callback decides WHAT math to do
}

let sum = calculate(10, 5, function (x, y) { return x + y; });
console.log(sum); // 15
```

Real world: `calculate` is a **calculator body** with no fixed buttons — you hand it the "+", "-", or "×" button (the callback) yourself, and it applies whichever one you gave it to the two numbers.

## 7. Chained steps, no error handling (`135_Pyramid_Dom.js`)

```js
step1(function () {
    step2(function () {
        step3(function () {
            step4(function () { console.log("Done!"); });
        });
    });
});
```

This is a smaller "callback hell" pyramid — same staircase shape, without the extra error-checking (`if (err) {...}`) that `132`/`133` add.

## Comparison

| Aspect | Synchronous Callback (e.g. `forEach`) | Asynchronous Callback (e.g. `setTimeout`) | Callback Hell (deeply nested) |
|---|---|---|---|
| Definition | Callback runs immediately, in order | Callback runs later, after some delay/event | Many async callbacks nested inside each other |
| Real-world analogy | Reading a checklist out loud right now | Setting an oven timer and waiting for the ding | A staircase of "after this, after this, after this..." chores |
| When callback runs | Right away, before the next line of code that follows the loop | After the timer/event/response completes | Each one after the previous one finishes |
| Readability | Easy to read, flat | Still easy — usually just one callback | Hard to read — nested `{` staircase, easy to lose track |
| Fixed by | N/A (not a problem) | N/A (this is normal/expected) | Promises (`.then` chaining) or `async/await` |

## Flow — a chained async callback sequence

```
openBrowser(cb) ──500ms──► cb() called
                              │
                       goToLoginPage(cb) ──500ms──► cb() called
                                                        │
                                                enterCredentials(cb) ──500ms──► cb() called
                                                                                    │
                                                                             clickLogin(cb) ──500ms──► "Test is Complete!"
```
