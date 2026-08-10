// String Properties & Basic Access

let a = "dasdadas\nadasd";
let a2 = 'dasdad "a"sdsa\ndasd';

let str = "Hello, World!";
console.log(str.length); // Length always start with 1 but Indexing start with 0
console.log(str[0]); // index = 0
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// charAt()
str.charAt(0);          // Returns the character at the specified index.
str.charCodeAt(0);  // 72 Returns the Unicode value of the character at the specified location.

console.log(str.charAt(0));
console.log(str.charCodeAt(0));     // ASCII Character