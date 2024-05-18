let inputElement = document.querySelector("input");
let button = document.querySelector("button");
let weatherContainer = document.querySelector(".weatherBox");

const fetchData = async (place) => {
  try {
    weatherContainer.innerHTML = "Fetching Data..........";
    const apiKey = "46f80a02ecae410460d59960ded6e1c6";
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;

    const response = await fetch(API_URL);
    const data = await response.json();

    // windSpeed
    let windSpeed = data.wind.speed;
    let { temp, feels_like, humidity } = data.main;
    const { description, icon } = data.weather[0];

    let html = `
            <img
            src="http://openweathermap.org/img/wn/${icon}.png"
            alt="Weather Image"
        />
        <h1>${temp} °C</h1>
        <p>${description}</p>

        <div class="stats">
            <p>Feels like: ${feels_like}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        </div>
    `;

    weatherContainer.innerHTML = "";
    weatherContainer.insertAdjacentHTML("afterbegin", html);
  } catch (error) {
    console.log(error);
    weatherContainer.innerHTML = "An Error Occurred";
  }
};

const getWeather = () => {
  let place = inputElement.value;
  console.log(place);
  fetchData(place);
};

button.addEventListener("click", getWeather);
