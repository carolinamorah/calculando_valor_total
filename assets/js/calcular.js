function calcular(){
    var inputCantidad = document.querySelector('#cantidad').value;
    var cantidad = document.querySelector('p #parrafoCantidad');
    cantidad.innerHTML = inputCantidad;
    parseInt(inputCantidad)

    var inputColor = document.querySelector('#color').value;
    var color = document.querySelector('p #parrafoColor');
    color.style.backgroundColor = inputColor;
    
    var total = document.querySelector('#total');
    var valorTotal = 400000 * inputCantidad;
    total.innerHTML = valorTotal.toLocaleString('es-CL')
}