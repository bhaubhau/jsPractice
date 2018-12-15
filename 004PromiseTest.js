(function(){
    var CustomPromise=function(){
        return {
            printer: void function(){
                console.log('IIFE');
            }
        }        
    }
    module.exports=CustomPromise;    
}());

