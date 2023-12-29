import { menuArray } from "./data.js";

const menu = document.getElementById("menu");
let cart = 0;

// Document event listener
document.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-id")) {
    const item = menuArray.find((item) => item.name === e.target.dataset.id);

    switch (item.name) {
      case "Pizza":
        cart += itemPrice("Pizza");
        break;
      case "Hamburger":
        cart += itemPrice("Hamburger");
        break;
      case "Beer":
        cart += itemPrice("Beer");
        break;
    }
  }
  console.log(cart);
});

// Function to return price of item
function itemPrice(item) {
  switch (item) {
    case "Pizza":
      return menuArray.find((item) => item.name === "Pizza").price;
    case "Hamburger":
      return menuArray.find((item) => item.name === "Hamburger").price;
    case "Beer":
      return menuArray.find((item) => item.name === "Beer").price;
    default:
      return 0;
  }
}

// Function to create menu
function createMenu(data) {
  let html = "";
  data.forEach((item) => {
    html += `
        <div class="menu-item">
            <div class="menu-item-left">
                <p class="item-emoji">${item.emoji}</p>
                <div class="item-details">
                    <div class="item-copy">
                        <h2 class="item-name">${item.name}</h2>
                        <p class="item-ingredeints">${item.ingredients.join(
                          ", "
                        )}</p>
                    </div>
                    <p class="item-price">$${item.price}</p>
                </div>
            </div>
            <div class="add-to-cart" data-id="${item.name}">+</div>
      </div>
    `;
  });

  return html;
}

menu.innerHTML = createMenu(menuArray);
