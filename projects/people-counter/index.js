// attach DOM elements to variables
const label = document.getElementById('count-label');
const addBtn = document.getElementById('add-btn');
const minusBtn = document.getElementById('minus-btn');
const saveBtn = document.getElementById('save-btn');
const readOut = document.getElementById('readout');

// global count
let count = 0;

function add() {
  count += 1;
  label.innerHTML = count;
}

function minus() {
  count -= 1;
  label.innerHTML = count;
}

function save() {
  readOut.textContent += `${count} - `;
  label.innerHTML = 0;
  count = 0;
  console.log('save');
}
