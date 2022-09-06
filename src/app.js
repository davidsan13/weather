import _ from 'lodash'
import './style.css'
import Search from './search'
import query from './api'

function App() {
  document.body.appendChild(Search())
  query()
}

App()
