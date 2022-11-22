import forecastRequest from './api/forecastRequest'
import weatherRequest from './api/WeatherRequest'

export default function updateTemp(city) {
  weatherRequest(city)
  forecastRequest(city)
}
