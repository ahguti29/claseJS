//Calcular costo total de productos y/o servicios
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
    'Vamos a sumar el total de productos hasta  que ingrese un valor igual a cero, menos que cero o que no sea un valor numerico'
);

const ingresarPrecio = () => {
    precioProducto = Number(prompt('Ingrese el precio del producto' + (contador + 1) + ':'));
    
    while (precioProducto > 0) {
        gastoTotal = calcularTotal(precioProducto);
        contador++;
        precioProducto = Number(prompt('Ingrese el precio del producto' + (contador + 1) + ':'));
    }

    if (precioProducto <= 0) {
        console.log('Ha terminado de introducir los precios de los productos');
        alert('Ha terminado de introducir los precios de los productos');
    }
}
//Arrow function como es solo una linea no hay necesidad de las llaves
const calcularTotal = (precioProducto) => gastoTotal + precioProducto;


const mostrarTotal = () => {
    console.log('Cantidad de productos: ' + contador);
    console.log('El precio total de los productos es $' + gastoTotal);
}

ingresarPrecio();
mostrarTotal();