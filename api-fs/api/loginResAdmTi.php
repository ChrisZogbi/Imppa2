<?php
include_once './config/database.php';
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$email = '';
$password = '';
$key = '';

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();



$data = json_decode(file_get_contents("php://input"));

$nombre = $data->nombre;
$apellido = $data->apellido;
$email = $data->email;
$password = $data->password;
$key = $data->secretKey;

$table_name = 'adminData';

$query = "SELECT nombre, apellido, email, password, secretKey FROM " . $table_name . " WHERE email = ? LIMIT 0,1";

$stmt = $conn->prepare( $query );
$stmt->bindParam(1, $email);
$stmt->execute();
$num = $stmt->rowCount();

if($num > 0){
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $nombre = $row['nombre'];
    $apellido = $row['apellido'];
    $email = $row['email'];
    $key = $row['secretKey'];
    $password2 = $row['password'];

    if(password_verify($password, $password2))
    {
        $secret_key = "L2o0g1r9a_SeCrEt_KeY";
        if(strcmp($key,$secret_key)==0){
        
        $issuer_claim = "LogrA_ServeR"; // this can be the servername
        $audience_claim = "LoGrA_AUDIENCE";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 10; //not before in seconds
        $expire_claim = $issuedat_claim + 3600; // expire time in seconds
        $token = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => array(
                "nombre" => $nombre,
                "apellido" => $apellido,
                "key" => $key,
                "email" => $email
        ));

        http_response_code(200);

        $jwt = JWT::encode($token, $secret_key);
        echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt,
                "nombre" =>$nombre,
                "apellido" => $apellido,
                "email" => $email,
                "expireAt" => $expire_claim
            ));


        }else{
            http_response_code(401);
        echo json_encode(array("message" => "Login failed.", "secretKey" => $key));
        }
        
        
    }
    else{

        http_response_code(401);
        echo json_encode(array("message" => "Login failed.", "password" => $password));
    }
}
?>