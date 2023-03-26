//funcion anonima para cargar el contenido html
$(document).ready(function(){
    $('.submenu').on("click",function(){
        $(this).children("ul").slideToggle();
        

    })
    //para el evento del navegador que afecta el menu
    $("ul").on("click",function(e){
        e.stopPropagation();


    })

})
