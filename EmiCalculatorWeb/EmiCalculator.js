(function init(){
    setInterval(calculateEmi,100);
})();

function calculateEmi() { 
    let principal=Number(document.getElementById("sanctionedAmount").value);
    let roi=Number(document.getElementById("roi").value);
    let tenure=Number(document.getElementById("tenure").value);
    let monthlyRoiFract=0;
    let emi=0;

    if(principal>0 && roi>0 && tenure>0)
    {
        monthlyRoiFract=(roi/12)/100;
        emi=(principal*monthlyRoiFract*Math.pow(1+monthlyRoiFract,tenure))/(Math.pow(1+monthlyRoiFract,tenure)-1);
        emi=Math.round(emi);
    }
    else
    {
        emi=0;        
    }
    document.getElementById("emi").innerHTML=emi;
}