<?php
$dsn = "mysql:dbname=diw;host=localhost";
$DBuser = "francisco_admin";
$DBpassword = "Admin17";
$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::MYSQL_ATTR_FOUND_ROWS => true);

$connection = new PDO($dsn, $DBuser, $DBpassword, $options);