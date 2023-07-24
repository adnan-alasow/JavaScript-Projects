
let minuesElement = document.querySelector('.minues')

let countElement = document.querySelector('.count')

let plusElement = document.querySelector('.plus')



let count = 0;

function increment(){
  count++
  countElement.innerHTML=count;
}

plusElement.addEventListener('click', increment);


function decrement(){
  count--
  countElement.innerHTML=count;
}

minuesElement.addEventListener('click', decrement);