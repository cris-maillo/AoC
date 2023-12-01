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
      var outcome = round[2];
      console.log(outcome)
      calculateYou(them, outcome);
    }
    
  });

function calculateYou(them, outcome){
  if (outcome=="Y"){
    you = them;
    roundPoint = 3;
    console.log("it's a draw")
  }else if(outcome=="X"){
    console.log("lose");
    roundPoint = 0;
    if(them == "A"){
      you = "C";
    }else if(them == "B"){
      you = "A";
    }else if(them == "C"){
      you = "B"
    }
  }else{
    console.log("win")
    roundPoint = 6;
    if(them == "A"){
      you = "B";
    }else if(them == "B"){
      you = "C";
    }else if(them == "C"){
      you = "A"
    }

  }
  console.log(you)
  calculateToolPoints(you, roundPoint)
}


function calculateToolPoints(you, roundPoint){
  console.log("youuu" + you)
  switch (you) {
    case 'A':
      // console.log('Rock');
      toolPoint = 1;
      roundPoints(toolPoint, roundPoint);
      break;
    case 'B':
      // console.log('Paper');
      toolPoint = 2;
      roundPoints(toolPoint, roundPoint);
      break;
    case 'C':
      // console.log('Scissors');
      toolPoint = 3;
      roundPoints(toolPoint, roundPoint);
      break;
    default:
      errorCount += 1;
      console.log("error  " + errorCount);
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

// "Anyway, the second column says how the round needs to end: X means you need to lose, 
// Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what 
// shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in 
// a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock 
// so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.