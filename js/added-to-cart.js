const catalogButtonBuy = document.querySelectorAll('.catalog-button-buy');
const addedToCart = document.querySelector('.added-to-cart');
const closeButton = addedToCart.querySelector('.popup-button');
const AddedToCartLink = addedToCart.querySelector('.added-to-cart__link')

for (let i=0; i<catalogButtonBuy.length; i++) {
  catalogButtonBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeToUsPopap.classList.add("modal-show");
    nameInput.focus();
  });
}
