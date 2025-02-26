# Task Manager PHP Project

A simple task manager application built with PHP, MySQL, and jQuery that allows users to add, view, and delete tasks with real-time updates using AJAX.

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Real-time updates with AJAX

## Prerequisites

- Apache web server
- MySQL (5.7+)
- PHP (7.0+)
- PHP mysqli extension
- jQuery (included via CDN)

## Installation

### 1. Set Up LAMP Stack on Ubuntu

#### Install Apache
```bash
sudo apt update
sudo apt install apache2
```
Verify installation by visiting http://localhost/ in your browser.

#### Install MySQL
```bash
sudo apt install mysql-server
sudo mysql -u root -p
```

Once logged in, set a password for the root user:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
```

#### Install PHP and Required Extensions
```bash
sudo apt install php libapache2-mod-php php-mysqli
sudo systemctl restart apache2
```

### 2. Configure Apache

Enable PHP on Apache:
```bash
sudo a2enmod php
sudo systemctl restart apache2
```

#### Optional: Set Up Virtual Host
Create a configuration file:
```bash
sudo nano /etc/apache2/sites-available/task-manager.conf
```

Add the following configuration:
```apache
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/task-manager
    ServerName localhost

    <Directory /var/www/html/task-manager>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Enable the site and restart Apache:
```bash
sudo a2ensite task-manager.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 3. Set Up MySQL Database

Login to MySQL:
```bash
sudo mysql -u root -p
```

Create database and table:
```sql
CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    status ENUM('pending', 'completed') DEFAULT 'pending'
);
```

### 4. Project Setup

Clone or download the project to your web server directory:
```bash
cd /var/www/html/
git clone https://your-repository-url/task-manager.git
```

Create a `functions.php` file:
```php
<?php
function write_log($message) {
    $logfile = '/var/www/html/task-manager/logs/app.log';
    $current_time = date('Y-m-d H:i:s');
    $log_message = "[{$current_time}] - {$message}\n";
    file_put_contents($logfile, $log_message, FILE_APPEND);
}
?>
```

Create a `db_connection.php` file:
```php
<?php
$servername = "localhost";
$username = "root";
$password = "yourpassword";  // Replace with your MySQL root password
$dbname = "task_manager";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    write_log("Connection failed: " . mysqli_connect_error());
    die("Connection failed: " . mysqli_connect_error());
} else {
    write_log("Connected to the database successfully!");
}
?>
```

### 5. Set Permissions for Logging

Create a logs directory and set permissions:
```bash
mkdir -p /var/www/html/task-manager/logs
sudo chown -R www-data:www-data /var/www/html/task-manager/logs
sudo chmod -R 755 /var/www/html/task-manager/logs
```

## Usage

Access the application at:
```
http://localhost/task-manager
```

## Troubleshooting

### Apache Issues
Check Apache error logs:
```bash
sudo tail -f /var/log/apache2/error.log
```

### PHP Errors
Enable PHP error logging by editing your php.ini file:
```ini
log_errors = On
error_log = /var/log/php_errors.log
```

Restart Apache:
```bash
sudo systemctl restart apache2
```

### MySQL Connection Issues
- Verify credentials in db_connection.php
- Ensure MySQL service is running:
```bash
sudo systemctl status mysql
```

## Project Structure
```
task-manager/
├── index.php              # Main application page
├── db_connection.php      # Database connection settings
├── functions.php          # Utility functions
├── assets/                # CSS, JS files
│   ├── css/
│   └── js/
└── logs/                  # Application logs
    └── app.log
```
