var arrOrig=[{a:3,b:7},{a:1,b:2},{a:4,b:9},{a:5,b:8}];

arrOrig.sort(function(x,y){return x.b-y.b;});

console.log(JSON.stringify(arrOrig));