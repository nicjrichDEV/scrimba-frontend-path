// team scores
let homeScore = 0;
let guestScore = 0;

// DOM elements
let homeElement = document.getElementById('homeScore');
let guestElement = document.getElementById('guestScore');

// default score
homeElement.textContent = homeScore;
guestElement.textContent = guestScore;

// home actions
function home1() {
  homeScore += 1;
  homeElement.textContent = homeScore;
}

function home2() {
  homeScore += 2;
  homeElement.textContent = homeScore;
}

function home3() {
  homeScore += 3;
  homeElement.textContent = homeScore;
}

// guest actions
function guest1() {
  guestScore += 1;
  guestElement.textContent = guestScore;
}

function guest2() {
  guestScore += 2;
  guestElement.textContent = guestScore;
}

function guest3() {
  guestScore += 3;
  guestElement.textContent = guestScore;
}

// reset
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeElement.textContent = homeScore;
  guestElement.textContent = guestScore;
}
