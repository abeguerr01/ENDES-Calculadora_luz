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

    accion4()
    console.log("Bucle inicado correctamente")

}

function accion1() {
    const checkbox = document.getElementById("bt1");
    const display = document.getElementById("tele");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo1 = setInterval(() => {
            seg1++;
            let consumo = seg1 * 0.000001375;
            let gasto = consumo * 0.5;
            display.textContent = `Consumo: ${consumo.toFixed(8)} kWh Gasto:${gasto.toFixed(8)}`;
        }, 1000); 
        let consumo1 = consumo;
        return {consumo1};
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo1); 
        intervalo1 = 0;
        //seg1 = 0; 
        //display.textContent = "Consumo: 0.0000 kWh"; 
    }
}

function accion2() {
    const checkbox = document.getElementById("bt2");
    const display = document.getElementById("luz");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo2 = setInterval(() => {
            seg2++;
            let consumo = seg2 * 0.000011111111;
            let gasto = consumo * 0.5;
            display.textContent = `Consumo: ${consumo.toFixed(8)} kWh \nGasto:${gasto.toFixed(8)}`;
        }, 1000);
        let consumo2 = consumo;
        return {consumo2};
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo2); 
        intervalo2 = 0;
        //seg2 = 0; 
        //display.textContent = "Consumo: 0.0000 kWh"; 
    }
}

function accion3() {
    const checkbox = document.getElementById("bt3");
    const display = document.getElementById("radiador");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo3 = setInterval(() => {
            seg3++;
            let consumo = seg3 * 0.00041666666;
            let gasto = consumo * 0.5;
            display.textContent = `Consumo: ${consumo.toFixed(8)} kWh \nGasto:${gasto.toFixed(8)}`;
        }, 1000); 
        let consumo3 = consumo;
        return {consumo3};
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo3);
        intervalo3 = 0;
        //seg3 = 0; 
        //display.textContent = "Consumo: 0.0000 kWh"; 
    }
}

function calcularTotal() {
    const totalConsumo = consumo1 + consumo2 + consumo3;
    const totalGasto = totalConsumo * 0.5; // Suponiendo que el gasto es el mismo factor
    document.getElementById("total").textContent = `Consumo Total: ${totalConsumo.toFixed(8)} kWh Gasto Total: ${totalGasto.toFixed(8)}`;
}

function accion4() {
    const totalConsumo = consumo1 + consumo2 + consumo3;
    const totalGasto = totalConsumo * 0.5; // Suponiendo que el gasto es el mismo factor
    document.getElementById("total").textContent = `Consumo Total: ${totalConsumo.toFixed(8)} kWh Gasto Total: ${totalGasto.toFixed(8)}`;
    
    /*intervalo4 = setInterval(() => {
        consumo1 = accion1;
        consumo2 = accion2;
        consumo3 = accion3;
        
        consumoT = consumo1 + consumo2 + consumo3;
        console.log(consumoT);
        gastoT = consumoT * 0.5;
        console.log(gastoT);

        document.getElementById("total").textContent = `Consumo Total: ${consumoT.toFixed(8)} kWh \nGasto Total: ${gastoT.toFixed(8)}`;
    }, 1000)
    */
 }