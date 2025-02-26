<?php
include('db_connection.php');

if(isset($_POST['task_id'])){
    $task_id = $_POST['task_id'];
    $query = "DELETE FROM tasks WHERE id = '$task_id'";
    if(mysqli_query($conn, $query)){
        echo "Task deleted successfully!";
    } else {
        echo "Error deleting task: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
