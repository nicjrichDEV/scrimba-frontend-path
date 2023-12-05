import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://champions-9c865-default-rtdb.firebaseio.com/",
};

// Attach Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const championsDB = ref(database, "champions");

// DOM Elements
const endorsementInput = document.getElementById("endorsement-area");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const publishBtn = document.getElementById("publish");
const endorsementList = document.getElementById("endorsement-list");

// Write to Firebase
publishBtn.addEventListener("click", () => {
  const endorsement = endorsementInput.value;
  const from = fromInput.value;
  const to = toInput.value;
  const hearts = Math.floor(Math.random() * 5) + 1;
  const hearted = Math.random() > 0.5 ? true : false;

  const champion = {
    endorsement: endorsement,
    from: from,
    to: to,
    hearts: hearts,
    hearted: hearted,
  };
  push(championsDB, champion);
});

// TODO: Delete endorsement

// Read from Firebase
onValue(championsDB, (snapshot) => {
  if (snapshot.exists() === false) {
    push(championsDB);
    resetContent();
  } else {
    let championsArray = Object.entries(snapshot.val());
    resetContent();
    championsArray.forEach((champion) => {
      renderChampion(champion);
    });
  }
});

// Clear input fields
function resetContent() {
  endorsementInput.value = "";
  fromInput.value = "";
  toInput.value = "";
  endorsementList.innerHTML = "";
}

// Render Champions
function renderChampion(champion) {
  // Parse values
  const endorsement = champion[1].endorsement;
  const from = champion[1].from;
  const to = champion[1].to;
  const hearts = champion[1].hearts;
  const hearted = champion[1].hearted;
  const championKey = champion[0];

  // Set database reference for each champion
  const currentChampion = ref(database, `champions/${championKey}`);

  // Create list item
  const content = document.createElement("li");

  content.innerHTML = `
    <h5 class="card-header">To ${to}</h5>
    <p>${endorsement}</p>
    <div class="card-footer">
      <h5>From ${from}</h5>
      <div class="heart" id="heart-container">
        <i id="heart" class=${hearted ? "heart-active" : "heart-default"}></i>
        <span id="heart-amount">${hearts}</span>
      </div>
    </div>
  `;

  endorsementList.appendChild(content);

  content.querySelector("#heart-container").addEventListener("click", () => {
    if (hearted == false) {
      update(currentChampion, {
        endorsement: endorsement,
        from: from,
        to: to,
        hearts: hearts + 1,
        hearted: true,
      });
    } else {
      update(currentChampion, {
        endorsement: endorsement,
        from: from,
        to: to,
        hearts: hearts - 1,
        hearted: false,
      });
    }
  });

  content.addEventListener("dblclick", () => {
    remove(currentChampion);
  });
}
