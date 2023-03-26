
/*foto 1  animate*/
$(document).ready(function(){
    $("#efectoUno").click(function(){
        $("#f1").animate({width:'100px', height:'100px'});
            });
    });


/*foto 2 animate*/
$(document).ready(function(){
    $("#efectoDos").click(function(){
        $("#f2").animate({width:'100px', height:'100px'});
            });
    });


/*foto 3 animate*/
$(document).ready(function(){
    $("#efectoTres").click(function(){
        $("#f3").animate({width:'100px', height:'100px'});
            });
    });



/*slide down*/ 
$(document).ready(function(){
    $("#bt1").click(function(){
        $("#f1").slideUp(1000);
         });
    });

    /*fade in*/ 
$(document).ready(function(){
    $("#bt2").click(function(){
        $("#f2").fadeOut(1500);
         });
    });

    /*slide toggle*/   
$(document).ready(function(){
    $("#bt3").click(function(){
        $("#f3").slideToggle(2000);
            });
    });
        