const contactsButton = document.querySelector(".contacts__button");
const writeToUsPopap = document.querySelector(".reverse-connection");
const loginClose = writeToUsPopap.querySelector(".popup-button");
const loginForm = writeToUsPopap.querySelector(".reverse-connection__form");
const loginLogin = writeToUsPopap.querySelector(".form-rc__input-name");
const mailInput = writeToUsPopap.querySelector(".form-rc__input-mail");
const textMail = writeToUsPopap.querySelector(".form-rc__text-mail");
const loginPassword = writeToUsPopap.querySelector(".login-icon-password");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeToUsPopap.classList.add("modal-show");
  loginLogin.focus();
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeToUsPopap.classList.remove("modal-show");
  writeToUsPopap.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !mailInput.value || !textMail.value) {
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
