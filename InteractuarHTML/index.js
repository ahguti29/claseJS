class Car {
	/* Metodo constructor de la clase carro */
	constructor(placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada, categoria) {
		this.placa = placa.toUpperCase();
		this.marca = marca.toUpperCase();
		this.linea = linea.toUpperCase();
		this.modelo = modelo;
		this.caracteristica = caracteristica;
		this.color = color;
		this.potencia = potencia;
		this.cilindrada = cilindrada;
        this.categoria = categoria;

	}
}

let cars = [];
let registro = prompt("Desea iniciar con la inscripción (Si / No): ").toUpperCase();

while (registro === "SI") {
    let placa = prompt('Ingrese la placa del carro: ');
    let marca = prompt('Ingrese la marca del carro: \n Ejemplo: Renault, Chevrolet, Mercedez');
    let linea = prompt('Ingrese la linea del carro: \n Ejemplo: Sail');
    let modelo = prompt('Ingrese el modelo de su vehiculo: \n Ejemplo: LS, LT, LTZ ');
    let caracteristica = parseInt(
        prompt(
            'Seleccione el número de la caracteristica que corresponda:  \n 1. Aspirados \n 2. Aspirados Modificados \n 3. Aspirados Deportivos \n 4. Turbo o Supercargados \n 5. Turbo Stock \n 6. Turbo FWD-AWD-RWD \n 7. Turbos y aspirados FWD-AWD-RWD \n 8. 501 hp o superior '
        )
    );
    let color = prompt('Ingrese el color del carro: ');
    let potencia = prompt('Ingrese la potencia del carro en (HP): ');
    let cilindrada = prompt(
        'Ingrese la cilindrada del carro en (CC): '
    );

/* Funcion que permite ubicar el carro en la categoria que le corresponda
teniendo en cuenta 3 aspectos que son el cilindraje o cilindrada, la potencia 
y las modificaciones del vehiculo o caracteristicas*/

const categoriaCarro = (caracteristica, cilindrada, potencia) => {
    let categoria;
    /* De acuerdo a la caracteristica ingresada por el usuario evalua cada uno de los valores y de acuerdo  a
	las  decisiones de cada caso ubica al vehiculo en la categoria que corresponda.*/
	switch (caracteristica) {
		case 1:
			if (cilindrada <= 1400) {
				alert('Su carro esta en la categoria TQ1');
                categoria = 1;
				break;
			} else if (cilindrada >= 1500 && cilindrada <= 1600) {
				alert('Su carro esta en la categoria TQ2');
                categoria = 2;
				break;
			} else if (cilindrada >= 1800 && cilindrada <= 2500) {
				alert('Su carro esta en la categoria TQ4');
                categoria = 4;
				break;
			}
			break;

		case 2:
			if (cilindrada >= 1300 && cilindrada <= 2000) {
				alert('Su carro esta en la categoria TQ3');
                categoria = 3;
			}
			break;
		case 3:
			if (cilindrada >= 2000 && cilindrada <= 3700) {
				alert('Su carro esta en la categoria TQ5');
                categoria = 5;
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 4:
			if (cilindrada <= 1800 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
                categoria =  6;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 5:
			if (cilindrada === 2000 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
                categoria = 6;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 6:
			if (
				cilindrada >= 2000 &&
				cilindrada <= 3000 &&
				potencia > 260 &&
				potencia <= 360
			) {
				alert('Su carro esta en la categoria TQ7');
                categoria = 7;
				break;
			} else if (cilindrada <= 3000 && potencia > 360 && potencia <= 400) {
				alert('Su carro esta en la categoria TQ8');
                categoria = 8;
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 7:
			if (potencia > 400 && potencia <= 500) {
				alert('Su carro esta en la categoria TQ9');
                categoria = 9;
				break;
			} else {
				alert(
					'La potencia del vehiculo en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 8:
			if (potencia > 500) {
				alert('Su carro esta en la categoria GTS2');
                categoria = 10;
				break;
			} else if (potencia <= 500) {
				alert(
					'La potencia del vehiculo en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
				break;
			} else break;
		default:
			alert('El valor ingresado es incorrecto');
			break;
	}

	alert('Su registro fue exitoso');
	return categoria;
};

//Variable que llama a la funcion categoria carro para obtener la categoria del carro
let categoria = categoriaCarro(caracteristica, cilindrada, potencia);
cars.push(new Car( placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada, categoria));

registro = prompt("Desea inscribir otro carro (Si / No): ").toUpperCase(); 
}

for (const car of cars) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`;
    document.body.appendChild(contenedor);
}

let TQ1 = cars.filter(car => car.categoria == 1);
document.write("<h3> Lista de Vehiculos en la categoria TQ1:  </h3>");
for (const car of TQ1) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ2 = cars.filter(car => car.categoria == 2);
document.write("<h3> Lista de Vehiculos en la categoria TQ2:  </h3>");
for (const car of TQ2) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}
let TQ3 = cars.filter(car => car.categoria == 3);
document.write("<h3> Lista de Vehiculos en la categoria TQ3:  </h3>");
for (const car of TQ3) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ4 = cars.filter(car => car.categoria == 4);
document.write("<h3> Lista de Vehiculos en la categoria TQ4:  </h3>");
for (const car of TQ4) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ5 = cars.filter(car => car.categoria == 5);
document.write("<h3> Lista de Vehiculos en la categoria TQ5:  </h3>");
for (const car of TQ5) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ6 = cars.filter(car => car.categoria == 6);
document.write("<h3> Lista de Vehiculos en la categoria TQ6:  </h3>");
for (const car of TQ6) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ7 = cars.filter(car => car.categoria == 7);
document.write("<h3> Lista de Vehiculos en la categoria TQ7:  </h3>");
for (const car of TQ7) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ8 = cars.filter(car => car.categoria == 8);
document.write("<h3> Lista de Vehiculos en la categoria TQ8:  </h3>");
for (const car of TQ8) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let TQ9 = cars.filter(car => car.categoria == 9);
document.write("<h3> Lista de Vehiculos en la categoria TQ9:  </h3>");
for (const car of TQ9) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}

let gts2 = cars.filter(car => car.categoria == 10);
document.write("<h3> Lista de Vehiculos en la categoria GTS2:  </h3>");
for (const car of gts2) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Marca: ${car.marca}</h3>
                            <p> Linea $: ${car.linea}</p>
                            <p> Potencia $: ${car.potencia}</p>
                            <p> Cilindrada $: ${car.cilindrada}</p>`
    document.body.appendChild(contenedor);
}