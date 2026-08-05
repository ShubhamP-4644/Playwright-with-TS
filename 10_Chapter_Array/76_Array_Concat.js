let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);     //  [ 1, 2, 3, 4 ]
//-------- Another way to write
console.log(a.concat(b));       //  [ 1, 2, 3, 4 ]


// spread (modern way) - concatenation. (...)
// ... all the element, putting three dot before any variable means all the elements

let d = [...a, ...b];
console.log(d);


// Join 
// array into bug string
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);