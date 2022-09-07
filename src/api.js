// const key = '326cf3241277f33a6ab4623cf793e945';
// const requestURL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=' + key;

// const geocodingRequestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=Los Angeles&limit=5&appid=' + key;
// fetch(geocodingRequestURL)
//   .then(function (response) {
//     console.log(response.json());
//   });

async function GeoCoding(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const geocodingRequestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
  const response = await fetch(geocodingRequestURL)
  const location = await response.json()
  const locationInfo = location[0]
  // weatherRequest(locationInfo)
  return locationInfo
  
}

function weatherRequest(city) {

  const key = '326cf3241277f33a6ab4623cf793e945'
  const weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
  fetch(weatherRequestURL)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      todayContainer(response)
      windData(response)
      rainData(response)
    })
}

function unitBtn() {
  const container = document.createElement('div')
  const cBtn = document.createElement('button')
  const fBtn = document.createElement('button')

  cBtn.classList.add('celsius')
  fBtn.classList.add('fahBtn')

  cBtn.textContent = '°C'
  fBtn.textContent = '°F'

  container.appendChild(cBtn)
  container.appendChild(fBtn)

  return container
}

function todayContainer(city) {
  const container = document.querySelector('.weatherContainer')
  const headerCity = document.querySelector('.cityName')
  const temp = document.querySelector('.temp')
  const weather = document.querySelector('.weather') // weather.main
  const weatherIcon = document.querySelector('.weatherIcon')
  // const btnUnit = document.createElement('button')
  console.log(container)
  const iconCode = city.weather[0].icon
  const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`

  headerCity.textContent = city.name
  temp.textContent = city.main.temp
  weather.textContent = city.weather[0].main
  weatherIcon.setAttribute('src', iconURL)
}

function windData(city) {
  const windSpeed = document.querySelector('.windSpeed')
  const windDeg = document.querySelector('.windDeg')
  const windGust = document.querySelector('.windGust')

  windSpeed.textContent = city.wind.speed
  windDeg.textContent = city.wind.deg
  windGust.textContent = city.wind.gust
}

function rainData(city) {
  const rain1h = document.querySelector('.rain1h')
  const rain3h = document.querySelector('rain3h')
  console.log(city.rain)
  rain1h.textContent = city.rain['1h'] + 'mm'
  rain3h.textContent = city.rain['3h']
}


export default function query() {
  const searchBtn = document.getElementById('searchBtn')
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.getElementById('searchIn')
    const city = GeoCoding(input.value)
    city.then((response) => weatherRequest(response))
    // weatherRequest(city)
  })
}
