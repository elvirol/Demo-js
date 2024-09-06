// Déclaration de variables en Typscript
var unBoolean = true;
var age = 25;
var profession = "informaticien";
// La syntax javascript est possible
var unVariable = 10;
// Preferer la syntaxe suivante:
var uneAutreVariable = 10;
uneAutreVariable = "dix";
var Etablissement;
(function (Etablissement) {
    Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
    Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
    Etablissement[Etablissement["College"] = 2] = "College";
    Etablissement[Etablissement["Lycee"] = 3] = "Lycee";
    Etablissement[Etablissement["Superieur"] = 4] = "Superieur";
})(Etablissement || (Etablissement = {}));
;
var eni = Etablissement.Superieur;
