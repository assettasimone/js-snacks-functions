/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialiNome(names) {
    let iniziali = [];

    for (let i = 0; i < names.length; i++) {
        const singleName = names[i];
        iniziali[i] = singleName.charAt(0)
    }

    return iniziali

}

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiNome(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]