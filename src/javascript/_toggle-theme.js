export function toggleTheme() {
  const toggleBtn = document.getElementById('THEME_BTN')
  const html = document.querySelector('html')
  const themes = ['light', 'dark']

  toggleBtn.addEventListener('click', () => {
    const currentTheme = html.dataset.theme
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    html.dataset.theme = nextTheme
  })
}
