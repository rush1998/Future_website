<?php
// Database connection
$servername = "localhost";
$username = "root"; // default username for XAMPP
$password = ""; // default password for XAMPP (empty)
$dbname = "signup"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$email = $_POST['email'];
$password = $_POST['password'];

// Validate email and password
$sql = "SELECT * FROM register WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login successful
    echo "<script>
            alert('Login successful');
            window.location.href = 'signin.html';
          </script>";
} else {
    // Login failed
    echo "<script>
            alert('Invalid email or password. Please try again.');
            window.location.href = 'signin.html';
          </script>";
}

$conn->close();
?>
