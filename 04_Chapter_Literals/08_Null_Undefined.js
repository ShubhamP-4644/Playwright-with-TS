

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns
                 "no value" or "empty".
                 It is intentional absence of any value.
*/

var x;
console.log(x);

var audi = null;
console.log(audi);


// Undefined

let userName;  // declared but not defined
console.log(userName);

console.log(typeof userName);

function greet(){
    // does not return anything
    // no ruturn statement
}
console.log(greet());

// NUll
let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture);  // Object
