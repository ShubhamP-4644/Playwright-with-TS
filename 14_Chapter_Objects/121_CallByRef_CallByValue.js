let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);

//  Call by value
//  PREMITIVE Data Type
//  Primitive, Number, string, boolean, null, undefined

a = 90;
console.log(a);
console.log(b);

console.log("-------------");

//  Objects -- copied by reference  Call by Reference
//  Reference -- object, array, function

let obj1 = { Vol: 10};
let obj2 = obj1;
obj2.Vol = 99;
console.log(obj1.Vol);