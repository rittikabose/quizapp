const question = document.getElementById('question');
const choices=  Array.from(document.getElementsByClassName('choice-text'));


let currentQuestion={};
let acceptingAnswers= true;
let score=0;
let questionCounter=0;
let availableQuestions=[];


let questions=[...
    
    const CORRECT_BONUS= 10;
    const MAX_QUESTIONS= 3;

    startGame =() => {
        questionCounter = 0;
        score=0;
        availableQuestions= [...questions];
        console.log(availableQuestions);
        getNewQuestion();

    };

    getNewQuestion= () => {

        questionCounter++;
        const questionIndex= Math.floor(Math.random() * availableQuestions.length);
        currentQuestion= availableQuestions[questionIndex];
        question.innerText= currentQuestion.question;

        choices.forEach( choice =>{
            const number = choice.dataset['number'];
            choice.innerText= currentQuestion['choice' +number];
        })
    };
]
    startGame();
