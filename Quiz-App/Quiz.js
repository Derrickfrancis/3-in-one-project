
// const quiz = [
//     {
//         question: 'which is not a javaScript operator',
//         options: ['+=', '++', '>=', '=>'],
//         answer: ['=>']
//     },
//     {
//         question: 'The following are data Types except',
//         options: ['integer', 'null', 'string', 'undefined'],
//         answer: 'integer'
//     },
//     {
//         question: 'All are array methods except',
//         options: ['map', 'filter', 'reduce', 'add'],
//         answer: 'add'
//     },
//     {
//         question: 'All are error types except',
//         options: ['syntax', 'Type', 'Reference', 'null'],
//         answer: 'null'
//     },
//     {
//         question:'What is 4 + 2 + "2"?',
//         options:['4','8','88','62'],
//         answer:'62'
//     }
// ];


// const questionElement = document.getElementById('question')
// const answer = document.getElementById('answer')
// const previousBtn = document.getElementById('preBtn')
// const nextBtn = document.getElementById('nextBtn')

// let currentQuizIndex = 0;
// let score = 0;

// function showQuiz(){
//     const currentQuiz = quiz[currentQuizIndex];
//     questionElement.textContent = currentQuiz.question;
//     options.textContent = ''
//     // console.log(questionElement)

//     currentQuiz.options.forEach(option => {
//         const btn = document.createElement('button')
//         btn.textContent = option;
//         btn.classList.add('optionBtn')

//         btn.addEventListener('click', () =>{
//             selectOption()
//         })

//     })
// }
// // showQuiz()

const quizContainer = document.getElementById("quizContainer") ;
const answercontainer = document.getElementById("answercontainer") ;
const  preBtn = document.getElementById("preBtn") ;
const sinBtn = document.getElementById("sinBtn")
const nextBtn = document.getElementById("nextBtn")

     
      Btn.addEventListener('click' , function(){
  answercontainer.textContent =  sinBtn.value
     



      })

