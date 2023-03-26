$(".submenu").on("click", function(){
//para no llamar nuevamente el .submenu
    $(this).children("ul").slideToggle()
})
//detenemos la propagación de evento, la función tiene el argumento e
//selecciono al elemensto padre UL
$("ul").on("click", function(e){
   e.stopPropagation();
       
})


$(document).ready(function(){
    $("#btn1").click(function(){
        $("#desc").fadeIn(3000);
         });
    });

    
$(document).ready(function(){
    $("#btn2").click(function(){
        $("#desc1").slideUp(3000);
         });
    });
    

$(document).ready(function(){
    $("#btn3").click(function(){
        $("#desc2").fadeIn(3000);
         });
    });

    
$(document).ready(function(){
    $("#btn4").click(function(){
        $("#desc3").slideToggle(3000);
         });
    });

