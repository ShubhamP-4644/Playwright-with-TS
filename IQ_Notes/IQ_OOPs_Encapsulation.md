# Encapsulation

**Encapsulation** means bundling an object's data together with the methods that are allowed to touch it, and **hiding the data itself** behind those methods — so outside code can only change it in controlled, approved ways, never directly. Real world: a bank doesn't let customers reach into the vault and grab cash themselves — they go through a **teller** (a method) who enforces the rules (verifies identity, checks balance) before touching the actual money (the private data).

## 1. Hiding data behind getters/setters (`169.js`)

```js
class Person{
    #child1;
    #child2;   // private
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }
    getChild1(){ return this.#child1; }
    setChild1(changed_name){ this.#child1 = changed_name; }
}
let p = new Person("Pramod", "Vrad", "Jenny");
// console.log(p.#child1);   // ❌ SyntaxError — can't reach a private field from outside
console.log(p.getChild1());  // ✅ "Vrad" — read through the approved method
p.setChild1("VIRAD");
console.log(p.getChild1());  // "VIRAD"
```

`#child1`/`#child2` are hidden — the only way anyone outside the class can read or change them is through the `getChild1()`/`setChild1()` "front desk," never by touching `#child1` directly. This is the core shape of encapsulation: **private data + public methods that control access to it**.

## 2. Same pattern, a different object (`170_Car.js`)

```js
class Car {
    #engine; // #private
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }
    getEngine() { return this.#engine; }
    setEngine(nameEngine) { this.#engine = nameEngine; }
}
let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());  // "V8"
tesla.setEngine("V9");
console.log(tesla.getEngine());  // "V9"
```

Identical idea to `Person`, applied to a `Car`'s `#engine` — encapsulation isn't tied to one specific example, it's a general pattern you can apply to any class that has data worth protecting.

## 3. Encapsulation enforcing a real rule, not just hiding data (`171_Ecap_Bank.js`)

```js
class ICICI {
    #balance;
    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }
    getBalance() { return this.#balance; }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}
let pramod = new ICICI("Pramod", 1000);
pramod.setBalance(10000000, false);   // "Not allowed" — balance stays 1000
let pramod_father = new ICICI("Pramod", 2000);
pramod_father.setBalance(300000, true);  // allowed — isCashier is true
```

This is encapsulation doing its *real* job: it's not just about syntax (`#balance` being technically hidden) — the `setBalance` method actively **enforces a business rule** (only a cashier can change the balance) before it lets the private data change at all. Without encapsulation, any code anywhere could just do `account.balance = 10000000` with zero checks.

## 4. Combining private instance data with private static data (`172_IQ.js`)

```js
class TestCase {
    #status = "not run";
    static #count = 0;

    constructor(name) {
        this.name = name;
        TestCase.#count++;
    }
    run(pass) { this.#status = pass ? "PASSED" : "FAILED"; }
    getStatus() { return this.#status; }

    static getCount() { return TestCase.#count; }
    static setCount(v) { TestCase.#count = v; }
}
const tc = new TestCase("login");
tc.run(true);
console.log(tc.getStatus());   // "PASSED"
console.log(TestCase.getCount()); // 4 (one per `new TestCase(...)` call)
```

Private fields can be **per-object** (`#status` — each `TestCase` has its own) or **`static #` per-class** (`#count` — one shared, hidden counter for the whole class). Both are only reachable through public methods (`getStatus()`, `getCount()`/`setCount()`), keeping the internal bookkeeping fully hidden either way.

## 5. Baseline reminder — plain classes without private fields (`173_IQ.js`, `174_IQ.js`, `175_IQ.js`)

```js
class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }
  display() { console.log("[" + this.severity + "] " + this.title); }
}

class Environment {
  constructor(name = "staging", port = 3000) {   // default parameter values
    this.name = name;
    this.port = port;
  }
  getURL() { return "http://" + this.name + ":" + this.port; }
}

class User {
  constructor(name) { this.name = name; }
  greet() { console.log("Hi, I am " + this.name); }
}
```

These three are simple, everyday classes with fully public fields (`title`, `severity`, `name`, `port`) — nothing here is hidden with `#`. They're a good contrast to keep in mind: **not every class needs encapsulation**. Use private fields + controlled access when data has real rules to enforce or needs protecting from accidental misuse (like the bank balance); plain public fields are perfectly fine for simple, low-risk data like a bug's title or a test user's name. (`174_IQ.js`'s `Environment` also shows **default parameter values** — `name = "staging"` — so calling `new Environment()` with no arguments still works, falling back to sensible defaults.)

## Comparison

| Aspect | Plain public field (`this.x`) | Encapsulated private field (`#x` + getter/setter) |
|---|---|---|
| Access from outside | Direct: `obj.x = anything` | Blocked — must go through a method |
| Can enforce rules before changing? | No | Yes (e.g. `isCashier` check in `setBalance`) |
| Risk of accidental/invalid changes | Higher — nothing stops bad values | Lower — the method controls what's allowed |
| When to use | Simple data, low risk (`Bug.title`) | Sensitive/critical data (`ICICI.#balance`, `TestCase.#status`) |

## Flow — a protected write attempt

```
outside code
     │
     ▼
pramod.setBalance(10000000, false)
     │
     ▼
if (isCashier)? ── false ──► console.log("Not allowed")   #balance UNCHANGED
     │
    true
     ▼
this.#balance = balance   #balance UPDATED
```
