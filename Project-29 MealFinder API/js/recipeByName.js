let inputSearch = document.querySelector(".inputInfo");
let foodCon = document.querySelector(".foodContainer");

let apifetch = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function recipeList(responseJS) {
  let container = "";

  for (let i = 1; i < 20; i++) {
    if (
      responseJS.meals[0]["strIngredient" + i] !== "" &&
      responseJS.meals[0]["strMeasure" + i] !== ""
    ) {
      container =
        container +
        `<li>
            ${responseJS.meals[0]["strIngredient" + i]}   
            ${responseJS.meals[0]["strMeasure" + i]}
          </li>`;
    }
  }
  return container;
}

async function inputArea() {
  console.log(inputSearch.value);
  let response = await fetch(apifetch + inputSearch.value);
  let responseJS = await response.json();

  console.log(responseJS);

  foodCon.innerHTML = ` 
  <img src="${responseJS.meals[0].strMealThumb}" />

  <h1 class="search">${responseJS.meals[0].strMeal}</h1>

  <div class="recipeDetails">
    <div class="recipeBackground">
      <p>Category: ${responseJS.meals[0].strCategory}</p>
      <p>Area: ${responseJS.meals[0].strArea}</p>
    </div>

    <div class="Ingredients">
      <h1>Ingredients</h1>
      <ul>
        ${recipeList(responseJS)}
        
      </ul>
    </div>

    <div class="Instructions">
      <h1>Instructions</h1>
      <p>
        ${responseJS.meals[0].strInstructions}
      </p>
    </div>
  </div>`;
}

inputSearch.addEventListener("change", inputArea);
