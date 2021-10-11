function calculo() {
    let totalCuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    let personas = document.getElementById('personas').value;
    let resultado = (servicio * totalCuenta) / personas;
    console.log('resultado: ' + resultado);
    if (isNaN(resultado)) {
        document.getElementById("res").innerHTML = "Introduce los valores"
    } else if (personas == '' || personas == 0) {
        document.getElementById("res").innerHTML = "Introduce datos válidos"
    } else {
        document.getElementById("res").innerHTML = "<p>total a pagar</p> <h3>" + resultado + " por persona";
    }
}

function limpiar() {
    document.getElementById("res").innerHTML = '';
    document.getElementById("form").reset();
}