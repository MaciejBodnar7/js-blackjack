console.log('Maciej B. | 5 - BlackJack project');

let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
  console.log('Do you want to draw a new card?');
} else if (sum === 21) {
  console.log('You won!');
} else {
  console.log("You're out of the game!");
}
