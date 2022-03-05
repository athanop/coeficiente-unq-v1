var datos = function() {
    let prom = document.getElementById("promedio-input").value;
    let tco = document.getElementById("tco-input").value;
    let tcc = document.getElementById("tcc-input").selectedIndex;
    
    if (estaVacio(prom,tco)){
        document.getElementById("resultado").value = "El campo está vacío";
    }
    else if (esNegativo(prom, tco)){
        document.getElementById("resultado").value = "Ingresá valores positivos";
    }
    else if (esLaCarrera(prom,tco,tcc,0)){
        document.getElementById("resultado").value = "Tu coeficiente es: " + calcularTodo(prom, tco, 466);
    }
    else if (esLaCarrera(prom,tco,tcc,1)){
        document.getElementById("resultado").value = "Tu coeficiente es: " + calcularTodo(prom, tco, 282);
    }
    else{
    document.getElementById("resultado").value = "Tu coeficiente es: " +decimal;
    }
}

//FUNCION
function calcularTodo(prom, tco, tcc){
    let promedio = calcularPromedio(prom)
    let segParte = restoFormula(tco, tcc)
    let result = (promedio) + (segParte)*5
    let decimal = Number((result).toFixed(2));
    return decimal;
}

//verifica la carrera
function esLaCarrera(x,y,z,j){
    return x > 0 && y > 0 && z == j;
}

//evalua si algun campo esta vacio
function estaVacio(x,y){
    return x == "" || y == "";
}

//evalua si el input es negativo
function esNegativo(x,y){
    return x < 0 || y < 0;
}

//calcula el promedio
function calcularPromedio(x){
    return parseFloat(x / 2)
}
//calcula la segunda parte de la fórmula
function restoFormula(n1, n2){
    return parseFloat(n1) / parseFloat(n2)
}

function limpiar(){
    document.getElementById('promedio-input').value = "";
    document.getElementById('tco-input').value = "";
    document.getElementById('resultado').value = "";
}


function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       datos()
    } else {
       return false;
    }
}
