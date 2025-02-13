'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMessage(incMessage) {
    document.querySelector('.message').textContent = incMessage;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    document.querySelector('.again').addEventListener('click', () => {
        score = 20;
        document.querySelector('.score').textContent = score;
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        displayMessage('Guess My Number!');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })

    if (!guess) {
        displayMessage('⚠️ No number!');

    } else if (guess === secretNumber) {
        displayMessage('🎉 Number is correct');
        score > highScore ? highScore = score : null;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '↗️ To high' : '↘️ To low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💀 You lost the game');
            document.querySelector('body').style.backgroundColor = '#eb0909';
            document.querySelector('.score').textContent = 0;
        }
    }
})
