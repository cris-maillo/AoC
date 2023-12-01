var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data){
    var commands = data.split("\n")

    for(i = 0; i < commands.length; i++){
        var command = commands[i];
        
        if(command[0] == "$"){
            if(command.slice(2,3) == "ls"){
                //ls
            }else{
                //cd
            }
        }
        // switch(command[0,2]) {
        //     case x:
              
        //       break;
        //     case y:
        //       // code block
        //       break;
        //   }
    }

})