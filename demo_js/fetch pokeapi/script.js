fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(r => r.json())
    .then(reponse => {
        let image = document.createElement('img');
        image.src = reponse["sprites"]["other"]["home"]["front_female"];
        document.getElementById('pikachu').appendChild(image)
    })