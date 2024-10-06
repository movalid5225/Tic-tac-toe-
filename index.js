
const board = document.getElementById("board");
const tiles = document.querySelectorAll(".cell");

let boardArray = [
    [' - ',' - ',' - '],
    [' - ',' - ',' - '],
    [' - ',' - ',' - ']
];

let row = '';
let col = '';
let turn = 0;


function printBoard(){
    for(let i = 0; i < boardArray.length; i++){
        let row = '';  
        for(let j = 0; j < boardArray[i].length; j++){
            row += ' ' + boardArray[i][j] + ' ';
        }
        console.log(row);
    }
}

function checkVert() {
    for(let j = 0; j < boardArray.length; j++) {
        if(boardArray[0][j] != ' - ') {
            if(boardArray[0][j] == boardArray[1][j] && boardArray[1][j] == boardArray[2][j]) {
                return true;
            }
        }
    }
    return false;
}

function checkHor() {
    for(let i = 0; i < boardArray.length; i++) {
        if(boardArray[i][0] != ' - ') {
            if(boardArray[i][0] == boardArray[i][1] && boardArray[i][1] == boardArray[i][2]) {
                return true;
            }
        }
    }
    return false;
}

function checkDiagnol(){

        if(boardArray[0][0] != ' - ' ){
            if(boardArray[0][0] == boardArray[1][1] && boardArray[1][1] == boardArray[2][2]){
                return true;
            }
        }
        if(boardArray[0][2] != ' - '){
            if(boardArray[0][2] == boardArray[1][1] && boardArray[1][1] == boardArray[2][0]){
                return true;
            }
        }
    return false;
}

tiles.forEach(tile => {
    tile.addEventListener("click", ()=>{
        if(tile.textContent == " "){
            sign = turn % 2 == 0 ? 'x' : 'o'
            tile.textContent = sign;
            row = tile.getAttribute('data-row');
            col = tile.getAttribute('data-col');
            boardArray[row][col] = sign;
            turn++;
        }

        if(checkVert() || checkHor() || checkDiagnol()){
            alert(`Game Over! Player with sign ${sign} wins.`);
            return;
        }
        if(turn >= 9){
            alert("Game Over. It's a draw!");
            return;
        }    
        printBoard();
    })
})

const reset = document.getElementById("reset-button");
reset.addEventListener("click", ()=>{
    tiles.forEach(tile => {
        tile.textContent = " ";
    })
    boardArray = [
        [' - ',' - ',' - '],
        [' - ',' - ',' - '],
        [' - ',' - ',' - ']
    ]
})








