function calcularPrecioDescuento (precio, descuento) {
  return (precio * (100- descuento)) / 100;
}

function onClickButtonPriceDiscount( ) {
    var precio = document.getElementById("InputPrecio").value;
    var descuento = document.getElementById("InputPorcentaje").value;
    var precioDescuento = calcularPrecioDescuento(precio, descuento);

    const resultP = document.getElementById("precioDescuento");
    resultP.innerText = "el precio con descuento es $" + precioDescuento;
}