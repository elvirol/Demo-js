export interface Jouable {
    score?: string

    jouer(joueur1: string, joueur2: string): string
}