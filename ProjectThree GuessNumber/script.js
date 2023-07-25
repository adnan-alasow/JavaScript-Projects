let inputElement = document.querySelector('.input')

let enterElement = document.querySelector('.enter')

let newGameElement = document.querySelector('.newGame')

let resultElement = document.querySelector('.result')


let hiddenNumber = Math.floor(Math.random() * 10);
console.log(hiddenNumber);


function enterValue(){
  
  let inputvalue = Number(inputElement.value)
  
  if(inputvalue === hiddenNumber){
    resultElement.innerHTML="Congrats you guessed right! "
  } else(
    resultElement.innerHTML = "Try again!"
  )
}

function resetGame(){
  hiddenNumber = Math.floor(Math.random() * 10);
  //resultElement.innerHTML = 'Result'
}


enterElement.addEventListener('click',enterValue)

newGameElement.addEventListener('click', resetGame)