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
$imgUser = null;
$conn = null;

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));

$user = $data->user;
$primaryName = $data->primaryName;
$lastName = $data->lastName;
$email = $data->email;
$emailForNotifications = $data->emailForNotifications;
$mobilePhoneNumber = $data->mobilePhoneNumber;
$imgUser = $data->mobilePhoneNumber;
$password = $data->password;

$table_name = 'userRegistration';

$query = "INSERT INTO " . $table_name . "
                SET user = :user,
                password = :password,
                primaryName = :primaryName,
                lastName = :lastName,
                email = :email,
                emailForNotifications = :emailForNotifications,
                mobilePhoneNumber = :mobilePhoneNumber,
                imgUser = :imgUser";

$stmt = $conn->prepare($query);

$stmt->bindParam(':user',$user);
$stmt->bindParam(':primaryName', $primaryName);
$stmt->bindParam(':lastName', $lastName);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':emailForNotifications',$emailForNotifications);
$stmt->bindParam(':mobilePhoneNumber', $mobilePhoneNumber);
$stmt->bindParam(':imgUser', $imgUser);
//$stmt->bindParam(':password',$password);

$password_hash = password_hash($password, PASSWORD_BCRYPT);

$stmt->bindParam(':password', $password_hash);




if($stmt->execute()){

    http_response_code(200);
    echo json_encode(array("message" => "User was successfully registered.","response" => true));
}  
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to register the user.","response" => false));
   
}
?>