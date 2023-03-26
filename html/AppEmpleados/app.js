class Empleado {
    //MEDIANTE EL METODO CONSTRUCTOR CREO LAS PROPIEDADES DE LA CLASE PRODUCTOS.
    constructor(nombre, apellidos, edad, annoAlta, salario){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.annoAlta = annoAlta;
        this.salario = salario;
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
                                    <strong>Apellidos</strong>: ${empleado.apellidos}
                                    <strong>Edad</strong>: ${empleado.edad}
                                    <strong>añoAlta</strong>: ${empleado.annoAlta}
                                    <strong>Salario</strong>: ${empleado.salario}
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
            this.showMessage('Empleado eliminado', 'danger');
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
        },1000);
    }
}

//EVENTOS DEL DOM
document.getElementById('product-form').addEventListener('submit', function(e){// escuchador de evento boton para boton submit
    const name = document.getElementById('name').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const annoAlta = document.getElementById('annoAlta').value;
    const salario = document.getElementById('salario').value;

    const empleado = new Empleado(name, apellidos, edad, annoAlta, salario);
//aqui termina el paso 1, ahora toca el 2: comienza a desarrollar añadir un nuevo producto
    //create a mew UI paso
    const ui = new UI();
    
    //Save prodruct
    ui.addEmpleado(empleado);
    ui.showMessage('El empleado ha sido añadido correctamente', 'success');
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