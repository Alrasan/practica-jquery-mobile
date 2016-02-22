<?php

require_once './DB.config.php';

/**
 * 
 * @param PDO $connection
 * @param string $username
 * @param string $password
 * @return boolean
 */
function validateUser($connection, $username, $password){
    
    $sql = "Select username, password from users where username=:username and password=:password";
    
    $stmt = $connection->prepare($sql);
    
    $stmt->bindValue(':username', $username);
    $stmt->bindValue(':password', md5($password));
    
    $stmt->execute();
    
    if($stmt->fetch()){
        return true;
    }else{
        return false;
    }
    
}

function getAlumns($connection, $classroom){
    
    $sql = "Select * from alumns where clase=:clase";
    
    $stmt = $connection->prepare($sql);
}