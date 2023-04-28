export function toggleTheme() {
  const toggleBtn = document.getElementById('THEME_BTN')
  const html = document.querySelector('html')

  const toggleTheme = () => {
    const currentTheme = html.dataset.theme
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    html.dataset.theme = nextTheme

    const sunIcon = document.getElementById('sun-icon')
    const moonIcon = document.getElementById('moon-icon')

    if (html.dataset.theme === 'dark') {
      sunIcon.style.display = 'none'
      moonIcon.style.display = 'block'
    } else if (html.dataset.theme === 'light') {
      sunIcon.style.display = 'block'
      moonIcon.style.display = 'none'
    }
  }

  toggleTheme()
  toggleBtn.addEventListener('click', toggleTheme)
}
