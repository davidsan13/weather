import _ from 'lodash'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css'
import Search from './search'
import query from './api'
import Main from './dom'
function btnListener() {
  const btns = document.querySelectorAll('.tempBtn')
  
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const active = document.querySelector('.active')
      if (active != null) {
        active.classList.remove('active')
      }
      btn.classList.toggle('active')
    })
  })
}

function App() {
  document.body.appendChild(Main())
  query()
  btnListener()
}

App()
