var precedingRowSpans=[2, 1, 1, 1, 1, 1, 2, 1, 1];//Expected Column=4
//var precedingRowSpans = [2,2,2,1,1,1,1];//Expected Column=4
var cellFills=[];
var subRowIndex=0;
var subColumnIndex=0;
precedingRowSpans.forEach(function(precedingRowSpan,index){
    for(var row=0;row<precedingRowSpan;row++) {
        if(cellFills[subRowIndex+row]==null){
            cellFills.push([]);
        }
        cellFills[subRowIndex+row].splice(subColumnIndex,0,index+1)
    }
    cellFills[subRowIndex].splice(subColumnIndex,0,index+1)
    subColumnIndex++;
    if(subColumnIndex==7){
        subColumnIndex=0;
        subRowIndex++;
    }    
});
console.log(JSON.stringify(cellFills));