var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data){

    pairAreas = data.split('\n');

    let totalCount = 0;

    for (var i = 0; i < pairAreas.length; i++){

        var pair = pairAreas[i].split(",")

        area1 = pair[0]
        area2 = pair[1]

        var totalArea1 = expandRange(area1).toString();
        var totalArea2 = expandRange(area2).toString();


        if(checkIfContains(totalArea1, totalArea2)){

            totalCount +=1;

            if( i == 23 || i == 700 || i == 795 || i == 812){
                console.log({
                    i,
                    contains: true,
                    totalArea1,
                    totalArea2,
                })
            }
        }
        }

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

