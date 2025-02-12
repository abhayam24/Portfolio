<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize them
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // If email is not valid, send an error response
        http_response_code(400);
        echo "Invalid email format.";
        exit;
    }

    // Send email (this is just a basic example, you may want to use a library like PHPMailer for more features)
    $to = "your_email@example.com"; // Change this to your email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        // If email is sent successfully, send a success response
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        // If there was an error sending the email, send an error response
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // If the form is not submitted, send a method not allowed response
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
