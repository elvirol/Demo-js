// une interface de méthode
export interface jouer {
    (joueur1: string, joueur2: string): string
}

let jouerAuBadminton: jouer = function (joueur1: string, joueur2: string): string {
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1
}

console.log("le vainqueur est " + jouerAuBadminton("Thierry", "Anthony"))