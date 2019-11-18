<?php
include_once './config/database.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$user = '';
$password = '';
$primaryName = '';
$lastName = '';
$email = '';
$emailForNotifications = '';
$password = '';
$mobilePhoneNumber = '';
$id = '';
$imgUser = null;
$conn = null;

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));


$primaryName = $data->primaryName;
$lastName = $data->lastName;
$emailForNotifications = $data->emailForNotifications;
$mobilePhoneNumber = $data->mobilePhoneNumber;
$id = $data->id;

$table_name = 'userRegistration';

$query = "UPDATE userRegistration 
                SET primaryName = :primaryName,
                lastName = :lastName,
                emailForNotifications = :emailForNotifications,
                mobilePhoneNumber = :mobilePhoneNumber
                WHERE id=:id";

$stmt = $conn->prepare($query);


$stmt->bindParam(':primaryName', $primaryName);
$stmt->bindParam(':lastName', $lastName);
$stmt->bindParam(':emailForNotifications',$emailForNotifications);
$stmt->bindParam(':mobilePhoneNumber', $mobilePhoneNumber);
$stmt->bindParam(':id', $id);
//$stmt->bindParam(':password',$password);

if($stmt->execute()){

    http_response_code(200);
    echo json_encode(array("message" => "User Data Was Successfully updated.","response" => true));
}  
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to Update Data User.","response" => false));
   
}
?>