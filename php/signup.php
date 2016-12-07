<?php
include 'dbConnect.php';

function addUser()
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "INSERT INTO SignUp (name,email,username,password) VALUES ('$name','$email','$username','$password')";
    $data = mysql_query ($query) or die(mysql_error()); 
    if($data) 
    { 
        echo "<h1>You are unstoppable!</h1>"; 
        
    }
}

function signUp()
{
    if(!empty($_POST['username']))
    {
        $query = mysql_query("SELECT * FROM SignUp WHERE username = '$_POST[username]' AND password = '$_POST[password]'") or die(mysql_error());
        if(!$row = mysql_fetch_array($query) or die(mysql_error()))
        {
            addUser();
        }
        else
        {
            echo "<h1>This username has already taken!<h1>";
        }
    }
    if(isset($_POST['submit']))
    {
        signUp();
    }
}
?>