let cityName = "kigali";
let insertedCity = document.querySelector("#cityName");
let submitBtn = document.querySelector("#submitBtn");
let weatherInformation;
let country = document.querySelector(".country");
let cityLabel = document.querySelector(".city");
let localtime = document.querySelector(".localtime");
let tempC = document.querySelector(".temp-c");
let tempF = document.querySelector(".temp-f");
//submit phone
submitBtn.addEventListener("click", function () {
  weatherInformation = getData(insertedCity.value);
});

// function to fetch weather info based on the location
async function getData(city) {
  try {
    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=bd38e0750b764db6a8795807230208&q=${city}`,
      { mode: "cors" }
    );
    const weatherInfo = await result.json();
    const { location, current } = weatherInfo;
    // assigning labels to their corresponding info
    country.textContent += ` ${location.country}`;
    cityLabel.textContent += ` ${location.name}`;
    localtime.textContent += ` ${location.localtime}`;
    tempC.textContent += ` ${current.temp_c}`;
    tempF.textContent += ` ${current.temp_f}`;
    console.log(weatherInfo);
  } catch (error) {
    console.log(error);
  }
}

//getData(cityName);
