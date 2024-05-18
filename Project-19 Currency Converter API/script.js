"use strict";

// https://demo.100jsprojects.com/currency-converter

let currencyFirst = document.querySelector("#currencyFirst");

let currencySecond = document.querySelector("#currencySecond"); // # because we're using the id 

let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");

let exchageRate = document.querySelector(".exchageRate");

let apiURL =
  "https://v6.exchangerate-api.com/v6/2e030a467db4927781667ec1/latest/";

const convertion = async () => {
  const response = await fetch(apiURL + currencyFirst.value)
  const data = await response.json()

  const convertionRate = data.conversion_rates[currencySecond.value];
  console.log(convertionRate);
  
  inputTwo.value = inputOne.value * convertionRate

  exchageRate.innerHTML = `1 ${currencyFirst.value} = ${convertionRate} ${currencySecond.value}`
  console.log(exchageRate);
};

currencyFirst.addEventListener("change", convertion);
currencySecond.addEventListener("change", convertion);

inputOne.addEventListener("change", convertion);  
