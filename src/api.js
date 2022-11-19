import forecastRequest from './api/forecastRequest'

async function GeoCoding(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const geocodingRequestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
  const response = await fetch(geocodingRequestURL)
  const location = await response.json()
  const locationInfo = location[0]
  
  return locationInfo
}

function weatherRequest(city) {
  const activeBtn = document.querySelector('.active').dataset.key
  const key = '326cf3241277f33a6ab4623cf793e945'
  let weatherRequestURL = ''
  if (activeBtn === 'f') {
    weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${key}`
  } else {
    weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
  }

  fetch(weatherRequestURL)
    .then((response) => response.json())
    .then((response) => {
      todayContainer(response)
    })
}




function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}





function updateTemp(city) {
  let temp = document.querySelector('.temp')
  let high = document.querySelector('.highTemp')
  const activeBtn = document.querySelector('.active').dataset.key
  const key = '326cf3241277f33a6ab4623cf793e945'
  let weatherRequestURL
  let forecastRequestURL
  if (activeBtn === 'f') {
    weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${key}`
  } else {
    weatherRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
  }

  fetch(weatherRequestURL)
    .then((response) => response.json())
    .then((response) => {
      temp.textContent = `${Math.trunc(response.main.temp)}°`
      high.textContent = `High/Low: ${response.main.temp_max}°/${response.main.temp_min}°`
    })
    forecastRequest(city)
}



export { GeoCoding, updateTemp }
