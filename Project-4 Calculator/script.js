

let firstNumber = document.querySelector('.firstNumber')
let secondNumber = document.querySelector('.secondNumber')
let operationsElement = document.querySelector('.operations')

let calculate = document.querySelector('.calculate')
let result = document.querySelector('.result')




function total(){

if(firstNumber.value === "" || secondNumber.value === ""){
 result.innerHTML = "ENTER A NUMBER"
 return
} 


let numberOne = Number(firstNumber.value)

let numberTwo = Number(secondNumber.value)

let operations = operationsElement.value;

if(operations === "Add"){
  result.innerHTML = numberOne + numberTwo
} else if(operations === "Sub"){
  result.innerHTML = numberOne - numberTwo
} else if (operations === "Multipication"){
  result.innerHTML = numberOne * numberTwo
} else {
  result.innerHTML = numberOne / numberTwo
}
}

calculate.addEventListener('click', total);




