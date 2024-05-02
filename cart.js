const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Function to update price based on quantity
function updatePrice() {
    // Get quantity input element
    const quantityInput = document.getElementById('quantity');
  
    // Get price element
    const priceElement = document.querySelector('.price');
  
    // Get price value
    const price = 3499.00; // You can dynamically fetch price from your data
  
    // Calculate total price based on quantity
    const totalPrice = parseFloat(price * quantityInput.value).toFixed(2);

    // Update price element with new total price
    priceElement.textContent = `Price: $${totalPrice}`;
  }
  
  // Add event listener to quantity input
  document.getElementById('quantity').addEventListener('input', updatePrice);
  
  function redirectToPayment() {
    window.location.href = "payments.html";
  }

 