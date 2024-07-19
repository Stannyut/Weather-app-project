document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "3c3e6b496ea035d8d8fdfb0705822f2c";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "images/Clouds.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "images/Clear.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "images/Rain.png";
            } else if (data.weather[0].main === "Mist") {
                weatherIcon.src = "images/Mist.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "images/Drizzle.png";
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            // You can add error handling code here (e.g., display an error message to the user).
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});