const btn = document.getElementById('btn')
const fancy = document.getElementById('fancy')

//** changes all h1 text
// const h1 = document.querySelector('h1')
//** changes only span in h1 text
const h1 = document.getElementById('changeble')
const textGradient = document.querySelector('h2')

function getRandomGradient() {
  function randomGradient() {
    function getRandomColor() {
      let symbols = '0123456789ABCDEF'
      let color = '#'

      for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)]
      }
      return color
    }
    let color1 = getRandomColor()
    let color2 = getRandomColor()
    return `linear-gradient(to right, ${color1}, ${color2})`
  }

  btn.addEventListener('click', () => {
    let newGradient = randomGradient()
    let newClass = document.createElement('style')
    let className = 'randomGradient' + Date.now()
    newClass.innerHTML = `.${className} { background: ${newGradient}; }`
    document.head.appendChild(newClass)
    h1.className = className
    h1.classList.add('gradient-text')
    textGradient.innerHTML = `background: ${newGradient};`
  })
}
getRandomGradient()

function getFancyGradient() {
  let counter = 0
  function fancyGradient() {
    const gradients = [
      'linear-gradient(90deg, #A020DF 0%, #D721BF 0.01%, #0469E2 100%)',
      'linear-gradient(90deg, #6A6EFF 0%, #F6AEFE 100%)',
      'linear-gradient(90deg, #FF950C 0%, #FEF861 100%)',
      'linear-gradient(90deg, #02EF2D 0%, #01F032 0.01%, #E3E518 100%)',
      'linear-gradient(90deg, #505ADD 0%, #804FD0 30.64%, #BC40BF 65%, #F4A033 100%)',
      'linear-gradient(90deg, #EF1478 0%, #E61479 0.01%, #8321EA 100%)',
      'linear-gradient(90deg, #ED7373 0%, #EE0E86 100%)',
      'linear-gradient(90deg, #15FAFE 0%, #31BAFE 30.64%, #665AFD 65%, #9D09FF 100%)',
      'linear-gradient(90deg, #D54AFF 0%, #7103EF 100%)',
      'linear-gradient(90deg, #15B5E9 0%, #10F75D 100%)',
      'linear-gradient(90deg, #F7C837 0%, #F14A75 100%)'
    ]

    let currentIndex = counter
    counter = (counter + 1) % gradients.length
    return gradients[currentIndex]
  }

  fancy.addEventListener('click', () => {
    let newGradient = fancyGradient()
    let newClass = document.createElement('style')
    let className = 'randomGradient' + Date.now()
    newClass.innerHTML = `.${className} { background: ${newGradient}; }`
    document.head.appendChild(newClass)
    h1.className = className
    h1.classList.add('gradient-text')
    textGradient.innerHTML = `background: ${newGradient};`
  })
}
getFancyGradient()

function copyGradient() {
  textGradient.addEventListener('click', () => {
    navigator.clipboard.writeText(textGradient.innerHTML).then(
      () => {
        alert('Gradient copied!')
      },
      () => {
        alert('Error! Copy it yourself :(')
      }
    )
  })
}

copyGradient()
