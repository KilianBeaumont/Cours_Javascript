/*
 * Les tableaux
 */

// Déclaration d'un tableau (exemple :  tableau d'entiers)

const tab = [10,28,44,75]
console.log(tab)

// Type d'un tableau

console.log(typeof tab)

// Accès à un élément

console.log(`Element à l index n°2 : ${tab[2]}`)

// Taille d'un tableau

console.log(`Nombre d'éléments : ${tab.length}`)

// Ajout d'un élément

tab.push(318)
console.log(tab)

// Parcours d'un tableau : boucle for

console.clear()
for (let i=0; i<tab.length; i++) {
    console.log(tab[i])
}

// Parcours du tableau : boucle for-of (accès aux valeurs)

console.clear()
for (const nombre of tab) {
    console.log(nombre)
}

// Parcours du tableau : boucle for-in (accès aux index)

console.clear()
for (const index in tab) {
    console.log(`${index} : ${tab[index]}` )
}

// Copie d'un tableau : opérateur d'affectation = (copie par référence)

console.clear()
const tabClone = tab
console.log(tab,tabClone)
tabClone.push(18)
console.log(tab,tabClone)

// Copie d'un tableau :  Array.from (shallow copie - copie superficielle)

console.clear()
const tabCopie = Array.from(tab)
console.log(tab, tabCopie)
tabCopie.push(5287)
console.log(tab, tabCopie)

// Quelques méthodes

console.clear()
const resultat = tab.join('-')
console.log(resultat)

// Récupérer  la position d'un élément

const position = tab.indexOf(28)
console.log(`Position de l'élément 20 : ${position}`)

// Comment concaténer 2 tableaux

const tab2 = [60,70,80]
const tabConcat = tab.concat(tab2)
console.log(tabConcat)

// Slice du tableau

const tabSlice = tab.slice(1,4)
console.log(tab, tabSlice)

// Shallow copie

const tabCopie2 = tab.slice()
console.log(tab, tabCopie2)
tabCopie2.push(300)
console.log(tab, tabCopie2)