// Extracting substring

let str = "Login_test_pass_001";
console.log(str.slice(0, 5));       // (0, 4)  Actual (start, end-1) 
// why end-1 because its indexing

// slice (start, end) - negative index supported

console.log(str.slice(11));     // Prints every element after 11 position // pass_001
console.log(str.slice(-3));

let testNumber = str.slice(-3);

// substring (start, end), - no negative (treats as (0))
str.substring(6, 10);       // "Test"

// at() for single chars
str.at(0);          //"L"
str.at(-1);        // "1"
str.at(-3);        // "0"