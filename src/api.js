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
      // windData(response)
      // rainData(response)
    })
}

async function forecastRequest(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const weatherRequestURL = `https://api.openweathermap.org/data/2.5/forecast/?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
  const response = await fetch(weatherRequestURL)
  const data = await response.json()
  const forecastList = data.list
  console.log(forecastList)
  const unique = forecastUnique(forecastList)
  console.log(unique)
  unique.forEach((item, index) => forecastContainer(item, index))
}

async function mapRequest(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const mapRequestURL = `https://tile.openweathermap.org/maps/2.0/we3ather/temp_new/4/2/3.png?appid=${key}`
  const response = await fetch(mapRequestURL)
  const data = await response
  console.log(data)
}

function forecastContainer(item, index) {
  const forecastCard = document.querySelector(`.forecastCard-${index}`)
  const date = document.querySelector(`.dayTitle${index}`)
  const high = document.querySelector(`.high-${index}`)
  const low = document.querySelector(`.low${index}`)
  const icon = document.querySelector(`.icon${index}`)

  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  const d = new Date(item.dt_txt)
  const weeks = weekday[d.getDay()]
  const day = d.getDate()

  const iconCode = item.weather[0].icon
  const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`

  date.textContent = `${weeks} ${day}`
  high.textContent = `${Math.trunc(item.main.temp_max)}°`
  low.textContent = `${Math.trunc(item.main.temp_min)}°`
  icon.setAttribute('src', iconURL)
}
function forecastUnique(array) {
  let current = array[0].dt_txt.slice(0, 10)
  const unique = [array[0]]

  array.forEach((item) => {
    if (item.dt_txt.slice(0, 10) !== current) {
      unique.push(item)
      current = item.dt_txt.slice(0, 10)
    }
  })
  return unique
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

  const headerCity = document.querySelector('.cityName')
  const temp = document.querySelector('.temp')
  const weather = document.querySelector('.weather') // weather.main
  const weatherIcon = document.querySelector('.weatherIcon')
  const lat = document.querySelector('.lat')
  const lon = document.querySelector('.lon')
  const sunrise = document.querySelector('.sunrise')
  const sunset = document.querySelector('.sunset')
  const highTemp = document.querySelector('.highTemp')

  const humidity = document.querySelector('.humidity')
  const pressure = document.querySelector('.pressure')
  const visibility = document.querySelector('.visibility')

  const iconCode = city.weather[0].icon
  const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`

  headerCity.textContent = city.name
  temp.textContent = `${Math.trunc(city.main.temp)}°`
  weather.textContent = city.weather[0].main
  weatherIcon.setAttribute('src', iconURL)
  lat.textContent += city.coord.lat
  lon.textContent += city.coord.lon
  humidity.textContent += `${city.main.humidity}%`
  highTemp.textContent += `${city.main.temp_max}°/${city.main.temp_min}°`

  pressure.textContent += `${city.main.pressure}hPa`
  sunrise.textContent += timeCon(city.sys.sunrise)
  sunset.textContent += timeCon(city.sys.sunset)
  visibility.textContent += city.visibility
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

function timeCon(unix) {
  const date = new Date(unix * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`

  return time
}

function windData(city) {
  const windSpeed = document.querySelector('.windSpeed')
  const windDeg = document.querySelector('.windDeg')
  const windGust = document.querySelector('.windGust')
  const { wind } = city
  for (const prop in wind) {
    console.log(`obj.${prop} = ${wind[prop]}`)
  }
  windSpeed.textContent = `Wind Speed: ${city.wind.speed}`
  windDeg.textContent = `Wind Degree: ${city.wind.deg}`
  windGust.textContent = `Wind Gust: ${city.wind.gust}`
}

function rainData(city) {
  const rain1h = document.querySelector('.rain1h')
  const rain3h = document.querySelector('rain3h')
  console.log(city.rain)
  rain1h.textContent = `${city.rain['1h']}mm`
  rain3h.textContent = city.rain['3h']
}

function init() {
  const city = GeoCoding('los angeles')
  city.then((response) => {
    weatherRequest(response)
    forecastRequest(response)
    mapRequest(response)
  })
}

function query() {
  const searchBtn = document.getElementById('searchBtn')
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.getElementById('searchIn')
    const city = GeoCoding(input.value)
    city.then((response) => {
      weatherRequest(response)
      forecastRequest(response)
    })

    // weatherRequest(city)
  })
}

export { init, query }
