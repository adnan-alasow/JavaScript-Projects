"use strict";

let btn = document.querySelectorAll("button");

let result = document.querySelector(".result");

function calculator(e) {
  let buttonValue = e.target.textContent;
  

  if (buttonValue === "C") {
    result.value = "";
  } else if (buttonValue === "=") {
    result.value = eval(result.value);
  } else {
    result.value = result.value + buttonValue;
  }
}

btn.forEach((button) => {
  button.addEventListener("click", calculator);
});
