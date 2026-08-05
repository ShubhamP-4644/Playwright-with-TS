let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

arr.splice(2, 1);       // From second index remove one element
console.log(arr);       // 1 2 5 6

arr.splice(2, 0, 99);       // From second index remove zero element but add 99
console.log(arr);           // 1 2 99 5 6

arr.splice(1, 2, 10, 20);       // From first index remove 2 element and insert 10 and 20
console.log(arr);               // 1 10 20 5 6 

arr.splice(-1, 1, 8);       // From last index (-1) remove 1 element and insert 8 in that place
console.log(arr);           // 1 10 20 5 8          6 Removed and Replaced with 8