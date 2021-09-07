'use strict';

// Creat Variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const scoreNum = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
let score = 20;
let highscored = 0;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// To make sure the guess is right
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No number
  if (!guess) {
    displayMessage('Please enter a number !');
  }

  // When guess is right
  else if (guess === secretNum) {
    displayMessage('corret number !');
    number.textContent = secretNum;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscored) {
      highscored = score;
      highscore.textContent = highscored;
    }
  }

  // When guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'too high !' : 'too low !');
      score--;
      scoreNum.textContent = score;
    } else {
      displayMessage('You lost game !');
      scoreNum.textContent = 0;
    }
  }
});

// Reset the game
again.addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreNum.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
