var quizForm = document.querySelector('.quiz-form');
var btnSubmit = document.querySelector('#btn-submit');
var showScore = document.querySelector('#show-score');

const rightAnswers = ['90', 'Right Angled'];

btnSubmit.addEventListener('click',calcQuizScore );

function calcQuizScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()) {
        if (value === rightAnswers[index]) {
            score = score + 1;
        }
        index = index + 1; 
        
    }
    showScore.innerText="Score is "+score;
    return score;


}