import weatherRequest from './api/WeatherRequest'
import forecastRequest from './api/forecastRequest'
import { GeoCoding } from './api'
export default function init() {
  const city = GeoCoding('los angeles')
  city.then((response) => {
    weatherRequest(response)
    forecastRequest(response)
  })
}
