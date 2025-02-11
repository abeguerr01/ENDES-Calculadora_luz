window.onload = inicio;
console.log("Script Cargado");

let intervalo1 = null; 
let seg1 = 0; 
let consumo1 = 0;

let intervalo2 = null; 
let seg2 = 0; 
let consumo2 = 0;

let intervalo3 = null; 
let seg3 = 0; 
let consumo3 = 0;

function inicio() {
    document.getElementById("bt1").onchange = accion1;
    document.getElementById("bt2").onchange = accion2;
    document.getElementById("bt3").onchange = accion3;
    console.log("Eventos de botones asignados");
}

function accion1() {
    const checkbox = document.getElementById("bt1");
    const display = document.getElementById("tele");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo1 = setInterval(() => {
            seg1++;
            consumo1 = seg1 * 0.000001375;
            let gasto = consumo1 * 0.5;
            display.textContent = `Consumo: ${consumo1.toFixed(8)} kWh Gasto: ${gasto.toFixed(8)}`;
            calcularTotal(); // Llamar a calcularTotal
        }, 1000); 
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo1); 
        intervalo1 = 0;
        // No reiniciar seg1 ni consumo1, solo detener el intervalo
    }
}

function accion2() {
    const checkbox = document.getElementById("bt2");
    const display = document.getElementById("luz");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo2 = setInterval(() => {
            seg2++;
            consumo2 = seg2 * 0.000011111111;
            let gasto = consumo2 * 0.5;
            display.textContent = `Consumo: ${consumo2.toFixed(8)} kWh Gasto: ${gasto.toFixed(8)}`;
            calcularTotal(); // Llamar a calcularTotal
        }, 1000);
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo2); 
        intervalo2 = 0;
        // No reiniciar seg2 ni consumo2, solo detener el intervalo
    }
}

function accion3() {
    const checkbox = document.getElementById("bt3");
    const display = document.getElementById("radiador");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo3 = setInterval(() => {
            seg3++;
            consumo3 = seg3 * 0.00041666666;
            let gasto = consumo3 * 0.5;
            display.textContent = `Consumo: ${consumo3.toFixed(8)} kWh Gasto: ${gasto.toFixed(8)}`;
            calcularTotal(); // Llamar a calcularTotal
        }, 1000); 
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo3);
        intervalo3 = 0;
        // No reiniciar seg3 ni consumo3, solo detener el intervalo
    }
}

function calcularTotal() {
    const totalConsumo = consumo1 + consumo2 + consumo3;
    const totalGasto = totalConsumo * 0.5; // Suponiendo que el gasto es el mismo factor
    document.getElementById("total").textContent = `Consumo Total: ${totalConsumo.toFixed(8)} kWh Gasto Total: ${totalGasto.toFixed(8)}`;
}