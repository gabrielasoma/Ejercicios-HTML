(function(){

    var actualizarHora = function(){
    var fecha = new Date(),
        horas =fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

        var pHoras = document.getElementById("horas"),
        pAMPM = document.getElementById ("ampm"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");

        // crear unn array para los dias de la semana
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textcontent = semana[diaSemana]
        pDia.textContent = dia;
        // necesito un array para los meses del año
        var meses = ['Enero','Febrero','Marzo','Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = year; 
        // comenzamos a programar las primeras 12 horas del reloj 

        if (horas>=12){
          
            horas = horas -12;
            ampm = "PM";
        } else {
            ampm = "AM";

        }

        //Segunda parte del reloj 
        
        if(horas == 0){
            horas = 12;
        }
        pHoras.textContent = horas;
        pAMPM = ampm;
        // le aplicamos minutos if se define minutos 

        if(minutos < 10) {minutos ="0" + minutos};
          
        if(segundos < 10) {minutos ="0" + segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

 }

 actualizarHora();

// funcion para automatizar un ellemento ( reloj., animacion,cronometro)
var intervalo = setInterval (actualizarHora, 1000);
















}());