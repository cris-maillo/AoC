var fs = require('fs');
var lines = [];

fs.readFile('testinput.txt', 'utf8', function(err, data){
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  lines = data.split('\n');
  calculateCalibration(lines);
});


function calculateCalibration(lines){
    totalVal = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let cleanLines = replaceSpelledOutNumbers(line);
        console.log(cleanLines)
        totalVal += findValue(cleanLines);
    }
    console.log(totalVal);
}

function findValue(line){
    let left = "";
    let right = "";
    let s = "";
    for (let i = 0; i < line.length; i++) {
        s = line[i];
        if(s.match(/\d+/)){
            left = s;
            break;
        }
    }

    for (let i = line.length - 1; i >= 0; i--) {
        s = line[i];
        if(s.match(/\d+/)){
            right = s;
            break;
        }
    }

    return parseInt(left + right);
}

function replaceSpelledOutNumbers(text) {
    const numberWords = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    // Create a regular expression pattern to match spelled-out numbers
    const pattern = new RegExp(Object.keys(numberWords).join('|'), 'ig');

    // Replace spelled-out numbers with digits in the text
    const replacedText = text.replace(pattern, match => {
        return numberWords[match.toLowerCase()];
    });

    if (replacedText === text) {
        return text;
    }

    return replacedText;
}
