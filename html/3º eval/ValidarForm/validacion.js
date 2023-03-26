/*
Ejercicio:
-Todos los campos sean obligatorios
-Nombre expresión de solo texto
-Un solo apellido
-Correo validado como el anterior 
-Edad tiene que ser un numero y tiene que ser mayor a 18 años
-Telefono que sean números
-Texto area tiene que ser menora  255 letras  

entra html y javasc
galeria, video, 2 preguntas de html y luegho java
*/
//1.creamos una función que contendra todo el proceso de validación
function validacion(){
  //2. Las variables que guardarán los datos que introduce el usuario
  var nombre,
    apellido,
    correo,
    edad,
    telefono,
    usuario,
    CorreoValido,
    NombreValido,
    ApellidoValido;
  //3. Asignar a las variables los datos de los campos del formulario
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  correo = document.getElementById("correo").value;
  edad = document.getElementById("edad").value;
  telefono = document.getElementById("telefono").value;
  usuario = document.getElementById("usuario").value;
  //las expresiones regulares

  CorreoValido = /^\w+@\w+\.[a-z]{2,3}$/;
  NombreValido = /^[a-z]{2,30}$/i;
  ApellidoValido = /^[a-z]{2,30}$/i;
  //controlo que se rellene todos los campos porque son obligatorios
  if (
    nombre == "" ||
    apellido == "" ||
    correo == "" ||
    edad == "" ||
    telefono == "" ||
    usuario == ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (!NombreValido.test(nombre)) {
    alert("El nombre no es válido");
    return false;
  } else if (!ApellidoValido.test(apellido)) {
    alert("El apellido no es válido");
    return false;
  } else if (!CorreoValido.test(correo)) {
    alert("El correo no es válido");
    return false;
  } else if (correo.length < 8) {
    alert("El correo tiene que ser mayor a 8 caracteres");
    return false;
  } else if (isNaN(edad)) {
    alert("La edad tiene que ser un número");
    return false;
  } else if (edad < 18 || edad > 120) {
    alert("La edad tiene que ser mayor a 18 años y menor a 120");
    return false;
  } else if (isNaN(telefono)) {
    alert("El telefono tiene que ser numérico");
    return false;
  } else if (usuario.length < 8) {
    alert("El usuario tiene que ser mayor que 8 caracteres");
    return false;
  }
}
