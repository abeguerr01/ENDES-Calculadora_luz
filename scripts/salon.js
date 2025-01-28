window.onload = inicio;
console.log("Script Cargado");

let intervalo = null; // Para almacenar el intervalo
let seg1 = 0; // Segundos transcurridos

function inicio() {
    // Asignar la función accion1 al checkbox con id "bt1"
    document.getElementById("bt1").onchange = accion1;
}

function accion1() {
    const checkbox = document.getElementById("bt1");
    const display = document.getElementById("tele");

    if (checkbox.checked) {
        console.log("Checkbox activado. Comenzando cálculo...");
        intervalo = setInterval(() => {
            seg1++;
            let consumo = (seg1 / 3600) * 0.5; // Consumo en kWh
            display.textContent = `Consumo: ${consumo.toFixed(4)} kWh`;
        }, 1000); // Ejecutar cada segundo
    } else {
        console.log("Checkbox desactivado. Deteniendo cálculo...");
        clearInterval(intervalo); // Detener el intervalo
        intervalo = null;
        seg1 = 0; // Reiniciar el contador
        display.textContent = "Consumo: 0.0000 kWh"; // Resetear la visualización
    }
}

/*
function accion2(){
    if (Rana2 >= 3) {
        return;
    }
    total = total + 25;
    Rana2 = Rana2 + 1;
    carro();
}

function accion3(){
    if (Rana3 >= 3) {
       
        return;
    }
    total = total + 65;
    Rana3 = Rana3 + 1;
    carro();
}



function carro() {
    document.getElementById("cesta").innerHTML = `
        Total: ${total}€ <br>
        Ranas marrones: ${Rana1} <br>
        Ranas amarillas: ${Rana2} <br>
        Ranas amarillas-negras: ${Rana3} <br>
        Ranas Guapas: ${Rana4} <br>
        Ranas azules: ${Rana5} <br>
        Ranas raras: ${Rana6} <br>
    `;
}





let tipomoneda = "EUR";
const tasas = {
    EUR: 1,          
    USD: 1.1,        
    MXN: 19.5        
};

window.onload = () => {
    inicio();
    document.getElementById("euro-button").onclick = () => cambiar_moneda("EUR");
    document.getElementById("usd-button").onclick = () => cambiar_moneda("USD");
    document.getElementById("mxn-button").onclick = () => cambiar_moneda("MXN");
    carro();
};

function cambiar_moneda(nuevamoneda) {
    tipomoneda = nuevamoneda;
    carro();
}

function formatomoneda(dinero) {
    switch (tipomoneda) {
        case "USD":
            return `$${(dinero * tasas.USD).toFixed(2)} USD`;
        case "MXN":
            return `$${(dinero * tasas.MXN).toFixed(2)} MXN`;
        default:
            return `€${dinero.toFixed(2)} EUR`;
    }
}

function carro() {
    document.getElementById("cesta").innerHTML = `
        Total: ${formatomoneda(total)} <br>
        Ranas marrones: ${Rana1} <br>
        Ranas amarillas: ${Rana2} <br>
        Ranas amarillas-negras: ${Rana3} <br>
        Ranas Guapas: ${Rana4} <br>
        Ranas azules: ${Rana5} <br>
        Ranas raras: ${Rana6} <br>
 `   
}
*/