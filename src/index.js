import '@picocss/pico'

import './pico.css'
import './index.css'

import {toggleTheme} from './javascript/_toggle-theme'

window.addEventListener('DOMContentLoaded', function () {
  //* switch website theme functionality
  toggleTheme()
})
