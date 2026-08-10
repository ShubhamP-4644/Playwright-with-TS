// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");       
 // Returns true if searchString appears as a substring of the result
 //  of converting this object to a String, at one or more positions 
 // that are greater than or equal to position; otherwise, returns false.
url.includes("production");

// startsWith / endsWith
url.startsWith("https");
url.startsWith("http://"); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));      // nothere is not present in string then output -1
// Any anysrting is not present then output always be -1

// ASCII -> A -> 65
