'use strict'

let textarea = document.querySelector('textarea')

let totalCounter = document.querySelector('.total-counter')

let remainingCounter = document.querySelector('.remaining-counter')


function counter(e){
  let content = e.target.value;

  console.log(e);

  totalCounter.innerHTML = content.length
  remainingCounter.innerHTML = 50 - content.length
}


textarea.addEventListener('input', counter)