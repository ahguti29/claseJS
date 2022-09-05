/* Clase que hace referencia a los pilotos que se van a registrar */
class Piloto {
	/* Metodo constructor de la clase piloto */
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

/* Declaración del array  donde se van a guardar los pilotos registrados */
const pilotos = [];

/* Solicitud de todos los datos del piloto mendiante el prompt */
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

/* Linea que permite crear un nuevo piloto teniendo en cuenta los datos ingresados por el usuario */
let pilot = new Piloto(nombre, apellido, tipoDoc, numDoc, edad, depto, municipio, eps);

/* Instruccion que recorre el array de pilotos y verifica mediante el numero de documento
que no este ya registrado el piloto */
for (const piloto of pilotos) {
	if (piloto.numDoc !== numDoc) {
		pilotos.push(pilot);
	} else {
		alert('El piloto ya se encuentra registrado');
	}
}
alert('registro exitoso')
console.log(pilotos);
