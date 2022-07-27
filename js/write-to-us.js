const contactsButton = document.querySelector(".contacts__button");
const writeToUsPopap = document.querySelector(".reverse-connection");
const closeButton = writeToUsPopap.querySelector(".popup-button");
const form = writeToUsPopap.querySelector(".reverse-connection__form");
const nameInput = writeToUsPopap.querySelector(".form-rc__input-name");
const mailInput = writeToUsPopap.querySelector(".form-rc__input-mail");
const textMail = writeToUsPopap.querySelector(".form-rc__text-mail");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeToUsPopap.classList.add("modal-show");
  nameInput.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeToUsPopap.classList.remove("modal-show");
  writeToUsPopap.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !mailInput.value || !textMail.value) {
    evt.preventDefault();
    writeToUsPopap.classList.remove("modal-error");
    writeToUsPopap.offsetWidth = writeToUsPopap.offsetWidth;
    writeToUsPopap.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeToUsPopap.classList.contains("modal-show")) {
      evt.preventDefault();
      writeToUsPopap.classList.remove("modal-show");
      writeToUsPopap.classList.remove("modal-error");
    }
  }
});
