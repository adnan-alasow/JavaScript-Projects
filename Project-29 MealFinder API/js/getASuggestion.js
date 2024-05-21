let suggestionBtn = document.querySelector(".suggestion");
let foodCon = document.querySelector(".foodContainer");
let suggestionAPI = "https://www.themealdb.com/api/json/v1/1/random.php";

function dishList(myMeal) {
  let listContainer = "";
  for (let i = 1; i < 20; i++) {
    if (myMeal[`strIngredient${i}`] !== "" && myMeal[`strMeasure${i}`] !== "") {
      listContainer =
        listContainer +
        `<li>${myMeal[`strIngredient${i}`]} ${myMeal[`strMeasure${i}`]}</li>`;
    }
  }
  return listContainer;
}

async function fetchRecipe() {
  let response = await fetch(suggestionAPI);
  let suggestion = await response.json();
  let myMeal = suggestion.meals[0];

  console.log(myMeal);
  let lists = dishList(myMeal);
  foodCon.innerHTML = `  <img src="${myMeal.strMealThumb}" />

  <h1 class="search">${myMeal.strMeal}</h1>
  
  <div class="suggestionContainer">
    <div class="recipeBackground">
      <p>Category: ${myMeal.strCategory}</p> 
      <p>Area: ${myMeal.strArea}</p>
    </div>
    <div class="Ingredients">
      <h1>Ingredients</h1>
      <ul>
        ${lists}
      </ul>
    </div>

    <div class="Instructions">

        <h1>Instructions</h1>
        <p>
      ${myMeal.strInstructions}
        </p>
    </div>
  </div>`;
}

suggestionBtn.addEventListener("click", fetchRecipe);

fetchRecipe();
