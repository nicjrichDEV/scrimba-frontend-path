let fighters = [
  '🐉',
  '🐥',
  '🐊',
  '💩',
  '🦍',
  '🐢',
  '🐩',
  '🦭',
  '🦀',
  '🐝',
  '🤖',
  '🐘',
  '🐸',
  '🕷',
  '🐆',
  '🦕',
  '🦁',
];

let stageDOM = document.getElementById('stage');
let fightButton = document.getElementById('fightButton');

function pickRandomFighter() {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

fightButton.addEventListener('click', function () {
  let fighter1 = pickRandomFighter();
  let fighter2 = pickRandomFighter();
  stageDOM.textContent = `${fighter1} vs ${fighter2}`;
});
