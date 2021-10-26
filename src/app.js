function selectElement(element) {
	return document.querySelector(element);
}

function getWeatherInfo(response) {
	console.log(response.data);
	let cityElement = selectElement("#city");
	cityElement.innerHTML = response.data.name;

	let weatherDescriptionElement = selectElement("#weather-description");
	weatherDescriptionElement.innerHTML = response.data.weather[0].description;

	let temperatureElement = selectElement("#temperature");
	temperatureElement.innerHTML = Math.round(response.data.main.temp);

	let humidityElement = selectElement("#humidity");
	humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;

	let windElement = selectElement("#wind");
	windElement.innerHTML = `Wind: ${Math.round(
		response.data.wind.speed * 3.6
	)} km/hr`;

	let iconImage = selectElement("#icon-description");
	iconImage.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	);
	iconImage.setAttribute("alt", response.data.weather[0].description);
}

function searchInput(event) {
	event.preventDefault();
	let searchElement = selectElement("#search-input");
	let city = searchElement.value;
	let apiKey = "de31afd036b8bd58c684a452ffef335f";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(getWeatherInfo);
}

let searchButtonElement = selectElement("#search-button");
searchButtonElement.addEventListener("click", searchInput);

let date = new Date();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[date.getDay()];
let hours = date.getHours();
if (hours < 10) {
	hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
	minutes = `0${minutes}`;
}

console.log(day, hours, minutes);
let dateElement = selectElement("#date-time");
dateElement.innerHTML = `Last update: ${day}, ${hours}:${minutes}`;
