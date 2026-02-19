var licznik = 1;
var clicked = {};
var gameOver = false;
var winsO = 0;
var winsX = 0;

function generuj(id) {

    if (clicked[id] || gameOver) {
        return;
    }

    if (licznik % 2 == 0) {
        document.getElementById(id).innerHTML = "X";
    } else {
        document.getElementById(id).innerHTML = "O";
    }

    clicked[id] = true;
    licznik++;

    checkWin();
}

function resetGame() {
    licznik = 1;
    clicked = {};
    gameOver = false;

    var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (var i = 0; i < ids.length; i++) {
        var cell = document.getElementById(ids[i]);
        cell.innerHTML = "";
        cell.style.backgroundColor = "crimson";
    }
}

function checkWin() {

    var wins = [
        ["one","two","three"],
        ["four","five","six"],
        ["seven","eight","nine"],
        ["one","four","seven"],
        ["two","five","eight"],
        ["three","six","nine"],
        ["one","five","nine"],
        ["three","five","seven"]
    ];

    for (var i = 0; i < wins.length; i++) {

        var a = document.getElementById(wins[i][0]);
        var b = document.getElementById(wins[i][1]);
        var c = document.getElementById(wins[i][2]);

        if (a.innerHTML != "" &&
            a.innerHTML == b.innerHTML &&
            b.innerHTML == c.innerHTML) {

            a.style.backgroundColor = "green";
            b.style.backgroundColor = "green";
            c.style.backgroundColor = "green";

            if (a.innerHTML == "O") {
                winsO++;
                document.getElementById("winsO").innerHTML = winsO;
            } else {
                winsX++;
                document.getElementById("winsX").innerHTML = winsX;
            }

            gameOver = true;
            return;
        }
    }
}
