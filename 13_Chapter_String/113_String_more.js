let str = "Hello World!";
console.log(str.toUpperCase());

let strg = "HELLO WORLD!";
console.log(strg.toLowerCase());

console.log(strg.toLocaleLowerCase());
console.log(strg.toLocaleUpperCase());

//      Trim space from start and End

console.log("------------");

let str1 = " Hello World! ";

console.log(str1);
console.log(str1.trim());       // Trim space from start and end
console.log(str.trimStart());      // Trim space from start
console.log(str.trimEnd());        // Trim space from end   

let msg = "Test: FAIL. RETRY: FAIL.";
msg.replace("FAIL", "PASS"); // 
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS");

// Concatenation 

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;