const characters = {
  base: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  symbols: [
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
  ],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
};

let password = {
  length: 16,
  symbols: true,
  numbers: true,
};

// DOM elements
const option1DOM = document.getElementById('option1');
const option2DOM = document.getElementById('option2');
const lengthSliderDOM = document.getElementById('lengthSlider');
const lengthInputDOM = document.getElementById('lengthInput');
const symbolsDOM = document.getElementById('symbols');
const numbersDOM = document.getElementById('numbers');

// Set default values
lengthSliderDOM.value = password.length;
lengthInputDOM.value = password.length;
symbolsDOM.checked = password.symbols;
numbersDOM.checked = password.numbers;

// Slider
lengthSliderDOM.oninput = function () {
  lengthInputDOM.value = this.value;
  password.length = this.value;
};

// Length input
lengthInputDOM.oninput = function () {
  lengthSliderDOM.value = this.value;
  password.length = this.value;
};

// Symbols checkbox
symbolsDOM.oninput = function () {
  symbolsDOM.checked = this.checked;
  password.symbols = this.checked;
};

// Numbers checkbox
numbersDOM.oninput = function () {
  numbersDOM.checked = this.checked;
  password.numbers = this.checked;
};

// Functions
function generatePassword() {
  option1DOM.textContent = buildPassword();
  option2DOM.textContent = buildPassword();
}

function selectRandomCharacter() {
  let charSet = [];
  if (password.symbols && password.numbers) {
    charSet = [
      ...characters.symbols,
      ...characters.numbers,
      ...characters.base,
    ];
  } else if (password.symbols) {
    charSet = [...characters.symbols, ...characters.base];
  } else if (password.numbers) {
    charSet = [...characters.numbers, ...characters.base];
  } else {
    charSet = [...characters.base];
  }
  let randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

function buildPassword() {
  console.log(selectRandomCharacter());
  let output = '';
  for (let i = 0; i < password.length; i++) {
    output += selectRandomCharacter();
  }
  return output;
}
