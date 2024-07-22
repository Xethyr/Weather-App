const apiKey = '63a1dda9b40942e590a181300242705';
const weatherApp = document.querySelector('.weather-app');
const conditionsDiv = document.querySelector('.conditions');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const icon = document.querySelector('.icon');
const conditionText = document.querySelector('.condition-text');

const getWeather = async () => {

    try {
        const searchInput = document.getElementById('search-input');
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput.value}`);

        if (!response.ok) {
            throw new Error("Could not fetch weather");
        }

        const data = await response.json();
        console.log(data);

        temperature.innerHTML = `${data.current.temp_f}°F`;
        conditionText.innerHTML = `${data.current.condition.text}`
        city.innerHTML = data.location.name;

        conditionsDiv.innerHTML = `
        <p>${data.current.humidity}% Humidity</p>
        <p>${data.current.wind_mph} mph Wind Speed</p>
        `

        icon.innerHTML = `<img id="icon" src="${data.current.condition.icon}">`
    }
    catch (error) {
        console.error(error);
        alert("Invalid Search!");
    }
}