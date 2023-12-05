let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

// Player object
let player = {
  name: 'Nick',
  tokens: 145,
  sayHello: function () {
    console.log('Hello!');
  },
};

player.sayHello();

// DOM elements
let messageDOM = document.getElementById('message-el');
let sumDOM = document.getElementById('sum-el');
let cardsDOM = document.getElementById('cards-el');
let playerDOM = document.getElementById('player-el');

// Display player info
playerDOM.textContent = `${player.name}: $${player.tokens}`;

console.log(playerDOM);

// Functions
function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;

  if (random === 1) {
    return 11;
  } else if (random >= 10) {
    return 10;
  } else {
    return random;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  sumDOM.textContent = 'Sum: ' + sum;
  cardsDOM.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsDOM.textContent += cards[i] + ' ';
  }

  if (sum < 21) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageDOM.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
