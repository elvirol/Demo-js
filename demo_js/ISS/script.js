// Déclarer des variables globales pour la carte et le marqueur
let map;
let marker;

// Fonction pour obtenir la latitude et la longitude le station spatiale et mettre à jour la carte
function getLatlong() {
    // Appel à l'API pour obtenir les coordonnées
    fetch("http://api.open-notify.org/iss-now.json")
        // Convertir la réponse de l'API en JSON
        .then(data => data.json())
        // Traite les données JSON
        .then(json => {
            // Extraire la latitude et la logitude des données JSON
            const latitude = json['iss_position']['latitude'];
            const longitude = json['iss_position']['longitude'];

            // Met à jour le texte e l'element HTML pour afficher la latitude et la longiture
            document.getElementById('position').innerText = latitude + " " + longitude;

            // Met à jour la position du marqueur sur la carte avec les nouvelles coordonnées
            marker.setLatLng([latitude, longitude])

            // Déplacer la vue sur la carte vers les nouvelles coordonnées de l'ISS
            map.flyTo([latitude, longitude])
        })
}

// Fonction d'initialisation pour configurer la carte et le marqueur
function init() {
    initMap()

    // Configurer un intervalle pour appeler la fonction getLagLong tout les 5 secondes
    setInterval(getLatlong, 5000);
}

function initMap() {
    // Creer une nouvelle carte centrée sur les coordonnées [51.505, -0.09] avec un niveau de zoom de 13
    map = L.map('map').setView([51.505, -0.09], 13)

    // Creer une icone personnalité pour le marqueur avec une image et une taille spécifique
    let unIcone = L.icon({
        iconUrl: 'image/iss.png', // URL de l'image pour l'icone
        iconSize: [64, 64], // Taille de l'icone en pixel
        iconAnchor: [32, 32], // Point de l'icone qui sera placé à la position du marqueur
        popupAnchor: [-3, -76] // Point d'ancrage du popup par rapport à l'icone
    })

    // Creer un marqueur avec l'icone personnalisée et le placer sur la carte à la position initiale
    marker = L.marker([51.505, -0.09], {icon: unIcone}).addTo(map)

    // Ajouter une couche de tuiles OpenstreetMap à la carte
    L.tileLayer('https://tile.openstreemap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map)

}

// Executer la fonction d'initialisation lorsque la page sera completement chargé
onload = init;