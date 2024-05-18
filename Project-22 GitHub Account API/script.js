"use strict";

let form = document.querySelector("form");
let input = document.querySelector("input");
let card = document.querySelector(".card");

async function search(e) {
  e.preventDefault();

  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);
    const data = await response.json();

    const responseRepos = await fetch(
      `https://api.github.com/users/${input.value}/repos`
    );

    const dataRepos = await responseRepos.json();

    card.style.display = "flex";

    card.innerHTML = `<div class="image">
<img src="${data.avatar_url}" alt="" />
</div>
<div class="info">
<h2>${data.name}</h2>
<p>
 ${data.bio}
</p>

<ul class="stats">
  <li>Followers: ${data.followers}</li>
  <li>Following: ${data.following}</li>
  <li>Public Rep: ${data.public_repos}</li>
</ul>

<ul class="projects">
  ${dataRepos
    .slice(0, 4)
    .map((element) => `<li>${element.name}</li>`)
    .join("")}
</ul>
</div>`;
  } catch (err) {
    card.style.display = "flex";
    card.innerHTML = "User NOT found, check Spelling!";
  }
}

form.addEventListener("submit", search);

// 7. PrimeNumbers:Write aprogram that prints all prime numbers between 1 and 100 using a forloop.

/*
function primeNumbers() {
  for (let num = 1; num <= 100; num++) {
    let prime = true;
    // checking
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
      }
    }
    if (prime === true) {
      console.log(num);
    }
  }
}

console.log(primeNumbers());
// 9 / 2
// num / i === 0
*/

// 8. Palindrome Checker:Createaprogramthatchecksifagivenstringisa palindrome(readsthesamebackwardasforward)usingaforloop.
/*
function palindrom(str) {

  // reversing the string
  let reversWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversWord += str[i]
  }
  //checking palindorm
  if(reversWord === str){
    return true
  } else {
    return false
  }
}

console.log(palindrom("dad"));

//str.charAt[i]
// noon      noon
// rotator
// rotator
*/

// 9. Array sum

// function arraSum(num) {
//   let calc = 0;
//   for (let i = 0; i <= num.length - 1; i++) {
//     calc = calc + num[i]
//   }
//   return calc
// }

// console.log(arraSum([2,3,5,6]));
// // [ 2,4,5,6]

// // 10. Find the longest word

// function longestWord(sentence){
//   let split = sentence.split(' ')
//   let longestWord = "";
//   // "havig"
//   //having
// console.log(split);
//   for(let i = 0; i <= split.length - 1; i++){
//     if(longestWord.length < split[i].length ){
//       longestWord = split[i]
//     }
//   }
//   return longestWord;
// }

// console.log(longestWord("Adnan is having a fantastic day"));

// Tonight Sum of the Odd Numbers

// function addOddToN(n) {
//   let count = 0;
//   for (let i = n; i >= 1; i--) {
//     if ((i % 2 !== 0)) {
//       count = count + i;
//     }
//   }
//   return count;
// }

// console.log(addOddToN(5));

// e o a i u

// function toScottishScreaming(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] === "o" || str[i] === "a" || str[i] === "i" || str[i] === "u") {
//       str = str.substr(0, i) + "e" + str.substr(i + 1);
//     }
//   }
//   return str.toUpperCase();
// }

// console.log(toScottishScreaming("hello world"));

// o replace e
// a replace e

// 1 Kilo = 0.621371 miles

//let decimal = n - Math.floor(n)
//return parseFloat(decimal.toPrecision(3))

// function decimalPart(n) {
//   n = Math.abs(n)
// 	return +(n - Math.floor(n)) // 3.8 - 3 = -6.8
// }

// console.log(decimalPart(1.2));




