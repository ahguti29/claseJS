
class Carro {
	/* Metodo constructor de la clase carro */
	constructor(placa, marca, linea, modelo, caracteristica, color, potencia, cilindrada, categoria) {
		this.placa = placa.toUpperCase();
		this.marca = marca.toUpperCase();
		this.linea = linea.toUpperCase();
		this.modelo = modelo;
		this.color = color;
		this.potencia = potencia;
		this.cilindrada = cilindrada;
        this.categoria = categoria;

	}
}
let cars = [];
let miFormulario = document.querySelector("#formulario");
let inputPlaca = document.querySelector("#placa");

let placaC = formulario.children[1].value;
let marcaC = formulario.children[3].value;
let lineaC = formulario.children[5].value;
let	modeloC = formulario.children[7].value;
let colorC = formulario.children[9].value;
let cilindradaC = formulario.children[11].value;
let potenciaC = formulario.children[13].value;


let contenedor = document.querySelector("#carroIngresado");
let listadoCarros = document.querySelector("#listadoCarroI");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarCarros);
btnCancel.addEventListener("click", mostrarCarros);

inputPlaca.focus();

function validarForm(){
    placaC = formulario.children[1].value;
    marcaC = formulario.children[3].value;
    lineaC = formulario.children[5].value;
	modeloC = formulario.children[7].value;
    colorC = formulario.children[9].value;
    cilindradaC = formulario.children[11].value;
    potenciaC = formulario.children[13].value;

    if (placaC === '' || marcaC === '' || lineaC === '' || modeloC === '' || colorC === '' || cilindradaC === '' || potenciaC === ''){
        alert('Debe diligenciar todos los datos');
        inputPlaca.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarCarros (e){
    e.preventDefault();
    validarForm();
    if (bandera === true){
        let opcion = confirm("Estas seguro de inscribirte");
        if(opcion === true){
            formulario = e.target
            cars.push(new Carro(placaC, marcaC, lineaC, modeloC, colorC, cilindradaC, potenciaC));
        } else {
            alert('No se pudo inscribir');
        }

        placaC = formulario.children[1].value = '';
        marcaC = formulario.children[3].value = '';
        lineaC = formulario.children[5].value = '';
	    modeloC = formulario.children[7].value = '';
        colorC = formulario.children[9].value = '';
        cilindradaC = formulario.children[11].value = '';
        potenciaC = formulario.children[13].value = '';
        contenedor.innerHTML = '';
        agregarAlDom();
        inputPlaca.focus();
    }else {
            inputPlaca.focus()
    }
}

function agregarAlDom(){
    contenedor.innerHTML = `<h3> Ultimo carro ingresado: </h3>
    <p><strong>Placa: </strong> ${placaC}</p>
    <p><strong>Marca: </strong> ${marcaC}</p>
    <p><strong>Linea: </strong> ${lineaC}</p>
    <hr>`;
}

function mostrarCarros(e){
    e.preventDefault();
    listadoCarros.innerHTML = `<h3> Listado de todos los carros inscritos: </h3>`;
    for (const carro of cars) {
        listadoCarros.innerHTML += `
        <p><strong>Placa:</strong> ${carro.placa}</p>
        <p><strong>Marca: </strong> ${carro.marca}</p>
        <p><strong>Linea: </strong> ${carro.linea}</p>
        <hr>`
    }
}

