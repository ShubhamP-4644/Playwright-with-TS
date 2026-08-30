# Inheritance

**Inheritance** lets one class (the *child*/*subclass*) automatically get all the attributes and behaviours of another class (the *parent*/*base class*), using `extends`. The child can then use everything the parent has as-is, **override** it with its own version, or extend the parent's version with something extra. Real world: a **base recipe** for "sandwich" already tells you bread + filling; a "grilled cheese" recipe *extends* it, reusing the general idea of "sandwich" while adding its own specific step (grilling).

## 1. Inheriting behaviour with no changes (`176_Single_Inheritance.js`)

```js
class BasePage {
    constructor(pageName) { this.pageName = pageName; }
    open() { console.log("Opening the page "); }
    close() { console.log("Closing the page "); }
}
class LoginPage extends BasePage {
}

let page = new LoginPage();
page.open();   // "Opening the page " — inherited straight from BasePage
page.close();  // "Closing the page " — inherited straight from BasePage
```

`LoginPage extends BasePage` but adds nothing of its own — it simply **inherits** `open()`/`close()` unchanged. This is the simplest form of reuse: write shared behaviour once in a base class, and every subclass gets it for free.

## 2. Calling the parent's constructor and methods with `super` (`177.js`)

```js
class Animal {
    constructor(name) { this.name = name; }
    eat() { console.log(this.name + " is eating"); }
    sleep() { console.log(this.name + " is sleeping"); }
    foo(){ console.log("Foo Called!"); }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);           // runs Animal's constructor first
        this.breed = breed;
    }
    bark() {
        super.foo();            // calls Animal's foo(), not Dog's own version
        console.log(this.name, " is barking!")
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();    // inherited from Animal
dog.bark();   // Dog's own method, which also reaches back into Animal via super.foo()
```

`super(...)` inside a constructor runs the **parent's constructor** first — here, `super(name)` lets `Animal` set up `this.name` before `Dog` adds its own `this.breed`. `super.foo()` (inside a method) calls the **parent's version** of a method directly, even from inside a child method. Real world: `super(name)` is like a new employee's onboarding: **HR (the parent) processes the basic paperwork first**, and only afterward does the specific department (the child) add role-specific setup.

## 3. Fully overriding a method (`178_IQ.js`)

```js
class BaseTest {
    setup() { console.log("Base: open browser"); }
}
class APITest extends BaseTest {
    setup() { console.log("APITest: open browser"); }  // completely replaces the parent's setup()
}
let test = new APITest();
test.setup();   // "APITest: open browser" — Base's version never runs at all
```

When a child defines a method with the **same name** as the parent's, it **overrides** it completely — the parent's version is not called unless the child explicitly asks for it with `super.methodName()`.

## 4. Overriding while still using the parent's version (`179_IQ.js`)

```js
class BaseTest {
    constructor(){ console.log("Parent!") }
    setup() { console.log("Base: open browser"); }
    teardown() { console.log("Base: close browser"); }
}
class UITest extends BaseTest {
    constructor(){ super(); }
    setup() {
        super.setup();                      // run the parent's setup FIRST
        console.log("UI: maximize window");  // then add UITest's own extra step
    }
    teardown() {
        console.log("UI: take screenshot");  // UITest's own step FIRST
        super.teardown();                    // then the parent's cleanup
    }
}
```

This is the middle ground between "inherit as-is" and "fully override": `UITest.setup()` still calls `super.setup()` to get the base behaviour, then **adds its own extra step on top**. Notice the order matters and is entirely up to you — `setup()` calls the parent *first*, while `teardown()` calls the parent *last* — whichever makes sense for that particular step.

## 5. One base class, many subclasses, used uniformly (`180_IQ.js`, `181_IQ.js`, `182_IQ.js`)

```js
class TestCase {
    execute() { console.log("Running generic test"); }
}
class UnitTest extends TestCase {
    execute() { console.log("Running unit test — checking one function"); }
}
class APITest extends TestCase {
    execute() { console.log("Running API test — sending HTTP request"); }
}
class E2ETest extends TestCase {
    execute() { console.log("Running E2E test — opening browser"); }
}
let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(function (test) {
    test.execute();   // each object runs ITS OWN version of execute(), automatically
});
```

The same pattern repeats with **Page Objects** (`BasePage` → `LoginPage`/`DashboardPage`/`CartPage`, each overriding `verify()`) and **Reports** (`Report` → `HTMLReport`/`JSONReport`/`TextReport`, each overriding `generate()`). In every case: a shared base class defines the common shape, subclasses `extends` it and override one method with their own specific behaviour, and a single loop can call `.execute()` (or `.verify()`/`.generate()`) on a whole mixed array **without caring which exact subclass each object is** — each one automatically runs its own overridden version. This "same call, different behaviour depending on the actual object" effect is called **polymorphism**, and it's only *possible* because inheritance gave every subclass a shared, predictable shape to begin with.

## Comparison

| Pattern | What the child does | Parent's version runs? |
|---|---|---|
| Inherit, no override (`LoginPage`) | Nothing extra — uses parent method as-is | Yes, unchanged |
| Full override (`APITest.setup`) | Defines its own version with the same name | No — replaced entirely |
| Override + `super.method()` (`UITest.setup`/`teardown`) | Defines its own version, but also calls the parent's | Yes, PLUS the child's extra code |
| Constructor chaining (`super(name)`) | Child constructor delegates initial setup to parent | Yes — runs before the child's own constructor code |

## Flow — overriding vs calling through to the parent

```
new UITest()
     │
     ▼
constructor() ──► super() ──► BaseTest's constructor runs ──► "Parent!"
     │
     ▼
test.setup()
     │
     ▼
UITest.setup() ──► super.setup() ──► BaseTest.setup() ──► "Base: open browser"
     │
     ▼
"UI: maximize window"   (UITest's own extra step, runs AFTER the parent's)
```
