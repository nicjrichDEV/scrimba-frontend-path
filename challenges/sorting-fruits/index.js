let fruits = ['🍎', '🍊', '🍎', '🍎', '🍊', '🍎', '🍊', '🍊', '🍊'];

// DOM elements
let appleDOM = document.getElementById('apple-shelf');
let orangeDOM = document.getElementById('orange-shelf');

fruits.forEach((fruit) => {
  if (fruit === '🍎') {
    appleDOM.textContent += fruit;
  } else if (fruit === '🍊') {
    orangeDOM.textContent += fruit;
  }
});
