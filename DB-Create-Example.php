<html>
 <head>
  <title>Foo Bar 001</title>
 </head>
 <body>
  <h1>This is a simple DB test</h1>
  <p>First connect to your database...</p>
<?php
$servername = "localhost";
$username = "jdaltemu_tda";
$password = "13JamesHarden13";
$dbname = "jdaltemu_tda";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "<strong>Connected successfully</strong><br />";
?>

<p>Now crate the database if it does not already exist</p>
<?php
// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
company_name VARCHAR(60) NOT NULL,
visits INT(10) NOT NULL,
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating MyGuest table: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS Interest (
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
guest_id INT(6) UNSIGNED NOT NULL,
job_type INT (10) UNSIGNED NOT NULL,
visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(guest_id) REFERENCES MyGuests(id)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Interest created successfully";
} else {
    echo "Error creating interest table: " . $conn->error;
}

$conn->close();

?>