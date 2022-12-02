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


// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). 
// This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).

// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). 
// This ends in a loss for you with a score of 1 (1 + 0).

// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).