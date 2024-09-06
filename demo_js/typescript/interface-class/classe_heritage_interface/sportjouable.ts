import {Jouable} from "./jouable";
import {Sport} from "./sport";

export class SportJouable extends Sport implements Jouable {

    jouer(joueur1: string, joueur2: string): string {
        let vainqueur = joueur1
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2
        }
        return vainqueur;
    }


}

let badminton: Jouable = new SportJouable("Badminton", "Un sport fatiguant")
console.log("Le vainqueur est : " + badminton.jouer("Batman", "Superman"))
