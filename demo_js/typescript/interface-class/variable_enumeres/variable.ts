// Déclaration de variables en Typscript
let unBoolean: boolean = true;
let age: number = 25;
let profession: String = "informaticien"
// La syntax javascript est possible
let unVariable = 10;
// Preferer la syntaxe suivante:
let uneAutreVariable: any = 10;
uneAutreVariable = "dix"

enum Etablissement {
    Maternelle,
    Primaire,
    College,
    Lycee,
    Superieur
};

let eni: Etablissement = Etablissement.Superieur;