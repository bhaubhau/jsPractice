var first=function(input, callback){
    console.log('from first');
    console.log(input);
    setTimeout(function(){
        callback();
    },2000);
};

var second=function(input, callback){
    console.log('from second');
    console.log(input);
    setTimeout(function(){
        callback();
    },2000);
};

var third=function(){
    second("abc",fourth);
};

var fourth=function(){
    first("pqr",third);
};

fourth();
