//====================================
// Topic: All Number Types in JavaScript

/* In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
 There is no separate Int, float, double, etc.
JS uses IEEE 754 double-precision 64-bit binary format
*/

// 1. INTEGER Literals

// Decimal (Base 10) - Most common
let decimal = 42;
console.log("Decimal:", decimal);       // 42

// Binary (Base 2) - starts with 0b OR 0B
let binary = 0b1010     // 10 in decimal
console.log("binary 0b1010: ", binary);     // 10

// Octal (Base 8) - starts with 0o OR 0O
let octal = 0o52;    // 42 in decimal
console.log("octal 0o52: ", octal);     // 42

// HexaDecimal (Base 16) - starts with 0x OR 0X
let hex = 0x2A;     // 42 in decimal
console.log("hex 0x2a: ", hex);     // 42


// 2. FLOATING POINT LITERALS
//---------------------------------------------------------
let float1= 3.14;
let float2= -0.5;
let float3= .5;     // Valid, but avoid for readability
let float4= 5.;     // Valid, but avoid for readability


console.log("float1:", float1);
console.log("float2:", float2);
console.log("float3:", float3);
console.log("float4:", float4);


// Exponential notation
let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000