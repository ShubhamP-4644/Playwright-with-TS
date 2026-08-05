

// The shift() method does not accept any arguments. Its syntax is:
// Work: Removing element from Start
let arr = [1, 2, 3, 4, 5, 6, 7, 8, "hello", true, null];
arr.shift()

// Even if you pass an argument like 2, JavaScript simply ignores it.

arr.shift();
arr.shift(2);
arr.shift(100);
arr.shift("hello");
arr.shift(null);
console.log(arr);

// All of them remove only the last element from the array.

