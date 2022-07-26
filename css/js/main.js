// Construimos la clase para productos

class Producto {
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

const producto1 = new Producto(1, "Juguetes Kit Castigo", "Negro", ["XL"], ["50"], "9000", "50", "img/product-1.jpg")
const producto2 = new Producto(2, "Juguetes Kit Coneja", "Negro", ["M","XL"], ["40","40"], "9500", "80", "img/product-2.jpg")
const producto3 = new Producto(3, "Juguetes Kit Dulce Sueño", "Rojo", ["S","M","XL"], ["60","30","30"], "11200", "120", "img/product-3.jpg")
const producto4 = new Producto(4, "Juguetes Kit Diabla", "Rojo", ["S","M"], ["20","66"], "8000", "86", "img/product-4.jpg")
const producto5 = new Producto(5, "Juguetes Kit Escape", "Amarillo", ["M","XL"], ["50","50"], "7500", "100", "img/product-5.jpg")
const producto6 = new Producto(6, "Juguetes Kit Algodon Dulce", "Rosa", ["S","XL"], ["40","50"], "10000", "90", "img/product-6.jpg")
const producto7 = new Producto(7, "Juguetes Kit Mienteme Despacio", "Negro", ["S","M","XL"], ["30","35","50"], "9500", "125", "img/product-7.jpg")
const producto8 = new Producto(8, "Juguetes Kit Guerrera", "Rojo", ["M","XL"], ["50","40"], "6900", "90", "img/product-8.jpg")
const producto9 = new Producto(9, "Juguetes Kit Sorpresa", "Negro", ["S","XL"], ["40","40"], "11000", "80", "img/product-1.jpg")

// Creamos el array que va a contener todos los productos

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

// Los siguiente comentarios pertenecen a las lineas 37 a 39
// 1. Contamos la cantidad total de productos que tenemos  en el array o bolsita
// 2. Creamos una letiable que permite llamar a las diferentes etiquetas HTML desde su valor de Class
// 3 - 5. Una vez que llamamos las etiquetas por su clase, les imprimimos el valor total a cada una con la ayuda de un FOR

let cantidadProductos = arrayProductos.length; // linea 1
let mostrarTotal = document.getElementsByClassName("totalProductos"); // linea 2
for (const mostrar of mostrarTotal) { // linea 3
    mostrar.innerHTML = `${cantidadProductos}`; // linea 4
} // linea 5

// Los siguiente comentarios pertenecen a las lineas 46 a 49
// 1 - 2. Contamos la cantidad total de productos que tenemos  en el array, utilizando un filtro sobre el precio de los productos
// 3. Creamos una variable que permite llamar a un elemento HTML desde su valor de ID
// 4. Una vez que llamamos a la variable por el ID le otorgamos como valor la cantidad total de productos que obtuvimos anteriormente
// Conteo de productos inferiores a 8000

let rangoPreciosInferior = arrayProductos.filter((elemento) => elemento.precio <= 8000) // linea 1
cantidadProductosPrecioInferior = rangoPreciosInferior.length // linea 2
let mostrarCantidadPrecioInferior = document.getElementById("precioInferior"); // linea 3
mostrarCantidadPrecioInferior.innerHTML = `${cantidadProductosPrecioInferior}`; // linea 4

// De aca en adelante se repite el mismo proceso descrito en las lineas 41 a 44 solo cambiamos los tipos de filtro.
// Conteo de productos Superiores a 8000
let rangoPreciosSuperior = arrayProductos.filter((elemento) => elemento.precio > 8000)
cantidadProductosPrecioSuperior = rangoPreciosSuperior.length
let mostrarCantidadPrecioSuperior = document.getElementById("precioSuperior");
mostrarCantidadPrecioSuperior.innerHTML = `${cantidadProductosPrecioSuperior}`;

// Conteo de productos Negros
let productosNegro = arrayProductos.filter((elemento) => elemento.color.includes("Negro"));
cantidadProductosNegro = productosNegro.length
let mostrarCantidadProductosNegro = document.getElementById("productoNegro")
mostrarCantidadProductosNegro.innerHTML = `${cantidadProductosNegro}`;

// Conteo de productos Rojos
let productosRojo = arrayProductos.filter((elemento) => elemento.color.includes("Rojo"));
cantidadProductosRojo = productosRojo.length
let mostrarCantidadProductosRojo = document.getElementById("productoRojo")
mostrarCantidadProductosRojo.innerHTML = `${cantidadProductosRojo}`;

// Conteo de productos Amarillos
let productosAmarillo = arrayProductos.filter((elemento) => elemento.color.includes("Amarillo"));
cantidadProductosAmarillo = productosAmarillo.length
let mostrarCantidadProductosAmarillo = document.getElementById("productoAmarillo")
mostrarCantidadProductosAmarillo.innerHTML = `${cantidadProductosAmarillo}`;

// Conteo de productos Rosas
let productosRosa = arrayProductos.filter((elemento) => elemento.color.includes("Rosa"));
cantidadProductosRosa = productosRosa.length
let mostrarCantidadProductosRosa = document.getElementById("productoRosa")
mostrarCantidadProductosRosa.innerHTML = `${cantidadProductosRosa}`;

// Conteo de productos talla S

let productosTallaS = arrayProductos.filter((elemento) => elemento.talla.includes("S"))
cantidadProductosTallaS = productosTallaS.length
let mostrarCantidadProductosTallaS = document.getElementById("tallaS")
mostrarCantidadProductosTallaS.innerHTML = `${cantidadProductosTallaS}`;

// Conteo de productos talla M

let productosTallaM = arrayProductos.filter((elemento) => elemento.talla.includes("M"))
cantidadProductosTallaM = productosTallaM.length
let mostrarCantidadProductosTallaM = document.getElementById("tallaM")
mostrarCantidadProductosTallaM.innerHTML = `${cantidadProductosTallaM}`;

// Conteo de productos talla XL

let productosTallaXL = arrayProductos.filter((elemento) => elemento.talla.includes("XL"))
cantidadProductosTallaXL = productosTallaXL.length
let mostrarCantidadProductosTallaXL = document.getElementById("tallaXL")
mostrarCantidadProductosTallaXL.innerHTML = `${cantidadProductosTallaXL}`;

// Creamos una funcion que muestra los productos

function muestraProductos(array){

    for (const producto of array) {

        // Agregamos descuento sobre los productos 
        
        let descuento = producto.precio * 0.90
    
        /// Se construyen los elementos utilizando DOM
    
        let contenedorProducto = document.createElement('div');
    
        contenedorProducto.classList.add('productoListado', 'col-lg-4', 'col-md-6', 'col-sm-12', 'pb-1');
    
        contenedorProducto.innerHTML =  `<div id="${producto.id}" class='card product-item border-0 mb-4'>
                                            <div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                                                <img class='img-fluid w-100' src='${producto.imagen}' alt=''>
                                            </div>
                                            <div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                                                <h6 class='text-truncate mb-3'>${producto.nombre}</h6>
                                                <div class='d-flex justify-content-center'>
                                                    <h6>${descuento}</h6><h6 class='text-muted ml-2'><del>${producto.precio}</del></h6>
                                                </div>
                                            </div>
                                            <div class='card-footer d-flex justify-content-between bg-light border'>
                                                <a id="verDetalle" class='verDetalle btn btn-sm text-dark p-0'><i class='fas fa-eye text-primary mr-1'></i>Ver Detalle</a>
                                                <a id="carrito" class='carrito btn btn-sm text-dark p-0'><i class='fas fa-shopping-cart text-primary mr-1'></i>Añadir al Carrito</a>
                                            </div>
                                        </div>`;        
    
        document.getElementsByClassName("mostrarProductos")[0].appendChild(contenedorProducto);                                    
    
    }
}

// Llamamos a la funcion para mostrar todos los productos
muestraProductos(arrayProductos)

// Creamos filtro por busqueda de nombre (case sensitive)

let buscarPorNombre = document.getElementById("buscaNombre");
buscarPorNombre.addEventListener('input', () => {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
    }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        filtrado = arrayProductos.filter((elemento) => elemento.nombre.includes(buscarPorNombre.value))
        muestraProductos(filtrado)
    
})

// Verificamos la cantidad de objetos en el carrito para la sesion actual.

let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            carrito = [];
            let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
            mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;
        } else {
            carrito = JSON.parse(carrito);
            let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
            mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;
        }

// Cargamos productos al carrito

function cargaCarrito (producto) {

    let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            carrito = [];
        } else {
            carrito = JSON.parse(carrito);
            console.log("agregando producto al carrito")
        }

    sessionStorage.setItem('carrito', JSON.stringify(carrito.concat(producto)));

    let traerObjetosCarrito = sessionStorage.getItem('carrito');
    let traerObjetosCarritoJSON = JSON.parse(traerObjetosCarrito)

    let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
    mostrarCantidadProductosCarrito.innerHTML = `${traerObjetosCarritoJSON.length}`;  
}



function productoCarrito(arrayProductos){
    arrayProductos.forEach(producto => {

        let agregarProd = document.getElementById(producto.id)
        agregarProd.onclick = () => {
            cargaCarrito(producto)
        };
    });
}

productoCarrito(arrayProductos)

// Vaciamos el carrito

function vaciarElCarrito(){
    sessionStorage.removeItem('carrito');
}

let vaciarCarrito = document.getElementById("vaciarCarrito")
    vaciarCarrito.addEventListener('click', () => {
        vaciarElCarrito()
    });

// Creamos funcion para ver que tiene el carrito

function consultarCarrito (){

        let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            alert("No tienes nada en el carrito");
        } else {

            carrito = JSON.parse(carrito)

            let lista = []
            let calcularTotalStr = []
            
            for ( let paquetes of carrito){
                lista.push(paquetes.nombre + " - Precio Unitario: " + paquetes.precio);
                calcularTotalStr.push(paquetes.precio)
            }
            
            const calcularTotal = calcularTotalStr.map(str => {
                return Number(str);
            })

            // console.log(calcularTotalStr)
            // console.log(calcularTotal)
            // console.log(totalPagar)
            // console.log(lista.join('\n'))

            const totalPagar = calcularTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)
            let accionUsuario = confirm("Tienes en el Carrito los siguientes productos\n\n" + lista.join('\n') + "\n\nMonto Total a Pagar: " + totalPagar + "\n\nPara vaciar el carrito presiona Cancelar")

            if (accionUsuario == true) {
                null
            } else {
                vaciarElCarrito();
            }
    }
        
}

/// Elementos para consultar carrito desde el Icono

let verCarritoIcono = document.getElementById("botonCarrito")
verCarritoIcono.addEventListener('click', () => {
    consultarCarrito(verCarritoIcono)
    }
)

/// Elementos para consultar carrito desde el numero de elementos

let verCarrito = document.getElementById("carritoTotal")
verCarrito.addEventListener('click', () => {
    consultarCarrito(verCarrito)
    }
)

/// Filtrado Lateral

function filtroLateral (checkboxElem,productoFiltrar) {

    if (checkboxElem.checked) {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        muestraProductos(productoFiltrar)
        productoCarrito(productoFiltrar)

      } else {
        // eliminamos los elementos actuales
        const elements = document.getElementsByClassName("productoListado");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        // filtramos dependiendo del input del usuario y llamamos a la funcion muestra con estos nuevos valores
        muestraProductos(arrayProductos)
        productoCarrito(arrayProductos)

      }

}

/// Elemetos para Filtrar por Precio

let todosLosPrecios = document.getElementById("price-all")
let preciosBajos = document.getElementById("price-1")
let preciosAltos = document.getElementById("price-2")

todosLosPrecios.addEventListener('click', () => {filtroLateral(todosLosPrecios,arrayProductos)});
preciosAltos.addEventListener('click', () => {filtroLateral(preciosAltos,rangoPreciosSuperior)});
preciosBajos.addEventListener('click', () => {filtroLateral(preciosBajos,rangoPreciosInferior)});

/// Elementos para Filtrar por Talla

let traerTodasLasTallas = document.getElementById("size-all")
let traerTallaS = document.getElementById("size-1")
let traerTallaM = document.getElementById("size-2")
let traerTallaXL = document.getElementById("size-3")

traerTodasLasTallas.addEventListener('click', () => {filtroLateral(traerTodasLasTallas,arrayProductos)});
traerTallaS.addEventListener('click', () => {filtroLateral(traerTallaS,productosTallaS)});
traerTallaM.addEventListener('click', () => {filtroLateral(traerTallaM,productosTallaM)});
traerTallaXL.addEventListener('click', () => {filtroLateral(traerTallaXL,productosTallaXL)});

/// Elementos para filtrar por Color

let todosLosColores = document.getElementById("color-all")
let colorNegro = document.getElementById("color-1")
let colorRojo = document.getElementById("color-2")
let colorAmarillo = document.getElementById("color-3")
let colorRosa = document.getElementById("color-4")

todosLosColores.addEventListener('click', () => { filtroLateral(todosLosColores,arrayProductos)});
colorNegro.addEventListener('click', () => {filtroLateral(colorNegro,productosNegro)});
colorRojo.addEventListener('click', () => {filtroLateral(colorRojo,productosRojo)});
colorAmarillo.addEventListener('click', () => {filtroLateral(colorAmarillo,productosAmarillo)});
colorRosa.addEventListener('click', () => {filtroLateral(colorRosa,productosRosa)});