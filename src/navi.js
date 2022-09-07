import Search from './search'

function unitBtn() {
  const container = document.createElement('div')
  const cBtn = document.createElement('button')
  const fBtn = document.createElement('button')

  cBtn.classList.add('celsius')
  fBtn.classList.add('fahBtn')

  cBtn.textContent = '°C'
  fBtn.textContent = '°F'

  container.appendChild(cBtn)
  container.appendChild(fBtn)

  return container
}

export default function Navi() {
  const container = document.createElement('div')
  const logo = document.createElement('h1')

  logo.textContent = 'WEATHER'

  container.classList.add('navi')

  container.appendChild(logo)
  container.appendChild(Search())
  container.appendChild(unitBtn())
  return container
}
