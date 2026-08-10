 let url = "https://app.vwo.com?app=pramod";
 console.log(url);
 console.log(url.replace(/app/g, "qa"));        // it globally replace the app with qa

 // splitting and joining

let arr = "PASS, FAIL, DISTINCTION, ERROR";
console.log(arr.split(":"));

console.log("Hello".split(""));

// Template literal (Joining with format)
let parts = ["2026", "10", "08"];
let date = parts.join("-");
console.log(date);