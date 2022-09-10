import Search from './search'

function unitBtn() {
  const container = document.createElement('div')
  const cBtn = document.createElement('button')
  const fBtn = document.createElement('button')

  container.classList.add('btnCon');
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
  const logoCon = document.createElement('div')

  logoCon.classList.add('logoCon')
  logo.textContent = 'WEATHER'

  container.classList.add('navi')
  logoCon.appendChild(logo)
  container.appendChild(logoCon)
  container.appendChild(Search())
  container.appendChild(unitBtn())
  return container
}
