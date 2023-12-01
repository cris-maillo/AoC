var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data){
    for(i = 0; i < data.length; i++){
        let packet = []

        for(j = 0; j < 13; j++){
            packet.push(data[i + j])
        }

        var hasDuplicate = packet.some((val, i) => packet.indexOf(val) !== i);

        if(!hasDuplicate){
            var marker = 14 + i 
            console.log(marker)
            
            break;
        }
    }
})