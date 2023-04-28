const form = document.getElementById('GITHUB_API_SEARCH')
const button = document.getElementById('githubApiButton')
const dialog = document.getElementById('MODAL')
const nameElem = document.getElementById('name')
const bioElem = document.getElementById('bio')
const locationElem = document.getElementById('location')
const reposElem = document.getElementById('public-repos')
const followersElem = document.getElementById('followers')
const followingElem = document.getElementById('following')
const avatarElem = document.getElementById('avatar')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const nickname = document.getElementById('nickname').value
  const url = `https://api.github.com/users/${nickname}`
  const response = await fetch(url)
  if (response.ok) {
    const {name = '', bio = '', location = '', public_repos = '', followers = '', following = '', avatar_url} = await response.json()
    nameElem.textContent = `Name: ${name}`
    bioElem.textContent = `Bio: ${bio}`
    locationElem.textContent = `Location: ${location}`
    reposElem.textContent = `Public Repositories: ${public_repos}`
    followersElem.textContent = `Followers: ${followers}`
    followingElem.textContent = `Following: ${following}`
    avatarElem.src = avatar_url
    dialog.showModal()
  } else {
    alert('User not found!')
  }
})

dialog.addEventListener('click', (event) => {
  if (event.target.nodeName === 'A') {
    dialog.close()
  }
})
