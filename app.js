const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
  // Simulate adding the product to the cart (you can replace this with your actual logic)
  // For demonstration purposes, let's just navigate to the cart page
  window.location.href = 'cart.html'; // Replace 'cart.html' with your actual cart page URL
});

