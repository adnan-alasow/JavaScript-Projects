'use strict'

let btns = document.querySelectorAll('button')

let body = document.querySelector('body')

let backgroundColor = localStorage.getItem("setColor")

body.style.backgroundColor = backgroundColor


btns.forEach((btn) =>{

  btn.style.backgroundColor = btn.innerText

  btn.addEventListener('click', () => {
    body.style.backgroundColor = btn.innerText
    localStorage.setItem("setColor",  btn.innerText)
  })
})