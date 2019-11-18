<?php
 
 include_once './config/database.php';
 require "../vendor/autoload.php";
 require_once 'Tickets.php';
 use \Firebase\JWT\JWT;

 $databaseService = new DatabaseService();
 $conn = $databaseService->getConnection();


	if($_SERVER['REQUEST_METHOD']=='POST'){
		
		$image = $_POST['image'];
		
		//require_once('dbConnect.php');
		
		$sql = "UPDATE INTO userRegistration (imageUser) VALUES (?)";
 
		$stmt = mysqli_prepare($conn,$sql);
		
		mysqli_stmt_bind_param($stmt,"s",$image);
		mysqli_stmt_execute($stmt);
		
		$check = mysqli_stmt_affected_rows($stmt);
		
		if($check == 1){
			echo "Image Uploaded Successfully";
		}else{
			echo "Error Uploading Image";
		}
		mysqli_close($con);
	}else{
		echo "Error";
	}