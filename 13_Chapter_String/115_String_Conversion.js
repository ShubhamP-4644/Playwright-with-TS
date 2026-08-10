// String conversion

// To string
(200).toString();
console.log((200).toString());      // 200

true.toString();
console.log(true.toString());       // True

Number ("42");      // 42

parseInt("42px");       // 42
parseFloat("3.14pie");       // 3.14

let str = "hello";  // Things are immmutable in nature (Means does not gets changed)
str[0] = "H";
console.log(str);

let upper = str.toUpperCase();
console.log(str);

console.log(upper);