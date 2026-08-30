let apicall =new Promise(function(resolve, reject){
    resolve({status: 200, body:"user data"});
});

apicall.then(function(response){
        console.log(response);
        console.log(response.status);
        console.log(response.body);
});

// .then() is called when promise is accepted