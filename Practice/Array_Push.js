

let arr = [1, 2, 3, 4];
arr.push(5, 6);

// Even if you pass an argument like 2, JavaScript simply ignores it.

arr.push();
arr.push(2);
arr.push(100);
arr.push("hello");
arr.push(true);
arr.push(null);
console.log(arr);