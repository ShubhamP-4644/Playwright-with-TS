const data = require('fs').readFileSync(0, 'utf8');
let sides = data.split(" ");

let a = sides[0];
let b = sides[1];
let c = sides[2];

if (a === b || a === c) {
    if (a !== b || a !== c) {
        console.log("Isosceles");
    } else if (a == b && a == c) {
        console.log("Equilateral");
    } else {
        console.log("Scalene");
    }
}