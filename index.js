const weatherForm = document.getElementById('weatherForm')

weatherForm.addEventListener('submit', event => {
    event.preventDefault()

    const city = document.getElementById('cityInput').value
    const apiKey = 'ea0fe5ff008fba004e648e45468db05c'
    const weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(weatherLink)
        .then(res => res.json())
        .then(data => displayResults(data))
    })


function displayResults(data) {
    const Results = document.getElementById('Result')

    const description = document.createElement('p')
    const temperature = document.createElement('p')
    const cityName = document.createElement('p')

    cityName.textContent = data.name
    description.textContent = "Sky :" + data.weather[0].description
    temperature.textContent = ("Temperature :" + Math.round(data.main.temp - 273) + "°C")

    Results.innerHTML = ''
    Results.appendChild(cityName)
    Results.appendChild(temperature)
    Results.appendChild(description)
}