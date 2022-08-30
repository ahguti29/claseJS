/* Los arreglos se simbolizan con corchetes van separdos por comas
las posiciones inician en cero*/
/* const arreglo1 = [];
const arreglo2 = [5, 7, 6, 8, 9];
const arreglo3 = ["andres", "joan", "mariana"];
const arreglo4 = [true, false, true];
const arreglo5 = [true, 5, "pepito"];

console.log(arreglo5[1]); */

//Recorrer arreglo con un for
/* const arreglo2 = [5, 7, 6, 8, 9];

for (let i = 0; i < 5; i++){
    console.log(arreglo2[i]);
} */

//const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
/* 
for (let i = 0; i < arreglo3.length; i++){
    console.log(arreglo3[i].toUpperCase());
} */

//agregar elementos => el comando push al final y al inicio el comando unshift
/* 
arreglo3.push('camila');
console.log(arreglo3.length);
console.log(arreglo3);
arreglo3.unshift('pepito');
console.log(arreglo3);

// Eliminar el elemento del final con pop

arreglo3.pop();
console.log(arreglo3);

//Shif elimina elementos del inicio
arreglo3.shift();
console.log(arreglo3); */

// splice => Elimina o realiza una copia de los valores en las posiciones indicadas
/* const nuevo = arreglo3.splice(1,3);
console.log(arreglo3);
console.log(nuevo); */

//Join une todos los elementos en un solo string separado por el operador que se indique

//console.log(arreglo3.join("|"));

//concat une 2 arreglos

/* const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
const numeros = [1, 2, 3, 4, 5];

const varios = numeros.concat(arreglo3);
console.log(varios); */

//hace una copia de un arreglo
/* const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
console.log(arreglo3.slice(1, 3)); */

//Index of busca la posicion de un elemento en el arreglo

/* const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
console.log(arreglo3.indexOf('mariana')); */

//Includes valida si el arreglo contiene el elemento mencionado
/* const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
console.log(arreglo3.includes("andres")); */

//reverse invertir los elementos de un arreglo
/* const arreglo3 = ['andres', 'joan', 'mariana', 'pedro'];
console.log(arreglo3.reverse()); */

/* Arreglo con objetos */
/* const array = [
	{ nombre: 'camisa', precio: 2000 },
	{ nombre: 'pantalon', precio: 2600 },
];

array.push({ nombre: 'gorra', precio: 700 });
console.log(array);
 */

/* const array = [];

for (let i = 0; i < 3; i++) {
	let nombre = prompt('Ingrese el nombre');
	let precio = prompt('Ingrese el precio');

	let obj = {
		nombre: nombre,
		precio: precio,
	};
	array.push(obj);
	console.log(array);
} */

const productos = [
	{ id: 1, nombre: 'arroz' },
	{ id: 2, nombre: 'café' },
	{ id: 3, nombre: 'panela' },
];

//For of recorre solamente arreglos
for (const producto of productos) {
	console.log(producto.nombre);
}
