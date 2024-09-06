// Importation de la classe Article depuis le fichier "Article.ts"
import { Article } from "./Article.ts";

// Importation de la classe Popup depuis le fichier "Popup.ts"
import { Popup } from "./Popup.ts";

// Définition de la classe ArticleTableRenderer
export class ArticleTableRenderer {
    // Déclaration d'une propriété privée articles, qui est un tableau d'instances de la classe Article
    private articles: Article[] = [];

    // Méthode pour ajouter un article au tableau articles
    addArticle(article: Article): void {
        this.articles.push(article);
    }

    // Méthode pour générer un nombre spécifié d'articles aléatoires et les ajouter au tableau articles
    generateRandomArticles(numArticles: number): void {
        for (let i = 1; i <= numArticles; i++) {
            // Création d'un nouvel article avec un nom, une description et un prix aléatoire
            const article = new Article(
                `Article ${i}`,
                `Description ${i}`,
                Math.floor(Math.random() * 100) + 1
            );
            // Ajout de l'article généré au tableau articles
            this.addArticle(article);
        }
    }

    // Méthode pour rendre le tableau d'articles dans un élément HTML avec l'id 'app'
    render(): void {
        // Récupération de l'élément HTML avec l'id 'app'
        const articleListDiv = document.getElementById('app');

        // Vérification que l'élément existe
        if (articleListDiv) {
            // Création d'un tableau HTML avec des en-têtes spécifiés
            const table = this.createTable(['Name', 'Description', 'Price']);
            // Création d'un corps de tableau
            const tbody = table.createTBody();

            // Parcours de chaque article dans le tableau articles
            this.articles.forEach(article => {
                // Insertion d'une nouvelle ligne dans le corps du tableau
                const row = tbody.insertRow();
                // Ajout d'un événement de clic à la ligne
                this.addRowEvent(row, article);
                // Remplissage de la ligne avec les données de l'article
                row.innerHTML = [article.name, article.description, article.price].map(cellData => `<td>${cellData}</td>`).join('');
            });

            // Ajout du tableau complet à l'élément HTML 'app'
            articleListDiv.appendChild(table);
        }
    }

    // Méthode privée pour ajouter un événement de clic à une ligne de tableau
    private addRowEvent(row: HTMLTableRowElement, article: Article) {
        row.addEventListener("click", () => {
            // Création du contenu HTML à afficher dans une popup
            const articleContent =
                `<h2>${article.name}</h2>
                 <p><strong>Description:</strong> ${article.description}</p>
                 <p><strong>Prix:</strong> ${article.price} €</p>`;
            // Affichage de la popup avec le contenu de l'article
            Popup.show(articleContent);
        });
    }

    // Méthode privée pour créer un tableau HTML avec des en-têtes spécifiés
    private createTable(headers: string[]) {
        // Création de l'élément table
        const table = document.createElement('table');
        // Insertion d'une ligne d'en-tête dans le tableau
        const headerRow = table.createTHead().insertRow(0);

        // Parcours de chaque en-tête spécifié
        headers.forEach(headerText => {
            // Création de l'élément th pour l'en-tête
            const th = document.createElement('th');
            // Définition du texte de l'en-tête
            th.textContent = headerText;
            // Ajout de l'en-tête à la ligne d'en-tête
            headerRow.appendChild(th);
        });

        // Retourne l'élément table créé
        return table;
    }
}
