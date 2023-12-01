var fs = require('fs');
var game = "";
var toolPoint = 0;
var roundPoint = 0;
var totalGamePoints = 0;
var errorCount = 0;

fs.readFile('input.txt', 'utf8', function(err, data){
    game = data.split('\n');
    for (var i = 0; i < game.length; i++){
      round = game[i];
      var them = round[0];
      var you = round[2];
      calculateRoundWinner(them, you);
    }
    
  });

function calculateRoundWinner(them, you){
    if (them == "A" && you=="Y" || them == "B" && you == "Z" || them == "C" && you == "X"){
      roundPoint = 6
      // console.log("you win")
    }
    else if(them == "A" && you=="X" || them == "B" && you == "Y" || them == "C" && you == "Z"){
      roundPoint = 3
      // console.log("its a draw")
    }
    else{
      roundPoint = 0
      // console.log("you lose")
    }
    console.log("helloo       " + roundPoint)
    calculateToolPoints(you, roundPoint);
}

function calculateToolPoints(you, roundPoint){
  switch (you) {
    case 'X':
      // console.log('Rock');
      toolPoint = 1;
      roundPoints(toolPoint, roundPoint);
      break;
    case 'Y':
      // console.log('Paper');
      toolPoint = 2;
      roundPoints(toolPoint, roundPoint);
      break;
    case 'Z':
      // console.log('Scissors');
      toolPoint = 3;
      roundPoints(toolPoint, roundPoint);
      break;
    default:
      errorCount += 1;
      console.log(errorCount)
      console.log("error5");
  }
}

function roundPoints(toolPoint, roundPoint){
  console.log("toolpoints" + toolPoint);
  console.log("roundpoints" + roundPoint);

  var roundTotal = toolPoint + roundPoint;
  console.log(roundTotal)

  gameTotal(roundTotal)
}

function gameTotal(roundTotal){
  totalGamePoints += roundTotal;
  console.log(totalGamePoints)
}

