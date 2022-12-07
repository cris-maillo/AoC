var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data){

    assignmentPairs = data.split('\n');

    let totalCount = 0;

    assignmentPairs.forEach(assignmentPair => {
        var areaPair = assignmentPair.split(",")

        var expandedArea1 = expandRange(areaPair[0]).toString();
        var expandedArea2 = expandRange(areaPair[1]).toString();


        if(checkIfContains(expandedArea1, expandedArea2)){
            totalCount +=1;
        }
    });

    console.log(totalCount)
})

function expandRange(area){
    var range = area.split("-")

    lowerLimit = parseInt(range[0], 10)
    upperLimit = parseInt(range[1], 10)

    var total = [];
    for (i = lowerLimit; i < (upperLimit+1); i++){
        if(i < 9){
            //a 0 is added because small ranges like [3, 4] could be confused to be included in [43, 44]
            total.push("0" + i)
        }else{
        total.push(i)}
    }
    
    return total;
}

function checkIfContains(totalArea1, totalArea2){
    if (totalArea1.includes(totalArea2) || totalArea2.includes(totalArea1)){
        return true;
    }
}

