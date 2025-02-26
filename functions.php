<?php
function write_log($message) {
    $logfile = '/var/www/html/task-manager/logs/app.log'; // Path to your app.log file
    $current_time = date('Y-m-d H:i:s');  // current timestamp
    $log_message = "[{$current_time}] - {$message}\n";
    file_put_contents($logfile, $log_message, FILE_APPEND); // Append the log message to the file
}
