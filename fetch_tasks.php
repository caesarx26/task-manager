<?php
include('db_connection.php');

$query = "SELECT * FROM tasks";
$result = mysqli_query($conn, $query);

$tasks = array();
while($row = mysqli_fetch_assoc($result)){
    $tasks[] = $row;
}

echo json_encode($tasks);

mysqli_close($conn);
?>
