var x = document.getElementsByClassName("story");
var list = [];

for(var i = 0; i < x.length; i++){
    var y = x[i].getElementsByTagName('h3');
    for (var j = 0; j < y.length; j++) {
        var z = y[j].getElementsByTagName('a');
        for (var k = 0; k < z.length; k++) {
            console.log(z[k].innerHTML);
        }
    }
}