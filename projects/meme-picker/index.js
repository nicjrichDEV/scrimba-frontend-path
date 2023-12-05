import { catsData } from "./data/data.js";

const emotionRadios = document.getElementById("emotion-radios");

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

emotionRadios.addEventListener("change", (e) => {
  const radioButton = document.getElementById(e.target.id).parentElement;
  radioButton.classList.add("highlight");
});
