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
  // container.appendChild(windDeg)
  // container.appendChild(windGust)

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
  const mainContainer = document.createElement('div')
  const right = document.createElement('div')
  const left = document.createElement('div')
  const locationCon = document.createElement('div')
  const tempCon = document.createElement('div')
  const statsCon = document.createElement('div')
  const headerCity = document.createElement('h1')
  const temp = document.createElement('h2')
  const weather = document.createElement('h2') // weather.main
  const weatherIcon = document.createElement('img')
  const lat = document.createElement('h2')
  const lon = document.createElement('h2')
  const highTemp = document.createElement('h2')
  
  const humidity = document.createElement('h2')
  const pressure = document.createElement('h2')
  const sunrise = document.createElement('h2')
  const sunset = document.createElement('h2')
  const visibility = document.createElement('h2')
 // Card: weather icon, city name, lat and long
  mainContainer.classList.add('main-sec-1')
  left.classList.add('ms1-left')
  right.classList.add('ms1-right')
  locationCon.classList.add('locationCon')
  tempCon.classList.add('tempCon')
  statsCon.classList.add('statsCon')
  headerCity.classList.add('cityName')
  temp.classList.add('temp')
  weather.classList.add('weather')
  weatherIcon.classList.add('weatherIcon')
  lat.classList.add('lat')
  lon.classList.add('lon')
  highTemp.classList.add('highTemp')

  humidity.classList.add('humidity')
  pressure.classList.add('pressure')
  sunrise.classList.add('sunrise')
  sunset.classList.add('sunset')
  visibility.classList.add('visibility')

  lat.textContent = 'Lat: '
  lon.textContent = 'Lon: '
  pressure.textContent = 'Pressure: '
  sunrise.textContent = 'Sunrise: '
  sunset.textContent = 'Sunset: '
  visibility.textContent = 'Visibility: '
  humidity.textContent = 'Humidity: '
  highTemp.textContent = 'High/Low: '
  locationCon.appendChild(headerCity)
  locationCon.appendChild(lat)
  locationCon.appendChild(lon)
  left.appendChild(weatherIcon)
  left.appendChild(locationCon)

  tempCon.appendChild(temp)
  tempCon.appendChild(weather)
  tempCon.appendChild(sunrise)
  tempCon.appendChild(sunset)

  statsCon.appendChild(highTemp)
  statsCon.appendChild(humidity)
  statsCon.appendChild(pressure)
  statsCon.appendChild(visibility)

  right.appendChild(tempCon)
  // right.appendChild(weather)
  right.appendChild(statsCon)
  // right.appendChild(rainContainer())
  mainContainer.appendChild(left)
  mainContainer.appendChild(right)

  return mainContainer
}

function forecastContainer() {
  const container = document.createElement('div')
  const header = document.createElement('h1')
  const forecastContainer = document.createElement('div')
  
  header.textContent = 'Daily Forecast'
  container.classList.add('main-sec-2')
  forecastContainer.classList.add('forecastContainer')
  container.appendChild(header)
  for (let i = 0; i < 6; i++) {
    const forecastCard = document.createElement('div')
    const day = document.createElement('h1')
    const temp = document.createElement('h1')
    const date = document.createElement('h2')
    const icon = document.createElement('img')

    forecastCard.classList.add(`forecastCard-${i}`)
    day.classList.add(`dayTitle-${i}`)
    temp.classList.add(`temp-${i}`)
    date.classList.add(`date-${i}`)

    icon.classList.add(`icon${i}`)

    forecastCard.appendChild(day)
    forecastCard.appendChild(date)
    forecastCard.appendChild(temp)
    forecastCard.appendChild(icon)
    forecastContainer.appendChild(forecastCard)
  }
  container.appendChild(forecastContainer)
  return container
}



export default function Main() {
  const root = document.createElement('div')
  const main = document.createElement('main')

  root.classList.add('root')
  main.classList.add('main')

  main.appendChild(todayContainer())
  main.appendChild(forecastContainer())
 
  root.appendChild(Navi())
  root.appendChild(main)
  root.appendChild(Footer())

  return root
}