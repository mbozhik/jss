const elements = document.querySelector('.elements')
const primeElements = document.getElementsByClassName('prime-elements')
const wrapper = document.createElement('div')
wrapper.classList.add('container')

const form = document.createElement('form')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const inputValue = Object.fromEntries(new FormData(e.target))
  const response = await fetch(`https://api.github.com/users/${inputValue.name}`)

  if (response.ok) {
    const data = await response.json()
    wrapper.appendChild(createProfileElement(data))
    elements.appendChild(wrapper)
    input.value = ''
    console.log(data)

    for (let i = 0; i < primeElements.length; i++) {
      primeElements[i].style.visibility = 'hidden'
      primeElements[i].style.transition = 'all 0s ease'
    }
  } else {
    alert('User not found :(')
  }
})

const input = document.createElement('input')
input.placeholder = 'Enter username'
input.setAttribute('name', 'name')
input.classList.add('prime-elements')

const button = document.createElement('button')
button.setAttribute('type', 'submit')
button.innerHTML = 'Search'
button.classList.add('prime-elements')

form.appendChild(input)
form.appendChild(button)
elements.appendChild(form)

function createProfileElement(profileData) {
  const element = document.createElement('div')
  element.classList.add('profile')
  element.innerHTML = `
    <img class="search-image" src=${profileData.avatar_url}></img>
    <a target="_blank" href="${profileData.html_url}"><h2>${profileData.login}</h2></a>
    <p><span>Name: </span>${profileData.name}</p>
    <p><span>Location: </span>${profileData.location}</p>
    <p><span>About: </span>${profileData.bio}</p>
    <p><span>Created: </span>${profileData.created_at}</p>
    <p><span>Updated: </span>${profileData.updated_at}</p>
    <p><span>Repositories: </span>${profileData.public_repos}</p>


  `
  element.appendChild(createDeleteBtnEl())
  return element
}

function createDeleteBtnEl() {
  const element = document.createElement('button')
  element.classList.add('solid')
  element.classList.add('btn')
  element.innerText = 'Close'
  element.addEventListener('click', (e) => {
    wrapper.innerHTML = ''

    for (let i = 0; i < primeElements.length; i++) {
      primeElements[i].style.visibility = 'visible'
      primeElements[i].style.transition = 'all 0s ease'
    }
  })

  return element
}
