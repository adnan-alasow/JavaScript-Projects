"use strict";

let HangmanImage = document.querySelector(".img");
let guessBar = document.querySelector(".gameBox");
let hintText = document.querySelector(".hintText");
let incorrectGuesses = document.querySelector(".incorrectGuesses");
let gameModel = document.querySelector(".gameModel");

let allButtons = document.querySelectorAll("button");
let playAgain = document.querySelector(".playAgain");

let timeTask;

let array = [
  {
    hint: "A rhythmic movement of the body often performed to music.",
    word: "dance",
  },
  {
    hint: "A large, strong bird of prey with a hooked beak and sharp talons.",
    word: "eagle",
  },
  {
    hint: "A sweet, juicy, and typically red or yellow fruit that grows on trees.",
    word: "apple",
  },
  {
    hint: "A celestial body that orbits around a star.",
    word: "planet",
  },
  {
    hint: "A small, rounded shape made of rubber used in sports.",
    word: "ball",
  },
  {
    hint: "A written or printed work consisting of pages bound together.",
    word: "book",
  },
  {
    hint: "A vehicle with two wheels that is powered by pedals.",
    word: "bicycle",
  },
  {
    hint: "A shiny, yellow metal often used in jewelry.",
    word: "gold",
  },
  {
    hint: "A reptile known for its long body and lack of legs.",
    word: "snake",
  },
  {
    hint: "A popular hot beverage made from roasted coffee beans.",
    word: "coffee",
  },
];
let currentWord;
let wrongAnswer = 0;
let righAnswer = 0;
let isvictory = false;

function randomWord() {
  let randomNumber = Math.floor(Math.random() * 10);
  currentWord = array[randomNumber].word.toUpperCase();
  console.log(currentWord);

  hintText.innerHTML = `Hint: ${array[randomNumber].hint}`;

  for (let index = 0; index < currentWord.length; index++) {
    const html = '<li class="letter"></li>';
    guessBar.insertAdjacentHTML("afterbegin", html);
  }

  // its the same code as above, the for loop
  // guessBar.innerHTML =  currentWord.split("").map(()=> '<li class="letter"></li>').join("")
}
// You can continue adding more objects to the array following the same pattern.

function checkWinner() {
  if (wrongAnswer === 6) {
    gameOver();

    return;
  }
  if (currentWord.length === righAnswer) {
    isvictory = true;
    gameOver();

    return;
  }
}

function clickLetter(e) {
  //the following if is for losing the game
  checkWinner();

  //logic of game
  let letter = e.target.innerHTML;
  if (currentWord.includes(letter)) {
    for (let index = 0; index < currentWord.length; index++) {
      if (letter === currentWord[index]) {
        righAnswer++;

        document.querySelectorAll("li")[index].innerHTML = letter;
      }
    }
  } else {
    wrongAnswer++;

    incorrectGuesses.innerHTML = `${wrongAnswer} / 6`;

    // need to change picutre for each incorrect

    let image = `img/hangman-${wrongAnswer}.svg`;
    console.log(image);

    HangmanImage.src = image;
  }
  console.log(letter);
  checkWinner();
}

function reset() {
  wrongAnswer = 0;
  isvictory = false;
  guessBar.innerHTML = "";
  randomWord(); // generate random word after game resets
  HangmanImage.src = "img/hangman-0.svg";
}

function gameOver() {
  gameModel.style.display = "flex";

  console.log(gameModel.querySelector("img"));
  gameModel.querySelector("img").src = isvictory
    ? "img/victory.gif"
    : "img/lost.gif";
  gameModel.querySelector(".gameOver").innerHTML = isvictory
    ? "Congrats!"
    : "Game Over!";

  gameModel.querySelector(".displayWord").innerHTML = currentWord;

  setTimeout(() => {
    gameModel.style.display = "none";
  }, 5000);
}

function tryAgain() {
  gameModel.style.display = "none";
  reset();
}

allButtons.forEach((element) => {
  element.addEventListener("click", clickLetter);
});

playAgain.addEventListener("click", tryAgain);

randomWord();

// function cityFacts(city) {

//   return `${city.name} has a population of ${ city.population} and is situated in ${city.continent}`

//   }

// let cityInfo = {
//   name: "Paris",
//   population: "2.2 million",
//   coninent: "Europe"
// }

// console.log(cityFacts(cityInfo));

// // Map Method

// function parseArray(arr) {
// 	return arr.map((element) =>
//      element.toString()
//   )
// }

// function parseArray(arr) {
// 	return arr.map(String);
// }

// console.log(parseArray([1,2,3]));

// const arr = [1, 2, 3]
// const newArr = arr.reduce((acc, curr) => acc * curr);

// console.log(newArr);

// const ages = [32, 33, 16, 40];

// console.log(ages.every(checkAge))

// function checkAge(age) {
//   return age > 18;
// }

// const arr = [1 ,2, 3]

// const sum = arr.reduce((acc, curr) => acc + curr, 10)

// console.log(sum);

// const arr = [1 ,2, 3]

// const newArr = arr.filter((x) => x > 1)

// console.log(newArr);

const arr = [1, 2, 3];

const newArr = arr.reduce((x) => x + x);

console.log(newArr);

console.log("Start");
setTimeout(() => console.log("Middle"), 1000);
console.log("End");

function foo() {
  var a = "bar";
  console.log(a);
}
console.log(foo());
a = "chicken";

let x= ""

function add(num) {
  var xyz = "hello";
}

console.log(xyz);


