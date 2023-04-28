import '@picocss/pico'

import './pico.css'
import './index.css'

import {toggleTheme} from './javascript/_toggle-theme'
import {initModal} from './javascript/_modal'

setTimeout(() => {
  const loader = document.getElementById('LOADER')
  loader.style.display = 'none'
}, 300)

window.addEventListener('DOMContentLoaded', function () {
  //* switch website theme functionality
  toggleTheme()
  initModal()
})
