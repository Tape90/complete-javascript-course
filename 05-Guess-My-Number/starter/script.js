'use strict';

/*
document.querySelector('.message').textContent = 'Correct';

document.querySelector('.number').textContent = '5';

document.querySelector('.score').textContent = '0';

document.querySelector('.guess').value = 5;
*/

document.querySelector('.check').addEventListener('click', e => {
  console.log(document.querySelector('.guess').value);
});