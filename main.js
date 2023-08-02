let cityName = "kigali";
let insertedCity = document.querySelector("#cityName");
let submitBtn = document.querySelector("#submitBtn");
let weatherInformation;

//submit phone
submitBtn.addEventListener("click", function () {
  weatherInformation = getData(insertedCity.value);
  console.log(weatherInformation);
});

// function to fetch weather info based on the location
async function getData(city) {
  try {
    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=bd38e0750b764db6a8795807230208&q=${city}`,
      { mode: "cors" }
    );
    const weatherInfo = await result.json();
    console.log(weatherInfo);
  } catch (error) {
    console.log(error);
  }
}

//getData(cityName);
