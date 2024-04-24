const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');

});

function addToCart(product) {
  let counterElement = document.getElementById(`cartCounter-${product}`);
  let count = parseInt(counterElement.textContent);
  count++;
  counterElement.textContent = count;
}