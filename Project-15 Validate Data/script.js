"use strict";

let fullName = document.querySelector(".fullName");
let phoneNumber = document.querySelector(".phoneNumber");
let emailId = document.querySelector(".emailId");
let textarea = document.querySelector(".textarea");

let nameError = document.querySelector(".nameError");
let phoneError = document.querySelector(".phoneError");
let emailError = document.querySelector(".emailError");
let messageError = document.querySelector(".messageError");

let btn = document.querySelector("button");

function validateName(e) {
  let name = e.target.value;

  if (name === "") {
    nameError.innerHTML = `<p class="error">Name Required</p>`;
  } else if (/\d/.test(name)) {
    nameError.innerHTML = `<p class="error">No Numbers</p>`;
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #1f5129"></i>`;
  }
}

function validateNumber(e) {
  let number = e.target.value;

  if (!/^(?=.*[0-9])/.test(number)) {
    phoneError.innerHTML = `<p class="error">Only Numbers</p>`;
  } else if (number === "") {
    phoneNumber.innerHTML = `<p class="error">Number Required</p>`;
  } else if (number.length >= 11) {
    phoneError.innerHTML = `<p class="error">Only 11 Digits</p>`;
  } else {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #1f5129"></i>`;
  }
}

function validateEmail(e) {
  let email = e.target.value;
  if (email === "") {
    emailError.innerHTML = `<p class="error">Email Required</p>`;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.innerHTML = `<p class="error">Invalid Email</p>`;
  } else {
    emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #1f5129"></i>`;
  }
}

function validateMessage(e) {
  let message = e.target.value;
  let characters = 30;
  let left = characters - message.length;
  if (left > 0) {
    messageError.innerHTML = `<p class="error">${left} More</p>`;
  } else {
    messageError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #1f5129"></i>`;
  }
}

function submitBtn() {}

btn.addEventListener("click", submitBtn);
fullName.addEventListener("keyup", validateName);
phoneNumber.addEventListener("keyup", validateNumber);
emailId.addEventListener("keyup", validateEmail);
textarea.addEventListener("keyup", validateMessage);









function check(arr, el) {
	return arr.includes(el)
}

console.log(check([1,2,3], 3));

Array.prototype.contains = function (element) {
  return this.indexOf(element) !== -1;   //-1 !== -1
  };
  
  // Now, you can use the contains() method on arrays
const myArray = [1, 2, 3, 4, 5];

console.log(myArray.contains(3)); // Outputs: true
console.log(myArray.contains(6)); // Outputs: false

