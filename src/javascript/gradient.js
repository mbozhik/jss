const randomBtn = document.getElementById('RANDOM_GENERATE_BTN')
const fancyBtn = document.getElementById('FANCY_GENERATE_BTN')
const changeble = document.getElementById('CHANGEBLE_GRADIENT')
const innerGradient = document.getElementById('INNER_GRADIENT')

//  Random button
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
  innerGradient.innerHTML = `background: ${newGradient};`
}
randomBtn.addEventListener('click', onRandomBtn)

//  Fancy button
let fancyCounter = 0

function getFancyGradient() {
  const gradients = ['linear-gradient(90deg, #A020DF 0%, #D721BF 0.01%, #0469E2 100%)', 'linear-gradient(90deg, #6A6EFF 0%, #F6AEFE 100%)', 'linear-gradient(90deg, #FF950C 0%, #FEF861 100%)', 'linear-gradient(90deg, #02EF2D 0%, #01F032 0.01%, #E3E518 100%)', 'linear-gradient(90deg, #505ADD 0%, #804FD0 30.64%, #BC40BF 65%, #F4A033 100%)', 'linear-gradient(90deg, #EF1478 0%, #E61479 0.01%, #8321EA 100%)', 'linear-gradient(90deg, #ED7373 0%, #EE0E86 100%)', 'linear-gradient(90deg, #15FAFE 0%, #31BAFE 30.64%, #665AFD 65%, #9D09FF 100%)', 'linear-gradient(90deg, #D54AFF 0%, #7103EF 100%)', 'linear-gradient(90deg, #15B5E9 0%, #10F75D 100%)', 'linear-gradient(90deg, #F7C837 0%, #F14A75 100%)']
  const currentIndex = fancyCounter
  fancyCounter = (fancyCounter + 1) % gradients.length
  return gradients[currentIndex]
}

function onFancyBtn() {
  let newGradient = getFancyGradient()
  const newClass = `fancyGradient${Date.now()}`
  const style = `.${newClass} { background: ${newGradient}; }`
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`)
  changeble.className = newClass
  changeble.classList.add('GRADIENT_TEXT')
  innerGradient.innerHTML = `background: ${newGradient};`
}
fancyBtn.addEventListener('click', onFancyBtn)
