<?php

$dsn = "mysql:host=mysql.hostinger.es;dbname=u268465618_diw";
$DBuser = "u268465618_admin";
$DBpassword = "admin17";

try {
    $dbh = new PDO($dsn, $DBuser, $DBpassword);
} catch (PDOException $e) {
//echo $e->message;
    var_dump($e);
}

$sth = $dbh->prepare("Select name, password from profesores where name = ? and password = ?");

$sth->execute(array($_POST['user'], md5($_POST['password'])));
if ($sth->fetch()) {
    echo 1;
} else {
    echo 0;
}

