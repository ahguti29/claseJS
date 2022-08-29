/* Estructura de un objeto
    {key1: value1, key2: value2,...,keyn: valuen}
*/

/* let persona ={
    nombre: "pepito",
    edad: 23,
    direccion: "AV"
};

console.log(persona.nombre);
console.log(persona.edad);

console.log(persona["nombre"]);
console.log(persona["edad"]);


persona["nombre"] = "Juan";
persona.edad = 67;

console.log(persona); */

//Funciones constructoras

/* function Persona(nombre,edad,direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}
//Const evita cambiar la estructura del objeto
const persona1 = new Persona ("Pepito", 23, "AV");
const persona2 = new Persona ("Mariana", 22, "Calle");
console.log(persona1.nombre);
console.log(persona2.nombre); */
/* 
function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.colorCabello = info.colorCabello;
    this.colorOjos = info.colorOjos;
}

let persona = new Persona ({
    nombre: "Damian",
    edad: 34,
    direccion: "AV",
    colorCabello: "Negro",
    colorOjos: "Azul"
}); */

/* function Producto(img, precio, nombre){
    this.img = img;
    this.precio = precio;
    this.nombre = nombre;
  }
  
  let producto1 = new Producto( 406000, "httpa,sdfhlkasugfojdshf","Monitor sam...");
  
  function Producto(tabla){
    this.img = tabla.img;
    this.precio = tabla.precio;
    this.nombre = tabla.nombre;
  }
  
  let producto2 = new Producto({
    nombre: "Monitor sam...",
    precio: 406000,
    img: "httpa,sdfhlkasugfojdshf",
  })
   */

// length longitud del string

class Producto {
	constructor(nombre, precio, cantidad) {
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
	}

	vender() {
		this.cantidad = this.cantidad - 1;
	}
}

let producto1 = new Producto('Televisor', 100000, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
