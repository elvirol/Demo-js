"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sport = void 0;
// export permet l'utilisation de cette classe dans une autre classe
var Sport = /** @class */ (function () {
    // Constructeur
    function Sport(nom, description) {
        this.description = description;
        this.nom = nom;
        this.prive = 'valeur cachée';
    }
    // Méthodes ou accesseurs/mutateurs (getter/setter)
    Sport.prototype.afficher = function () {
        console.log("".concat(this.nom, " - ").concat(this.description));
    };
    return Sport;
}());
exports.Sport = Sport;
var squash = new Sport("Squash", "Un sport de raquette");
squash.afficher();
