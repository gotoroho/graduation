<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$type = $_POST['type'];
$time = $_POST['time'];
$extra = $_POST['extra'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$type = htmlspecialchars($type);
$time = htmlspecialchars($time);
$extra = htmlspecialchars($extra);

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$type = urldecode($type);
$time = urldecode($time);
$extra = urldecode($extra);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$type = trim($type);
$time = trim($time);
$extra = trim($extra);

// mail("ubgjabp19522427@gmail.com", "Заявка с сайта", "Name: ".$name."
mail("gotoroho@yandex.ru", "Заявка с сайта", 
	"name: ".$name.
	"tel: ".$tel.
	"email: ".$email.
	"type: ".$type.
	"time: ".$time.
	"extra: ".$extra ,
	"From: webmaster@gotoroho.art \r\n");
?>