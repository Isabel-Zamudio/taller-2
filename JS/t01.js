//1 . Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

// Calificación	Equivalente en letras

// Entre 4.8 <= 5.0	                E   =   Excelente
// Entre 4.5 <  4.8	                MB  =   Muy bueno
// Entre 4.0 <  4.4  	            B   =   Bueno
// Entre 3.5 <  4.0	                A   =   Aprobado
// Entre 0   <  3.5	                R   =   Reprobado

let cantNotas = parseInt(prompt("Digite cuántas notas desea calcular: "));

function funcionSuma(cantNotas) {
    let suma = 0;
    if (cantNotas >= 3) {
        for (let i = 1; i <= cantNotas; i++) {
            let nota = parseFloat(prompt("Digite nota #" + i + " de 1 a 5: "));
            
            if (nota < 0 || nota > 5){

                console.log("Nota invalida")
            }
            else{
                suma = suma + nota;
            }
                
        }
        console.log("La suma es de " + suma);
        return suma;
    } else {
        console.log("Número inválido");
        return null;
    }
}

function funsionPromedio(suma, cantNotas){
    let promedio = suma / cantNotas;

    let letra;

    if (promedio >= 4.8 && promedio <= 5.0) {
        letra = "E"; 
    } 
    else if (promedio > 4.5 && promedio < 4.8) {
        letra = "MB"; 
    } 
    else if (promedio >= 4.0 && promedio <= 4.4) {
        letra = "B"; 
    } 
    else if (promedio >= 3.5 && promedio < 4.0) {
        letra = "A"; 
    } 
    else if (promedio >= 0 && promedio < 3.5) {
        letra = "R"; 
    } 
    else {
        letra = "Nota invalida";
    }

    return letra;
}

let sumaNotas = funcionSuma(cantNotas);
let letraPromedio = funsionPromedio(sumaNotas, cantNotas);
console.log(`La letra asociada al promedio es: ` + letraPromedio);