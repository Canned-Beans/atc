<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect post data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $category = htmlspecialchars($_POST['category']);
    $message = htmlspecialchars($_POST['message']);

    // Set up email parameters
    $to = 'c28038174@gmail.com'; // Replace with your email
    $subject = 'New Order Received';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Prepare email body
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Order: $category\n";
    $email_content .= "Message:\n$message\n";

    // Send the email using PHP's built-in mail function
    if (mail($to, $subject, $email_content, $headers)) {
        echo 'Order confirmation email sent successfully!';
    } else {
        echo 'Unable to send email. Please try again.';
    }
}
?>
