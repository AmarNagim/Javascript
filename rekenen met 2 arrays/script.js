const arrayOne = [1,2,3,4,5,6,7,8,9,10];
const arrayTwo = [2,4,6,8,10,12,14,16,18,20];


var b = document.createElement("H1");
var d = document.createTextNode('Array Operatoren:');
b.appendChild(d);t
document.body.appendChild(b);


var h = document.createElement("H2");
var t = document.createTextNode('Optellen van de twee arrays zijn:');
h.appendChild(t);
document.body.appendChild(h);


function optellen(arrayOne, arrayTwo){
    for(let i =-1; i < 10; i++){
        var antwoord = arrayOne[i]+arrayTwo[i];
        console.log(antwoord);
        if (i >= 0){
            var h = document.createElement("H3");
            var t = document.createTextNode(arrayOne[i] + ' + ' + arrayTwo[i] + ' = ' + antwoord);
            h.appendChild(t);
            document.body.appendChild(h);
        }
    }
}
optellen(arrayOne, arrayTwo);

var h = document.createElement("H2");
var t = document.createTextNode('Aftrekken van de twee arrays zijn:');
h.appendChild(t);
document.body.appendChild(h);



function aftrekken(arrayOne, arrayTwo){
    for(let i =-1; i < 10; i++){
        var antwoord = arrayTwo[i]-arrayOne[i];
        console.log(antwoord);

        if (i >= 0){
            var h = document.createElement("H3");
            var t = document.createTextNode(arrayTwo[i] + ' - ' + arrayOne[i] + ' = ' + antwoord);
            h.appendChild(t);
            document.body.appendChild(h);
        }
    }
}
aftrekken(arrayOne, arrayTwo);

var h = document.createElement("H2");
var t = document.createTextNode('Vermenigvuldigen van de twee arrays zijn:');
h.appendChild(t);
document.body.appendChild(h);

function vermenigvuldigen(arrayOne, arrayTwo){
    for(let i =-1; i < 10; i++){
        var antwoord = arrayTwo[i]*arrayOne[i];
        console.log(antwoord);

        if (i >= 0){
            var h = document.createElement("H3");
            var t = document.createTextNode(arrayOne[i] + ' X ' + arrayTwo[i] + ' = ' + antwoord);
            h.appendChild(t);
            document.body.appendChild(h);
        }

    }
}
vermenigvuldigen(arrayOne, arrayTwo);

var h = document.createElement("H2");
var t = document.createTextNode('Delen van de twee arrays zijn:');
h.appendChild(t);
document.body.appendChild(h);

function delen(arrayOne, arrayTwo){
    for(let i =-1; i < 10; i++){
        var antwoord = arrayTwo[i] / arrayOne[i];
        console.log('done')
        console.log(antwoord);

        if (i >= 0){
            var h = document.createElement("H3");
            var t = document.createTextNode(arrayTwo[i] + ' / ' + arrayOne[i] + ' = ' + antwoord);
            h.appendChild(t);
            document.body.appendChild(h);
        }
    }
}

delen(arrayOne, arrayTwo);

