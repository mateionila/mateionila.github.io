document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const quizContainer = document.getElementById('quizContainer');
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const nextQuestionButton = document.getElementById('nextQuestion');

    const questions = [
        {
            question: 'Cât este 5 + 3?',
            answers: ['6', '7', '8', '9'],
            correct: '8',
        },
        {
            question: 'Cât este 12 ÷ 4?',
            answers: ['2', '3', '4', '6'],
            correct: '3',
        },
        {
            question: 'Cât este 7 × 6?',
            answers: ['42', '36', '48', '49'],
            correct: '42',
        },
        {
            question: 'Cât este rădăcina pătrată a lui 49?',
            answers: ['5', '6', '7', '8'],
            correct: '7',
        },
        {
            question: 'Cât este 25% din 200?',
            answers: ['50', '100', '25', '75'],
            correct: '50',
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = []; 

    startButton.addEventListener('click', () => {
        quizContainer.style.display = 'block'; 
        startButton.style.display = 'none'; 
        loadQuestion(); 
    });

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        answersContainer.innerHTML = '';

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answerButton');
            button.addEventListener('click', () => {
                userAnswers.push({
                    question: currentQuestion.question,
                    selectedAnswer: answer,
                    correctAnswer: currentQuestion.correct,
                    isCorrect: answer === currentQuestion.correct
                });

                if (answer === currentQuestion.correct) {
                    alert('Corect!');
                } else {
                    alert('Greșit! Răspunsul corect este: ' + currentQuestion.correct);
                }
            });
            answersContainer.appendChild(button);
        });
    }

    nextQuestionButton.addEventListener('click', () => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            localStorage.setItem('quizResults', JSON.stringify(userAnswers));

            alert('Testul s-a terminat! Răspunsurile tale au fost salvate.');
            quizContainer.style.display = 'none'; 
            startButton.style.display = 'block'; 
            currentQuestionIndex = 0; 
            userAnswers = []; 
        }
    });
});
