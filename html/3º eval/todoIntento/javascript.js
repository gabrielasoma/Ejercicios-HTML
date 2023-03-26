//reproductor de video con barra de progreso

//Un escuchador de evento
window.addEventListener('load', iniciar, false);
    function iniciar(){
        maximo = 600;
        medio = document.getElementById('medio');
        reproducir = document.getElementById('reproducir');
        barra = document.getElementById('barra');
        progreso = document.getElementById('progreso');
        reproducir.addEventListener('click', presionar, false);
        barra.addEventListener('click',mover,false);
}
//aqui se reproduce el video y se pone pausa
function presionar(){
if(!medio.paused && !medio.ended){
    medio.pause();
    reproducir.innerHTML = "Reproducir";
    bucle = setInterval(estado, bucle);
} else{  //unidad minima de recorrido
    medio.play();
    reproducir.innerHTML = "Pausa";
    bucle = setInterval(estado, 100);}
}
    //crear la barra de progreso del video
    function estado(){
        if(!medio.ended){
            var total = parseInt(medio.currentTime*maximo/medio.duration);
            progreso.style.width = total+'px';
        } else{
            progreso.style.width='0px';
            reproducir.innerHTML='Reproducir';
            window.clearInterval(bucle);
        }
    }
    function mover(e){
        if(!medio.paused && !medio.ended){
            var ratonX = e.pageX-barra.offsetLeft;
            var nuevoTiempo = ratonX*medio.duration/maximo;
            medio.currentTime = nuevoTiempo;
            progreso.style.width =  ratonX+'px';
        }
    }
    //para eventos multiples de botones
    function obtenerdatos(){
        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var edad = document.getElementById('edad').value;
        var salario = document.getElementById('salario').value;
        document.registros.nombreobtenido.value = nombre;
        document.registros.apellidobtenido.value = apellidos;
        document.registros.edadobtenida.value = edad;   
        document.registros.salarioobtenido.value = salario;        
    }
    function foco(elemento){//focus (cuando damos click)
        elemento.style.border = "3px solid grey";
        elemento.style.background = "crimson";
        elemento.style.color = "white"; }
    //no foco para evento onblur(cuando le quitamos click, es lo opuesto al onblur))
    function nofoco(elemento){
        elemento.style.border = "1px solid white";
        elemento.style.background = "pink";
        elemento.style.color = "white";}
    //cambio para onchange, cuando un usuario cambia la opcion seleccionada de un elemento select (enviar)
    function cambio(elemento){
        elemento.style.fontSize = "30px";
        elemento.style.background = "brown";
        elemento.style.textAlign = "center";
        elemento.style.color = "gold"; }
    //cargar para onload(ejercuta el js inmediatamente despues de que se haya cargado la pag)
    function cargar(elemento){         
        elemento.style.background = "gray";  
    }
/*==============*/