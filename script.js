const apiKey = "08f65a2be1a424dcb8dde07110650248";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    document.getElementById("weatherResult").innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("Fetching URL:", apiUrl); // Debugging line

  fetch(apiUrl) // ✅ FIXED: Use the correct variable
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherData = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherData;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
    });
}
