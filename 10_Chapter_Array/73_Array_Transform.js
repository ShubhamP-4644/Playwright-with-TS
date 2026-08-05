let scores = [45, 82, 91, 60, 73];
let grades = scores.map(s=> s>70 ? "PASS":"FAIL");
console.log(grades);

// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size. 

let scare = [2, 9, 1, 8, 3, 6, 0, 7];
let dont = scare.map(d=> d>3 ? "No" : "Yes");
console.log(dont);


// Filter

let passing = scores.filter(s=> s>=70);
console.log(passing);

let sum = 0;
for (let i=0; i<scores.length; i++)
{
sum = sum + scores[i];
}
console.log(sum);