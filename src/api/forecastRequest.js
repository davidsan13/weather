function forecastContainer(item, index) {
  const weeks = document.querySelector(`.dayTitle-${index}`)
  const date = document.querySelector(`.date-${index}`)
  const icon = document.querySelector(`.icon${index}`)
  const temp = document.querySelector(`.temp-${index}`)
  console.log(temp)
  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const d = new Date(item.dt_txt)
  const week = weekday[d.getDay()]
  const day = d.getDate()
  const month = months[d.getMonth()]

  const iconCode = item.weather[0].icon
  const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`

  weeks.textContent = `${week}`
  date.textContent = `${day} ${month}`
  temp.textContent = `${Math.trunc(item.main.temp)}°`

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

export default async function forecastRequest(city) {
  const key = '326cf3241277f33a6ab4623cf793e945'
  const activeUnit = document.querySelector('.active').dataset.key
  let forecastRequestURL
  if (activeUnit === 'f') {
    forecastRequestURL = `https://api.openweathermap.org/data/2.5/forecast/?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${key}`
  } else {
    forecastRequestURL = `https://api.openweathermap.org/data/2.5/forecast/?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${key}`
  }

  const response = await fetch(forecastRequestURL)
  const data = await response.json()
  const forecastList = data.list
  const unique = forecastUnique(forecastList)
  unique.forEach((item, index) => forecastContainer(item, index))
}
