class Piloto {
	constructor(nombre, apellido, tipoDoc, numDoc, edad, depto, municipio, eps) {
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido.toUpperCase();
		this.tipoDoc = tipoDoc.toUpperCase();
		this.numDoc = numDoc;
		this.edad = edad;
		this.depto = depto;
		this.municipio = municipio;
		this.eps = eps;
	}
}
const pilotos = [];

let nombre = prompt('Ingrese su nombre: ');
let apellido = prompt('Ingrese su apellido: ');
let tipoDoc = prompt(
	'Ingrese el tipo de documento: \n CC = Cedula de Ciudadania \n TI = Tarjeta de Identidad'
);
let numDoc = parseInt(
	prompt('Ingrese numero de documento sin puntos ni comas: ')
);
let edad = parseInt(prompt('Ingrese su edad: '));
let depto = prompt('Ingrese el Departamento de residencia: ');
let municipio = prompt('Ingres el municipio de residencia: ');
let eps = prompt('Ingrese el nombre de la EPS a la cual usted esta afiliado: ');

let pilot = new Piloto(
	nombre,
	apellido,
	tipoDoc,
	numDoc,
	edad,
	depto,
	municipio,
	eps
);

for (const piloto of pilotos) {
	if (piloto.numDoc !== numDoc) {
		pilotos.push(pilot);
	} else {
		alert('El piloto ya se encuentra registrado');
	}
}
alert('registro exitoso')
console.log(pilotos);
