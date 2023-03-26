class Empleado {
    constructor(nombre, cantidad, annoEntrada, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.annoEntrada = annoEntrada;
        this.precio = precio;
    }
}

class UI {
    addEmpleado(empleado){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `<div class="card text-center mb-4">
                                <div class="card-body">
                                    <strong>Nombre</strong>: ${empleado.nombre}
                                    <strong>Cantidad</strong>: ${empleado.cantidad}
                                    <strong>Año de Entrada</strong>: ${empleado.annoEntrada}
                                    <strong>Precio</strong>: ${empleado.precio}
                                  
                                    <a href="#" class="btn btn-danger" name="delete">BORRAR</a>
                                </div>
                            </div>
                            `;
                            productList.appendChild(element);
    }
  
    resetForm(){
        document.getElementById('product-form').reset();
    }
 
    deleteEmpleado(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
            alert('¿Está seguro que desea eliminarlo?')
            this.showMessage('Producto eliminado', 'danger');
        }
    }

    showMessage(message,cssClass){
        const div = document.createElement('div');

        div.className = `alert-${cssClass} h4`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        
        setTimeout(function (){
            document.querySelector(`.alert-${cssClass}`).remove();
        },2000);
    }
}


document.getElementById('product-form').addEventListener('submit', function(e){

    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const annoEntrada = document.getElementById('annoEntrada').value;
    const precio = document.getElementById('precio').value;
  
    const empleado = new Empleado(nombre, cantidad, annoEntrada, precio);

    const ui = new UI();
    
  
    ui.addEmpleado(empleado);
    ui.showMessage('Producto guardado correctamente', 'success');
  
    ui.resetForm();
    
    e.preventDefault();

});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteEmpleado(e.target);
    e.preventDefault();
});