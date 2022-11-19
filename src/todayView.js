

function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

function timeCon(unix) {
  const date = new Date(unix * 1000)
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  if (hours >= 12) {
    hours -= 12
  }
  const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`

  return time
}

export default function todayContainer(city) {
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
  lat.textContent = `Lat: ${city.coord.lat.toFixed(2)} `
  lon.textContent = `Lon: ${city.coord.lon.toFixed(2)}`
  humidity.textContent = `Humidity: ${city.main.humidity}%`
  highTemp.textContent = `High/Low: ${city.main.temp_max}°/${city.main.temp_min}°`

  pressure.textContent = `Pressure ${city.main.pressure}hPa`
  sunrise.textContent = `Sunrise: ${timeCon(city.sys.sunrise)}AM`
  sunset.textContent = `Sunset: ${timeCon(city.sys.sunset)}PM`
  visibility.textContent = `Visibility: ${city.visibility}`
}
