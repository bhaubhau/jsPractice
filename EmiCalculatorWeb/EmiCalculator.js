(function init(){
    setInterval(calculateEmi,100);
})();

function calculateEmi() { 
    var principal=Number(document.getElementById("sanctionedAmount").value);
    var roi=Number(document.getElementById("roi").value);
    var tenure=Number(document.getElementById("tenure").value);

    var monthlyRoiFract=(roi/12)/100;
    var emi=(principal*monthlyRoiFract*Math.pow(1+monthlyRoiFract,tenure))/(Math.pow(1+monthlyRoiFract,tenure)-1);
    
    document.getElementById("emi").innerHTML=emi;
}