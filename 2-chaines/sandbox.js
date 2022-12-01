/*
 * Les chaines de caractères
 */

// chaine littérale

console.log("BTS SIO 2")
console.log("BTS SIO 2")

// Déclaration d'une variable de type chaine

console.clear()
let email = "test@exemple@gmail.com"
console.log(email)

// Concaténation de chaines

console.clear()
const prenom = "Kilian"
const nom = "BEAUMONT"
const identite = prenom + ' ' + nom
console.log(identite)

// Accès à un caractère

console.clear()
console.log(identite[2])

// Longueur d'une chaine

console.clear()
const longueur = identite.length
console.log('Longueur de la chaîne : ' + longueur)
console.log('Longueur de la chaîne : ' + identite.length)
console.log('Longueur de la chaîne : ',identite.length)

// Quelques méthodes

console.clear()
console.log(identite.toUpperCase())
console.log(email.indexOf('@'))
// let domaine = email.substring(email.indexOf('@')+1)
let domaine = email.slice(email.indexOf('@')+1)
console.log(domaine)

// Template string (interpolation)

console.clear()
const titre = 'Cours JavaScript'
const auteur = 'Jean DUPOND'
const phrase = 'Le cours ' + titre + ' a été écrit par ' + auteur
console.log(phrase)
const phrase2 = `Le cours ${titre} a été écrit par ${auteur}`
console.log(phrase2)