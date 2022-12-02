var fs = require('fs');
var calorieCount = 0;
var elves = [];
var totalLargest = 0;
var lines = [];
var largest = 0;

fs.readFile('input.txt', 'utf8', function(err, data){
  lines = data.split('\n');
  addCalories(lines)
});


function addCalories(lines){
  for (var line = 0; line < lines.length; line++) {
  if (lines[line] == ""){
    elves.push(calorieCount);
    calorieCount = 0;
  }else{
    calorieCount += parseInt(lines[line]);
  }} 

  elves.push(calorieCount);

  findLargest(elves);
  findThree(elves, largest);
}

function findLargest(elves){
  largest = elves[0];
  for (var i = 0; i < elves.length; i++) {
    if (largest < elves[i] ) {
        largest = elves[i];
        largestIndex = i;
    }
  }
  elves.splice(largestIndex, 1);

  largestHere = largest
  
  return largestHere
}

function findThree(elves, largest){
  totalLargest += largest;
  for (var i = 0; i < 2; i++){
    findLargest(elves)
    totalLargest += largestHere;
    
  }
  console.log(totalLargest)
}

