/*
Les callbacks
 */

const fonctionExterne = (fonctionCallback) => {
    const valeur = 10
    fonctionCallback(valeur)
}

const afficherValeur = valeur => console.log(valeur)

// faire appel à la fonction externe en lui passant en argument
// la fonction afficherValeur : fonction de callback

fonctionExterne(afficherValeur)

fonctionExterne(valeur=>console.log(valeur))

// Exemple 1 : afficher le contenu d'un tableau

const personnes = ['Pierre','Paul','Anne','Pauline']

// Affichage méthode classique

for (const personne of personnes) {
    console.log(`Hello ${personne}`)
}

// Version "moderne" ES6 : utiliser la méthode forEach (Array)
// Cette méthode permet d'éxécuter une fonction de callback
// Sur chaque élément du tableau
// Cette fonction de callback prend au moins un argument : élément
// Syntaxe : tableau.forEach(callback)

personnes.forEach(personne => console.log(`Hello ${personne}`))

// Exemple 2 :

const notes = [10,12,9,14,17]

notes.forEach( note => console.log(note) )

// Récupérer dans un tableau toutes les notes supérieures à 10
console.clear()
const noteSupa10 = []
for (const note of notes) {
    if (note >= 10) {
        noteSupa10.push(note)
    }
}
noteSupa10.forEach(note => console.log(note))

// Version "moderne" ES6 : méthode filter

noteSupMoyenne = notes.filter(note => note >= 10)

notes
    .filter(note => note >= 10)
    .forEach(note => console.log(note))

// Récupérer la note maximale

console.clear()
let noteMax = 0
for (const note of notes) {
    if (noteMax < note){
        noteMax = note
    }
}
console.log(noteMax)

// Version "moderne" ES6 : méthode reduce

noteMaxi = notes.reduce( (max,note) => Math.max(max,note),0)
console.log(noteMaxi)

noteSomme = notes.reduce( (sum,note) => sum+note,0)
console.log(noteSomme)

const moyenne = notes.reduce( (sum,note) => sum+note / notes.length,0)

console.log(moyenne)
