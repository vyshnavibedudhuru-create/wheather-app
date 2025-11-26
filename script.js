async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `🌥 Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🍃 Wind: ${data.wind.speed} m/s`;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("weatherResult").classList.remove("hidden");
}
