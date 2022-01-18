// Codigo Cuadrados
console.group("Cuadrados");

function perimetroCuadrado (ladoCuadrado) {
    return ladoCuadrado * 4;
}
function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
//console.log("el perimetro del cuadrado es " + perimetroCuadrado+" metros"+" y el area es "+areaCuadrado+" metros2");

console.groupEnd();

// Codigo Triangulos
console.group("Triangulos");
function perimetroTriangulo (lado1, lado2, baseTriangulo){
    return lado1 + lado2 + baseTriangulo;
}
function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}
//console.log("el perimetro del triangulo es "+perimetroTriangulo+"metros"+" y el area es "+areaTriangulo+"metros2");
console.groupEnd();

//Codigo Circulos
console.group("Circulos");
function perimetroCirculo (radioCirculo) {
    return 2 * Math.PI * radioCirculo;
}
function areaCirculo (radioCirculo) {
    return Math.PI * radioCirculo * radioCirculo;
}
//console.log("el perimetro del circulo es "+perimetroCirculo+" metros"+" y el area es "+areaCirculo+" metros2");
console.groupEnd();


// Interaccion con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const ladoCuadrado = input.value;
    const perimetro = perimetroCuadrado(ladoCuadrado);
    alert("el perimetro del cuadrado es " + perimetro+" metros");
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const ladoCuadrado = input.value;
    const area = areaCuadrado(ladoCuadrado);
    alert("el area del cuadrado es " + area+" metros2");
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const baseTriangulo = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, baseTriangulo);
    alert("el perimetro del triangulo es " + perimetro+" metros");
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const baseTriangulo = parseInt(input1.value);
    const alturaTriangulo = parseInt(input2.value);
    const area = areaTriangulo(baseTriangulo, alturaTriangulo);
    alert("el area del triangulo es " + area+" metros2");
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radioCirculo = input.value;
    const perimetro = perimetroCirculo(radioCirculo);
    alert("el perimetro del circulo es " + perimetro+" metros");
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radioCirculo = input.value;
    const area = areaCirculo(radioCirculo);
    alert("el area del circulo es " + area+" metros2");
}
