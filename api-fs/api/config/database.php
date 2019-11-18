<?php
// used to get mysql database connection
class DatabaseService{

    private $db_host = "localhost";
    //private $db_name = "lograDBBackendForApps";
    private $db_name = "id4060105_logradbbackendforapps";
    private $db_user = "id4060105_userpruebalogra";
    private $db_password = "1234abcd";
    private $connection;

    public function getConnection(){

        $this->connection = null;

        try{
            $this->connection = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
        }catch(PDOException $exception){
            echo "Connection failed: " . $exception->getMessage();
        }

        return $this->connection;
    }
}
?>