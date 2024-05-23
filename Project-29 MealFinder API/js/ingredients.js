let ingredientsInput = document.querySelector(".inputArea"); //
let apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
let subCardContainer = document.querySelector(".subContainer");

let btnShowDetails = document.querySelector(".showDetails");

// console.log(btnShowDetails);

async function inputFun() {
  console.log(apiURL + ingredientsInput.value);
  let response = await fetch(apiURL + ingredientsInput.value);
  let responseJS = await response.json();
  console.log(responseJS);

  let cardsUI = "";
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

function showDetails() {}

ingredientsInput.addEventListener("change", inputFun);

//btnShowDetails.addEventListener("click", showDetails);
