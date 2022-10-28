import _ from 'lodash'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css'
import Search from './search'
import  { init, query, weatherRequest, GeoCoding } from './api'
import Main from './dom'

function btnListener() {
  const btns = document.querySelectorAll('.tempBtn')

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const active = document.querySelector('.active')
      const cityName = document.querySelector('.cityName').textContent
      console.log(cityName)
      if (active != null) {
        active.classList.remove('active')
      }
      btn.classList.add('active')
      const city = GeoCoding(cityName)
      city.then((response) => {
        weatherRequest(response)
      })
    })
  })
}

function App() {
  document.body.appendChild(Main())
  init()
  query()
  btnListener()
}

App()
