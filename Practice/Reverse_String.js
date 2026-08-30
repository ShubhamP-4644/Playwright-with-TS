let str = "HELLO";
console.log(str);
let reverse = "";
for (let i=str.length-1; i>=0; i--){
    reverse= reverse+str[i];
}
console.log("String Reversed:", reverse);