// Snack 2 - versione for
document.getElementById("title").innerHTML = "Impariamo le addizioni";

var somma = 0

for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Inserisci un numero"))
    somma += num
};

document.getElementById("printer").innerHTML = somma;