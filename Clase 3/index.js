/* Estructura del for

for(desde; hasta; actualización){
    codigo a repetir
}
*/
/* for(let i = 0; i < 100; i++){
    console.log("Hola", i);
}

console.log("terminamos");

let numero = parseInt(prompt("Ingrese un número"));

for (let i = 0; i <= 10; i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`;
    alert(mensaje);
} */

/* for(let i = 0; i <= 10; i++){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Turno #${i} Nombre: ${nombre}`;
    alert(mensaje);
} */

/* for(let i = 0; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log("Hola");
}
console.log("Terminamos"); */

/* for(let i = 0; i <= 10; i++){
    if(i === 5){
        continue;
    }

    console.log(i);
}

console.log("Terminamos"); */

/* let usuario = prompt("Ingrese el usuario");

while( usuario != "andres"){
    alert("usuario incorrecto");
    usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

/* let numero;

do{
    numero = parseInt(prompt("Ingrese un número"));
} while( numero != 5) */

/* Estructura del Switch 
    switch (valor){
        case value1:
            codigo a ejecutar
            break;
        
        case value2:
            codigo a ejecutar
            break;

        default: 
            codigo a ejecutar
            break;
    }
*/

let moneda = "ars";

switch(moneda){

    case "cop":
        console.log("es de colombia");
        break;
    
    case "ars":
        console.log("es de argentina");
        break;

    case "clp":
        console.log("es de chile");
        break;

    default:
        console.log("ingresaste una moneda erronea");

}