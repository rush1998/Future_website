// Function to handle the click event
function handleClick() {
    // Display the alert
    alert("Congratulations your order has been placed!");
    
    // Redirect to the order page after the user clicks "OK"
    window.location.href = "orders.html"; // Replace "order_page.html" with the actual URL of your order page
}

// Select the button by class
var placeOrderButton = document.querySelector(".place-order-btn");

// Add event listener to the button
placeOrderButton.addEventListener("click", handleClick);
