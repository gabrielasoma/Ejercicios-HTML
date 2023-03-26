function financiera(){
    //crear las variables globales 
    //nuevo metodo para crear variables en js (sustituir var por let)
    let cantidad = document.getElementById('cantidad').value;
    let tiempo = document.getElementById('tiempo').value;
    //crear variables locales para los calculos
    let tasa = 0;

    if (cantidad >= 2000 && cantidad <=5000){
        tasa = 0.03;
    } else if(cantidad >= 5000 && cantidad <= 10000){
        tasa = 0.05;
    } else if (cantidad > 10000){
        tasa = 0.07;
    } else {
        alert("Las cantidades inferiores a 2000 no son admitidas ")
    }
    let intereses = cantidad * tasa * tiempo;
    let importe = Number(cantidad) + Number(intereses);
    document.getElementById('resultado').value = importe;
}



