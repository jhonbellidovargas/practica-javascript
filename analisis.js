// helpers
function esPar ( numero ) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado+elementoActual;
        }
    );
    return sumaLista / lista.length;
}

//Calculadora de medianas
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const  personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]);
        return mediana;
        
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//mediana general
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
)

//ordenamos los salarios
const salariosColSorted = salariosCol.sort(
    function (salario1, salario2) {
        return salario1 - salario2;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana top 10%    splice dices de donde cortar en porcentaje y cuantos elementos extraer
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice( spliceStart , spliceCount );

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log ({
    medianaGeneralCol,
    medianaTop10Col,
})