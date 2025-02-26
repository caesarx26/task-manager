<?php
include('functions.php');

$servername = "localhost";
$username = "root";  // default username for MySQL
$password = "12345678";      // default password for MySQL
$dbname = "task_manager";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    echo "Connection failed: " . mysqli_connect_error();
    die("Connection failed: " . mysqli_connect_error());
}

//write_log("Connected successfully");
//echo "connected successfully";
?>
