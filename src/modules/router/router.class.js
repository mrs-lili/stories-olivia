/**
 * @name Router
 * @desc Collection des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */

import { Route } from './route.class';
import { LoginController } from './../../user/login/loginController.class';
import { MyStories } from './../../stories/myStories.class';
import { UserService } from './../../services/user-service.class';

export class Router {
    constructor() {
        this.routes = new Map(); //C'est une collection, objet natif, donne sous forme de liste (comme tableau)

        let router = this; //Objet router rangé dans une var locale, pour pouvoir utiliser router dans evenement.

        // Définit le listener sur les routes

        $(window).on(
            'hashchange',
            function (event) {
                router.getRoute() //Quand l'url change vas chercher la methode getRoute
            }
        );

        $(window).on(
            'load',
            function (event) {
                router.getRoute()
            }
        );
    }

    add(route) {
        this.routes.set(route.path, route);
        return this;
    }

    getRoute() {
        const url = location.hash.slice(1) || '/';
        console.log('URL à charger [' + url + ']');  //size retourne le nombre d'element dans la collection routes

        //On va essayer de chercher si dans les routes, on a quelque chose qui correspond
        const route = this.routes.get(url); //va chercher dans la collection des routes l'URL qui correspond à celle que je t'ai défini '/.....'


        // Instance d'un controleur

        let controller = {};


        if (!route) {
            // Aucun contrôleur associé à cette route
        } else {
            if (url === '/') {
                // On vérifie l'utilisateur
                const userService = new UserService();
                if (userService.hasUser()) {
                    //Il y a un utilisateur identifié...donc pas de login
                    const controller = new MyStories();
                } else {
                    //Pas encore d'utilisateur, on instancie LoginController
                    const controller = new LoginController();
                }
            } else {
                //La route définie est autre chose...
                const controller = new (window)[route.getController()]();
            }
            // A la fin, on charge la vue...
            controller.getView();
        }

    }
}

