" use strict";
//https://restcountries.com/#endpoints-all

let input = document.querySelector(".input");
let btn = document.querySelector("button");

let country = document.querySelector(".country");

async function search() {
  try {
    country.innerHTML = "Fetching Data...";

    let inputValue = input.value;

    let API_URL = `https://restcountries.com/v3.1/name/${inputValue}`;

    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);

    let currencyKeys = Object.keys(data[0].currencies);

    let languageKeys = Object.keys(data[0].languages);
    console.log(languageKeys);

    let html = `<div class="flagContainer">
    <img
      src="${data[0].flags.png}";
    />
    <h1>${data[0].name.common}</h1>
    </div>
    <div class="countryInfo">
    <p>Capital:<span> ${data[0].capital[0]}</span></p>
    <p>Continent: <span> ${data[0].continents[0]}</span></p>
    <p>Population:<span> ${data[0].population}</span></p>
    <p>Currency:<span> ${data[0].currencies[currencyKeys[0]].name}</span></p>
    <p>Common Languages:<span> ${data[0].languages[languageKeys[0]]}</span></p>
    </div>
    </div> `;

    country.innerHTML = html;
  } catch (error) {
    country.innerHTML = `<p class="error"> Make sure to populate the input & CHECK YOUR SPEELING </p>`;
  }
}

btn.addEventListener("click", search);

/*
return  pH < 0 ? "invalid" : pH > 14 ? "invalid" : pH > 7 ? "alkaline" : pH < 7 ? "acidic" : "neutral"
*/
