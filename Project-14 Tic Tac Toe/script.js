"use strict";

let cells = document.querySelectorAll(".cell");
let turnMessage = document.querySelector(".turns");

let restartBtn = document.querySelector("button");

let currentPlayer = localStorage.getItem("currentPlayer");

turnMessage.innerHTML = currentPlayer + "'s Turn";

let win = false;

let values = JSON.parse(localStorage.getItem("values"));
cells.forEach((element, index) => {
  element.innerHTML = values[index];
});

function checkWinner() {
  // (value1 === value2 && value2 == value3 ) && value1 != ""

  if (values[0] === values[1] && values[1] === values[2] && values[1] != "") {
    win = true;
  }
  if (values[3] === values[4] && values[4] === values[5] && values[3] != "") {
    win = true;
  }
  if (values[6] === values[7] && values[7] === values[8] && values[7] != "") {
    win = true;
  }
  if (values[0] === values[3] && values[3] === values[6] && values[3] != "") {
    win = true;
  }
  if (values[1] === values[4] && values[4] === values[7] && values[7] != "") {
    win = true;
  }
  if (values[2] === values[5] && values[5] === values[8] && values[8] != "") {
    win = true;
  }
  //diaginal
  if (values[0] === values[4] && values[4] === values[8] && values[8] != "") {
    win = true;
  }
  if (values[2] === values[4] && values[4] === values[6] && values[6] != "") {
    win = true;
  }

  if (win) {
    turnMessage.innerHTML = currentPlayer + " Wins";
  }
}

function cellClick(e) {
  if (win) {
    return;
  }

  let index = e.target.getAttribute("cellIndex");
  // to check if a value is left empty then return 
  if (values[index] != "") {
    return;
  }

  e.target.innerHTML = currentPlayer;

  values[index] = currentPlayer;

  turnMessage.innerHTML = currentPlayer + "'s Turn";

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  localStorage.setItem("values", JSON.stringify(values));
  localStorage.setItem("currentPlayer", currentPlayer);
}

function restart() {
  cells.forEach((element) => {
    element.innerHTML = "";
  });

  values = ["", "", "", "", "", "", "", "", ""];

  win = false;
}

cells.forEach((element) => {
  element.addEventListener("click", cellClick);
});

restartBtn.addEventListener("click", restart);


// let arr = ["hi", "edabit", "fgh", "abc"]

// function findIndex(arr, str){

  
//   return arr.findIndex(element => element === str)
// }

// console.log(findIndex(arr, "hi"));
let index
let array = ["hi", "edabit", "fgh", "abc"]
function findIndex(array, str){
  for (let index = 0; index < array.length; index++) {
    if(array[index] === str){
      return index
    }
  }
}

console.log(findIndex(array, "hi"));