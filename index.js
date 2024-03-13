console.log('Maciej B. | 5 - BlackJack project');

let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
console.log(sum);

let hasBlackJack = false;
let isAlive = true;

let message = ''; //replacing all consolelog with empty variable and console login once

let messageEl = document.getElementById('message-el');
let messageHide = document.getElementById('message-hide');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');

let cardsEl = document.querySelector('#cards-el');

function startGame() {
  renderGame();
}

function renderGame() {
  messageHide.textContent = ''; //hide start tut text
  cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard; //showing cards on site
  sumEl.textContent = 'Sum: ' + sum + ' '; //adding sum to p sum

  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = 'You won! BlackJack!';
    hasBlackJack = true; // change boolean hasBlackJack
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // Log out
  messageEl.textContent = message;
}

// newCard function

function newCard() {
  let thirdCard = 6; //blackjack hardcoded
  sum += thirdCard;
  renderGame();
  cardsEl.textContent += ' ' + thirdCard;
}
