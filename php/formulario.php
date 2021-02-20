<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['numero']))
$numero = $_POST['numero'];

$content="De: $name \n Email: $email \n Mensaje: $message \n Número: $numero";
$recipient = "rpgersan@gmail.com";
$mailheader = "Correo de: $email \r\n";
mail($recipient, $numero, $content, $mailheader) or die("Ha ocurrido un Error!");

echo "Email Enviado!";
?>