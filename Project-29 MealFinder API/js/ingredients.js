let ingredientsInput = document.querySelector(".inputArea"); //
let apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
let subCardContainer = document.querySelector(".subContainer");
let detailsModal = document.querySelector(".details-modal");
let closeBtn = document.querySelector(".close");
let mealAPI = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
let foodCon = document.querySelector(".foodContainer");
async function inputFun() {
  console.log(apiURL + ingredientsInput.value);
  let response = await fetch(apiURL + ingredientsInput.value);
  let responseJS = await response.json();
  console.log(responseJS);

  let cardsUI = "";
  console.log(cardsUI);
  for (let i = 0; i < responseJS.meals.length; i++) {
    cardsUI += ` 
    <div class="cards">
      <img src="${responseJS.meals[i].strMealThumb}" />
      <h1>${responseJS.meals[i].strMeal}</h1>
      <button class="showDetails">Show Details</button>
    </div>
  `;
  }
  subCardContainer.innerHTML = cardsUI;
}

async function showDetails(e) {
  if (e.target.className === "showDetails") {
    let mealAPIResponse = await fetch(mealAPI);
    let mealAPIResponseJS = await mealAPIResponse.json();
    let mealFetch = mealAPIResponseJS.meals[0];
    console.log(mealFetch);
    foodCon.innerHTML = ` 
    <button class="close">X</button>
    <img src="${mealFetch.strMealThumb}"  />

    <h1 class="search">${mealFetch.strMeal}</h1>

    <div class="recipeBackground">
      <p>Category: ${mealFetch.strCategory}</p>
      <p>Area: ${mealFetch.strArea}</p>
    </div>

    <div class="Instructions">
      <h1>Instructions</h1>
      <p>
        ${mealFetch.strInstructions}
      </p>`;

    detailsModal.style.display = "flex";
  }
}

function exitUI() {
  detailsModal.style.display = "none";
}

ingredientsInput.addEventListener("change", inputFun);

subCardContainer.addEventListener("click", showDetails);
closeBtn.addEventListener("click", exitUI);
