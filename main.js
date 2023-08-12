let cityName = "kigali";
let insertedCity = document.querySelector("#cityName");
let submitBtn = document.querySelector("#submitBtn");
let weatherInformation;
let country = document.querySelector(".country");
let cityLabel = document.querySelector(".city");
let localtime = document.querySelector(".localtime");
let tempC = document.querySelector(".temp-c");
let tempF = document.querySelector(".temp-f");
let loadingComp = document.querySelector(".loading");
let body = document.querySelector("body");

//submit
submitBtn.addEventListener("click", function () {
  weatherInformation = getData(insertedCity.value);
});

// function to fetch weather info based on the location
async function getData(city) {
  try {
    loadingComp.textContent = "Loading...";
    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=bd38e0750b764db6a8795807230208&q=${city}`,
      { mode: "cors" }
    );
    const weatherInfo = await result.json();
    const { location, current } = weatherInfo;
    // assigning labels to their corresponding info
    country.textContent = `  country: ${location.country}`;
    cityLabel.textContent = `city name: ${location.name}`;
    localtime.textContent = `Local time ${location.localtime}`;
    tempC.textContent = `temperature in celsius: ${current.temp_c}`;
    tempF.textContent = `temperature in fahrenheit ${current.temp_f}`;
    loadingComp.textContent = "succeed";

    // handle background images based on weather
    if (Number(current.temp_c) <= -30 || Number(current.temp_c) <= 30) {
      body.style.backgroundImage = "url('./images/cold.jpg')";
      body.style.backgroundSize = "100% 100%"; // Adjusted background size property
      body.style.backgroundRepeat = "no-repeat";
      body.style.overflow = "hidden"; // Changed 'none' to 'hidden'
    } else {
      body.style.backgroundImage = "url('./images/sunny.jpg')";
      body.style.backgroundSize = "100% 100%"; // Adjusted background size property
      body.style.backgroundPosition = "center center";
      body.style.backgroundRepeat = "no-repeat";
    }
  } catch (error) {
    console.log(error);
    loadingComp.textContent = "invalid city name";
  }
}

// default run on the first render
getData(cityName);
