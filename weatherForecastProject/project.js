// const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=708b1363cd1891a2e78c3b15f8b9f176&units=metric';

// const apiKey = '708b1363cd1891a2e78c3b15f8b9f176';

const locationInput = document.getElementById('cityInput');
const searchButton = document.getElementById('findLocation');


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location === "") {
        console.log('Please enter a city name.');
    } else {
        loadWeather(location);
    }
});

const loadWeather = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=708b1363cd1891a2e78c3b15f8b9f176&units=metric`)

        .then(response => {
            if (!response.ok) {
                throw new Error("Error: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const weatherCard = document.getElementById('weatherCard');

            const cityName = `<h5 class="card-title">${data.name}</h5>`;
            const cityTemp = `<p class="card-text"> Temperature ${Math.round(data.main.temp)}°C</p>`;
            const wind = `<p class="card-text"> Wind ${data.wind.speed} m/s</p>`;
            const description = `<p class="card-text">${data.weather[0].description}</p>`;
            const icon = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">`;
            const cardHtml = `
                <div class="weatherCard">
                    ${cityName}
                    <hr>
                    ${cityTemp}
                    ${wind}
                    ${description}
                    ${icon}
                </div>`;
            weatherCard.innerHTML = cardHtml;

            locationInput.value = "";
        })
        .catch(error => {
            const weatherContainer = document.getElementById('weatherContainer');
            weatherContainer.innerHTML = "Error: City was not found. Try again";
        });

};






