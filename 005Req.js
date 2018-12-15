var req=require('./004PromiseTest.js');
var custom=new req.CustomPromise();
custom.printer();

var prom=new Promise(function(resolve, reject){
    
        resolve();
    
}).then(function(){
    console.log('resolved');
})