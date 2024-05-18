'use stict'
let result = document.querySelector('.result')
let userScore = document.querySelector('.userScore')
let computerScore = document.querySelector('.computerScore')

let btn = document.querySelectorAll('.button')

let userPoints = 0
let computerPoints = 0

function playGame(e){

  let array = ['rock', 'paper', 'Scissors']

  let index = Math.floor(Math.random() * 3)
  
  let computerTurn = array[index]
  

  let userTurn = e.target.id

  if(computerTurn === userTurn){
    result.innerHTML = "Tide"
  }

  else if((userTurn === "rock" && computerTurn === "Scissors") || (userTurn === "paper" && computerTurn === "rock")|| (userTurn === "Scissors" && computerTurn === "paper")){
    result.innerHTML = `You Won! ${userTurn} Beats ${computerTurn}`
    userPoints++
  }
  else {
    result.innerHTML = `You Lose! ${computerTurn} Beats ${userTurn}`
    computerPoints++
  }
  userScore.innerHTML = userPoints
  computerScore.innerHTML = computerPoints

}


btn.forEach((button) => {
button.addEventListener('click', playGame)
})


