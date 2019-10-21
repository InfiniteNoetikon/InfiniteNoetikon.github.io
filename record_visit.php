<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$servername = "localhost";
$username = "jdaltemu_tda";
$password = "13JamesHarden13";
$dbname = "jdaltemu_tda";
 
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
		die($rvJSON);
} 
else {
	echo "connected \n";
}

// sql to create table (https://www.w3schools.com/php/php_mysql_select.asp)
$sql = "SELECT id, visits, company_name FROM MyGuests WHERE company_name='" . $obj->company . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // got a response get values for update
		$outp = mysqli_fetch_assoc($result);
		echo "already here!!! \n";
		
		$x = $outp["visits"] + 1;
		$sql = "UPDATE MyGuests SET visits = " . $x . " WHERE id = " . $outp["id"];
		$result = $conn->query($sql);
		if ($result === TRUE){
			echo ($outp["company_name"] . "'s visit " . $x . " recorded \n");
		}
		else {
			echo "did not record " . $outp["company_name"] . " visit " . $x . "\n";
		}
		
		$sql = "INSERT INTO Interest(guest_id, job_type, com_name) VALUES ('" . $outp["id"] . "','" . $obj->job_type . "','" . $obj->company . "')";
		$result = $conn->query($sql);
		if ($result === TRUE){
			 echo "success \n";
		} else {
			 echo "failed \n";
		}
		
} 
else {
    // no response add entry
		echo "not in here \n";
		
    $sql = "INSERT INTO MyGuests (company_name, visits) VALUES ('" . $obj->company . "', 1)";
		$result = $conn->query($sql);
		
		if ($result === TRUE){
			$sql = "SELECT id, visits FROM MyGuests WHERE company_name='" . $obj->company . "'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
					// got a response get values for update
					$outp = mysqli_fetch_assoc($result);
					echo "successfully inserted!!! \n";
					$sql = "INSERT INTO Interest(guest_id, job_type, com_name) VALUES ('" . $outp["id"] . "','" . $obj->job_type . "','" . $obj->company . "')";
					$result = $conn->query($sql);
					if ($result === TRUE){
						 echo "success \n";
					} else {
						 echo "failed \n";
					}
			} 
			else {
      die($rvJSON);
      echo ("fail \n");
			}
		}
		else {
			echo "failed";
		}
}

$conn->close();
?>