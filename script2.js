const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = document.getElementById('userScores')

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    liMaker(input.value)
    input.value = ''
})

let scoresArray = []

localStorage.setItem('scores', JSON.stringify(scoresArray))
const data = JSON.parse(localStorage.getItem('scores'))

e.preventDefault()

scoresArray.push(input.value)
localStorage.setItem('scores', JSON.stringify(scoresArray))

data.forEach((scores) => {
    liMaker(scores)
})

let scores 

if (localStorage.getItem('scores')) {
  scores = JSON.parse(localStorage.getItem('scores'))
} else {
  scoresArray = []
}