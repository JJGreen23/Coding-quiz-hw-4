const Beginbutton = document.getElementById('begin-btn');

const questionContainer= document.getElementById('contained-Questions');

const questionEl = document.getElementById('Question')

const answerButtonEl = document.getElementById('answer-buttons')

const nextQuestionButton = document.getElementById('next-btn')

const userScore = document.getElementById('score')

const timerEl = document.getElementById('timer')

const mainContainer = document.getElementById('container')

var randomQuestions, questionIndex

secondsLeft= 45;

score = 0;

Beginbutton.addEventListener('click', beginQuiz)

nextQuestionButton.addEventListener('click', ()=> {
    questionIndex ++;
    startNextQuestion();
})

function beginQuiz() {
    randomQuestions = questions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    startNextQuestion();
    setTime();
    quizScore();
    
}

function startNextQuestion() {
    beginQuestions(randomQuestions[questionIndex])
}

function beginQuestions(question) {
    questionEl.innerText = question.question;
    Option1.textContent= question.Option1;
    Option2.textContent= question.Option2;
    Option3.textContent= question.Option3;
    Option4.textContent= question.Option4;
}


var Option1 = document.getElementById('btnA')
var Option2 = document.getElementById('btnB')
var Option3 = document.getElementById('btnC')
var Option4 = document.getElementById('btnD')
Option1.addEventListener('click', correctAnswer)
Option2.addEventListener('click', startNextQuestion)
Option3.addEventListener('click', startNextQuestion)
Option4.addEventListener('click', startNextQuestion)

const questions = [
    {
        question: "The _____ element tells the browser where to find a JavaScript file.",
        Option1: 'Script', 
        Option2: 'src',
        Option3: 'link', 
        Option4: 'file', 
        
    },
    {
        question : "Math.random() generates a number between 0 and what?",
        Option1: '1', 
        Option2: '10', 
        Option3: '100', 
        Option4: 'None of the above', 
        
       
    },
    {
        question : "Test conditions for conditional statements and loops have on 2 results, what are they?",
        Option1: 'True or false', 
        Option2: 'postive or negetive', 
        Option3: '0 or 1', 
        Option4: 'None of the above',     
        
    },
    {
        question : "document.write() .... Where write is an example of a",
        Option1: "Method", 
        Option2: "Object", 
        Option3: "Function", 
        Option4: "Array", 
        
    }

];

function correctAnswer(){
    alert("congrats you got the answer right! Hit the next question button!")
    score++;
    quizScore();
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        alert('You have ran out of time.')
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

function quizScore(){
    userScore.textContent = score;
    if (score === 3){
        alert("Youve Completed the Quiz! If youd like, please log your score, and initials to flex your intelligence!")
        window.location.href = "scores.html";
    }
    
}

