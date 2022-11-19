import todayContainer from "../todayView"

export default function weatherRequest(city) {
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
    })
}
