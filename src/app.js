import _ from 'lodash'
import './style.css'
import Search from './search'
import query from './api'
import Main from './dom'
function App() {
  document.body.appendChild(Main())
  query()
}

App()
