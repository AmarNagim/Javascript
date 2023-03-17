const weekdagen = [" maandag", " dinsdag", " woensdag", " donderdag", " vrijdag", " zaterdag", " zondag"]

// function toggle() {
//     var x = document.getElementById("week-days")
//     if(x.style.display === "none") {
//         x.style.display = "block";
//     }
//     else{
//         x.style.display = "none";
//     }
// }

function headerCreate(a) {
    var h = document.createElement("HEADER2");
    document.body.appendChild(h);
    var h2 = document.createElement("H2");
    if (a== "weekdagen") {
        var txt = document.createTextNode("Alle dagen van de week zijn:" + weekdagen);
    }
    if (a== "werkdagen") {
        var txt = document.createTextNode("De werkdagen zijn:" + weekdagen[0] + ',' + weekdagen[1] + ',' + weekdagen[2] + ',' + weekdagen[3] + ',' + weekdagen[4]);

    }

    if (a== "weekenddagen") {
        var txt = document.createTextNode("De weekenddagen zijn:" + weekdagen[5] + ',' + weekdagen[6]);

    }

    if (a== "reverse") {
        var txt = document.createTextNode("Alle dagen in omgekeerde volgorde zijn:" + weekdagen[6] + ',' + weekdagen[5] + ',' + weekdagen[4] + ',' + weekdagen[3] + ',' + weekdagen[2] + ',' + weekdagen[1] + ',' + weekdagen[0]);

    }

    if (a== "reverse-businessdays") {
        var txt = document.createTextNode("Alle werkdagen in omgekeerde volgorde zijn:" + weekdagen[4] + ',' + weekdagen[3] + ',' + weekdagen[2] + ',' + weekdagen[1] + ',' + weekdagen[0]);

    }

    if (a== "reverse-weekend") {
        var txt = document.createTextNode("Alle weekenddagen in omgekeerde volgorde zijn:" + weekdagen[6] + ',' + weekdagen[5]);

    }
    h2.appendChild(txt);
    h.appendChild(h2);
 }