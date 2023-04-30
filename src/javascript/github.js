import {snackBar} from '../javascript/_snack-bar'

const form = document.getElementById('GITHUB_API_SEARCH')
const button = document.getElementById('GITHUB_API_BUTTON')
const dialog = document.getElementById('MODAL')
const nameElem = document.getElementById('name')
const bioElem = document.getElementById('bio')
const companyElem = document.getElementById('company')
const locationElem = document.getElementById('location')
const reposElem = document.getElementById('public-repos')
const gistsElem = document.getElementById('public-gists')
const followersElem = document.getElementById('followers')
const followingElem = document.getElementById('following')
const avatarElem = document.getElementById('avatar')
const linkElem = document.getElementById('link')
const createdElem = document.getElementById('created')
const updatedElem = document.getElementById('updated')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const nickname = document.getElementById('nickname').value
  const url = `https://api.github.com/users/${nickname}`
  const response = await fetch(url)
  if (response.ok) {
    const {name = '', bio = '', location = '', public_repos = '', public_gists = '', followers = '', following = '', avatar_url, html_url = '', company = '', created_at = '', updated_at = ''} = await response.json()

    if (name === null) {
      nameElem.textContent = ''
    } else {
      nameElem.textContent = `Name: ${name}`
    }

    if (bio === null) {
      bioElem.textContent = ''
    } else {
      bioElem.textContent = `Bio: ${bio}`
    }

    if (company === null) {
      companyElem.textContent = ''
    } else {
      companyElem.textContent = `Company: ${company}`
    }

    if (location === null) {
      locationElem.textContent = ''
    } else {
      locationElem.textContent = `Location: ${location}`
    }

    if (public_repos === null) {
      reposElem.textContent = ''
    } else {
      reposElem.textContent = `Public Repositories: ${public_repos}`
    }

    if (public_gists === null) {
      gistsElem.textContent = ''
    } else {
      gistsElem.textContent = `Public gists: ${public_gists}`
    }

    if (followers === null) {
      followersElem.textContent = ''
    } else {
      followersElem.textContent = `Followers: ${followers}`
    }

    if (following === null) {
      followingElem.textContent = ''
    } else {
      followingElem.textContent = `Following: ${following}`
    }

    if (avatar_url === null) {
      avatarElem.src = ''
    } else {
      avatarElem.src = avatar_url
    }

    if (html_url === null) {
      linkElem.textContent = ''
      linkElem.href = ''
    } else {
      linkElem.textContent = `${html_url}`
      linkElem.href = html_url
    }

    if (created_at === null) {
      createdElem.textContent = ''
    } else {
      const createdDate = new Date(created_at)
      const createdDateString = createdDate.toLocaleString()
      createdElem.textContent = `Created at: ${createdDateString}`
    }

    if (updated_at === null) {
      updatedElem.textContent = ''
    } else {
      const updatedDate = new Date(updated_at)
      const updatedDateString = updatedDate.toLocaleString()
      updatedElem.textContent = `Updated at: ${updatedDateString}`
    }

    setTimeout(() => dialog.showModal(), 100)
  } else {
    snackBar('Error! User not found', 3000)
  }
})

dialog.addEventListener('click', (event) => {
  if (event.target.nodeName === 'A') {
    dialog.close()
  }
})

window.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close()
  }
})
