
export default function Search() {
  const form = document.createElement('form')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const submit= document.createElement('button')

  label.htmlFor = 'search'
  label.setAttribute('id', 'search')
  input.setAttribute('type', 'text')
  input.setAttribute('name', 'search')
  input.setAttribute('id', 'searchIn')
  input.setAttribute('placeholder', 'Search City')
  input.htmlFor = 'search'
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'searchBtn')
  submit.textContent = 'Search'

  form.appendChild(label)
  form.appendChild(input)
  form.appendChild(submit)
  return form
}
