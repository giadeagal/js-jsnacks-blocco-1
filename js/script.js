// Snack 1
document.getElementById("title").innerHTML = "Qual è la parola più corta?"

var wordOne = prompt("Inserisci una parola");
var wordTwo = prompt("Inserisci una nuova parola");

document.getElementById("printer").innerHTML = wordOne + " e " + wordTwo + " hanno lo stesso numero di caratteri"

if (wordOne.length < wordTwo.length) {
    document.getElementById("printer").innerHTML = wordOne + " è una parola più corta di " + wordTwo
} else if (wordOne.length > wordTwo.length) {
    document.getElementById("printer").innerHTML = wordTwo + " è una parola più corta di " + wordOne
};