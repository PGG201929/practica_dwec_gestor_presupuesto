// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

//funciones práctica 1
function actualizarPresupuesto(cantidad) {
    let numError= -1;

    if(cantidad >= 0) {
        presupuesto = cantidad;
        return (presupuesto);
    }
    else{
        console.log("Cantidad incorrecta.");
        return (numError);
    }
}

function mostrarPresupuesto() {
    // TODO
    let mensaje; 

    mensaje ="Tu presupuesto actual es de " + presupuesto + " €" ;
    return(mensaje);
}



//funciones práctica 2

function listarGastos(){
    for(let i = '0'; i < gastos.length;i++){
        console.log(gastos[i]);
    }
    return(gastos);
}


function anyadirGasto(paramGasto){
    paramGasto.id= idGasto;

    gastos.push(paramGasto);
    idGasto++; 
}

function borrarGasto(id){
    if((id<gastos.length) && (id> (-gastos.length)))
    {
        if(gastos.includes(id, 0)){
            gastos.splice(id, 1);
            //idGasto = gastos.length;
        }
    }
}

function calcularTotalGastos(){
    let totalGastos = 0n;
    let i;

    if(gastos.length != 0){
        for(i=0; i < gastos.length;i++){
            totalGastos +=  BigInt(parseInt(gastos[i].valor));
        }
    }

    return(totalGastos);
}

function calcularBalance(){
    let tG = 0n;
    let balance = 0n;

    tG = calcularTotalGastos();
    balance = BigInt(presupuesto) - tG;

    return(balance);
}



//funcion constructora
function CrearGasto(descrip,cantid, fec, ...etiq) {
    // TODO
    this.descripcion= descrip;
    this.valor = 0;
    this.etiquetas = [];
    this.fecha = Date.now();


    if(cantid >= 0)
    {
        this.valor = cantid;
    }




    //métodos práctica 1
    this.mostrarGasto = function(){
        return("Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €");
    }

    this.actualizarDescripcion = function(descr){
        this.descripcion = descr;
    }

    this.actualizarValor = function(val){
        if(val >= 0)
            this.valor = val;
    }

    //métodos práctica 2
    this.mostrarGastoCompleto = function(){      
        this.mostrarGasto();
        console.log("\n" + "Fecha: " + this.fecha.toLocaleString());
        console.log("\n" + "Etiquetas:");
        for(let i = 0;i < this.etiquetas.length; i++){
            console.log("\n" + "- " + this.etiquetas[i]);
        }
    }
    
    this.actualizarFecha = function(paramFecha){
        let data = Date.parse(paramFecha);

        if(data){
            this.fecha = data;
        }
    }
    
    this.anyadirEtiquetas = function(...argumentos){
        for(let i = 0; i < argumentos.length; i++){
            if(!(this.etiquetas.includes(argumentos[i], 0))){               
                this.etiquetas.push(argumentos[i]);
            }  
        }
    }
    
    this.borrarEtiquetas = function(...argumen){
        let entrada, i;
    
        for(i = 0; i < argumen.length; i++){
            if(this.etiquetas.includes(argumen[i], 0)){
                entrada = this.etiquetas.indexOf(argumen[i],0);
                this.etiquetas.splice(entrada, 1); 
            }  
        }
    } 

    if(fec){
        this.actualizarFecha(fec);
    }

    if(etiq){
        this.anyadirEtiquetas(...etiq);
    }

}








// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

