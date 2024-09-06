// Le chainage de promesse
console.log(fetch('https://pokeapi.co/api/v2/pokemon/25')) // Affiche un objet de type promesse

fetch('https://pokeapi.co/api/v2/pokemon/25') // retourne une promesse
    .then(r => {
        console.log(r)
        return r.json()
    }) // retourne une promesse
    .then(reponse => {
        let image = document.createElement('img');
        image.src = reponse["sprites"]["other"]["home"]["front_female"];
    })


// Async - récupérer l'emoticone associé a un animal
const getAnimal = async (nom) => {
    const animaux = {
        'singe': '🐒',
        'chien': '🐕',
        'loup': '🐺',
        'renard': '🦊',
        'licorne': '🦄',
        'lapin': '🐇'
    }
    console.log("Animaux")
    console.log(animaux)
    if (animaux[nom]) {
        return Promise.resolve(animaux[nom])
    } else {
        return Promise.reject(new Error("l'animal n'est pas trouvé"))
    }
}

// Affichage de la licorne
getAnimal('toto').then(console.log).catch(r => {
    console.log('la promesse est rejeté')
})

const singe = '\u{1F412}';
console.log(singe)

// Await
// Permet d'attendre le retour d'un appel asynchrone avant de passe
// a l'instruction suivante

const zoo = async () => {
    const lapin = await getAnimal('lapin');
    const toto = await getAnimal('toto')
    return [lapin, toto]
}

async function zoo2() {

}

console.log("affiche de lapin et ensuite loup")
zoo().then(console.log).catch(console.log('Erreur de la récupération du zoo'))

const getAnimalWithDelay = async (nom, delay) => {
    const animaux = {
        'singe': '🐒',
        'chien': '🐕',
        'loup': '🐺',
        'renard': '🦊',
        'licorne': '🦄',
        'lapin': '🐇'
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (animaux[nom]) {
                resolve(animaux[nom])
            } else {
                reject(new Error("l'animal n'a pas été trouvé"))
            }
        }, delay)
    })
}

getAnimalWithDelay('licorne', 30000) // pas bien
    .then(console.log) // la licorne sera affiché après 2 seconde
    .catch(console.error)