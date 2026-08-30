let str = "HELLO";
console.log(str);
let reverse = "";
for (let i=str.length-1; i>=0; i--){
    reverse= reverse+str[i];
}
console.log("String Reversed:", reverse);
 if (str === reverse){
    console.log("Its a palindrome:", reverse);
 }
 else {
    console.log("Its not a palindrome");
 }