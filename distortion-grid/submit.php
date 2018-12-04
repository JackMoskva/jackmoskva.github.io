<?php
if (!empty($_POST['name']) AND !empty($_POST['email'])){

	$headers = 'From: Jack\r\n'.
				'Reply-to: moskva84@gmail.com\r\n'.
				'X-Mailer: PHP/'. phpversion();

	$theme = "новое сообщение";

	$letter = "Данные сообщения:\r\n";
	$letter .="Имя: ".$_POST['name']. "\r\n";
	$letter .="Email: ".$_POST['email']. "\r\n";

	if  (mail("moskva84@gmail.com", $theme, $letter, $headers)){
		header("Location: /distortion-grid/thankyou.php");
	} else {
		header("Location: /distortion-grid");
	}
} else {
	header("Location: /distortion-grid");
}