<!-- ?php
include_once './config/database.php';
require "../vendor/autoload.php";
require_once 'Tickets.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$email = '';
$id = '';
$token = null;

$secret_key = "YOUR_SECRET_KEY";
$jwt = null;
$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));
$idUser = $data->id;
$primaryName = $data->primaryName;
$lastName = $data->lastName;
$emailForNotifications = $data->emailForNotifications;
$mobilePhoneNumber = $data->mobilePhoneNumber;
$jwt = $data->jwt;


$jwt=isset($data->jwt) ? $data->jwt : "";

if($jwt){

    try {

        $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

        // Access is granted. Add code of the operation here 
        
        $table_name = 'userRegistration';
        try{
        $tickets = new Tickets($conn,$table_name,$idUser);
        $stmt = $tickets->UpdateUserData($primaryName, $lastName, $emailForNotifications, $mobilePhoneNumber, $idUser);
        
        if($stmt->execute()){

            http_response_code(200);
            echo json_encode(array("message" => "Data User Sucessfull Updated.",
            "response" => true));
        }  
        else{
            http_response_code(400);
             echo json_encode(array("message" => "Unable Update Data User.",
             "response" => false));
       
        }
         
        
    }catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
       

    }catch (Exception $e){  

        http_response_code(401);

         echo json_encode(array(
        "message" => "Access denied.",
        "error" => $e->getMessage()
        ));
    }
}

? -->
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

$user = $data->user;
$primaryName = $data->primaryName;
$lastName = $data->lastName;
$email = $data->email;
$emailForNotifications = $data->emailForNotifications;
$mobilePhoneNumber = $data->mobilePhoneNumber;
$imgUser = $data->mobilePhoneNumber;
$password = $data->password;
$id = $data->id;

$table_name = 'userRegistration';

$query = "UPDATE" . $table_name . "
                SET user = :user,
                password = :password,
                primaryName = :primaryName,
                lastName = :lastName,
                email = :email,
                emailForNotifications = :emailForNotifications,
                mobilePhoneNumber = :mobilePhoneNumber,
                imgUser = :imgUser WHERE id=:id";

$stmt = $conn->prepare($query);

$stmt->bindParam(':user',$user);
$stmt->bindParam(':primaryName', $primaryName);
$stmt->bindParam(':lastName', $lastName);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':emailForNotifications',$emailForNotifications);
$stmt->bindParam(':mobilePhoneNumber', $mobilePhoneNumber);
$stmt->bindParam(':imgUser', $imgUser);
$stmt->bindParam(':id', $id);
//$stmt->bindParam(':password',$password);

if($stmt->execute()){

    http_response_code(200);
    echo json_encode(array("message" => "User was successfully registered.","response" => true));
}  
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to register the user.","response" => false));
   
}
?>