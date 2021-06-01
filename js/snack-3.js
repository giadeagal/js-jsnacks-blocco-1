document.getElementById("title").innerHTML = "Trova i numeri dispari";

var oddList = [];

for (var i = 0; i < 6; i++) {
    var num = parseInt(prompt("Inserisci un numero"))
    if (num % 2 != 0) {
        oddList.push(num)
    } 
};

document.getElementById("printer").innerHTML = oddList;