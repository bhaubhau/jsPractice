var precedingRowSpans=[2, 1, 1, 1, 1, 1, 2, 1, 1];//Expected Column=4
var cellFills=[[]];
var subRowIndex=0;
var subColumnIndex=0;
precedingRowSpans.forEach(function(precedingRowSpan){
    while(cellFills[subRowIndex][subColumnIndex]!=null) {
        subColumnIndex=subColumnIndex+1;
        if(subColumnIndex==7){
            subColumnIndex=0;
            subRowIndex=subRowIndex+1
        }
    }
    for(var row=subRowIndex;row<precedingRowSpan;row++)
    {
        if(cellFills[row]==null){
            cellFills.push([]);
        }
        cellFills[row].push(1);
    }
});
for(var row=0;row<cellFills.length;row++)
{
    console.log(JSON.stringify(cellFills[row]));
}
console.log("Column:" + (subColumnIndex+1));