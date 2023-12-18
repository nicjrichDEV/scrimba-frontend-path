import { catsData } from "./data/data.js";

const emotionRadios = document.getElementById("emotion-radios");
const submitButton = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const closeMemeModal = document.getElementById("meme-modal-close-btn");

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

function getUniqueEmotions() {
  const emotions = getEmotionsArray(catsData);
  const uniqueEmotions = new Set(emotions);
  for (let emotion of emotions) {
    uniqueEmotions.add(emotion);
  }

  return uniqueEmotions;
}

function renderEmotions() {
  const uniqueEmotions = getUniqueEmotions();
  for (let emotion of uniqueEmotions) {
    emotionRadios.innerHTML += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" name="emotion" value="${emotion}" id="${emotion}"/>
        </div>
      `;
  }
}

renderEmotions();

emotionRadios.addEventListener("change", highlightCheckedOption);

function highlightCheckedOption(event) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  const radioButton = document.getElementById(event.target.id).parentElement;
  radioButton.classList.add("highlight");
}

submitButton.addEventListener("click", rendercat);

// Returns a new array of cats that match the selected emotion
function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

// Returns a single cat object
function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomIndex = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomIndex];
  }
}

// Renders a cat image
function rendercat() {
  memeModalInner.innerHTML = `
    <img src="images/${getSingleCatObject().image}" class="cat-img" alt="${
    getSingleCatObject().alt
  }"/>
  `;
  memeModal.style.display = "flex";
}

closeMemeModal.addEventListener("click", function () {
  memeModal.style.display = "none";
});
