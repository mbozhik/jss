import '@picocss/pico'
import './pico.css'
import './index.css'

import {toggleTheme} from './javascript/_toggle-theme'

// Loader hiding after 300ms
setTimeout(() => {
  const loader = document.getElementById('LOADER')
  loader.style.display = 'none'
}, 300)

function onDomContentLoaded() {
  toggleTheme()
}

window.addEventListener('DOMContentLoaded', onDomContentLoaded)
