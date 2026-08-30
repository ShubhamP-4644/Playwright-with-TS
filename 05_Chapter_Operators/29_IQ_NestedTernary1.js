

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);
console.log("Status " +statusCode  +category);  // Another way to write

// Here all conditions are separated via semicolon, 
// its totally based on condition if condition is fullfil at any step 
// it would stop excuting further

// Modify status code to 202 and 304 and 504 and give it a try for different condition and result for better under standing