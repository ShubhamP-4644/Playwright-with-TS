

let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 1);       
// First character always gets considered as index starting from 0

console.log(arr);

arr.splice(-2, 1, 8, 9);        // It also supports negative index (Couting starts from end)
console.log(arr);