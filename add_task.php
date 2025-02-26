
<?php
include('db_connection.php');

if(isset($_POST['task_name'])){
    $task_name = $_POST['task_name'];
    $query = "INSERT INTO tasks (task_name) VALUES ('$task_name')";
    if(mysqli_query($conn, $query)){
        
        echo "Task added successfully!";
    } else {
        echo "Error adding task: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
