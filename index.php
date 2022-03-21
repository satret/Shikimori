<?php
    session_start();
    require_once 'db.php';
    //require_once 'Authorization.html';
    $new_url = "website/Login.html";
    header('Location: '.$new_url);
    exit();
    //require_once 'Commands.php';
    //echo('saosasao');
    //require_once 'website/website.html';
?>
