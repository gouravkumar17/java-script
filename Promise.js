const promise = new Promise(function(resolve,reject){
    var a = false;
    if(a){
        resolve("user")
    }
    else{
        reject("error")
    }
})
promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})