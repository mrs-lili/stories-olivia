/**
 * @name LogoutController
 * @desc Contrôleur pour la déconnexion de l'utilisateur
 * @author Aélion
 * @version */

import { LoginController } from './../login/loginController.class';
import { UserService } from '../../services/user-service.class';
import { Menu } from '../../menu/menu.class';


export class LogoutController {
    constructor() {
        //Utilise le service pour supprimer la clé via user-service
        const userService = new UserService();
        userService.removeUser();

        //Ne pas oublier de restaurer le menu et donc de virer les options via menu.class
        const menu = new Menu();
        menu.clear(); 

        //Instancier la classe login pour la gestion du formulaire via controleur login

        this.login = new LoginController();

    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    getView() {

return this.login.getView();
    }
}
