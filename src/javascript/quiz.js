const start = document.getElementById('start')
const verify = document.getElementById('verify')
const restart = document.getElementById('restart')
const caption = document.getElementById('caption')
const description = document.getElementById('description')

start.addEventListener('click', function () {
   renderQuiz()
})

function renderQuiz() {
   function startQuiz() {
      start.style.opacity = '0'
      start.style.transition = 'all 0.15s ease'
      setTimeout(function () {
         start.style.display = 'none'
      }, 250)
      caption.style.marginTop = '2vw'
      caption.style.transition = 'all 0.5s ease'
      description.style.opacity = '0'
      setTimeout(function () {
         description.style.opacity = '1'
         description.style.transition = 'all 0.5s ease'
         description.innerHTML = 'Answer 5 questions and find out your level'
         quiz.style.display = 'block'
      }, 750)
   }
   startQuiz()

   function createQuestions() {
      var quiz = document.getElementById('quiz')
      var quizItems = 5
      const issues = [
         'What is the keyword used to create a immutable variable in JavaScript?',
         'What is the operator used to assign a value to a variable in JavaScript?',
         'What is the function used to print output to the console in JavaScript?',
         'What is the symbol used to create a comment in JavaScript? ',
         'What type of data is used to represent non-existence in JavaScript?'
      ]

      for (var i = 0; i < quizItems; i++) {
         var questionDiv = document.createElement('div')
         questionDiv.classList.add('question')
         var questionH2 = document.createElement('h2')
         questionDiv.classList.add('question')
         questionH2.innerHTML = `${i + 1}. ${issues[i]}`
         var questionInput = document.createElement('input')
         questionInput.classList.add('answers')
         questionDiv.appendChild(questionH2)
         questionDiv.appendChild(questionInput)
         quiz.appendChild(questionDiv)
      }
   }

   function appearQuestions() {
      const question = document.getElementsByClassName('question')
      setTimeout(function () {
         createQuestions()
         for (let i = 0; i < question.length; i++) {
            setTimeout(function () {
               question[i].style.opacity = '1'
               question[i].style.transform = 'translateY(0)'
               question[i].style.transition = 'all 0.25s ease'
            }, 500 * i)
         }
         setTimeout(function () {
            verify.style.opacity = '1'
            verify.style.transition = 'all 0.5s ease'
         }, 1750)
      }, 1500)
   }
   appearQuestions()

   function verifyQuestions() {
      verify.addEventListener('click', function () {
         var answers = Array.from(document.querySelectorAll('.answers'))
         var correctAnswers = ['const', '=', 'console.log()', '//', 'null']
         var correct = 0
         var incorrect = 0
         for (var i = 0; i < answers.length; i++) {
            if (answers[i].value == correctAnswers[i]) {
               correct++
            } else {
               incorrect++
            }
         }
         if (correct == 5) {
            caption.innerHTML = 'You are a JavaScript master!'
            description.innerHTML = 'You got all 5 questions correct!'
         } else if (correct == 4) {
            caption.innerHTML = 'You are almost a JavaScript master!'
            description.innerHTML = 'You got 4 questions correct!'
         } else if (correct == 3) {
            caption.innerHTML = 'You are good at JavaScript!'
            description.innerHTML = 'You got 3 questions correct!'
         } else if (correct == 2) {
            caption.innerHTML = 'You still have to learn JavaScript!'
            description.innerHTML = 'You got 2 questions correct!'
         } else if (correct == 1) {
            caption.innerHTML = 'You are a beginner in JavaScript!'
            description.innerHTML = 'You got 1 question correct!'
         } else {
            caption.innerHTML = 'Go learn JavaScript right now!'
            description.innerHTML = 'You got 0 questions correct!'
         }
         quiz.style.display = 'none'
      })

      verify.addEventListener('click', function () {
         verify.style.display = 'none'
         restart.style.display = 'block'
         caption.style.marginTop = '13vw'
         caption.style.transition = 'all 0.5s ease'

         restart.addEventListener('click', function () {
            location.reload()
         })
      })
   }
   verifyQuestions()
}
