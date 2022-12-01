/*
 * Destructuring
 */

//******************************************************
// Utilisation avec les tableaux
//******************************************************
console.clear()
const nombres = [12,4,5];

// Sans destructuring

const nb1 = nombres[0]
const nb2 = nombres[1]
const nb3 = nombres[2]
console.log(nb1,nb2,nb3)

// Destructuring "total"

const [a,b,c] = nombres
console.log(a,b,c)

// Destructuring "partielle"
// Récupérer les 2 premières valeurs du tableau

const [d,e,...reste] = nombres
console.log(d,e)
console.log(reste)

const prenoms = ['Jean','Pierre','Albert']
const [prenomCourant, ...prenomSecondaires] = prenoms
console.log(prenomCourant)
console.log(prenomSecondaires)

const prenomUsage = prenoms[0]
const prenoms22 = prenoms.slice(1)
console.log(prenomUsage)
console.log(prenoms22)


//******************************************************
// Utilisation avec les objets
//*****************************************************
let utilisateur = {
    nom: 'dupond',
    age: 30,
    email: 'dupond@exemple.fr',
}

// Sans destructuring

console.clear()
const nom1 = utilisateur.nom
const age1 = utilisateur.age
const email1 = utilisateur.email
console.log(nom1,age1,email1)

// Destructuring

const {nom,age,email} = utilisateur
console.log(nom,age,email)

// Destructuring avec changement de denomination des variables

const {nom:n,age:a1,email:e1} = utilisateur
console.log(n,a1,e1)

const {email:e2} = utilisateur
console.log(e2)

//******************************************************
// Destructuring et fonction
// Utilisation principale avec des objets
//*****************************************************

let p1 = {
    nom: 'dupond',
    prenom: 'jean',
    email: 'dupond@exemple.fr'
}

// Création d'une fonction retournant l'identité d'un objet sous la forme "prenom NOM"
// Méthode "classique"

console.clear()
const identite = personne => personne.prenom + ' ' + personne.nom.toUpperCase()
console.log(identite(p1))

// Méthode "destructuring"

const identite2 = ({nom,prenom}) => prenom + ' ' + nom.toUpperCase()
console.log(identite2(p1))