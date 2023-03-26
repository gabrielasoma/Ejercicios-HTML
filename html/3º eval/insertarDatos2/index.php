<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Formulario_registros</title>

<link rel="stylesheet"  href="estilos.css"/> 
<style>

main{
    width: 90%;
    margin: 0 auto;
}

section{
    width: 100%;
    margin: 0 auto;

}

.insertar{
    width: 30%;
    float: left;
}

.mostrar{
    width: 60%;
    float:right;
    color: #fff;
}

table{
    border: 2px double;
    width: 100%;
    text-align: left;
    background: green;
}
tr{
    border: solid gold;
}

h2{
    text-align: center;
}

</style>
 <script src="validar.js"></script>   

</head>
<body>
    <main>
        <section>    
        <div class="insertar">
        <h1>FORMULARIO DE REGISTRO</h1>  
        <form action="insertar.php" method="post">
            <h2 class="form-titulo">CREA TU CUENTA</h2>
            <div class="contenedor-inputs">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="input-48">    
                <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" class="input-48">
                <input type="text" id="correo" name="correo" placeholder="Correo" class="input-100">
                <input type="text" id="usuario" name="usuario" placeholder="Usuario" class="input-48">
                <input type="password" id="clave" name="clave" placeholder="Contraseña" class="input-48">
                <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="input-100">
                <input class="btn-enviar" type="submit" name="insertar" value="Registrar" onclick="validar()">
                <p class="form-link">¿Ya tienes una cuenta?<a href="#">Ingresa aqui</a></p>
            </div> 
        </form>
        </div>
        <div class="mostrar">
            <h2> - LISTADO DE USUARIOS - </h2>
                <table>
                    <tr>
                        <td>Nombre</td><td>Apellido</td><td>Correo</td><td>Usuario</td><td>Contraseña</td><td>Telefono</td>
                    </tr>          
                </table>

        </div>
    </section>
    </main>
</body>
 </html>