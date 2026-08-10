let a = {status: "PASS"};
console.log(a.status);
console.log(a["status"]);

let a1 = {status: 'FAIL'};
console.log(a1.status);

//      Keys are sensitive in nature

let a2 = {status: 'FAIL', Status: 'ERROR'};
console.log(a2.status);
console.log(a2.Status);     // Sensitive in nature



let a3 = {status: "PASS"};
let b = a3;
b.status = "FAIL"
console.log(a3.status);
console.log(b.status);


let c = {status: "PASS"};
let d = {status: "PASS"};
console.log(c===d);     // They are present in different location  FALSE

const t_js ={
    Name: "ShubhamP",
    Age : 19
};
console.log(t_js);


// This is Json format since key are using ""
const t_json ={
    "Name": "Shubham",
    "Age" : 20
};
console.log(t_json);