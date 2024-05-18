"use strict";

let inputEle = document.querySelector("input");
let searchBtn = document.querySelector(".search");

let mainContainer = document.querySelector(".mainContainer");
let result = document.querySelector(".result");

async function searchdish() {
  let inputSearch = inputEle.value;
  console.log(inputSearch);
  let url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`;

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
  if (data.meals === null) {
    result.innerHTML = "<h3 class='notFound'>Dish Not Found</h3>";
  } else {
    let meals = data.meals[0];
    let count = 1;
    let array = [];
    for (let key in meals) {
      if (key.startsWith("strIngredient") && meals[key] !== "") {
        array.push(
          meals["strMeasure" + count] + " " + meals["strIngredient" + count]
        );
        count++;
      }
    }
    console.log(array);
    result.innerHTML = ` <img
    src="${meals.strMealThumb}"
  />
  <div class="title">
    <h3>${meals.strMeal}</h3>
    <p>${meals.strArea}</p>
  </div>
  
  <div class="ingredients">
    <ul>
    ${array
      .map((index) => {
        return `<li>${index}</li>`;
      })
      .join("")}
    </ul>
  </div>

  <button class="viewRecipe">View Recipe</button>
  
  <div class="dish">
  <button class="closeBtn">X</button>
  <pre>${meals.strInstructions}</pre>
  </div>
  
  
  `;
    let dish = document.querySelector(".dish");
    let viewRecipe = document.querySelector(".viewRecipe");
    viewRecipe.addEventListener("click", () => {
      dish.style.display = "block";
    });

    let closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      dish.style.display = "none";
    });
  }
}

searchBtn.addEventListener("click", searchdish);
