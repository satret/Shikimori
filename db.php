<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'website');
    $db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    //if($mysql->connect_errno) exit('Ошибка подключения к БД');
    if (mysqli_connect_errno()) {
        echo "Подключение невозможно: ".mysqli_connect_error();
    }
    if($db){
        echo "Успешное подключение";
    }
    echo "/n";
    //$mysql->close();
    ?>
