greet("Alice");

function greet(name){           // This is fine but its not recommended
    console.log('Hi');
    return `Hello, ${name}!`;
}

sayHi ("Bob");      // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function (name) {
return `Hi, ${name}!`;
}