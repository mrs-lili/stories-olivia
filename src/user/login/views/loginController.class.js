/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aélion
 * @version */

export class LoginController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
    }

    /**
     * Méthode pour récuperer la vue à afficher
     * Il faut donc récuperer la vue, sous la forme d'élément html à injecter à notre page.
     */

    getView() {
        // Récupère le placeholder de mon application
        const app = $('[app]'); //on cherche quelque part dans le document qqch qui a l'attribut app
        // Car on veut injecter notre contenu ici. On parle de "placeholder"
        
        $.get(
            // 2 parametres: ce qu'on veut récupérer (this.view) et met le contenu
            // dans le parametre viewContent.
            this.view,
            function (viewContent) {
                // console.log(viewContent); <- pas necessaire
                 app.empty(); // Vide le contenu le cas échéant
                 app.html(viewContent) ; //on remplit
            }
        );
    }

}