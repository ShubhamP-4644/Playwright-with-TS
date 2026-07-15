
//-----------Comparison Operator----------------------//
// Comparison operator will always result in the boolean, true OR false

// =, ==, ===
// = --> Assignment operator
// == --> Loose comparison
// === --> Strict comparison

console.log(4 > 5);
console.log(4 < 5);
console.log(4 >= 4);

console.log( 8 == "8");     // Loose comparison --> Either value OR data type comparison

console.log( 8 === "8");     // Strict comparison --> Value comparison with data type 

console.log( 7 == "8"); 
console.log( "7" == "8"); 

console.log(8 != "8");      // Loose Data type OR Value --> FALSE
console.log(8 !== "8");      // Strict --> TRUE