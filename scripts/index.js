// ------- Navbar -------
const buttonCounter = document.getElementById("button-counter");
const cartIconCounter = document.getElementById("cart-icon-counter");
const modalMainCart = document.getElementById("modal-cart-main");
const deleteCartButton = document.getElementById("delete-cart-button");

let counterCart = 0;

buttonCounter.addEventListener("click", () => {
  counterCart++;
  cartIconCounter.textContent = counterCart;
  console.log(counterCart);
});

buttonCounter.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("product-in-cart");
  div.innerHTML = `
  <p>Product</p>
  <p>Total:</p>
  <p>Price:</p>
  <button id="delete-cart-button" type="button" class="btn btn-danger">
    <i class="bi bi-trash-fill"></i>
  </button>
  `;
  modalMainCart.appendChild(div);
});
