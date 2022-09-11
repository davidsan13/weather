import _ from 'lodash'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css'
import Search from './search'
import query from './api'
import Main from './dom'
function App() {
  document.body.appendChild(Main())
  query()
}

App()
