var namen = [];

let nameAmount = 'none';

if (nameAmount == 'none'){
    nameAmount = prompt("Hoeveel namen wilt u invullen? (minimaal 3)");
}

while (Number(nameAmount) < 3){
    nameAmount = prompt("U heeft een ongeldig aantal ingevuld, probeer het opnieuw. Hoeveel namen wilt u invullen? (minimaal 3)");
    console.log(Number(nameAmount));
}

if (Number(nameAmount) >= 3){
    console.log('for loop')
    for (let i = 1 ; i <= Number(nameAmount); i++){
        namen.push(' '+prompt('Vul hier naam nummer ' + i + ' in'));
        
    }
    var h = document.createElement("H2");
    var t = document.createTextNode('De ingevoerde namen in de array zijn: ' + namen);
    h.appendChild(t);
    document.body.appendChild(h);

    var h = document.createElement("H2");
    var t = document.createTextNode('De ingevoerde namen in de array in omgekeerde volgorde zijn: ' + namen.reverse());
    h.appendChild(t);
    document.body.appendChild(t);


}