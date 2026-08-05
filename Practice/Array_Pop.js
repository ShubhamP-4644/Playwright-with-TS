
// The pop() method does not accept any arguments. Its syntax is:
// Work: Removing element from last
let arr = [1, 2, 3, 4, 5, 6, 7, 8, "hello", true, null];
arr.pop()
console.log(arr);   // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hello', true ]

// Even if you pass an argument like 2, JavaScript simply ignores it.

arr.pop();
arr.pop(2);
arr.pop(100);
arr.pop("hello");
arr.pop(null);
console.log(arr);

// All of them remove only the last element from the array.

