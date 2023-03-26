<?PHP

$usuario = "root";
$contrasena = "1234";
$bd = "empresados";



try {
    $conexion = new PDO("mysql:host:localhost:8080;dbname:".$bd,$usuario,$contrasena);
    echo "Conexion Realizada! :)";


}catch(Exception $e){


    echo "Error de Conexión :(".$e->getMessage();

}




?>