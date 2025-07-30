
const Quiz = [
    {
        question: 'which is not a javaScript operator',
        options: ['+=', '++', '>=', '=>'],
        answer: '=>'
    },
    {
        question: 'The following are data Types except',
        options: ['integer', 'null', 'string', 'undefined'],
        answer: 'integer'
    },
    {
        question: 'All are array methods except',
        options: ['map', 'filter', 'reduce', 'add'],
        answer: 'add'
    },
    {
        question: 'All are error types except',
        options: ['syntax', 'Type', 'Reference', 'null'],
        answer: 'null'
    },
    {
        question: 'What is 4 + 2 + "2"?',
        options: ['4', '8', '88', '62'],
        answer: '62'
    }
];


const questionElement = document.getElementById('questionElement');
const answerElements = document.getElementById('answerElements')
const nextBtn = document.getElementById('nextBtn')

let currentQuizIndex = 0;
let score = 0;

function startQuiz() {
    currentQuizIndex = 0;
    score = 0
    showQuiz()
}



function showQuiz() {
    const currentQuiz = Quiz[currentQuizIndex]
    questionElement.textContent = currentQuiz.question
    answerElements.textContent = ""

    currentQuiz.options.forEach(option => {
        const Btn = document.createElement('button')
        Btn.textContent = option
        Btn.classList.add('btn')
        answerElements.appendChild(Btn)



        Btn.addEventListener('click', function () {
            const correctAnswer = currentQuiz.answer

            if (Btn.textContent === correctAnswer) {
                Btn.classList.add('correct')
                score++
            }
            else {
                Btn.classList.add('incorrect')
            }

            nextBtn.style.display = 'block'
        })
    })
}

nextBtn.addEventListener('click', function () {
    currentQuizIndex++

    if (currentQuizIndex < Quiz.length) {
        showQuiz()
    }
    else if (currentQuizIndex === Quiz.length) {
        questionElement.textContent = `Quiz Completed`
        answerElements.textContent = `You score is ${score}`
        nextBtn.textContent = 'Restart Quiz'

    }
    else {
        restartQuiz()
        nextBtn.textContent = 'Next'
    }
})
function restartQuiz() {
   startQuiz()
   showQuiz()

}
showQuiz()

