window.onload = inicio;
console.log("Script Cargado");

let intervalo1 = null; 
let seg1 = 0; 

let intervalo2 = null; 
let seg2 = 0; 

let intervalo3 = null; 
let seg3 = 0; 

function inicio() {
    
    document.getElementById("bt1").onchange = accion1;
    document.getElementById("bt2").onchange = accion2;
    document.getElementById("bt3").onchange = accion3;
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
            display.textContent = `Consumo: ${consumo.toFixed(8)} kWh \nGasto:${gasto.toFixed(4)}`;
            
        }, 1000); 
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
            let consumo = (seg2 / 3600) * 0.5; 
            display.textContent = `Consumo: ${consumo.toFixed(4)} kWh`;
        }, 1000); 
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
        intervalo2 = setInterval(() => {
            seg3++;
            let consumo = (seg2 / 3600) * 0.5; 
            display.textContent = `Consumo: ${consumo.toFixed(4)} kWh`;
        }, 1000); 
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo3); 
        intervalo3 = 0;
        //seg3 = 0; 
        //display.textContent = "Consumo: 0.0000 kWh"; 
    }
}


