let ingresosHTML="";

let agregarDato = (event) =>{
    event.preventDefault();

    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;

    if(descripcion!="" && valor !==""){
        console.log("descripcion: "+ descripcion);
        console.log("valor :"+valor);
        if(tipo==="ingreso"){
            cargarIngresos(descripcion, valor);
        }else if(tipo ==="egreso"){
            //hace otra cosa
        }
    }else{
        alert("Debe completar todos los campos")
    }
    console.log(tipo);
}

let cargarIngresos = (descripcion, valor) =>{
    ingresosHTML += crearIngresosHTML(descripcion,valor);
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}


let crearIngresosHTML=(descripcion,valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${valor}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
}