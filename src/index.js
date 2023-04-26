import '@picocss/pico'

import './pico.css'
import './index.css'

import {toggleTheme} from './javascript/_toggle-theme'
import {initModal} from './javascript/_modal'

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const loader = document.getElementById('LOADER')
    loader.style.display = 'none'
  }, 1000)

  //* switch website theme functionality
  toggleTheme()
  initModal()
})
