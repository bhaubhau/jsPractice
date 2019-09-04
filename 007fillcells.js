var precedingRowSpans=[2, 1, 1, 1, 1, 1, 2, 1, 1];//Expected Column=4
//var precedingRowSpans = [2,2,2,1,1,1,1];//Expected Column=4
//var precedingRowSpans=[2, 1, 1, 1, 2, 1, 2, 1, 1];//Expected Column=4
//var precedingRowSpans=[3, 1, 1, 1, 3, 1, 3, 2, 1, 1, 2, 1];//Expected Column=4
var cellFills=[];
var subRowIndex=0;
var subColumnIndex=0;
for(var index=0;index<precedingRowSpans.length;index++) {
    for(var row=0;row<precedingRowSpans[index];row++) {
        if(cellFills[subRowIndex+row]==null){
            cellFills.push([0,0,0,0,0,0,0]);
        }
        if(cellFills[subRowIndex+row][subColumnIndex]==0) {
            cellFills[subRowIndex+row][subColumnIndex]=index+1;
        } else {
            index--;
            break;
        }
    }
    subColumnIndex++;
    if(subColumnIndex==7){
        subColumnIndex=0;
        subRowIndex++;
    }    
}
var column=-1;
for(var index=0;index<cellFills.length;index++)
{
    console.log(JSON.stringify(cellFills[index]));
    column=cellFills[index].indexOf(0);
    if(column>=0) {
        column=column+1;
    }
}
console.log(column);