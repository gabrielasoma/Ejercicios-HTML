function financiera(){
    let cantidad = document.getElementById('cantidad').value;
    let tiempo = document.getElementById('tiempo').value;
    let tasa = 0;

    switch(true){
    case cantidad >= 2000 && cantidad <=5000:
        tasa = 0.03;
        break;
    case cantidad >= 5000 && cantidad <= 10000:
        tasa = 0.05;
        break;
    case cantidad > 10000:
        tasa = 0.07;
        break;
    default:
         document.write("La inversion debe de ser superior o igual a 2000");
        break;
    }
    //document.getElementById('tasa').value = tasa;
    let intereses = cantidad * tiempo  * tasa;
    let importe = Number(cantidad) + Number(intereses);
    document.getElementById('resultado').value = importe;
}
 

