//Variable que almacena el número inicial del rango ingresado por el usuario
let ni = parseInt(prompt("Ingrese el # inicial del rango para calcular par o impar"));
// Varaible que alamacena el número final del rango ingresado por el usuario.
let nf = parseInt(prompt("Ingrese el # final del rango para calcular par o impar"));
// variable que muestra el mensaje del resultado del calculo realizado.
let resultado;

/* Ciclo que hace un recorrido desde el numero inicial hasta el número final definiendo cuales números son
 pares e impares y mostrando el mensaje al usuario de cada número*/
for(let i = ni; i <= nf; i++){
    if(i % 2 != 0){
        resultado = `El número ${i} es un número impar del rango seleccionado`;
        alert(resultado);
    } else {
        resultado = `El número ${i} es un número par del rango seleccionado`;
        alert(resultado);
    }
}
alert("El rango de números seleccionado ha finalizado");