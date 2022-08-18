const carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let mostrarCantidadProductosCarrito = document.getElementById("carritoTotal")
mostrarCantidadProductosCarrito.innerHTML = `${carrito.length}`;

function carritoCheck () {

        const elementosCarrito = document.getElementsByClassName("productoCheckOut");
        while(elementosCarrito.length > 0){
            elementosCarrito[0].parentNode.removeChild(elementosCarrito[0]);
            let pruebaTotal = document.getElementById("montoTotal")
            pruebaTotal.innerHTML = "$" + 0;
        }
        
        let calcularTotalStr = []
        let carrito = JSON.parse(sessionStorage.getItem("carrito"))

        if(carrito==null){
            mostrarCantidadProductosCarrito.innerHTML = 0;
        }
        else{

        carrito.forEach(productoEnCarrito => {

            const { nombre, precio, color } = productoEnCarrito

            let divCarritoDeCompras = document.createElement('li');
            divCarritoDeCompras.classList.add('productoCheckOut', 'list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed');
            divCarritoDeCompras.innerHTML += `
                <div>
                    <h6 class="my-0">${nombre}</h6>
                    <small class="text-muted">${color}</small>
                </div>
                <span class="text-muted">$${precio}</span>
            `
            document.getElementsByClassName("carritoCheckOut")[0].appendChild(divCarritoDeCompras);   ;

            calcularTotalStr.push(precio)

            const calcularTotal = calcularTotalStr.map(str => {
                return Number(str);
            })

            const totalPagar = calcularTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)

            let pruebaTotal = document.getElementById("montoTotal")
            pruebaTotal.innerHTML = "$" + totalPagar*0.90;

        })
}}

carritoCheck()
paga = carritoCheck()

function finalizarCheckOut (){
    let enviarForm = document.getElementById("botonCheckOut")
    enviarForm.addEventListener('click', () => {

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
                
            }
        })
    }
)};

function vaciarElCarrito(){
    sessionStorage.removeItem('carrito');
}

function refrescarCarrito(){
    mostrarCantidadProductosCarrito.innerHTML = 0;
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
                    carritoCheck()
                    
                }
            })
        }
    });

function validador () {

    let pruebaTotal = document.getElementById("montoTotal")
    pruebaTotal.innerHTML

    window.addEventListener('load', function() {

      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        

          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

            Swal.fire({
                title: 'Monto Total: ' + pruebaTotal.innerHTML + '.',
                html: `<div><a>Por Favor Confirmar su Compra</a></div>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
        
                if (result.isConfirmed) {
                    form.classList.add('was-validated');
                    
                    if (contador.length == 0){

                        vaciarElCarrito()

                    } else {
                        Toastify({
                            text: "Faltan campos obligatorios",
                            duration: 3500,
                            style: {
                                background: "linear-gradient(to right, #D19C97, #8a237e)",
                              }
                        }).showToast();
                    }
                }
            })
        
        }, false);
      });
    }, false);
  };


validador()