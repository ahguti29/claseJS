let cilindrada;
let potencia;
alert(
	'Bienvenidos al categorizador de Trepadores Quindio por favor diligenciar correctamente los datos solicitados'
);
function ingresoCilindrada() {
	cilindrada = parseInt(
		prompt('Ingrese la cilindrada de su vehiculo en (CC) : \n Ejemplo: 2000')
	);
}
function ingresoPotencia() {
	potencia = parseInt(
		prompt('Cual es la potencia de su vehiculo en (HP) : \n Ejemplo: 150')
	);
}
const categoriaAuto = () => {
	let cilindrada;
	let potencia;
	let caracteristica = parseInt(
		prompt(
			'Seleccione el número de acuerdo a la caracteristica de su vehiculo: \n 1. Aspirados \n 2. Aspirados Modificados \n 3. Aspirados Deportivos \n 4. Turbo o Supercargados \n 5. Turbo Stock \n 6. Turbo FWD-AWD-RWD \n 7. Turbos y aspirados FWD-AWD-RWD \n 8. 501 hp o superior'
		)
	);


	switch (caracteristica) {
		case 1:
			ingresoCilindrada();
			if (cilindrada <= 1400) {
				alert('Su carro esta en la categoria TQ1');
				break;
			} else if (cilindrada >= 1500 && cilindrada <= 1600) {
				alert('Su carro esta en la categoria TQ2');
				break;
			} else if (cilindrada >= 1800 && cilindrada <= 2500) {
				alert('Su carro esta en la categoria TQ4');
				break;
			}
			break;

		case 2:
			ingresoCilindrada();
			if (cilindrada >= 1300 && cilindrada <= 2000) {
				alert('Su carro esta en la categoria TQ3');
			}
			break;
		case 3:
			ingresoCilindrada();
			if (cilindrada >= 2000 && cilindrada <= 3700) {
				alert('Su carro esta en la categoria TQ5');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 4:
			ingresoCilindrada();
			ingresoPotencia();
			if (cilindrada <= 1800 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 5:
			cilindrada = ingresoCilindrada();
			potencia = ingresoPotencia();
			if (cilindrada === 2000 && potencia <= 260) {
				alert('Su carro esta en la categoria TQ6');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 6:
			ingresoCilindrada();
			ingresoPotencia();
			if (
				cilindrada >= 2000 &&
				cilindrada <= 3000 &&
				potencia > 260 &&
				potencia <= 360
			) {
				alert('Su carro esta en la categoria TQ7');
				break;
			} else if (cilindrada <= 3000 && potencia > 360 && potencia <= 400) {
				alert('Su carro esta en la categoria TQ8');
				break;
			} else {
				alert(
					'La cilindrada en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 7:
			potencia = ingresoPotencia();
			if (potencia > 400 && potencia <= 500) {
				alert('Su carro esta en la categoria TQ9');
				break;
			} else {
				alert(
					'La potencia del vehiculo en la caracteristica seleccionada no esta permitida'
				);
				categoriaAuto();
			}
			break;
		case 8:
			potencia = ingresoPotencia();
			if (potencia > 500) {
				alert('Su carro esta en la categoria GTS2');
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
			categoriaAuto();
			break;
	}

	alert('Fue un gusto servirle. Nos vemos en el campeonato.');
};

categoriaAuto();
