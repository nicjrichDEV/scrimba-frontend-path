let hands = ['rock', 'paper', 'scissors'];

function getHand() {
  let random = Math.floor(Math.random() * 3);
  return hands[random];
}

console.log(getHand());
