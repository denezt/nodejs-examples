var fs = require('fs')

function getHamsters(filepath, done){
    fs.readFile(filepath, function(err,hamsters){
        if (err) return done(err);

        fs.readFile('hamster.dictionary', function(err, dict){
            if (err) return done(err);
            // Add in order to minize further nesting
            compareHamsters(hamsters, dict);
        })
    })

    function compareHamsters(hamsters, dict){
        dict = dict.toString().split('\n');
        hamsters = hamsters.toString().split('\n').filter(function(hamsters){
            return dict.indexOf(hamsters) !== -1;
        })
        done(null, hamsters);
    }
}

getHamsters('hamsters.txt', function(err,hamsters){
    console.log(hamsters);
})