function mostrarLocal() {
    let local = "Variable Local";
    console.log(local);
}

function padre() {
    let variablePadre = "Padre";
    function hijo() {
        console.log(variablePadre); // Accesible aquí
    }
    hijo();
}
