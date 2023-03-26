function financiera(){
    //crear las variables globales 
    //nuevo metodo para crear variables en js (sustituir var por let)
    let cantidad = document.getElementById('cantidad').value;
    let tasa = document.getElementById('tasa').value;
    let tiempo = document.getElementById('tiempo').value;
    //crear variables locales para los calculos
    let intereses = cantidad * tasa/100 * tiempo;
    let importe = Number(cantidad) + Number(intereses);
    document.getElementById('resultado').value = importe;

}