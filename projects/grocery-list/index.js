import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-70716-default-rtdb.firebaseio.com/",
};

// Attach Firebase
const app = initializeApp(appSettings);
const database = getDatabase(app);
const groceryListDB = ref(database, "groceries");

// DOM Elements
const addBtn = document.getElementById("add-button");
const itemInput = document.getElementById("input-field");
const groceryList = document.getElementById("grocery-list");

// Read from DB
onValue(groceryListDB, (snapshot) => {
  if (snapshot.exists() === false) {
    push(groceryListDB);
    clearList();
  } else {
    let groceriesArray = Object.entries(snapshot.val());
    clearList();
    groceriesArray.forEach((item) => {
      renderList(item);
    });
  }
});

addBtn.addEventListener("click", () => {
  const item = itemInput.value;
  renderList(item);
  push(groceryListDB, item);
});

// On enter
itemInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

function renderList(item) {
  const itemKey = item[0];
  const itemValue = item[1];
  const listItem = document.createElement("li");
  listItem.addEventListener("dblclick", () => {
    const exactLocation = ref(database, `groceries/${itemKey}`);
    remove(exactLocation);
  });
  listItem.textContent = itemValue;
  groceryList.append(listItem);
}

function clearList() {
  groceryList.innerHTML = "";
  itemInput.value = "";
}
