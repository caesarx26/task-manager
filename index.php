<?php
// This file will connect to the database and fetch tasks to display.
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Task Manager</h1>
        <div id="task-list"></div>
        <div>
            <input type="text" id="task-name" placeholder="Enter task name">
            <button id="add-task">Add Task</button>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>
