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

$login = $_POST["login"];
$pass = $_POST["pass"];
//SELECT * FROM schedule.books
$sql = "SELECT * FROM website.authorization_2";
//$sql = "SELECT * FROM Users";
if($result = $dbconnection->query($sql)){
    foreach($result as $row){
        if($row["login"]==$login && $row["pass"]==$pass){
            $id=$row["id"];
            $connect="Успешно";
            break;
        }
        else{
            $connect="Не успешно";
            echo "Ошибка: неверный логин или пароль";
            break;
        }
    }
    $result->free();
} else{
    echo "Ошибка: " . $dbconnection->error;
}
$_SESSION['auth'] = true;

/*
    Пишем в сессию логин и id пользователя
    (их мы берем из переменной $user!):
*/
/*
$_SESSION['id'] = $id['id'];
$_SESSION['login'] = $login['login'];

//Пишем в сессию статус пользователя (приоритет):
//$_SESSION['staus'] = $login['staus'];
$_SESSION['user']['rank'] = 1;
if ($_SESSION['user']['rank'] >= 50){
    if($_SESSION['user']['rank']>0){
        echo "sao";
    }
}
*/
if($connect=="Успешно") {
    $new_url = "website/website.html";
    header('Location: ' . $new_url);
}
$dbconnection->close();
//$new_url = "website/website.html";
//header('Location: '.$new_url);
exit();
?>
