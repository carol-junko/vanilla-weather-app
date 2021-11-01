function selectElement(element) {
	return document.querySelector(element);
}

function displayDate(timestamp) {
	let date = new Date(timestamp * 1000);
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

	return `Last update: ${day}, ${hours}:${minutes}`;
}

function displayDay(timestamp) {
	let date = new Date(timestamp * 1000);
	let day = date.getDay();
	let days = ["Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"];

	return days[day];
}

function displayCurrentWeather(response) {
	let dateElement = selectElement("#date-time");
	dateElement.innerHTML = displayDate(response.data.current.dt);

	let cityElement = selectElement("#city");
	cityElement.innerHTML = response.data.timezone;

	let weatherDescriptionElement = selectElement("#weather-description");
	weatherDescriptionElement.innerHTML =
		response.data.current.weather[0].description;

	let temperatureElement = selectElement("#temperature");
	temperatureElement.innerHTML = Math.round(response.data.current.temp);

	let humidityElement = selectElement("#humidity");
	humidityElement.innerHTML = `Humidity: ${response.data.current.humidity}%`;

	let windElement = selectElement("#wind");
	windElement.innerHTML = `Wind: ${Math.round(
		response.data.current.wind_speed * 3.6
	)} km/hr`;

	let iconImage = selectElement("#icon-description");
	iconImage.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
	);
	iconImage.setAttribute("alt", response.data.current.weather[0].description);

	displayForecast(response);
}

function displayForecast(response) {
	console.log(response.data);
	let day1 = selectElement("#day1 #day");
	day1.innerHTML = displayDay(response.data.daily[0].dt);
	let iconImage1 = selectElement("#day1 #icon-description");
	iconImage1.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
	);
	iconImage1.setAttribute("alt", response.data.daily[0].weather[0].description);
	
	let temperatureMaxElement1 = selectElement("#day1 #temperature-max");
	temperatureMaxElement1.innerHTML = `${Math.round(response.data.daily[0].temp.max)}°C`;
	
	let temperatureMinElement1 = selectElement("#day1 #temperature-min");
	temperatureMinElement1.innerHTML =  `${Math.round(response.data.daily[0].temp.min)}°C`;

	let day2 = selectElement("#day2 #day");
	day2.innerHTML = displayDay(response.data.daily[1].dt);
	let iconImage2 = selectElement("#day2 #icon-description");
	iconImage2.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
	);
	iconImage2.setAttribute("alt", response.data.daily[1].weather[0].description);
	let temperatureMaxElement2 = selectElement("#day2 #temperature-max");
	temperatureMaxElement2.innerHTML = `${Math.round(response.data.daily[1].temp.max)}°C`;
	let temperatureMinElement2 = selectElement("#day2 #temperature-min");
	temperatureMinElement2.innerHTML = `${Math.round(
		response.data.daily[1].temp.min
	)}°C`;

	let day3 = selectElement("#day3 #day");
	day3.innerHTML = displayDay(response.data.daily[2].dt);
	let iconImage3 = selectElement("#day3 #icon-description");
	iconImage3.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
	);
	iconImage3.setAttribute("alt", response.data.daily[2].weather[0].description);
	let temperatureMaxElement3 = selectElement("#day3 #temperature-max");
	temperatureMaxElement3.innerHTML = `${Math.round(response.data.daily[2].temp.max)}°C`;
	let temperatureMinElement3 = selectElement("#day3 #temperature-min");
	temperatureMinElement3.innerHTML = `${Math.round(
		response.data.daily[2].temp.min
	)}°C`;

	let day4 = selectElement("#day4 #day");
	day4.innerHTML = displayDay(response.data.daily[3].dt);
	let iconImage4 = selectElement("#day4 #icon-description");
	iconImage4.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
	);
	iconImage4.setAttribute("alt", response.data.daily[3].weather[0].description);
	let temperatureMaxElement4 = selectElement("#day4 #temperature-max");
	temperatureMaxElement4.innerHTML = `${Math.round(response.data.daily[3].temp.max)}°C`;
	let temperatureMinElement4 = selectElement("#day4 #temperature-min");
	temperatureMinElement4.innerHTML = `${Math.round(
		response.data.daily[3].temp.min
	)}°C`;

	let day5 = selectElement("#day5 #day");
	day5.innerHTML = displayDay(response.data.daily[4].dt);
	let iconImage5 = selectElement("#day5 #icon-description");
	iconImage5.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
	);
	iconImage5.setAttribute("alt", response.data.daily[4].weather[0].description);
	let temperatureMaxElement5 = selectElement("#day5 #temperature-max");
	temperatureMaxElement5.innerHTML = `${Math.round(response.data.daily[4].temp.max)}°C`;
	let temperatureMinElement5 = selectElement("#day5 #temperature-min");
	temperatureMinElement5.innerHTML = `${Math.round(
		response.data.daily[4].temp.min
	)}°C`;

	let day6 = selectElement("#day6 #day");
	day6.innerHTML = displayDay(response.data.daily[5].dt);
	let iconImage6 = selectElement("#day6 #icon-description");
	iconImage6.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
	);
	iconImage6.setAttribute("alt", response.data.daily[5].weather[0].description);
		let temperatureMaxElement6 = selectElement("#day6 #temperature-max");
	temperatureMaxElement6.innerHTML = `${Math.round(response.data.daily[5].temp.max)}°C`;
	let temperatureMinElement6 = selectElement("#day6 #temperature-min");
	temperatureMinElement6.innerHTML = `${Math.round(
		response.data.daily[5].temp.min
	)}°C`;
}

function getCoords(response) {
	let lat = response.data.coord.lat;
	let lon = response.data.coord.lon;
	let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(displayCurrentWeather);
}

function searchInput(event) {
	event.preventDefault();
	let searchElement = selectElement("#search-input");
	let city = searchElement.value;
	let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(getCoords);
}

let searchButtonElement = selectElement("#search-button");
searchButtonElement.addEventListener("click", searchInput);


