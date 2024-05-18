"use strict"

// Dom variables
let QuestionTitle = document.querySelector(".questions");
let inputContainer = document.querySelector(".inputs");
let btn = document.querySelector("button");
let score = document.querySelector(".score");
let message = document.querySelector(".message");

// index for questions array
let index = localStorage.getItem("index");
score.innerHTML = localStorage.getItem("score");


let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Text Modern Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["ul", "ol", "dl", "li"],
    answer: "ol",
  },
  {
    question: "What is the purpose of the HTML head element?",
    options: [
      "To define the main content of the webpage",
      "To define the header section of the webpage",
      "To include external styles and scripts",
      "To define the navigation links",
    ],
    answer: "To include external styles and scripts",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "font-style"],
    answer: "color",
  },
  {
    question: "What does 'CSS' stand for?",
    options: [
      "Cascading Style System",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which CSS selector will target all 'p' elements with the class 'highlight'?",
    options: ["p.highlight", ".highlight p", "p .highlight", ".highlight > p"],
    answer: "p.highlight",
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["variable myVar;", "let myVar;", "myVar = 5;", "new myVar;"],
    answer: "let myVar;",
  },
  {
    question: "What will the following code output? console.log(2 + '2');",
    options: ["4", "'22'", "22", "NaN"],
    answer: "'22'",
  },
  {
    question: "What does the 'DOM' stand for in relation to JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Model",
      "Detailed Object Model",
    ],
    answer: "Document Object Model",
  },
];


function clear() {
  while (inputContainer.firstChild) {
    inputContainer.removeChild(inputContainer.firstChild);
  }
}

/*
This is function that is going to disolay questions on 
web page.
*/
function questionNResponseUI() {
  clear(); // calling clear function

  let eachQustion = questions[index].question;

  QuestionTitle.innerHTML = eachQustion;

  questions[index].options.forEach((element) => {
    let optionsHTML = `
          <input type="radio" id="${element}" name="option" value="${element}" />
          <label for="${element}">${element}</label><br />
    `;
    inputContainer.insertAdjacentHTML("afterbegin", optionsHTML);
  });
}

// Next Question Logic
function nextQuestion() {
  // 2. check the user answer
  let userSelection = document.querySelector('input[name="option"]:checked');
  if (!userSelection) {
    alert("Please select one of the response!");
    return;
  }

  // 2. Compare with answer
  if (userSelection.value === questions[index].answer) {
    score.innerHTML = Number(score.innerHTML) + 1;
    score.classList.remove("incorrect");
    message.innerHTML = "";
  } else {
    score.classList.add("incorrect");
    message.innerHTML = "Not Correct";
  }

  // 3. Update data
  setTimeout(() => {
    index++;
    if (questions.length === index) {
      alert("Congrats! Quiz completed ");
      score.innerHTML = 0;

      index = 0;
    }
    questionNResponseUI();

    localStorage.setItem("index", index);
    localStorage.setItem("score", score.innerHTML);
  }, 100);
}

questionNResponseUI();

btn.addEventListener("click", nextQuestion);




