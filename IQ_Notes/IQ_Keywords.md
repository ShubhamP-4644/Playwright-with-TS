# JavaScript Keywords

## What is a Keyword?

A **keyword** is a word reserved by the JavaScript language itself because it has a special, predefined meaning in the syntax (e.g. declaring variables, controlling flow, defining functions/classes). Keywords **cannot** be used as identifiers — you can't name a variable, function, or class after a keyword (e.g. `let if = 10;` throws a `SyntaxError`).

## Example

```js
let a = 10;      // "let" is a keyword — reserved for variable declaration
if (a > 5) {     // "if" is a keyword — reserved for conditional logic
  console.log(a);
}
```

## Comparison of All JavaScript Keywords by Category

| Category | Meaning | Keywords | Can be used as identifier? |
|---|---|---|---|
| **Always Reserved** | Reserved in every mode (strict or non-strict); core language syntax | `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with` | ❌ Never |
| **Keyword Literals** | Special built-in values, technically reserved words | `true`, `false`, `null` | ❌ Never |
| **Reserved in Strict Mode** | Only illegal as identifiers inside `"use strict"` code (modules and classes are always strict) | `implements`, `interface`, `package`, `private`, `protected`, `public`, `static`, `let`, `yield` | ⚠️ Only in non-strict/sloppy mode |
| **Reserved for Future Use** | Reserved regardless of mode, but not currently tied to a feature | `enum` | ❌ Never |
| **Contextual (Soft) Keywords** | Only act as keywords in specific syntax positions; usable as identifiers elsewhere | `as`, `async`, `await`, `from`, `get`, `set`, `of`, `static` | ✅ Yes, outside their special context (`await` is reserved inside async functions/modules) |

## Quick Reference: All Keywords at a Glance

```
break     case       catch      class      const      continue
debugger  default    delete     do         else       enum
export    extends    false      finally    for        function
if        implements import     in         instanceof interface
let       new        null       package    private    protected
public    return     static     super      switch     this
throw     true       try        typeof     var        void
while     with       yield
```

Plus contextual keywords: `as`, `async`, `await`, `from`, `get`, `set`, `of`.
