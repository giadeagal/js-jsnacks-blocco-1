document.getElementById("title").innerHTML = "Scopri se sei stato invitato";

var guestList = ["Pippo", "Pluto", "Paperino"];

var guestName = prompt("Come ti chiami?");

document.getElementById("printer").innerHTML = "Non sei sulla lista degli invitati, prova ad essere più gentile!"

for (var i = 0; i < guestList.length; i++) {
    if (guestName == guestList[i]){
        document.getElementById("printer").innerHTML = "Sei sulla lista degli invitati!";
    }
};