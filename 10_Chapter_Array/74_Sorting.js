let fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();
console.log(fruits);


let nums = [1, 9, 21, 2, 10];
nums.sort();
console.log(nums);          // [ 1, 10, 2, 21, 9 ]  Natural sorting


// ----------- Proper sorting in Ascending order ----------------//
nums.sort((a,b) => a-b);
console.log(nums);      //  [ 1, 2, 9, 10, 21 ]


// ----------- Proper sorting in Descending order ----------------//
nums.sort((a,b) => b-a);
console.log(nums);      //  [ 21, 10, 9, 2, 1 ]