<?php
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "jdaltemu_tda";
$password = "13JamesHarden13";
$dbname = "jdaltemu_tda";

$conn = new mysqli($servername, $username, $password, $dbname); //connection

if ($conn->connect_error){
	die("Connection failed: " . $conn.connect_error);
}
echo "connection completed";

$highScore = mysql_query("SELECT high_score FROM HighScore WHERE id = 'score'");
echo "$highscore = " . $highScore;

$result = mysql_fetch_array($price);
echo "$result = " . $result;


?>