function mediana (lista) {
    let listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });
    const tamano = lista.length;

    if (esPar(tamano)) {
        return (listaOrdenada[tamano / 2] + listaOrdenada[(tamano / 2) - 1]) / 2;
    } else {
        return listaOrdenada[(tamano - 1) / 2];
    }
}