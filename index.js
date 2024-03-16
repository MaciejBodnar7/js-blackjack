console.log('Maciej B. | 5 - BlackJack project');

let player = {
  name: 'NeverLucky',
  cash: 145,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false; // u need to click start

let message = '';

let messageEl = document.getElementById('message-el');
let messageHide = document.getElementById('message-hide');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');

let cardsEl = document.querySelector('#cards-el');

let playerEl = document.querySelector('#player-el');

let playerElOne = document.querySelector('#player-el-one');
let playerElTwo = document.querySelector('#player-el-two');

// random card generator
function getRandomCard() {
  let generateRandomNumber = Math.floor(Math.random() * 13) + 1;

  if (generateRandomNumber === 1) {
    return 11;
  } else if (generateRandomNumber > 10) {
    return 10;
  } else {
    return generateRandomNumber;
  }
}

// starting game function
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let seconsCard = getRandomCard();
  sum = firstCard + seconsCard;
  cards.push(firstCard, seconsCard);
  renderGame();
}

function renderGame() {
  messageHide.textContent = ''; // hide start tut text
  cardsEl.textContent = 'Cards: '; // render cards on site, if not here cars are like 6 9 6 9 6 becouse on evry start its overwriting existing p
  // playerEl.textContent = player.name + ': ' + player.cash + '$'; // render player object under buttons
  playerElOne.textContent = player.name + ': ';
  playerElTwo.textContent = player.cash + '$';

  for (let i = 0; i < cards.length; i++) {
    // new way of renderin cards on site
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum + ' '; // adding sum to p sum

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
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard(); // blackjack hardcoded
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    renderGame();
  } else {
    message = 'Y';
  }
}
