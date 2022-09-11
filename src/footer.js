export default function Footer() {
  const container = document.createElement('div')
  const content = document.createElement('div')
  const h2 = document.createElement('h2')
  const link = document.createElement('a')
  const logo = document.createElement('i')

  container.classList.add('footerContainer')
  content.classList.add('footerContent')
  h2.textContent = 'Copyright © 2022 David San'
  link.setAttribute('href', 'https://github.com/davidsan13/weather')
  logo.classList.add('fab', 'fa-github')

  link.appendChild(logo)
  content.appendChild(h2)
  content.appendChild(link)
  container.appendChild(content)

  return container
}
