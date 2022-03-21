<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'website');
$dbconnection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
$dbconnection->set_charset('utf8');
$id = '1';
//$login = $_POST('login');
//$pass = $_POST('pass');

$id = 1;
$login = $_POST["login"];
$pass = $_POST["pass"];

$sql = mysqli_query($dbconnection, "INSERT INTO authorization_2 (login, pass) VALUES ('{$login}', '{$pass}')");

$new_url = "website/website.html";
header('Location: '.$new_url);
exit();
//%realprogdir%\progs\Default\launcher\launcher.exe - opera

?>