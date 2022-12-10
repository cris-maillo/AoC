var fs = require('fs');
const { isNullOrUndefined } = require('util');

fs.readFile('test.txt', 'utf8', function(err, data){
    var commands = data.split("\n");
    let x = 1;
    let cycle = 0;
    let v = 0;

    for(i = 0; i < commands.length; i++){
        var command = commands[i];
        
        if(command[0] == "a"){
            cycle += 2;
            v = parseInt(command.slice(-2), 10);
        }else{
            cycle += 1;
        }

        if(i % 2 != 0){
            x += v
        }

        console.log({command}, {cycle}, {x})

        if(cycle == 20){
            console.log({command}, {cycle}, {x})
        }

    }
})