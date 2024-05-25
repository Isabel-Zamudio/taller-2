// 2. Completa la función operation para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.

//      function operation( operator, firstValue, secondValue ) {
//     // Escribe la lógica de tu solución aquí
    
//     return result;
// }

// Al invocar la funcion operation con diferentes argumentos los resultados deberían ser los siguientes:

// ('+', 3, 6) -->   9
// ('-', 7, 3) -->  -4
// ('*', 9, 9) -->  81
// ('/', 15, 3) --> 5


let firstValue = parseFloat(prompt("Digite primer valorr: "));
let secondValue = parseFloat (prompt("Digite segundo valor: "));
let operator = prompt("Digite el operador de la funcionque dese realizar:  ");

function operation( operator, firstValue, secondValue ) {
    let resultado= 0;

    switch(operator) {
        case "+" :
            resultado = firstValue + secondValue;
            break;
            
        case  "-":
            resultado = firstValue - secondValue;
            break;
          
        case "*":
            resultado = firstValue * secondValue;
            break;
          
        case "/":
          
          resultado = firstValue + secondValue;
            break;

        default:

          resultado = "Indefinido dado que el operador no indica una operación a realizar."
    }
   
    return resultado;
}

let operacion = operation( operator, firstValue, secondValue );
console.log("el resultado de " +firstValue + " " + operator +  " " + secondValue +" es = " +operacion ); 