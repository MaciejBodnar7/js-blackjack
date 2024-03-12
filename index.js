console.log('Maciej B. | 5 - BlackJack project');

let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
console.log(sum);

let hasBlackJack = false;
let isAlive = true;

let message = '';

if (sum <= 20) {
  message = 'Do you want to draw a new card?';
} else if (sum === 21) {
  message = 'You won!';
  hasBlackJack = true; // change boolean hasBlackJack
} else {
  message = "You're out of the game!";
  isAlive = false;
}
console.log(message);
