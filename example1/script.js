//Feature #1
let now = new Date();
let h3 = document.querySelector(`h3`);
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];
h3.innerHTML = `${day}, ${hours}:${minutes}`;

//Feature #2

//Bonus Feature
function convertToFahrenheit(event) {
  event.preventDefault();
  let farhElement = document.querySelector(`#temperature`);
  farhElement.innerHTML = `77º`;
}
let fahrenheitLink = document.querySelector(`#fahrenheit-link`);
fahrenheitLink.addEventListener(`click`, convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let celsElement = document.querySelector(`#temperature`);
  celsElement.innerHTML = `25º`;
}
let celsiusLink = document.querySelector(`#celsius-link`);
celsiusLink.addEventListener(`click`, convertToCelsius);

//Homework week 5
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#temp-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = `ec906dafd44a254d26b9dd410c431070`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector(`#search-form`);
form.addEventListener(`submit`, callSubmit);

function callSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(`#search-input`).value;
  searchCity(city);
}

//Geolocation
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `ec906dafd44a254d26b9dd410c431070`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let showCurrentLocation = document.querySelector("#currentSearchButton");
showCurrentLocation.addEventListener("click", getCurrentLocation);
