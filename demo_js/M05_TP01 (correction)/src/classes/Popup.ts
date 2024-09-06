// Définition de la classe Popup
export class Popup {
    // Méthode statique pour afficher une popup avec le contenu spécifié
    static show(content: string): void {
        // Création d'un élément div pour le conteneur de la popup
        const popupContainer = document.createElement('div');
        // Ajout de la classe 'popup-container' au conteneur de la popup
        popupContainer.className = 'popup-container';

        // Création d'un élément div pour le contenu de la popup
        const popupContent = document.createElement('div');
        // Ajout de la classe 'popup-content' au contenu de la popup
        popupContent.className = 'popup-content';
        // Définition du contenu HTML de la popup
        popupContent.innerHTML = content;

        // Création d'un bouton pour fermer la popup
        const closeButton = document.createElement('button');
        // Définition du texte du bouton de fermeture
        closeButton.textContent = 'Fermer';
        // Ajout d'un événement de clic au bouton de fermeture pour supprimer la popup
        closeButton.addEventListener('click', () => {
            // Suppression du conteneur de la popup du document
            document.body.removeChild(popupContainer);
        });

        // Ajout du bouton de fermeture au contenu de la popup
        popupContent.appendChild(closeButton);
        // Ajout du contenu de la popup au conteneur de la popup
        popupContainer.appendChild(popupContent);

        // Ajout du conteneur de la popup au corps du document
        document.body.appendChild(popupContainer);
    }
}
