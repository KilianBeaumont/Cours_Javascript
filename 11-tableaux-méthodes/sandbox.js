/*
 * Les méthodes principales de traitement de tableaux
 */

// Déclaration d'un tableau

let comptes = [
    {prenom: 'Geralt', nom: 'de Riv', age: 80, premium: true},
    {prenom: 'Harry', nom: 'Potter', age: 14, premium: false},
    {prenom: 'Faker', nom: 'Goat', age: 26, premium: true},
    {prenom: 'Alban', nom: 'Mitroglou', age: 32, premium: false}
]

//--------------------------
// Filtrer un tableau
//--------------------------

// Exemple => récupérer tout les comptes premium

const comptePremium = comptes.filter( ({premium}) => premium)
comptes
    .filter( ({premium}) => premium)
    .forEach(({prenom,nom})=>console.log(`${prenom} ${nom}`))


//-------------------------------------
// Mapper / transformer un tableau
//-------------------------------------

console.clear()

// Exemple => récupérer l'identité de la personne liée au compte
//                    " prénom NOM "

const identites = comptes.map( ({prenom,nom}) =>
    `${prenom} ${nom.toUpperCase()}`)
console.log(identites)

// Exemple => récupérer l'identité de la personne liée au compte
//            sous la forme d'un objet {prenom: 'prenom', nom: 'nom'}

console.clear()
const identite2 = comptes.map(compte => (
    ({
        prenom: compte.prenom,
        nom: compte.nom
    }))
)

console.log(identite2)

// Exemple 3 =>

const identitesPremium = comptes
    .filter( compte => compte.premium)
    .map( compte => ({
        prenom: compte.prenom,
            nom: compte.nom
    }))

console.log(identitesPremium)

//----------------------------
// Trier un tableau
//----------------------------

console.clear()

let prenoms = ["pierre","anne","jean","pauline"]

// Exemple => tri alphabétique ( tri ascendant )

prenoms.sort()
console.log(prenoms)

// Exemple 2 => tri alphabétique ( minuscules et majuscules )

prenoms = ["pierre","anne","Jean","pauline"]
prenoms.sort()
console.log("Exemple : ",prenoms)


