var body = document.body;
var table = document.createElement("table");
var rows = [];
var squares = [];
var turn = "x";

for(var i=0; i<3; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    rows.push(tr);
    squares.push([]);

    for(var j=0; j<3; j++) {
        var td = document.createElement("td");
        td.addEventListener("click", game);
        squares[i].push(td);
        tr.appendChild(td);
    }
}

body.appendChild(table);

function game(e) {
    var yourRow = rows.indexOf(e.target.parentNode);
    var yourSquare = squares[yourRow].indexOf(e.target);

    if (squares[yourRow][yourSquare].textContent !== "") {
        console.log("빈칸이 아닙니다.");
    }
    else {
        squares[yourRow][yourSquare].textContent = turn;

        var full = false;

        if(
            squares[0][yourSquare].textContent == turn &&
            squares[1][yourSquare].textContent == turn &&
            squares[2][yourSquare].textContent == turn
        ) {
            full = true;
        }

        if(
            squares[yourRow][0].textContent == turn &&
            squares[yourRow][1].textContent == turn &&
            squares[yourRow][2].textContent == turn
        ) {
            full = true;
        }
        if(yourRow - yourSquare == 0 || Math.abs(yourRow - yourSquare) == 2) {
            if(
            squares[0][0].textContent == turn &&
            squares[1][1].textContent == turn &&
            squares[2][2].textContent == turn
        ) {
            full = true;
            }
        }

        if (full) {
            alert(turn + "님이 승리!");
            turn = "x";
            squares.forEach(function (rows) {
                rows.forEach(function (square) {
                    square.textContent = "";
                });
            });
        }

        else {
            if (turn === "x") {
                turn = "o";
            } else {
                turn = "x";
            }
        }
    }
}