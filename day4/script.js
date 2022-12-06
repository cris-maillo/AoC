var fs = require('fs');
let totalArea = [];
let totalCount = 0;

fs.readFile('input.txt', 'utf8', function(err, data){
    
    pairAreas = data.split('\n');
    for (var i = 0; i < (pairAreas.length -1); i++){

        var pair = pairAreas[i].split(",")

        area1 = pair[0]
        area2 = pair[1]

        divideRange(area1)
        totalArea1 = totalArea.toString();

        divideRange(area2)
        totalArea2 = totalArea.toString();

        if(checkIfContains(totalArea1, totalArea2)){
            totalCount +=1;
            if(i > 660){
            console.log("contains")
        }else{
            console.log("index" + i)
            console.log(totalArea1)
            console.log("-")
            console.log(totalArea2)
            console.log("  ")
        }
        }

        // findItemMatch(item1, item2)
    }
    // prioritizeItems(common_char)
    console.log(totalCount)
})

function divideRange(area){
    var range = area.split("-")

    lowerLimit = parseInt(range[0], 10)
    upperLimit = parseInt(range[1], 10)

    expandArea(lowerLimit, upperLimit)

}

function expandArea(lowerLimit, upperLimit){
    totalArea = [];
    for (i = lowerLimit; i < (upperLimit+1); i++){
        totalArea.push(i)
    }
    
    return totalArea;
}

function checkIfContains(totalArea1, totalArea2){
    if (totalArea1.includes(totalArea2) || totalArea2.includes(totalArea1)){
        return true;
    }
    
}

// function findItemMatch(item1, item2){

//     for (let i=0; i < item1.length; i++){
//         if(item2.includes(item1[i])){
//             var character = item1[i]
//         }
//     }
//     common_char.push(character)
// }

// function prioritizeItems(common_char){
//     let str = common_char.join("");
//     for (let i=0; i < str.length; i++){
//         let priority = str.charCodeAt(i);
//         if (str[i] == str[i].toLowerCase()){
//             priority = priority - 96;
//         }else{
//             priority = priority - 38;
//         }
//         totalPriority += priority;
        
//     }
//     console.log(totalPriority)
// }





// lowcase - 96
// uppercase -38

// 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s)

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

