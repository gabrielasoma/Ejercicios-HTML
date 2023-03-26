$fotoUno = ('fotouno');
$fotoDos = ('fotodos');
$fotoTres = ('fototres');
$fotoCuatro = ('fotocuatro');

$('btnuno').on("click", function(){
    $fotoUno.slideDown(3000).slideUp(3000).fadeIn(5000);
});


$('btndos').on("click", function(){
    $fotoDos.hide(3000).fadeIn(5000);
});


$('btntres').on("click", function(){
    $fotoTres.animate({with:"150px",height: "100px"});

});


$('btncuatro').on("click", function(){
    $fotoCuatro.slideToggle

});


