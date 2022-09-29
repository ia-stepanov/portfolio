<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

//Include required PHPMailer files
	require 'includes/PHPMailer.php';
	require 'includes/SMTP.php';
	require 'includes/Exception.php';

//Define name spaces
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

//Create instance of PHPMailer
	$mail = new PHPMailer();
	$mail->CharSet = "utf-8";

//Set mailer to use smtp
	$mail->isSMTP();

//Define smtp host
	$mail->Host = "smtp.gmail.com";

//Enable smtp authentication
	$mail->SMTPAuth = true;

//Set gmail username
	$mail->Username = "gmaillogin@gmail.com";

//Set gmail password
	$mail->Password = "password";

//Set smtp encryption type (ssl/tls)
	$mail->SMTPSecure = "tls";

//Port to connect smtp
	$mail->Port = "587";

//Set sender email
	$mail->setFrom("gmaillogin@gmail.com", "Portfolio");

//Add recipient
	$mail->addAddress("recipient@mail.com");

//Enable HTML
	$mail->isHTML(true);

//Email subject
	$mail->Subject = "Форма обратной связи";

//Email body
	$mail->Body    = '
	Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Почта: ' . $email . '<br>
	Текст: ' . $text . '';

//Finally send email
	if ( $mail->send() ) {
		echo "Email Sent..!";
	}else{
		echo "Message could not be sent. Mailer Error: ";
	}

//Closing smtp connection
	$mail->smtpClose();
