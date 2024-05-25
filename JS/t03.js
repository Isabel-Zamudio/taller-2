// En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.

//     const corrales = [
//         [ 'oveja', 'oveja', '', 'oveja', '' ],
//         [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
//         [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
//     ]
// La siguiente lista corrales representa los corrales.

// Cada posición en la lista contiene un string que indica el estado de un animal:

// oveja: Oveja sana y salva.
// muerta: Oveja que necesita ser removida del corral.
// lobo: ¡Un peligro para las ovejas!
// '': Un espacio libre en el corral.
// Objetivos:

// Usando funciones deberás realizar las siguientes tareas:

// 1. Contar las ovejas vivas: Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.
// 2. Contar los espacios libres: Identifica cuántos espacios vacíos hay en los corrales, considerando que los espacios con animales muertos también deben ser liberados.
// 3. Neutralizar al lobo: Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.
//4.  Incorporar nuevas ovejas: Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina.

const corrales = [

        [ 'oveja', 'oveja', '', 'oveja', '' ],
        [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
        [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
]

function ovejasVivas(corrales) {
    let vivas = 0;

    for (let i = 0; i < corrales.length; i++) {
        for (let j = 0; j < corrales[i].length; j++) {
            if (corrales[i][j] == "oveja") {
                vivas++;
            }
        }
    }
    return vivas;
}

let vivas = OvejasVivas(corrales);

console.log("Ovejas vivas: " + vivas);

function espaciosLibres(corrales){
    let espacios = 0;

    for (let i = 0; i < corrales.length; i++) {
        for (let j = 0; j < corrales[i].length; j++) {
            if (corrales[i][j] == "" || corrales[i][j] == "muerta") {
                espacios++;
            }
    }
}

    return espacios;

}

let Libres = espaciosLibres(corrales);
console.log("Espacios libres: " + Libres);

function neutralizarLobo(corrales){
    let newCorrales = []

    for (let i = 0; i < corrales.length; i++) {
        let sinLobo = []

        for (let j = 0; j < corrales[i].length; j++) {
            if (corrales[i][j] != "lobo") {
                sinLobo.push(corrales[i][j]);

            }
            else{
                sinLobo.push("")
            }
     }
        newCorrales.push(sinLobo);
    }
    return newCorrales
}

let lobo = neutralizarLobo(corrales)
console.log(lobo)

function nuevasOvejas(corrales){
    let newCorrales = []

    for (let i = 0; i < corrales.length; i++) {
        let ovejasNuevas = ["oveja","oveja"]

        for (let j = 0; j < corrales[i].length; j++) {
            if (corrales[i][j] == "oveja"  ) {
                ovejasNuevas.push(corrales[i][j]);

            }
    
     }
        newCorrales.push(ovejasNuevas);
    }
    return newCorrales

}
let ovejasNuevas = nuevasOvejas(corrales)
console.log(ovejasNuevas)