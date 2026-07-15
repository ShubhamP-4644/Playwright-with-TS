
//------Empty String Vs 0 Vs "0" transitivity broken    


console.log("" == 0);       // true  --> In javascript empty string is treated as 0
console.log("" === 0);      // false

console.log("0" == 0);       // true
// Fixes it
console.log("0" === 0);       // false
console.log("" == "0");       // false
console.log("" === "0");       // false