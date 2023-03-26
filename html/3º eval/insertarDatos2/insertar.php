<?PHP

    if(isset($_POST['insertar'])){
        //tiene que contenter la conexion a la base de datos
        include('conexion.php');

        //guardar en variables los datos introducidos en el formulario

        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellidos'];
        $correo = $_POST['correo'];
        $usuario = $_POST['usuario'];
        $clave = $_POST['clave'];
        $telefono = $_POST['telefono'];


        //CONSULTA PREPARE
        $sql = $conexion ->prepare("INSERT INTO usuarios(nombre,apellidos,usuario,clave,telefono,correo)
        VALUES(?,?,?,?,?,?)");
        
        //EJECUTAR LA CONSULTA

        $resultado = $sql -> execute([$nombre,$apellido,$usuario,$clave,$telefono,$correo]);
  
        if($resultado === true){
            //volver al formulario
            header('Location:index.php');
        }else{
            echo "Error al insertar el registro :|";
        }
    }





?>


