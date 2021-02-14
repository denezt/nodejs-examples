const getVersion = framework => ({ 'ReactJS':'1.0.1',
'VueJS':'1.0.0'}[framework]) || 'No framework available';

var a = getVersion('ReactJS');
var b = getVersion('VueJS');
for (var i=0;i<10;i++){
 console.log(a);
 console.log(b);
}
console.log(":")
