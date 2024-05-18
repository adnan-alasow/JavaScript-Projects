"use strict";

let title = document.querySelector("input");
let content = document.querySelector("textarea");
let btn = document.querySelector("button");
let unorderList = document.querySelector(".notes");

let savedNotes = JSON.parse(localStorage.getItem("storedNotes"));

let array = [];

if (savedNotes != null) {
  array = savedNotes;
}

noteCreation();
function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

function submitNotes() {
  if (title.value === "" || content.value === "") {
    alert("Please fill in the Tite area & leave yourself some notes! ");
  }
  let object = {
    objTitle: title.value,
    objContent: content.value,
    objDate: currentDate(),
  };
  array.push(object);
  localStorage.setItem("storedNotes", JSON.stringify(array));
  clearcontent();
  noteCreation();
}

function noteCreation() {
  array.forEach((Element) => {
    let uiElement = `<li>
    <h1>${Element.objTitle}</h1>
    <p>${Element.objContent}</p>
    <p>${Element.objDate}</p>
    <button class="deleteNote" data-title = ${Element.objTitle}>Delete</button>


    </li>`;
    unorderList.insertAdjacentHTML("afterbegin", uiElement);
  });
}

function clearcontent() {
  let clearList = document.querySelectorAll("li");
  if (clearList != null) {
    clearList.forEach((li) => li.remove());
  }
}

unorderList.addEventListener("click",  function (event) {
 
  if (event.target.classList.contains("deleteNote")) {
    let titleToDelete = event.target.getAttribute("data-title");
     deleteNote(titleToDelete);
  }
});

function deleteNote(deleteTitle) {
  // arrayy = [three, tow, asasas]
  let index = array.findIndex((note) => note.objTitle === deleteTitle);
  
  array.splice(index, 1);

  // updation
  localStorage.setItem("storedNotes", JSON.stringify(array));
  clearcontent();
  noteCreation();
}

btn.addEventListener("click", submitNotes);



