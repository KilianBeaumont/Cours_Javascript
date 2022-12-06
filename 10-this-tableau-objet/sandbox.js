/*
    Les tableaux d'objets
 */


// Déclaration

const articles = [
    {titre: 'Article 1', auteur: 'Dupond', likes: 30},
    {titre: 'Article 2', auteur: 'Pierre', likes: 17},
    {titre: 'Article 3', auteur: 'Trozam', likes: 5},
    {titre: 'Article 4', auteur: 'Kratos', likes: 78}
]

// Affichage console

console.log(articles)

// Boucle for of

for (const article of articles) {
    console.log(`${article.titre} a ${article.likes} likes`)
}

// Méthode forEach

articles.forEach( article =>
    console.log(`${article.titre} a ${article.likes} likes`)
)

// Version 2

articles.forEach( ({titre,likes}) => console.log(`${titre} a ${likes} likes !`))