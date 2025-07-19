/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const userLetter = prompt('inserisci una lettere');

// Dichiara la funzione qui.
const checkFirstLetter = (names, letter) => {
    let paroleTrovate = [];
    for (let i = 0; i < names.length; i++) {
        const firstLetter = names[i].charAt(0);
        if (firstLetter === letter) {
            paroleTrovate.push(names[i]);
        }

    }
    return paroleTrovate
}

// Invoca la funzione qui e stampa il risultato in console

console.log(checkFirstLetter(names, userLetter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]