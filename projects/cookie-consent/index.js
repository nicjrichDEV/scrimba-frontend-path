const modal = document.getElementById("modal");
const close = document.getElementById("modal-close-btn");
const cookie = document.getElementById("cookie");
const modalText = document.getElementById("modal-text");
const disabledBtn = document.getElementById("disabledBtn");
const modalBtnGroup = document.getElementById("modalBtnGroup");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500); // 1.5 seconds

cookie.addEventListener("submit", (e) => {
  e.preventDefault();

  // Formdata object
  const formData = new FormData(cookie);
  const name = formData.get("name");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="uploadText">
          Uploading your data to the dark web...
      </p>
    </div>
  `;

  // Loading
  setTimeout(function () {
    document.getElementById("uploadText").innerText = "Marking the sale...";
  }, 1500);

  // Pirate
  setTimeout(function () {
    close.disabled = false;
    document.getElementById("modal-inner").innerHTML = `
      <h2>Thanks <span class="modal-display-name">${name}</span> you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
          <img src="images/pirate.gif">
      </div>
    `;
  }, 3000);
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

disabledBtn.addEventListener("mouseenter", () => {
  modalBtnGroup.classList.toggle("reverse");
});
