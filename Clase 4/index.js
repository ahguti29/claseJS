/* Estructura de una funcióm
function nombreFuncion (){
    codigo de la función
}*/

/* function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

saludar();
 */
/* Funciones con parametros
Function nombreFunción(par1, par2, ..., parn){
    codigo a ejecutar de la función.
} */

/* function sumar (numero1, numero2){
    let suma = numero1 + numero2;
    alert(suma);
}

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo valor número"));

sumar(numero1, numero2); */

/* function calculadora(numUno, numDos, operacion){

    switch (operacion){

        case "+":
            console.log(numUno + numDos);
            break;

        case "-":
            console.log(numUno - numDos);
            break;

        case "*":
            console.log(numUno * numDos);
            break;

        case "/":
            console.log(numUno / numDos);
            break;

        default:
            console.log("Operacion no definida");
            break;
                
    }

}

calculadora(2, 4, "*"); */


/* function suma(x, y){
    return x + y;
}

suma(3,4); */

/* Scope hace referencia al lugar donde se declara una variable
si es dentro de una función es local si es por fuera se considera global*/

/* Funciones anonimas*/

/* const suma = function (a, b){ return a + b};
const resta = function (a, b){ return a - b};

console.log(suma(4,5)); */

/* Arrow function o funcion flecha 
si la funcion solo tiene un parametro se puede omitir los parentesis
si no tiene llaves y return js lo interpreta como un return
si no hay parametro se pone los parentesis vacios*/

/* let suma = (num1, num2) => {return num1 + num2;};
console.log(suma(5, 5)); */


const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precio = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precio, iva(precio)), descuento);
console.log(nuevoPrecio);