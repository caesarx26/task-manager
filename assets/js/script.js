$(document).ready(function () {
    // Fetch tasks and display them
    function fetchTasks() {
        $.ajax({
            url: 'fetch_tasks.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let taskList = $('#task-list');
                taskList.empty(); // Clear the list before adding new tasks
                if (data && data.length > 0) {
                    data.forEach(function (task) {
                        taskList.append(`
                            <div class="task-item" data-id="${task.id}">
                                <span>${task.task_name}</span>
                                <button class="delete-task">Delete</button>
                            </div>
                        `);
                    });
                } else {
                    taskList.append('<p>No tasks available.</p>');  // Show message if no tasks
                }
            },
            error: function (xhr, status, error) {
                console.error("Error fetching tasks: ", error);
                console.error("XHR Status: ", xhr.status);
                console.error("XHR Status Text: ", xhr.statusText);
                console.error("XHR Response Text: ", xhr.responseText);  // This will show the response body if there is one
                alert("An error occurred while fetching tasks. Please try again later.");
            }
        });
    }

    fetchTasks();

    // Function to add a new task
    function addTask(taskName) {
        if (taskName) {
            $.ajax({
                url: 'add_task.php',
                type: 'POST',
                data: { task_name: taskName },
                success: function (response) {
                    $('#task-name').val('');  // Clear input after adding task
                    fetchTasks();  // Refresh the task list
                },
                error: function (xhr, status, error) {
                    console.error("Error adding task: ", error);
                    console.error("XHR Status: ", xhr.status);
                    console.error("XHR Status Text: ", xhr.statusText);
                    console.error("XHR Response Text: ", xhr.responseText);
                    alert("An error occurred while adding the task. Please try again.");
                }
            });
        } else {
            alert("Please enter a task name.");
        }
    }

    // Add a new task when clicking the button
    $('#add-task').click(function () {
        let taskName = $('#task-name').val();
        addTask(taskName);  // Call the function to add the task
    });

    // Add a new task when pressing Enter
    $('#task-name').keypress(function (e) {
        if (e.which === 13) {  // Enter key
            let taskName = $('#task-name').val();
            addTask(taskName);  // Call the function to add the task
        }
    });


    // Delete a task
    $(document).on('click', '.delete-task', function () {
        let taskId = $(this).closest('.task-item').data('id');
        if (confirm("Are you sure you want to delete this task?")) {  // Confirmation before deletion
            $.ajax({
                url: 'delete_task.php',
                type: 'POST',
                data: { task_id: taskId },
                success: function (response) {
                    fetchTasks();  // Refresh the task list after deletion
                },
                error: function (xhr, status, error) {
                    console.error("Error deleting task: ", error);
                    console.error("XHR Status: ", xhr.status);
                    console.error("XHR Status Text: ", xhr.statusText);
                    console.error("XHR Response Text: ", xhr.responseText);
                    alert("An error occurred while deleting the task. Please try again.");
                }
            });
        }
    });
});
