import Navi from './navi'
import Footer from './footer'

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

function rainContainer() {
  const container = document.createElement('div')
  const rain1h = document.createElement('h1')
  const rain3h = document.createElement('h1')

  container.classList.add('rainContainer')
  rain1h.classList.add('rain1h')
  rain3h.classList.add('rain3h')

  container.appendChild(rain1h)
  container.appendChild(rain3h)

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

  container.appendChild(headerCity)
  container.appendChild(temp)
  container.appendChild(weather)
  container.appendChild(weatherIcon)

  return container
}



export default function Main() {
  const root = document.createElement('div')
  const main = document.createElement('main')

  root.classList.add('root')
  main.classList.add('main')
  

  root.appendChild(Navi())
  main.appendChild(todayContainer())
  main.appendChild(windContainer())
  main.appendChild(rainContainer())
  root.appendChild(main)
  root.appendChild(Footer())
  
  
  return root
}