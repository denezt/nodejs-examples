var Image = require('image').Image;

var hamsters = [ 'robo russian', 'chinese dwarf', 'syrian golden' ];
var images = [];

function loadhamsters(){
    var hamster = hamsters.shift();
    if (!hamster) {
        console.log('All hamster were found',images);
        return;
    }

    var img = Image();
    img.onload = function(){
        loadhamsters();
    }
    img.src = hamster + '.jpg';
    images.push(img)
}

loadhamsters();