let apiCall = new Promise(function(resolve,reject){
    resolve({ status: 200});
    //reject("error");

})

apiCall.then(function(data){        // Resolve
    console.log(data);
}).catch(function(error){           // Reject
    console.log(error);
}).finally(function(){              // Always executed
    // Always Executed!
     console.log("I will be executed anyhow!!");
})