// export permet l'utilisation de cette classe dans une autre classe
export class Sport {
    // Déclaration des attributs
    public nom: String;
    private prive: String;

    // Constructeur
    constructor(nom: String, public description: string) {
        this.nom = nom;
        this.prive = 'valeur cachée'
    }

    // Méthodes ou accesseurs/mutateurs (getter/setter)
    public afficher(): void {
        console.log(`${this.nom} - ${this.description}`);
    }
}

let squash: Sport = new Sport("Squash", "Un sport de raquette")
squash.afficher()