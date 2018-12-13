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

//Créée une constante controllers qui contient les définitions des classes de tout les controleurs
const controllers = {
    LoginController,
    MyStories
}

export class Router {
    constructor() {
        this.routes = new Map(); //C'est une collection, objet natif, donne sous forme de liste (comme tableau)

        let router = this; //Objet router rangé dans une var locale, pour pouvoir utiliser router dans evenement.

        // Définit le listener sur les routes

        $(window).on(
            'hashchange',
            function (event) {
                router.getRoute() //Quand l'url change ca va chercher la methode getRoute
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
        const url = location.hash.slice(1) || '/'; //regardes le hash et enlève le #, s'il n'y a pas de # on met un /. 
        console.log('URL à charger [' + url + ']');  //size retourne le nombre d'element dans la collection routes

        //Ensuite, on va essayer de chercher si dans la collection des routes, on a quelque chose qui correspond.
        //La collection des routes est dans main.js. On regarde si l'url découpée correspond à une route.
        const route = this.routes.get(url);


        // Instance d'un controleur vide

        let controller = {};


        if (!route) {
            // Aucun contrôleur associé à cette route
        } else { //si on a qqch, ca contient donc un objet de type route définit dans route.class.js
            if (url === '/') { //si la route est juste un /, on veut donc retourner à l'accueil de l'application.
                //Soit on affiche formulaire de login, soit on affiche mes stories.
                // On vérifie l'utilisateur pour voir s'il a déjà été enregistré dans localStorage ou pas.
                const userService = new UserService();
                if (userService.hasUser()) { //Retourne donc vrai ou faux: on a un utilisateur ou non
                    //Il y a un utilisateur identifié...donc pas de login
                    controller = new MyStories(); //Créée un nouveau controller qui va gérer mystories
                } else {
                    //Pas encore d'utilisateur, on instancie LoginController
                    controller = new LoginController(); //un controleur envoie vers formulaire de login
                }
            } else {
                //La route définie est autre chose...
                console.log('Instancie :' + route.getController()); //Retourne le controller spécifié par le hash qu'on a trouvé.
                //Ex si /mystories -> ca renvoie vers mystories

                const canActivate = route.getCanActivate(); //Demande si on peut prendre cette route pour l'utilisateur connecté
                if (canActivate) {
                    //L'instanciation requiert une vérification
                    if (canActivate.hasUser()) {
                        controller = new controllers[route.getController()](); //instance dynamique, on s'appuie sur une constance de classe
                        //Le new s'appuie sur l'objet controllers, et dedans on va chercher la classe de la route qui correpsond au controller.
                        //Entre crochet: on met la classe
                    } else {
                        //On ne peut pas, sans utilisateur identifié
                        controller = new LoginController(); //on renvoie obligatoirement vers le formulaire de login
                    }
                } else {
                    //Route activable sans contrôle
                    controller = new controllers[route.getController()]();
                }
            }
            //A la fin 
            controller.getView();
        }

    }

}


