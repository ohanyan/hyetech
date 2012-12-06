<?php

// Assign the input values to variables for easy reference
$subject = $_POST["name"]; 
$email = $_POST["email"];
$profession = $_POST["profession"];
$company = $_POST["company"];
$linkedin = $_POST["linkedin"];
$facebook = $_POST["facebook"];
$referral = $_POST["referral"];
$msg = $_POST["msg"];

// Send the email
$to = "netveano@gmail.com";
$message = "Name: $name \nProfession: $profession \nCompany: $company \nLinkedin: $linkedin \nFacebook: $facebook \nReferred by: $referral\nMessage: $msg";
$headers = "From: $email";
header ( "Location: thankyou.html" );
mail($to, $subject, $message, $headers );

?>