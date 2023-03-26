
    
    document.getElementById("nombre").addEventListener('focus', cambiar);
    document.getElementById("nombre").addEventListener('blur', volver);
    //evento para eel apellido
    document.getElementById("apellido").addEventListener('focus', cambiar);
    document.getElementById("apellido").addEventListener('blur', volver);
    //evento para el usuario
    document.getElementById("usuario").addEventListener('focus', cambiar);
    document.getElementById("usuario").addEventListener('blur', volver);
    //evento para apellido
    document.getElementById("usuario").addEventListener('focus', cambiar);
    document.getElementById("usuario").addEventListener('blur', volver);
    //evento para la clave
    document.getElementById("clave").addEventListener('focus', cambiar);
    document.getElementById("clave").addEventListener('blur', volver);
    document.getElementById("enviar").addEventListener('mousedown', activar);


    function cambiar(evento){
        var elemento = evento.target;
            //metodos que cambian las caracteristicas de los elementos html
            elemento.style.backgroundColor = 'red';
            elemento.style.fontSize = 'large';
            elemento.style.color = 'white'; 
    }


    function volver(evento){
        var elemento = evento.target;
        elemento.style.backgroundColor = 'white';
        elemento.style.fontSize = 'medium';
        elemento.style.color = 'black'; 
    }
    
    
    function activar(evento){   
        var elemento = evento.target;
        elemento.style.backgroundColor = 'green';
        elemento.style.borderWidth = '5px';
        elemento.style.borderColor= 'blue';
        elemento.style.borderRadius= '30px';
        //atributo value: el texto del boton
        elemento.value = 'ENVIANDO';
    }

