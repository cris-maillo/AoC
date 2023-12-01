var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data){
    for(i = 0; i < data.length; i++){
        let packet = []
        packet.push(data[i], data[i + 1], data[i + 2], data[i + 3])

        var hasDuplicate = packet.some((val, i) => packet.indexOf(val) !== i);
        console.log(hasDuplicate)

        if(!hasDuplicate){
            var marker = 4 + i 
            console.log(marker)
            
            break;
        }
    }
})
