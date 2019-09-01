var precedingRowSpans = [3,1,1,1,1,1,3,1,1];//[[3,1,1,1,1,1,3],[2,1,1]] Expected Column=4
//var precedingRowSpans = [2,2,2,1,1,1,1];//[[2,2,2,1,1,1,1],[1,1,1]] Expected Column=4
var cellFills = [];
var previousRowSpans = precedingRowSpans.slice(0, 7);
var nextRowSpans = precedingRowSpans.slice(7);
//console.log(JSON.stringify(nextRowSpans));
var columnIndex = 0;
while (nextRowSpans.length > 0) {
    for (columnIndex = 0; columnIndex < 7; columnIndex++) {
        if (columnIndex < nextRowSpans.length) {
            if (previousRowSpans[columnIndex] > 1) {
                nextRowSpans.splice(columnIndex, 0, previousRowSpans[columnIndex] - 1);
            }
        }
    }
    cellFills.push(previousRowSpans);
    previousRowSpans = nextRowSpans.slice(0, 7);
    nextRowSpans = nextRowSpans.slice(7);
}
cellFills.push(previousRowSpans);
console.log(JSON.stringify(cellFills));
