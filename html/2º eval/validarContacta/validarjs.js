
function validar (){
        //guardar en variable los datos que se meten en los campos
        var nombre, apellidos, correo, usuario, clave,telefono,archivo, expreCorreo, expreNombre,expreApellidos, expreArchivo;
        nombre = document.getElementById('nombre').value;
        apellidos = document.getElementById('apellidos').value;
        correo = document.getElementById('correo').value;
        usuario = document.getElementById('usuario').value;
        clave = document.getElementById('clave').value;
        telefono = document.getElementById('telefono').value;
        archivo = document.getElementById('archivo').value;

        //crear las expresiones
        //camilofuentes@grupooceep.com;
        var expreCorreo = /\w+@\w+\.[a-z]{2,3}/; 
        var expreNombre = /^[a-z]{2,15}$/i; //i admite tanto mayusculas como minusculas
        var expreApellidos =/^\w+\s+\w/i;
        var expreArchivo = /\.(pdf|odt|docx?)/;  //pregunta de examen ¿porqeu no podemos comenzar con ^?  inicio ^ fin $
        //contralar que se rellene todos los campos
        if(nombre == ""|| apellidos == ""|| correo == "" || usuario == "" || clave == "" || telefono == ""){
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (!expreNombre.test(nombre)){
        alert("El nombre no es correcto");
            return false;
        }else if (!expreApellidos.test(apellidos)){
        alert("El campo apellidos no es valido");
             return false;
        }else if(!expreCorreo.test(correo)){
         alert("Correo no válido");
         return false;
        }else if(correo.length < 8){
         alert("El correo debe ser superior a 8 caracteres");
         return false;
        }else if(telefono.length <9){
            alert("Telefono no es válido");
            return false;
        }else if(isNaN(telefono)){
            alert("Telefono debe de ser numérico");
            return false;
        }else if(!expreArchivo(archivo)){
            alert("Archivo no válido");
            return false;
        }else {
            document.write("BYE")
         //   document.write(`Datos recibidos : </br> ` <b><b>Nombre y apellidos</b>${nombre}${apellidos});               
         //alert("")
        alert("tus datos han sido registrados correctamente")
        }   
}

  
