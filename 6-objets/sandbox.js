/*
 * Les objets
 */

// Création d'un objet littéral

const utilisateur = {
    nom : 'Beaumont',
    age : 19,
    email : 'kilian.beaumont@gmail.com',
    ville : 'Besançon'
}
console.log(utilisateur)

// Accès aux attributs (propriétés) d'un objet

console.log(utilisateur.nom) // notation à préférer
console.log(utilisateur['nom'])

// Modification d'un objet

utilisateur.age = 20
console.log(utilisateur)
utilisateur['age'] = 23
console.log(utilisateur)

// Copie d'objets (copie par référence)

let utilisateurCopie = utilisateur
utilisateurCopie.email = 'kilian.beaumont2@gmail.com'
console.log(utilisateur, utilisateurCopie)
// Il faudrait faire une shallow copie

// Création d'un objet complexe

const utilisateur2 = {
    nom : 'Correro',
    prenom : ['Pierre','Paul','Jacques'],
    email : 'kilian.beaumont@gmail.com',
    adresse : {
        rue : '1 rue du lys',
        codePostal : '25580',
        ville : 'Etalans'
    }
}
// Afficher la ville

console.log(utilisateur2.adresse.ville)

// Afficher les prénoms

console.log(utilisateur2.prenom.join(', '))

// Afficher le prénom principal

console.log(utilisateur2.prenom[0].toUpperCase())