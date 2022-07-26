/* // creamos la funcion validacion de producto
let seleccionaProducto = 0

function validacionProducto (){

    seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + arrayProductos[0].nombre + " con un precio de: " + arrayProductos[0].precio + "\nProducto2: " + arrayProductos[1].nombre + " con un precio de: " + arrayProductos[1].precio + "\nProducto3: " + arrayProductos[2].nombre + " con un precio de: " + arrayProductos[2].precio +  "\nProducto4: " + arrayProductos[3].nombre + " con un precio de: " + arrayProductos[3].precio + "\nProducto5: " + arrayProductos[4].nombre + " con un precio de: " + arrayProductos[4].precio + "\nProducto6: " + arrayProductos[5].nombre + " con un precio de: " + arrayProductos[5].precio + "\nProducto7: " + arrayProductos[6].nombre + " con un precio de: " + arrayProductos[6].precio + "\nProducto8: " + arrayProductos[7].nombre + " con un precio de: " + arrayProductos[7].precio + "\nProducto9: " + arrayProductos[8].nombre + " con un precio de: " + arrayProductos[8].precio + "\n\nEscoge del 1 al 9 cual deseas adquirir");
        
    // Definimos el valor del producto en base a lo seleccionado por el usuario

    do{
    
        // Validamos que sea un numero
    
        while(isNaN(seleccionaProducto)){
            alert("Debes ingresar un valor numerico");
            seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + arrayProductos[0].nombre + " con un precio de: " + arrayProductos[0].precio + "\nProducto2: " + arrayProductos[1].nombre + " con un precio de: " + arrayProductos[1].precio + "\nProducto3: " + arrayProductos[2].nombre + " con un precio de: " + arrayProductos[2].precio +  "\nProducto4: " + arrayProductos[3].nombre + " con un precio de: " + arrayProductos[3].precio + "\nProducto5: " + arrayProductos[4].nombre + " con un precio de: " + arrayProductos[4].precio + "\nProducto6: " + arrayProductos[5].nombre + " con un precio de: " + arrayProductos[5].precio + "\nProducto7: " + arrayProductos[6].nombre + " con un precio de: " + arrayProductos[6].precio + "\nProducto8: " + arrayProductos[7].nombre + " con un precio de: " + arrayProductos[7].precio + "\nProducto9: " + arrayProductos[8].nombre + " con un precio de: " + arrayProductos[8].precio + "\n\nEscoge del 1 al 9 cual deseas adquirir");
        }
    
        // Validamos que dicho numero sea inferior a 3
    
        if (seleccionaProducto > 0 && seleccionaProducto <= 9)
        {
            switch (seleccionaProducto) {
                case "1":
                    nombreSeleccion = arrayProductos[0].nombre;
                    valorSeleccion = arrayProductos[0].precio;
                    break
                case "2":
                    nombreSeleccion = arrayProductos[1].nombre;
                    valorSeleccion = arrayProductos[1].precio;
                    break
                case "3":
                    nombreSeleccion = arrayProductos[2].nombre;
                    valorSeleccion = arrayProductos[2].precio;
                    break
                case "4":
                    nombreSeleccion = arrayProductos[3].nombre;
                    valorSeleccion = arrayProductos[3].precio;
                    break
                case "5":
                    nombreSeleccion = arrayProductos[4].nombre;
                    valorSeleccion = arrayProductos[4].precio;
                    break
                case "6":
                    nombreSeleccion = arrayProductos[5].nombre;
                    valorSeleccion = arrayProductos[5].precio;
                    break
                case "7":
                    nombreSeleccion = arrayProductos[6].nombre;
                    valorSeleccion = arrayProductos[6].precio;
                    break
                case "8":
                    nombreSeleccion = arrayProductos[7].nombre;
                    valorSeleccion = arrayProductos[7].precio;
                    break
                case "9":
                    nombreSeleccion = arrayProductos[8].nombre;
                    valorSeleccion = arrayProductos[8].precio;
                    break
            }
            break
        } 
        
        // en caso de ser mayor a 3 solicitamos que se ingrese un numero inferior al mismo
    
        seleccionaProducto = prompt("Puedes seleccionar solo un producto del 1 al 9");

        if (seleccionaProducto > 0 && seleccionaProducto <= 9)
        {
            switch (seleccionaProducto) {
                case "1":
                    nombreSeleccion = arrayProductos[0].nombre;
                    valorSeleccion = arrayProductos[0].precio;
                    break
                case "2":
                    nombreSeleccion = arrayProductos[1].nombre;
                    valorSeleccion = arrayProductos[1].precio;
                    break
                case "3":
                    nombreSeleccion = arrayProductos[2].nombre;
                    valorSeleccion = arrayProductos[2].precio;
                    break
                case "4":
                    nombreSeleccion = arrayProductos[3].nombre;
                    valorSeleccion = arrayProductos[3].precio;
                    break
                case "5":
                    nombreSeleccion = arrayProductos[4].nombre;
                    valorSeleccion = arrayProductos[4].precio;
                    break
                case "6":
                    nombreSeleccion = arrayProductos[5].nombre;
                    valorSeleccion = arrayProductos[5].precio;
                    break
                case "7":
                    nombreSeleccion = arrayProductos[6].nombre;
                    valorSeleccion = arrayProductos[6].precio;
                    break
                case "8":
                    nombreSeleccion = arrayProductos[7].nombre;
                    valorSeleccion = arrayProductos[7].precio;
                    break
                case "9":
                    nombreSeleccion = arrayProductos[8].nombre;
                    valorSeleccion = arrayProductos[8].precio;
                    break
            }
            break
        } 
        
        // validamos que el nuevo input del usuario sea un numero
    
        while(isNaN(seleccionaProducto)){
            alert("Debes ingresar un valor numerico");
            seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + arrayProductos[0].nombre + " con un precio de: " + arrayProductos[0].precio + "\nProducto2: " + arrayProductos[1].nombre + " con un precio de: " + arrayProductos[1].precio + "\nProducto3: " + arrayProductos[2].nombre + " con un precio de: " + arrayProductos[2].precio +  "\nProducto4: " + arrayProductos[3].nombre + " con un precio de: " + arrayProductos[3].precio + "\nProducto5: " + arrayProductos[4].nombre + " con un precio de: " + arrayProductos[4].precio + "\nProducto6: " + arrayProductos[5].nombre + " con un precio de: " + arrayProductos[5].precio + "\nProducto7: " + arrayProductos[6].nombre + " con un precio de: " + arrayProductos[6].precio + "\nProducto8: " + arrayProductos[7].nombre + " con un precio de: " + arrayProductos[7].precio + "\nProducto9: " + arrayProductos[8].nombre + " con un precio de: " + arrayProductos[8].precio + "\n\nEscoge del 1 al 9 cual deseas adquirir");
        }
    
    }while(seleccionaProducto > 9);

}

// creamos la funcion calcular cuotas 

let cuota = 0

function calculoCuotas (){

    cuota = prompt("Seleccionaste el producto numero: " + nombreSeleccion + "\nEl cual tiene un precio de: "+ valorSeleccion + "\n\nEn cuantas cuotas quieres adquirirlo (1 a 18)");

    // Calculamos el valor de cada cuota y le mostramos el resultado al usuario
    
    do{
        
        // Validamos que sea un numero
    
        while(isNaN(cuota)){
            alert("No ingresaste un numero para calcular las cuotas");
            cuota = prompt("Ingresa las cuotas en valor numerico (1 a 18)");
        }
    
        // Validamos que dicho numero sea inferior a 18
    
        if (cuota > 0 && cuota <= 18)
        {
            calculo = valorSeleccion / cuota;
            alert("Usted selecciono un producto de valor " + valorSeleccion + "\nAccedio a pagarlo en " + cuota + " comodas cuotas. \nPor lo cual tendrá que cancelar mensualmente el valor de: " + calculo);
            alert("Finalmente pagará " + calculo + " mensuales");
            break
        } 
        
        // en caso de ser mayor a 18 solicitamos que se ingrese un numero inferior al mismo
    
        cuota = prompt("Puedes seleccionar minimo 1 pago y maximo 18 cuotas, porfavor toma un numero del 1 al 18");
        
        // validamos que el nuevo input del usuario sea un numero
    
        while(isNaN(cuota)){
            alert("No ingresaste un numero para calcular las cuotas");
            cuota = prompt("Ingresa las cuotas en valor numerico (1 a 18)");
        }
    
    }while(cuota > 18);
    
    } */


// Solicitamos el nombre al usuario

//let nombre = prompt("Por favor ingresa tu nombre");

// Creamos bucle de autenticacion de edad del usuario para evitar ingreso de menores de 18

// let edad = 0

/* do{
    
    alert("Aviso, solo se permite ingreso de mayores de edad");
    edad = prompt("Ingresa tu edad");

    // Creamos una validacion para que la edad sea introducidad en numeros
    
    while(isNaN(edad)){
        alert("No ingresaste un numero");
        edad = prompt("Ingresa tu edad de forma numerica");
    }

}while(edad < 18); */

// Se da bienvenida al usuario

//alert("Bienvenid@ " + nombre.toUpperCase());

// Solicitamos al usuario seleccionar un producto a adquirir llamando a la funcion validacion producto 

//validacionProducto();

// Solicitamos al usuario seleccionar una cantidad de cuotas para cancelar el producto llamando a la funcion calcular cuotas

//calculoCuotas();

//alert("A continuacion podrá observar los detalles de su producto seleccionado");

// Continua el acceso a la web para mostrar el producto seleccionado



/* for (const producto of filtrado) {

    /// Se construyen los elementos utilizando DOM

    let contenedorProducto = document.createElement('div');

    contenedorProducto.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'pb-1');

    contenedorProducto.innerHTML =  `<div class='card product-item border-0 mb-4'>
                                        <div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                                            <img id='Imagen' class='img-fluid w-100' src='${producto.imagen}' alt=''> 
                                        </div>
                                        <div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                                            <h6 class='text-truncate mb-3'>${producto.nombre}</h6>
                                            <div class='d-flex justify-content-center'>
                                                <h6 class='text-muted ml-2'>Precio: <del>${producto.precio}</del></h6>
                                                <h6>&nbsp;- 15% OFF: ${descuento[0].precio}</h6>
                                                <h6>&nbsp;- Cuotas: ${cuota}</h6>
                                            </div>
                                        </div>
                                        <div class='card-footer d-flex justify-content-between bg-light border'>
                                            <a id='Detalles' class='btn btn-sm text-dark p-0'><i class='fas fa-eye text-primary mr-1'></i>Ver Detalle</a>
                                            <a><i class='fas fa-shopping-cart text-primary mr-1'></i>En el carro</a> 
                                        </div> 
                                    </div>`;

    document.body.appendChild(contenedorProducto);
} */

/// Se agrega manejo de eventos al hacer click en detalles o en la imagen.

/* let verDetalles = document.getElementById("Detalles");
verDetalles.onclick = () => {alert("Hiciste Click en Detalles")}

let imagenDetalle = document.getElementById("Imagen");
imagenDetalle.onclick = () => {alert("Esta es la imagen de tu producto")} */
