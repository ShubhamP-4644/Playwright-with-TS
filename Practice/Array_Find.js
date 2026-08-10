let nums = [10, 20, 30, 40, 19];
let result = nums.find(x => x> 20);     
// Always gives the first element when condition is true

console.log(result);

let result2 = nums.find(x => x> 40);
console.log(result2);

// If does not find then gives Undefined