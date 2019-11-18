<?php
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
$jwt = $data->jwt;





$jwt=isset($data->jwt) ? $data->jwt : "";

if($jwt){

    try {

        $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

        // Access is granted. Add code of the operation here 
        
        $table_name = 'userRegistration';
        try{
        $tickets = new Tickets($conn,$table_name,$idUser);
        $stmt = $tickets->readAllDataFromUserRegistrationTable();

         
        // this is how to get number of rows returned
        $num = $stmt->rowCount();
        if($num>0){

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $userName = $row['user'];
            $primaryName = $row['primaryName'];
            $lastName = $row['lastName'];
            $emailForNotifications = $row['emailForNotifications'];
            $mobilePhoneNumber = $row['mobilePhoneNumber'];

            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Successful Request.",
                    "userName" => $userName,
                    "primaryName" => $primaryName,
                    "lastName" => $lastName,
                    "emailForNotifications" => $emailForNotifications,
                    "mobilePhoneNumber" => $mobilePhoneNumber
                ));

        }  
        // if no records found
        else{
            echo json_encode(array("message" => "Usuario No encontrado:",
                "total_records" => 0));
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

?>