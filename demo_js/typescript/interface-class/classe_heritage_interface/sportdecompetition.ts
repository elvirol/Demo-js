import {Sport} from "./sport";

export class SportDeCompetition extends Sport {
    constructor(nom: string, description: string, public niveau: string) {
        super(nom, description);
    }

    public afficher(): void {
        super.afficher()
        console.log("Niveau : " + this.niveau)
    }
}

let tennis: SportDeCompetition = new SportDeCompetition("Tennis", "Un jeu de raquettes", "International");
tennis.afficher();