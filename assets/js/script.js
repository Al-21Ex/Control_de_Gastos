let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = []; // Nueva lista para las descripciones

//Esta función se invoca al momento de que el usuario hace clic en el 
//boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value; // Capturamos la descripción

    // Convertir el valor del gasto a un número
    valorGasto = Number(valorGasto);

    if (valorGasto > 150) {
        alert("¡Advertencia! El gasto es mayor a 150 dólares.");
    }

    listaNombresGastos.push( nombreGasto );
    listaValoresGastos.push( valorGasto );
    listaDescripcionesGastos.push(descripcionGasto); // Agregamos la descripción a la nueva lista

    actualizarListaGastos()

}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista ='';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcion = listaDescripcionesGastos[posicion]; // Obtenemos la descripción
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcion}
        
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        
        </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}