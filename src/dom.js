import Search from './search'

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

function windContainer() {
  const container = document.createElement('div')
  const windSpeed = document.createElement('h1')
  const windDeg = document.createElement('h1')
  const windGust = document.createElement('h1')

  container.classList.add('windContainer')
  windSpeed.classList.add('windSpeed')
  windDeg.classList.add('windDeg')
  windGust.classList.add('windGust')

  container.appendChild(windSpeed)
  container.appendChild(windDeg)
  container.appendChild(windGust)

  return container
}

function todayContainer() {
  const container = document.createElement('div')
  const headerCity = document.createElement('h1')
  const temp = document.createElement('h2')
  const weather = document.createElement('h2') // weather.main
  const weatherIcon = document.createElement('img')
  // const btnUnit = document.createElement('button')

  // const iconCode = city.weather[0].icon
  // const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`

  container.classList.add('weatherContainer')
  headerCity.classList.add('cityName')
  temp.classList.add('temp')
  weather.classList.add('weather')
  weatherIcon.classList.add('weatherIcon')

  // headerCity.textContent = city.name
  // temp.textContent = city.main.temp
  // weather.textContent = city.weather[0].main
  // weatherIcon.setAttribute('src', iconURL)
  container.appendChild(unitBtn())
  container.appendChild(headerCity)
  container.appendChild(temp)
  container.appendChild(weather)
  container.appendChild(weatherIcon)
  
  return container
}

export default function Main() {
  const main = document.createElement('div')

  main.classList.add('main')
  main.appendChild(Search())
  main.appendChild(todayContainer())
  return main
}