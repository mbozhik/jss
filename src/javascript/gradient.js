const randomBtn = document.getElementById('RANDOM_GENERATE_BTN')
const fancyBtn = document.getElementById('FANCY_GENERATE_BTN')
const changeble = document.getElementById('CHANGEBLE_GRADIENT')
const textGradient = document.getElementById('INNER_GRADIENT')

function getRandomColor() {
  const symbols = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)]
  }
  return color
}

function onRandomBtn() {
  const color1 = getRandomColor()
  const color2 = getRandomColor()
  const newGradient = `linear-gradient(to right, ${color1}, ${color2})`
  const newClass = `randomGradient${Date.now()}`
  const style = `.${newClass} { background: ${newGradient}; }`
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`)
  changeble.className = newClass
  changeble.classList.add('GRADIENT_TEXT')
  textGradient.innerHTML = `background: ${newGradient};`
}

randomBtn.addEventListener('click', onRandomBtn)
