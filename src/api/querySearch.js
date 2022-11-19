import weatherRequest from './WeatherRequest'
import forecastRequest from './forecastRequest'

export default function query() {
  const searchBtn = document.getElementById('searchBtn')
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.getElementById('searchIn')
    const city = GeoCoding(input.value)
    city.then((response) => {
      weatherRequest(response)
      forecastRequest(response)
    })
  })
}
