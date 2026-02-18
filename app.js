var licznik = 1;
var clicked = {};

function generuj(id) {

    if (clicked[id]) {
        return;
    }

    if (licznik % 2 == 0) {
        document.getElementById(id).innerHTML = "X";
    } else {
        document.getElementById(id).innerHTML = "O";
    }

    clicked[id] = true;
    licznik++;
}

