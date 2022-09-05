/* Funcion de alto orden recibe por parametro una función o retorna una función */

/* function mayorQue(n) {
	return (m) => m > n;
}

let mayorQueCinco = mayorQue(5);
console.log(mayorQueCinco(6));

let mayorQue20 = mayorQue(20);
console.log(mayorQue20(30)); */

/* function operaciones (op) {

    if(op === "sumar"){
        return (a, b) => a + b;
    }

    if(op === "restar"){
        return (a, b) => a - b;
    }
    if(op === "multiplicar"){
        return (a, b) => a * b;
    }
    if(op === "dividir"){
        return (a, b) => a / b;
    }
}

let suma = operaciones("sumar");
let resta = operaciones("restar");

console.log(suma(5,6));
console.log(resta(6,3)); */

/* function recorrer(arreglo, funcion) {
	for (const item of arreglo) {
		funcion(item);
	}
}
const arreglo = [3, 4, 5, 6, 7, 2];

recorrer(arreglo, console.log); */

/* metodos avanzados de los arreglos */

/* For each */
/* const arreglo = [3, 4, 5, 6, 7, 2];

arreglo.forEach((item) => {
	console.log(item);
}); */

/* const arreglo = [3, 4, 5, 6, 7, 2];

let encontrado = arreglo.find(item => item === 20);
console.log(encontrado); */

/* const productos = [
	{ id: 1, nombre: 'camisa', precio: 2000 },
	{ id: 2, nombre: 'pantalon', precio: 2500 },
	{ id: 3, nombre: 'zapato', precio: 1500 },
	{ id: 4, nombre: 'gorra', precio: 200 },
];

let precio = parseInt(prompt('Ingrese el precio minimo del producto'));
let filtrados = productos.filter((item) => item.precio > precio);
console.log(filtrados);
 */

//Some verifica si almenos un elemento del arreglo cumple la condución
/* 
const productos = [
	{ id: 1, nombre: 'camisa', precio: 2000 },
	{ id: 2, nombre: 'pantalon', precio: 2500 },
	{ id: 3, nombre: 'zapato', precio: 1500 },
	{ id: 4, nombre: 'gorra', precio: 200 },
];

console.log(productos.some((item) => item.nombre === 'camisa')); */

//Map transforma el arreglo en otro arreglo de acuerdo al parametro seleccionado
const productos = [
	{ id: 1, nombre: 'camisa', precio: 2000 },
	{ id: 2, nombre: 'pantalon', precio: 2500 },
	{ id: 3, nombre: 'zapato', precio: 1500 },
	{ id: 4, nombre: 'gorra', precio: 200 },
];

let nombre = productos.map((item) => item.nombre);
console.log(nombre);