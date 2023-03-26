
  function  inicializar(){
    var btn1;
    var btn2; 
    btn1 = document.getElementById('titulo');
    btn1.addEventListener("click",titulo);
   
    btn2 = document.getElementById('parrafos');
    btn2.addEventListener("click",parrafos);
}


function titulo(){
    var titulo;
    titulo = document.getElementById('descripcion')
    titulo.style.color = "green";
    titulo.style.textAlign = "center";
    titulo.style.fontSize = "18pt";
}


function parrafos(){
    var parrafo;
    parrafo = document.getElementById('descripcion')
    parrafo.style.color = "orange";
    parrafo.style.justifyContent = "justify";
    parrafo.style.fontSize = "14pt";
    parrafo.style.background = "rgb(54, 155, 54)";
}


/*ejercicio 5*/ 
var nuevo = document.getElementById("nuevo");
var elemento = document.createElement("p");
var contenido = document.createTextNode("Gracias por ponerte en contacto con nosotros, analizaremos tu curriculo y en breve tendras respuesta por parte nuestra");
elemento.appendChild(contenido);
elemento.setAttribute("align","center");
document.getElementById("nuevo").appendChild(elemento);


function nuevo(){
nuevo = document.getElementById('p');
nuevo.addEventListener("mouseover",nuevo);

}

