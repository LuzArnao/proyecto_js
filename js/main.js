// Cartel de Bienvenida

alert("Bienvenido a nuestra tienda virtual seria un placer conocer tu nombre");


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

// Se agregan productos con valores diferentes para calcular cuotas

let producto1 = 2500;
let producto2 = 3450;
let producto3 = 7500;

// Solicitamos al usuario seleccionar un producto a adquirir llamando a la funcion validacion producto 

validacionProducto();

// creamos la funcion validacion de producto

function validacionProducto (){

    seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + producto1 + "\nProducto2: " + producto2 + "\nProducto3: " + producto3 + "\n\nEscoge del 1 al 3 cual deseas adquirir");

    // Definimos el valor del producto en base a lo seleccionado por el usuario

    do{
    
        // Validamos que sea un numero
    
        while(isNaN(seleccionaProducto)){
            alert("Debes ingresar un valor numerico");
            seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + producto1 + "\nProducto2: " + producto2 + "\nProducto3: " + producto3 + "\n\nEscoge del 1 al 3 cual deseas adquirir");
        }
    
        // Validamos que dicho numero sea inferior a 3
    
        if (seleccionaProducto <= 3)
        {
            switch (seleccionaProducto) {
                case "1":
                    valorSeleccion = producto1;
                    break
                case "2":
                    valorSeleccion = producto2;
                    break
                case "3":
                    valorSeleccion = producto3;
                    break
            }
            break
        } 
        
        // en caso de ser mayor a 3 solicitamos que se ingrese un numero inferior al mismo
    
        seleccionaProducto = prompt("Puedes seleccionar solo un producto del 1 al 3");

        if (seleccionaProducto <= 3)
        {
            switch (seleccionaProducto) {
                case "1":
                    valorSeleccion = producto1;
                    break
                case "2":
                    valorSeleccion = producto2;
                    break
                case "3":
                    valorSeleccion = producto3;
                    break
            }
            break
        } 
        
        // validamos que el nuevo input del usuario sea un numero
    
        while(isNaN(seleccionaProducto)){
            alert("Debes ingresar un valor numerico");
            seleccionaProducto = prompt("Tenemos los siguientes productos disponibles:\nProducto1: " + producto1 + "\nProducto2: " + producto2 + "\nProducto3: " + producto3 + "\n\nEscoge del 1 al 3 cual deseas adquirir");
        }
    
    }while(seleccionaProducto > 3);

}

// Solicitamos la cantidad de cuotas a pagar

cuotas = prompt("Seleccionaste el producto numero: " + seleccionaProducto + "\nEl cual tiene un precio de: "+ valorSeleccion + "\n\nEn cuantas cuotas quieres adquirirlo (1 a 18)");

// llamamos a la funcion calcular cuotas

calculoCuotas(valorSeleccion,cuotas);

// creamos la funcion calcular cuotas 

function calculoCuotas (producto,cuota){

// Calculamos el valor de cada cuota y le mostramos el resultado al usuario

do{
    
    // Validamos que sea un numero

    while(isNaN(cuota)){
        alert("No ingresaste un numero para calcular las cuotas");
        cuota = prompt("Ingresa las cuotas en valor numerico (1 a 18)");
    }

    // Validamos que dicho numero sea inferior a 18

    if (cuota <= 18)
    {
        let calculo = producto / cuota;
        alert("Usted selecciono un producto de valor " + valorSeleccion + "\nAccedio a pagarlo en " + cuota + " comodas cuotas. \nPor lo cual tendrá que cancelar mensualmente el valor de: " + calculo);
        alert("Finalmente pagará " + calculo + " mensuales");
        break
    } 
    
    // en caso de ser mayor a 18 solicitamos que se ingrese un numero inferior al mismo

    cuota = prompt("Puedes seleccionar maximo 18 cuotas, porfavor toma un numero del 1 al 18");
    
    // validamos que el nuevo input del usuario sea un numero

    while(isNaN(cuota)){
        alert("No ingresaste un numero para calcular las cuotas");
        cuota = prompt("Ingresa las cuotas en valor numerico (1 a 18)");
    }

}while(cuota > 18);

}

alert("Puedes visitar nuestra web para mas informacion");

// Continua el acceso a la web 