var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data){
    let answer = 0;
        const dataArr = data.split(/\r?\n/);
        console.log(dataArr);
        const pairedRanges = dataArr.map( 
          line => line.split(',').map(   // A-B,X-Y 👉 ['A-B','X-Y']
            numRange=> numRange.split('-').map( // 👉 [['A','B'],['X','Y']]
              num => parseInt(num) // (make numbers)
            )
          )
        )
      
        pairedRanges.forEach(coordinateSet => {
          let [A, B] = coordinateSet[0];
          let [X, Y] = coordinateSet[1];
      
          if (( (A <= X) && (B >=Y) ) || ( (A >= X) && (B <= Y) )){
            answer += 1;
            console.log(answer)
          }
        })
        
}
    
    )
