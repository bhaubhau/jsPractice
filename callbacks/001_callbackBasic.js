function first(input, callback) {
    console.log("Input in first function: " + input);    
    setTimeout(function() {
        callback();   
    },2000); 
};

function second() {
    console.log("Input in second function: ");
};

first("Input1",second);