/**
 * = asignación
 * == solo valida el valor
 * === valida valor y tipo de dato
 */

/**
 * console.log(3 == "3")
 * console.log(3 === "3")
 */

/**
 * estructura del if
 * if(condición){
 * codigo a ejecutar en caso de que la condicion sea verdad}
 */

/** if(true){
    console.log("entramos al if");
}

console.log("fin del proceso");
*/

/* let nombre = "Diana";

if(nombre === "Diana"){
    console.log("Hola Diana");
}

console.log("chao Diana"); */
/* 
let clima = "cae agua";

if (clima === "hace sol"){
    console.log("salgo al parque");
} else{
    console.log("no salgo al parque");
}
console.log("terminamos"); */
/* 
let respuesta = prompt("¿Terminaste la Tarea?");

if(respuesta.toLowerCase() === "si"){
    alert("Puedes salir a jugar");
} else {
    alert("No puedes salir a jugar");
} */

/* let edad = parseInt(prompt("Ingresa tu edad"));

if(edad < 15){
    alert("No puede entrar");
} else if (edad < 18){
    alert("Puedes entrar con un adulto");
} else {
    alert("Puedes entrar")
}

alert("Gracias por ingresar tu edad"); */

let cilindrada = parseInt(prompt("¿Cuál es la cilindrada de tu Auto"));
let caballaje = parseInt(prompt("¿Cuantos HP tiene tu auto?"));
let categoria;

if(cilindrada === 2000 && caballaje === 300){
    categoria = "TQ3";
    alert("Su carro pertenece a la categoria:" + categoria);
} else if (cilindrada === 1800 && caballaje === 200){
    categoria = "TQ2";
    alert("Su carro pertenece a la categoria:" + categoria);
} else if(cilindrada === 1600 && caballaje === 150) {
    categoria = "TQ1";
    alert("Su carro pertenece a la categoria:" + categoria);
} else{
    alert("Su carro esta fuera de categoria.");
}
