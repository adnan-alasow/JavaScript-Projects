"use strict";
//https://dictionaryapi.dev/
let inputValue = document.querySelector("input");
let infoText = document.querySelector(".infoText");
let title = document.querySelector(".title");
let meaning = document.querySelector(".meaning");
let audio = document.querySelector(".audio");
let meaningContainer = document.querySelector(".meaningContainer");

async function search(e) {
  try {
    if (e.key === "Enter") {
      let value = inputValue.value;

      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;

      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      if (data.title) {
        infoText.style.display = "none";
        meaningContainer.style.display = "block";
        meaning.innerHTML = "N/A";
        audio.style.display = "none";
        title.innerHTML = value;
      } else {
        infoText.style.display = "none";
        title.innerHTML = data[0].word;
        meaningContainer.style.display = "block";
        meaning.innerHTML = data[0].meanings[0].definitions[0].definition;

        audio.src = data[0].phonetics[0].audio;
      }
    }
  } catch (eror) {
    infoText.innerHTML = "Error";
  }
}

inputValue.addEventListener("keyup", search);



