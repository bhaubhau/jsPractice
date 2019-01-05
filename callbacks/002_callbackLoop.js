var first=function (input, callback) {
    console.log("Input in first function: " + input);    
    setTimeout(function() {
        callback;   
    },2000); 
};

var second=function (input, callback) {
    console.log("Input in second function: " + input);    
    setTimeout(function() {
        callback;   
    },2000); 
};

var third=function recur(callback) {
    first(1,second(2,recur()));       
};

third();