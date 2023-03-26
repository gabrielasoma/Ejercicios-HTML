class Empleado {
    constructor(nombre, cantidad, annoEntrada, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.annoEntrada = annoEntrada;
        this.precio = precio;
    }
}


//creo una nueva clase para interactuar con la interfaz IU
class UI {
    //metodo para añadir produto
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
  
    
    //metodo para resetear el formulario y despues de añadir un producto queden limpios
    resetForm(){
        document.getElementById('product-form').reset();
    }
    //metodo para eliminar
    deleteEmpleado(element){
        if(element.name === 'delete'){//si encuentras que el nombre del elemento es delete
            element.parentElement.parentElement.remove();//accede al primer pariente y luego su hijo y borraro, aqui termina evento eliminar
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

//EVENTOS DEL DOM
document.getElementById('product-form').addEventListener('submit', function(e){// escuchador de evento boton para boton submit
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const annoEntrada = document.getElementById('annoEntrada').value;
    const precio = document.getElementById('precio').value;
   
    const empleado = new Empleado(nombre, cantidad, annoEntrada, precio);

//aqui termina el paso 1, ahora toca el 2: comienza a desarrollar añadir un nuevo producto
    //create a mew UI paso
    const ui = new UI();
    
    //Save prodruct
    ui.addEmpleado(empleado);
    ui.showMessage('Producto añadido correctamente', 'success');
    //4.h A la instancia le añado el metodo showMessage(el texto del mensaje y el color de bootstrap que guste, en este caso verde)
    ui.resetForm();
    
    e.preventDefault();

});
//paso 3: accedo al product-list para asociar in evento click
document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();//paso 3.b: una nueva instancia de UI para eliminar
    ui.deleteEmpleado(e.target);//paso 3.C: comprueba si se ha hecho click en el boton
    e.preventDefault();
});