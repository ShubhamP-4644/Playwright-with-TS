
let browser = ["pass", "fail", "pass", "error", "fail"];

browser.indexOf("fail");      
console.log(browser.indexOf("fail"));       // Always gives index of first found element

browser.lastIndexOf("fail");  
console.log(browser.lastIndexOf("fail"));       // Gives the index of last found element

browser.indexOf("skip");
console.log(browser.indexOf("skip"));       // If element is not present then returns -1

browser.includes("error");
console.log(browser.includes("error"));     
// Includes always returns the Boolean TRUE or FALSE based on result 