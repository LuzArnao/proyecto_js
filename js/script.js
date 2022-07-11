// Construimos la clase para productos

class producto {
    constructor(id, nombre, color, talla, unidadPorTalla, precio, unidadesTotales, imagen) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.talla = talla
        this.unidadPorTalla = unidadPorTalla
        this.precio = precio
        this.unidadesTotales = unidadesTotales
        this.imagen = imagen
    }
}

// Agregamos las entradas individuales para llenar el array segun el formato de la clase

const producto1 = new producto(1, "Juguetes Kit Castigo", "Negro", ["S","M","XL"], ["45","55","50"], "7000", "155", "img/product-1.jpg")
const producto2 = new producto(2, "Juguetes Kit Coneja", "Negro", ["S","M","XL"], ["40","40","40"], "6500", "120", "img/product-2.jpg")
const producto3 = new producto(3, "Juguetes Kit Dulce Sueño", "Rojo", ["S","M","XL"], ["60","30","30"], "7500", "120", "img/product-3.jpg")
const producto4 = new producto(4, "Juguetes Kit Diabla", "Rojo", ["S","M","XL"], ["20","25","66"], "8000", "111", "img/product-4.jpg")
const producto5 = new producto(5, "Juguetes Kit Escape", "Amarillo", ["S","M","XL"], ["50","50","50"], "9500", "150", "img/product-5.jpg")
const producto6 = new producto(6, "Juguetes Kit Algodon Dulce", "Rosa", ["S","M","XL"], ["40","40","50"], "10000", "130", "img/product-6.jpg")
const producto7 = new producto(7, "Juguetes Kit Mienteme Despacio", "Negro", ["S","M","XL"], ["30","35","50"], "9500", "125", "img/product-7.jpg")
const producto8 = new producto(8, "Juguetes Kit Guerrera", "Rojo", ["S","M","XL"], ["50","50","40"], "10000", "140", "img/product-8.jpg")
const producto9 = new producto(9, "Juguetes Kit Sorpresa", "Negro", ["S","M","XL"], ["40","40","33"], "11000", "113", "img/product-1.jpg")

// Creamos el array que va a contener todos los productos

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

// creamos la funcion validacion de producto

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
    
    }


// Solicitamos el nombre al usuario

nombre = prompt("Por favor ingresa tu nombre");

// Creamos bucle de autenticacion de edad del usuario para evitar ingreso de menores de 18

do{
    
    alert("Aviso, solo se permite ingreso de mayores de edad");
    edad = prompt("Ingresa tu edad");

    // Creamos una validacion para que la edad sea introducidad en numeros
    
    while(isNaN(edad)){
        alert("No ingresaste un numero");
        edad = prompt("Ingresa tu edad de forma numerica");
    }

}while(edad < 18);

// Se da bienvenida al usuario

alert("Bienvenid@ " + nombre.toUpperCase());

// Solicitamos al usuario seleccionar un producto a adquirir llamando a la funcion validacion producto 

validacionProducto();

// Solicitamos al usuario seleccionar una cantidad de cuotas para cancelar el producto llamando a la funcion calcular cuotas

calculoCuotas();

alert("A continuacion podrá observar los detalles de su producto seleccionado");

// Continua el acceso a la web para mostrar el producto seleccionado

const filtrado = arrayProductos.filter((elemento) => elemento.nombre.includes(nombreSeleccion))

for (const producto of filtrado) {

    const descuento = filtrado.map((elemento) => {
        return {
            precio: elemento.precio * 0.85
        }
    })

        document.write("<div class='col-lg-4 col-md-6 col-sm-12 pb-1'>");
        document.write("<div class='card product-item border-0 mb-4'>"); 
        document.write("<div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0'><img class='img-fluid w-100' src='" + producto.imagen + "' alt=''> </div>");
        document.write("<div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>");
        document.write("<h6 class='text-truncate mb-3'>" + producto.nombre + "</h6>");
        document.write("<div class='d-flex justify-content-center'>");
        document.write("<h6 class='text-muted ml-2'>Precio: <del>" + producto.precio + "</del></h6><h6>&nbsp;- 15% OFF: " + descuento[0].precio + "</h6><h6>&nbsp;- Cuotas: " + cuota + "</h6></div></div>");
        document.write("<div class='card-footer d-flex justify-content-between bg-light border'>");
        document.write("<a><i class='fas fa-eye text-primary mr-1'></i>Ver Detalle</a>");
        document.write("<a><i class='fas fa-shopping-cart text-primary mr-1'></i>En el carro</a> </div> </div> </div>"); 
}