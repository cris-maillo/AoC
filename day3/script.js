var fs = require('fs');
const { stringify } = require('querystring');
var item1, item2;
var common_char = [];
let totalPriority = 0;

fs.readFile('input.txt', 'utf8', function(err, data){
    
    rucksacks = data.split('\n');
    for (var i = 0; i < rucksacks.length; i++){
        var rucksack = rucksacks[i];

        item1 = rucksack.slice(0, (rucksack.length/2))
        item2 = rucksack.slice((rucksack.length/2))

        findItemMatch(item1, item2)
    }
    console.log(common_char)
    prioritizeItems(common_char)
})

function findItemMatch(item1, item2){

    for (let i=0; i < item1.length; i++){
        if(item2.includes(item1[i])){
            var character = item1[i]
        }
    }
    common_char.push(character)
}

function prioritizeItems(common_char){
    let str = common_char.join("");
    for (let i=0; i < str.length; i++){
        let priority = str.charCodeAt(i);
        if (str[i] == str[i].toLowerCase()){
            priority = priority - 96;
        }else{
            priority = priority - 38;
        }
        totalPriority += priority;
        
    }
    console.log(totalPriority)
}





// lowcase - 96
// uppercase -38

// 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s)

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

