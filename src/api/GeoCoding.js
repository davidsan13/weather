export default async function GeoCoding(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const geocodingRequestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
  const response = await fetch(geocodingRequestURL)
  const location = await response.json()
  const locationInfo = location[0]

  return locationInfo
}
