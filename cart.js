const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

function updatePrice(productNumber) {
  const quantityInput = document.getElementById(`quantity${productNumber}`);
  const priceElement = document.getElementById(`price${productNumber}`);
  const pricePerItem = productNumber === 1 ? 3499.00 : 300.00; // Set price per item for each product

  let quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
    quantityInput.value = quantity;
  }

  const totalPrice = quantity * pricePerItem;
  priceElement.textContent = `Price: $${totalPrice.toFixed(2)}`;
}