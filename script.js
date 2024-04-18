let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
 showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(index) {
  const slides = document.querySelectorAll('.slides img');
  if (index >= slides.length) { slideIndex = 0 }
  if (index < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}



function validateSignInForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check if email is valid
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  // Check if password is not empty
  if (password.trim() === '') {
    alert('Please enter your password');
    return false;
  }

  // If all validations pass, allow form submission
  return true;
}

// Function to validate sign-up form
function validateSignUpForm() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('Name').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // Check if email is valid
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if(!passwordPattern.test(password)){
    alert('Please enter password based on the given policy')
  }

  // Check if name is not empty
  if (name.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  // Check if password is not empty
  if (password.trim() === '') {
    alert('Please enter your password');
    return false;
  }

  // If all validations pass, allow form submission
  return true;
}


//navbar selected element highlighter
document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.navbar__links');

  navbarLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      // Remove "active" class from all navbar links
      navbarLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Add "active" class to the clicked navbar link
      this.classList.add('active');
    });
  });
});

function expandFloatingPane() {
  document.getElementById("floating-pane-content").innerText = "Get 10% Off on Selected Products";
}

function retractFloatingPane() {
  document.getElementById("floating-pane-content").innerText = "%%%";
}



function addToCart(element){
  const quantityDisplay = document.getElementById(element.id);
  if(quantityDisplay.textContent == 'Add to Cart'){
    quantityDisplay.textContent='1';
    // Get the decrease and increase buttons
    var id =element.id.split('-');
    const decreaseButton = document.getElementById('decreaseButton-'+id[1]);
    const increaseButton = document.getElementById('increaseButton-'+id[1]);
    decreaseButton.removeAttribute('disabled');
    increaseButton.removeAttribute('disabled');
  }
}

// Function to handle adding to cart and increasing quantity
function addToCartIncrease(element) {
  var id =element.id.split('-');
  const quantityDisplay = document.getElementById('quantity-'+id[1]);
    // Increase the quantity by 1
    let quantity = parseInt(quantityDisplay.textContent);
    quantity++;
    quantityDisplay.textContent = quantity.toString();
}

function addToCartDecrease(element) {
  var id =element.id.split('-');
  const quantityDisplay = document.getElementById('quantity-'+id[1]);
  // Increase the quantity by 1
  let quantity = parseInt(quantityDisplay.textContent);
  quantity--;
  quantityDisplay.textContent = quantity.toString();
  if (quantity!=0){
    quantityDisplay.textContent = quantity.toString();
  }else{
    quantityDisplay.textContent = 'Add to Cart';
    const decreaseButton = document.getElementById('decreaseButton-'+id[1]);
    const increaseButton = document.getElementById('increaseButton-'+id[1]);
    decreaseButton.setAttribute('disabled', 'true');
    increaseButton.setAttribute('disabled', 'true');
  }
}

// Function to update price based on quantity
function updatePrice() {
    // Get quantity input element
    const quantityInput = document.getElementById('quantity');
    const quantityInput1 = document.getElementById('quantity1');
    // Get price element
    const priceElement = document.querySelector('.price');
  
    // Get price value
    const price = 399.99; // You can dynamically fetch price from your data
    const price1 = 1999.99;
    // Calculate total price based on quantity
    const totalPrice = parseFloat((price * quantityInput.value) + (price1 * quantityInput1.value)).toFixed(2); 
  
    // Update price element with new total price
    priceElement.textContent = `Price: $${totalPrice}`;
  }
  
  function redirectToPayment() {
    window.location.href = "payments.html";
  }
  