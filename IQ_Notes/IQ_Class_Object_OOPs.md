# Classes & Objects

A **class** is a *blueprint* — it describes what attributes (data) and behaviours (methods) something will have, but it isn't the thing itself. An **object** is one actual instance built from that blueprint. Real world: `class Car {}` is the **architectural drawing** of a car; `new Car()` is an **actual car rolling off the factory line** — you can build as many cars as you want from one drawing, and each one is independent.

## 1. Attributes and Behaviour — CAB (`01_Class_Objects/158.js`)

```js
class Person {
    // Attribute
    #name;
    #age;

    // Behaviour
    eat(){}
    sleep(){}
}

const shubham = new Person();
const amit = new Person();
```

A class bundles **C**lass = **A**ttributes + **B**ehaviour ("CAB"): fields (`#name`, `#age`) are the data each object holds, and methods (`eat`, `sleep`) are what an object can *do*. `shubham` and `amit` are two completely separate objects — changing one never affects the other, just like two different cars built from the same drawing.

## 2. Constructors — setting things up (`01_Class_Objects/159.js`, `160.js`)

```js
class Car {
    constructor(assigned_name){
        this.name = assigned_name;
    }
}
let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);   // i10

class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it
```

```js
class Car {
    constructor(){
        console.log("Hi,Object is created");
    }
}
obj_Ref = new Car();   // logs immediately when the object is built
```

The `constructor` runs automatically the instant `new Car(...)` is called — it's the class's "setup routine," like a car rolling off the factory line already having its paint and seats installed rather than added later. A class needs **at most one** constructor (JS won't let you define `constructor` twice), and a class doesn't strictly need one at all — `class Bike {}` with no constructor still works, it just starts out with nothing set up.

## 3. Real-world constructor use — building test objects (`01_Class_Objects/161_Real_Conss.js`)

```js
class TestCase{
    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display(){
      console.log(this.name + " → " + this.status + " → " + this.priority);
    }
}
let loginTest_ref = new TestCase("Login Test","PASS","P0");
let signupTest_ref = new TestCase("Signup Test","FAIL","P1");
loginTest_ref.display();
signupTest_ref.display();
```

This is the practical payoff: instead of tracking `name`, `status`, `priority` as separate loose variables for every test, one `TestCase` blueprint bundles all three together per test, and `display()` knows how to print any test case built from it — no matter how many you create.

## 4. Everything public by default (`02_Public_Private/162_Real.js`, `163_IQ.js`)

```js
class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser() { console.log("starting the browser") }
    closeBrowser() { console.log("starting the browser") }
}
let chrome = new Browser("Chrome");
console.log(chrome.isOpen);   // true — freely readable from outside
```

```js
class APIClient {
    constructor(baseURL) { this.baseURL = baseURL; }
    get(path) { return this.baseURL + path; }
}
```

By default, every field set with `this.x = ...` is **public** — anyone holding the object (`chrome.isOpen`) can read or overwrite it directly from outside the class, with no restriction at all. This is fine for simple data, but it means nothing stops external code from doing something like `chrome.isOpen = "banana"`.

## 5. Private fields with `#` (`02_Public_Private/164_Private_Public.js`)

```js
class Credentials {
    #apiKey;      // private — only accessible from inside this class
    user;         // public
    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);            // works — "admin"
// console.log(cred.apiKey);       // undefined — not the real field
// console.log(cred.#apiKey);      // SyntaxError outside the class
```

A field name starting with `#` is **truly private** — it can only be read or written from code written *inside* the class itself. Real world: `user` is the **name tag** anyone can read; `#apiKey` is the **password locked in a safe** inside the building — outsiders can only get at it through an approved door (`pramodgetAuthHeader()`), never by reaching in directly.

## 6. Static members — shared by the class, not each object (`03_Static_JS/165_Static.js`, `166_IQ.js`, `167.js`)

```js
class TestRunner {
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if (passed) TestRunner.passCount++;
    }
    pramod_fn() { return this.name; }      // instance method — needs an object
    static summary() {                      // static method — belongs to the class itself
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}
new TestRunner("Login", true);
new TestRunner("Signup", false);
console.log(TestRunner.summary());   // "1/2 passed"
// console.log(TestRunner.pramod_fn());  // ❌ error — instance methods need an object, not the class
```

`static` fields/methods belong to the **class itself**, not to any one object — there's only ever one `TestRunner.totalTests`, shared and updated by every object created. Real world: each `TestRunner` object is one **student's exam paper** (their own `name`), but `totalTests`/`passCount` is the **class's shared scoreboard on the wall** — every student updates the same board, and you read the board through the classroom (`TestRunner.summary()`), not through any one student.

```js
class Student {
    static collegeName = "PW AT Batch";
    constructor(name) { this.name = name; }
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName)
    }
}
```

Same idea again: `collegeName` is one shared fact about *every* student, so it lives on the class (`Student.collegeName`), not duplicated inside each student object.

## 7. Class code can still see outer variables (`03_Static_JS/168.js`)

```js
let a = 10;
class Car {
    b;
    constructor() {
        console.log(a);   // 10 — reads the outer variable, nothing special about class scope here
        this.b = 10;
    }
}
```

This isn't about `static` at all — it's a reminder that a class's methods/constructor are still just regular JavaScript functions underneath, so they can read variables from the surrounding scope (`a`) exactly like any other function would.

## Comparison

| Concept | Belongs to | Access from outside | Example |
|---|---|---|---|
| Public field (`this.x`) | Each individual object | Freely readable/writable | `chrome.isOpen` |
| Private field (`#x`) | Each individual object, hidden | Blocked — only class's own methods can touch it | `cred.#apiKey` (accessible only via `pramodgetAuthHeader()`) |
| Static field (`static x`) | The class itself (shared by all objects) | Read via `ClassName.x` | `TestRunner.totalTests` |
| Instance method (`fn(){}`) | Each object | Called on an object: `obj.fn()` | `pramod_fn()` — needs `new TestRunner(...)` first |
| Static method (`static fn(){}`) | The class itself | Called on the class: `ClassName.fn()` | `TestRunner.summary()` |

## Flow — one blueprint, many independent objects

```
class TestRunner (blueprint: name, totalTests, passCount, summary())
        │
        ├──► new TestRunner("Login", true)  ──► object 1 (own `name`)  ─┐
        ├──► new TestRunner("Signup", false) ──► object 2 (own `name`)  ├─► both bump the SAME
        └──► new TestRunner("Cart", true)    ──► object 3 (own `name`)  ┘   TestRunner.totalTests
```
