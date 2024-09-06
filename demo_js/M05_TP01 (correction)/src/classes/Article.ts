// Définition de la classe Article
export class Article {
    // Propriétés privées pour stocker le nom, le prix et la description de l'article
    private _name: string;
    private _price: number;
    private _description: string;

    // Constructeur de la classe Article
    // Initialise les propriétés _name, _price et _description avec les valeurs passées en arguments
    constructor(name: string, description: string, price: number) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    // Getter pour la propriété name
    // Retourne la valeur de _name
    get name(): string {
        return this._name;
    }

    // Setter pour la propriété name
    // Permet de définir une nouvelle valeur pour _name
    set name(value: string) {
        this._name = value;
    }

    // Getter pour la propriété price
    // Retourne la valeur de _price
    get price(): number {
        return this._price;
    }

    // Setter pour la propriété price
    // Permet de définir une nouvelle valeur pour _price
    set price(value: number) {
        this._price = value;
    }

    // Getter pour la propriété description
    // Retourne la valeur de _description
    get description(): string {
        return this._description;
    }

    // Setter pour la propriété description
    // Permet de définir une nouvelle valeur pour _description
    set description(value: string) {
        this._description = value;
    }
}
