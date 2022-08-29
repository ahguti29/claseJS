//Calcular costo total de productos y/o servicios
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
    'Vamos a sumar el total de productos hasta  que ingrese un valor igual a cero, menos que cero o que no sea un valor numerico'
);

const ingresarPrecio = function (){
    precioProducto = Number(prompt('Ingrese el precio del producto'));
    
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        precioProducto = Number(prompt('Ingrese el precio del producto'));
    }

    if (precioProducto <= 0) {
        console.log('Ha terminado de introducir los precios de los productos');
        alert('Ha terminado de introducir los precios de los productos');
    }
}

const calcularTotal = function(precioProducto){
    return gastoTotal + precioProducto;
}

const mostrarTotal = function (){
    console.log('El precio total de los productos es $' + gastoTotal);
}

ingresarPrecio();
mostrarTotal();