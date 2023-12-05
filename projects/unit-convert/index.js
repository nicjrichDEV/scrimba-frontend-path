// DOM Elements
const unitsInput = document.getElementById("unitsInput");
const unitsButton = document.getElementById("unitsBtn");
const lengthOutput = document.getElementById("lengthOutput");
const volumeOutput = document.getElementById("volumeOutput");
const massOutput = document.getElementById("massOutput");

// Click event
unitsButton.addEventListener("click", () => {
  const input = unitsInput.value;

  // length
  lengthOutput.innerHTML = `${input} meters = ${metersToFeet(
    input
  )} feet | ${input} feet = ${feetToMeters(input)} meters`;

  // volume
  volumeOutput.textContent = `${input} liters = ${litersToGallons(
    input
  )} gallons | ${input} gallons = ${gallonsToLiters(input)} liters`;

  // mass
  massOutput.textContent = `${input} kilograms = ${kilogramsToPounds(
    input
  )} pounds | ${unitsInput.value} pounds = ${poundsToKilograms(
    input
  )} kilograms`;

  // clear input
  unitsInput.value = 1;
});

// On enter
unitsInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    unitsButton.click();
  }
});

function minMax(data) {
  if (data.value.length > data.maxLength) {
    data.value = data.max;
  } else if (data.value < data.min) {
    data.value = data.min;
  }
}

function metersToFeet(meters) {
  return (meters * 3.281).toFixed(3);
}

function feetToMeters(feet) {
  return (feet / 3.281).toFixed(3);
}

function litersToGallons(liters) {
  return (liters * 0.264).toFixed(3);
}

function gallonsToLiters(gallons) {
  return (gallons / 0.264).toFixed(3);
}

function kilogramsToPounds(kilograms) {
  return (kilograms * 2.204).toFixed(3);
}

function poundsToKilograms(pounds) {
  return (pounds / 2.204).toFixed(3);
}
