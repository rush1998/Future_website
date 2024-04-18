<?php
// Database connection
$servername = "localhost";
$username = "root"; // default username for XAMPP
$password = ""; // default password for XAMPP (empty)
$dbname = "signup"; // your database name

try {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $email = $_POST['email'];
    $name = $_POST['name'];
    $password = $_POST['password'];

   // Insert into database
$sql = "INSERT INTO register (email, name, password) VALUES ('$email', '$name', '$password')";

if ($conn->query($sql) === TRUE) {
    // Redirect to signup.html after successful record insertion
    header("Location: signup.html");
    exit; // Make sure to exit after the redirection
}

    $conn->close();
} catch (Exception $e) {
    echo "<script>
            if(confirm('Email address already exists. Please choose a different email.')) {
                window.location.href = 'signup.html';
            } else {
                window.location.href = 'signup.html';
            }
          </script>";
}
?>
