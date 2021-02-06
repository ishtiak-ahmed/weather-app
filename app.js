const apiKey = '976444ef5c118b83e84bcab4a3068f08';

let cityName = 'Dhaka';

function searchWeather() {
    cityName = document.getElementById('cityName').value;
    if (!(cityName.length)) {
        cityName = 'Dhaka'
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getWeather(data))
        .catch(err => console.log(err))
}

// Get and Proccess Weather Data
function getWeather(info) {
    const temp = (info.main.temp - 273.15).toFixed(2);
    const weatherDescription = info.weather[0].main;
    updateUI(cityName, temp, weatherDescription)
}

//  Update UI
function updateUI(city, temp, type) {
    document.getElementById('city').innerText = city;
    document.getElementById('temp').innerText = temp;
    document.querySelector('.lead').innerText = type;
}
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        event.preventDefault();
        searchWeather();
    }
})