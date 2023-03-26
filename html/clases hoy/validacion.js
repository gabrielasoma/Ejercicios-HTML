function validacion (){
    var nombre, apellido, correo, edad, telefono, textarea, CorreoValido,NombreValido, ApellidoValido;

    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    correo = document.getElementById('correo').value;
    edad = document.getElementById('edad').value;
    telefono = document.getElementById('telefono').value;
    textarea = document.getElementById('textarea').value;

    CorreoValido = /^\w+@\w+\.[a-z]{2,3}$/;
    NombreValido = /^[a-z]{2,30}$/i;
    ApellidoValido = /^[a-z]{5,30}$/i;
    MensajeValido = /^[\s\S]{0,100}$/i; //lo veremos despues

    if(nombre == "" || apellido == " " || correo == "" ||  telefono == "" || textarea == ""){
        alert ("Todos los campos son obligatorios");
        return false;
    }else if (!NombreValido.test(nombre)){
        alert("El nombre no es valido");
        return false;
    }else if(!ApellidoValido.test(apellido)){
        alert("El apellido no es válido");
        return false;
    }else if(!CorreoValido.test(correo)){
        alert("El correo no es válido");
        return false;
    }else if(correo.length < 8){//comprobar la longitud
        alert("El correo debe ser mayor de 8 caracteres");
        return false;
    }else if(isNaN(edad)){
        alert("La edad tiene que ser un numero");
        return false;
    }else if(edad < 18 || edad > 255){
        alert("Edad tiene que ser mayor que 18 y menor que 65");
        return false;
    }else if(isNaN(telefono)){
        alert("El telefono tiene que ser numerico");
        return false;
    }else if(textarea.length<255){
        alert("El texto tiene que ser menor de 255 caracteres");
    }
}