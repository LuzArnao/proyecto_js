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

// Todos los filtros actuan a traves de una funcion asincronica utlizando fetch 

const productosTotales = async () => {

    const response = await fetch('data/productos.json')
    const data = await response.json()

    // Conteo de productos Inferiores a 8000

    let rangoPreciosInferior = data.filter((elemento) => elemento.precio <= 8000) // linea 1
    cantidadProductosPrecioInferior = rangoPreciosInferior.length // linea 2
    let mostrarCantidadPrecioInferior = document.getElementById("precioInferior"); // linea 3
    mostrarCantidadPrecioInferior.innerHTML = `${cantidadProductosPrecioInferior}`; // linea 4

    // Conteo de productos Superiores a 8000

    let rangoPreciosSuperior = data.filter((elemento) => elemento.precio > 8000)
    cantidadProductosPrecioSuperior = rangoPreciosSuperior.length
    let mostrarCantidadPrecioSuperior = document.getElementById("precioSuperior");
    mostrarCantidadPrecioSuperior.innerHTML = `${cantidadProductosPrecioSuperior}`;

    // Conteo de productos Negros

    let productosNegro = data.filter((elemento) => elemento.color.includes("Negro"));
    cantidadProductosNegro = productosNegro.length
    let mostrarCantidadProductosNegro = document.getElementById("productoNegro")
    mostrarCantidadProductosNegro.innerHTML = `${cantidadProductosNegro}`;

    // Conteo de productos Rojos

    let productosRojo = data.filter((elemento) => elemento.color.includes("Rojo"));
    cantidadProductosRojo = productosRojo.length
    let mostrarCantidadProductosRojo = document.getElementById("productoRojo")
    mostrarCantidadProductosRojo.innerHTML = `${cantidadProductosRojo}`;

    // Conteo de productos Amarillos

    let productosAmarillo = data.filter((elemento) => elemento.color.includes("Amarillo"));
    cantidadProductosAmarillo = productosAmarillo.length
    let mostrarCantidadProductosAmarillo = document.getElementById("productoAmarillo")
    mostrarCantidadProductosAmarillo.innerHTML = `${cantidadProductosAmarillo}`;

    // Conteo de productos Rosas
    let productosRosa = data.filter((elemento) => elemento.color.includes("Rosa"));
    cantidadProductosRosa = productosRosa.length
    let mostrarCantidadProductosRosa = document.getElementById("productoRosa")
    mostrarCantidadProductosRosa.innerHTML = `${cantidadProductosRosa}`;

    // Conteo de productos talla S

    let productosTallaS = data.filter((elemento) => elemento.tallas[0]["S"] > 0)
    cantidadProductosTallaS = productosTallaS.length
    let mostrarCantidadProductosTallaS = document.getElementById("tallaS")
    mostrarCantidadProductosTallaS.innerHTML = `${cantidadProductosTallaS}`;

    // Conteo de productos talla M

    let productosTallaM = data.filter((elemento) => elemento.tallas[0]["M" ] > 0)
    cantidadProductosTallaM = productosTallaM.length
    let mostrarCantidadProductosTallaM = document.getElementById("tallaM")
    mostrarCantidadProductosTallaM.innerHTML = `${cantidadProductosTallaM}`;

    // Conteo de productos talla XL

    let productosTallaXL = data.filter((elemento) => elemento.tallas[0]["XL"] > 0)
    cantidadProductosTallaXL = productosTallaXL.length
    let mostrarCantidadProductosTallaXL = document.getElementById("tallaXL")
    mostrarCantidadProductosTallaXL.innerHTML = `${cantidadProductosTallaXL}`;

    // Conteo Total de productos

    let cantidadProductos = data.length
    let mostrarTotal = document.getElementsByClassName("totalProductos");

    for (const mostrar of mostrarTotal) {
        mostrar.innerHTML = `${cantidadProductos}`;
    }

    /// Elemetos para Filtrar por Precio

    let todosLosPrecios = document.getElementById("price-all")
    let preciosBajos = document.getElementById("price-1")
    let preciosAltos = document.getElementById("price-2")

    todosLosPrecios.addEventListener('click', () => {filtroLateral(todosLosPrecios,data)});
    preciosAltos.addEventListener('click', () => {filtroLateral(preciosAltos,rangoPreciosSuperior)});
    preciosBajos.addEventListener('click', () => {filtroLateral(preciosBajos,rangoPreciosInferior)});

    /// Elementos para Filtrar por Talla

    let traerTodasLasTallas = document.getElementById("size-all")
    let traerTallaS = document.getElementById("size-1")
    let traerTallaM = document.getElementById("size-2")
    let traerTallaXL = document.getElementById("size-3")

    traerTodasLasTallas.addEventListener('click', () => {filtroLateral(traerTodasLasTallas,data)});
    traerTallaS.addEventListener('click', () => {filtroLateral(traerTallaS,productosTallaS)});
    traerTallaM.addEventListener('click', () => {filtroLateral(traerTallaM,productosTallaM)});
    traerTallaXL.addEventListener('click', () => {filtroLateral(traerTallaXL,productosTallaXL)});

    /// Elementos para filtrar por Color

    let todosLosColores = document.getElementById("color-all")
    let colorNegro = document.getElementById("color-1")
    let colorRojo = document.getElementById("color-2")
    let colorAmarillo = document.getElementById("color-3")
    let colorRosa = document.getElementById("color-4")

    todosLosColores.addEventListener('click', () => { filtroLateral(todosLosColores,data)});
    colorNegro.addEventListener('click', () => {filtroLateral(colorNegro,productosNegro)});
    colorRojo.addEventListener('click', () => {filtroLateral(colorRojo,productosRojo)});
    colorAmarillo.addEventListener('click', () => {filtroLateral(colorAmarillo,productosAmarillo)});
    colorRosa.addEventListener('click', () => {filtroLateral(colorRosa,productosRosa)});

}

productosTotales()

// Creamos una funcion que muestra los productos */

function muestraProductos(array){

    for (const producto of array) {

        // Agregamos descuento sobre los productos 
        
        /// Se construyen los elementos utilizando DOM
    
        let contenedorProducto = document.createElement('div');
    
        contenedorProducto.classList.add('productoListado', 'col-lg-4', 'col-md-6', 'col-sm-12', 'pb-1');
        
        // Desestructuración del producto usando sugarsyntax 

        const { id, imagen, nombre, precio } = producto

        let descuento = precio * 0.90

        contenedorProducto.innerHTML =  `<div class='card product-item border-0 mb-4'>
                                            <div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                                                <img class='img-fluid w-100' src='${imagen}' alt=''>
                                            </div>
                                            <div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                                                <h6 class='text-truncate mb-3'>${nombre}</h6>
                                                <div class='d-flex justify-content-center'>
                                                    <h6>${descuento}</h6><h6 class='text-muted ml-2'><del>${precio}</del></h6>
                                                </div>
                                            </div>
                                            <div class='card-footer d-flex justify-content-between bg-light border'>
                                                <a id="verDetalle" class='verDetalle btn btn-sm text-dark p-0'><i class='fas fa-eye text-primary mr-1'></i>Ver Detalle</a>
                                                <a id="${id}" class='carrito btn btn-sm text-dark p-0'><i class='fas fa-shopping-cart text-primary mr-1'></i>Añadir al Carrito</a>
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

/// Agregamos sugarsyntax operador logico OR para cambiar la carga del carrito

const carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;

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
            // Utilizamos la libreria Toastify para indicarle al usuario que agrego algo al carrito
            Toastify({
                text: "Agregado al Carrito",
                duration: 1500,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        };
    });
}

productoCarrito(arrayProductos)

function refrescarCarrito(){
    let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
        mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;
}
    

// Vaciamos el carrito

function vaciarElCarrito(){
    sessionStorage.removeItem('carrito');
}

let vaciarCarrito = document.getElementById("vaciarCarrito")
    vaciarCarrito.addEventListener('click', () => {

        let carrito = sessionStorage.getItem('carrito');

        if(carrito == null) {
            // Utilizamos Libreria Toastify para señalarle al usuario que el carro esta vacio
            Toastify({
                text: "Carrito Vacio",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
        } else {
            /// Utilizamos Libreria Sweet Alert para señarle al usuario las opciones de borrado
            Swal.fire({
                title: 'Por favor confirmar borrado del Carrito',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
        
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Borrado!',
                        icon: 'success',
                        text: 'Se eliminaron los elementos del carrito'
                    })

                    
                    vaciarElCarrito()
                    refrescarCarrito()
                    
                }
            })
        }
    });
    
// Creamos funcion para ver que tiene el carrito

function consultarCarrito (){

        let carrito = sessionStorage.getItem('carrito');
        if(carrito == null) {
            openNav();
            // Utilizamos Librearia Toastify para señalarle al usuario que el carro esta vacio
            Toastify({
                text: "Carrito Vacio",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #D19C97, #8a237e)",
                  }
            }).showToast();
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
            //console.log(calcularTotal)

            // Verificamos el producto mas caro utilizando spread sobre los totales.
            //console.log(Math.max(...calcularTotal))

            const totalPagar = calcularTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)
            // let accionUsuario = confirm("Tienes en el Carrito los siguientes productos\n\n" + lista.join('\n') + "\n\nMonto Total a Pagar: " + totalPagar + "\n\nPara vaciar el carrito presiona Cancelar")
            
            let pruebaTotal = document.getElementById("montoTotal")
            pruebaTotal.innerHTML = totalPagar*0.90;

            /// Utlizamos sugarsyntax de operador ternario

/*             if (accionUsuario == true) {
                null
            } else {
                vaciarElCarrito();
            } */
            openNav();
            
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

// Creamos funcion para abrir un slide a mano izquierda

function actualizaCarritoLateral () {

    const elementosCarrito = document.getElementsByClassName("productoEnCarrito");
        while(elementosCarrito.length > 0){
            elementosCarrito[0].parentNode.removeChild(elementosCarrito[0]);
        }

    if(sessionStorage.getItem("carrito")){
        let carrito = JSON.parse(sessionStorage.getItem("carrito"))
        carrito.forEach(productoEnCarrito => {

            const { id, imagen, nombre, precio } = productoEnCarrito

            divCarritoDeCompras = document.getElementById("mySidebar")
            divCarritoDeCompras.innerHTML += `
            <div class="productoEnCarrito" style="padding: 10px;" >
            <div id="${id}" style="border-top-width: 1px; border-top-style: solid; border-top-color: black; display: flex;">
                <div>
                    <img style="width:70px; padding: 5px" src="${imagen}">
                </div>

                <div style="padding-top: 5px;">
                    <div>
                        <h6>${nombre}</h6>
                    </div>
                    <div style="display: flex;">
                        <h6>$ ${precio}</h6>
                    <div class="eliminarProductoEnCarrito">
                        <i style="padding-left: 15px" class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                    </div>
                </div>
                
            </div>
            </div>
            `
            document.body.append(divCarritoDeCompras);
        })
    }else{
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    actualizaCarritoLateral()
  }
  
// Creamos Funcion para cerrar el slide

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }