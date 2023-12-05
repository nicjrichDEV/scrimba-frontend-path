// DOM elements
const inputDOM = document.getElementById("input-el");
const inputBtnDOM = document.getElementById("input-btn");
const listDOM = document.getElementById("list-el");
const deleteBtnDOM = document.getElementById("delete-btn");
const tabBtnDOM = document.getElementById("tab-btn");

// Variables
let myLeads = [];
let oldLeads = [];
let inputEl = "";
let listItems = "";
const storage = JSON.parse(localStorage.getItem("myLeads"));
const queryOptions = { active: true, currentWindow: true };

// Check local storage for leads
if (storage) {
  myLeads = storage;
  render(myLeads);
}

function render(leads) {
  listItems = "";
  leads.forEach((lead) => {
    listItems += `
    <li>
      <a href="${lead}" target="_blank">${lead}</a>
    </li>
    `;
  });
  listDOM.innerHTML = listItems;
}

inputDOM.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    saveLeads();
  }
});

inputBtnDOM.addEventListener("click", () => {
  saveLeads();
});

deleteBtnDOM.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

tabBtnDOM.addEventListener("click", () => {
  chrome.tabs.query(queryOptions, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function saveLeads() {
  myLeads.push(inputDOM.value);
  inputDOM.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
}
