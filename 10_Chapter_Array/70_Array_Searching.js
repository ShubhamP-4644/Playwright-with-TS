//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index {First Index means always first value index in given example  
// we have Fail 2 times so it will return index of first fail}, or -1 if not found

results.indexOf("fail"); //1
console.log(results.indexOf("fail"));

results.indexOf("skip");  // -1  {Since Skip is not present it is returning -1}
console.log(results.indexOf("skip"));

// lastIndexOf — searches from the end
results.lastIndexOf("fail");
console.log(results.lastIndexOf("fail"));

// includes — returns boolean
results.includes("error"); // true
console.log(results.includes("error"));