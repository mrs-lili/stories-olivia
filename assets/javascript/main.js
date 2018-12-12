/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/views/loginController.class';
import { MyStories } from '../../src/stories/myStories.class';
import { UserService } from './../../src/services/user-service.class';

$(window).on(
    'hashchange',
    function (event) {
        const url = document.location.hash;
        console.log('Nouvelle URL :' + document.location.hash);
        if (url === '#/mystories') {
            const authGuard = new UserService(); //authGard: "garde-fou"
            if (!authGuard.hasUser()) { //si y a pas d'utilisateur dans local storage on instancie controleur de login
                const controller = new LoginController();
                controller.getView();

                //Créer une instance de Login
                const login = new Login();
            } else { //mais si y a un utilisateur on instancie le controleur de storie
                const controller = new MyStories();
                controller.getView();
            }
        } else {
            const controller = new LoginController();
            controller.getView();

            //Créer une instance de Login
            const login = new Login();
        }
    }


);


//Evenement lorsque la fenetre est chargée
$(window).on(
    'load',
    function (event) {
        const url = document.location.hash;
        console.log('URL :' + document.location.hash);
        if (url === '#/mystories') {
            const authGuard = new UserService(); //authGard: "garde-fou"
            if (!authGuard.hasUser()) { //si y a pas d'utilisateur dans local storage on instancie controleur de login
                const controller = new LoginController();
                controller.getView();

                //Créer une instance de Login
                const login = new Login();
            } else { //mais si y a un utilisateur on instancie le controleur de storie
                const controller = new MyStories();
                controller.getView();
            }
        } else {
            const authGuard = new UserService(); //authGard: "garde-fou"
            if (!authGuard.hasUser()) { //si y a pas d'utilisateur dans local storage on instancie controleur de login
                const controller = new LoginController();
                controller.getView();

                //Créer une instance de Login
                const login = new Login();
            } else { //mais si y a un utilisateur on instancie le controleur de storie
                const controller = new MyStories();
                controller.getView();
            }
        }
    }


);


/**
let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';


// @version  1.0.1 Passage par contrôleur
// On créée une instance du contrôleur
const authGuard = new UserService(); //authGard: "garde-fou"
if (!authGuard.hasUser()) { //si y a pas d'utilisateur dans local storage on instancie controleur de login
    const controller = new LoginController();
    controller.getView();

    //Créer une instance de Login
    const login = new Login();
} else { //mais si y a un utilisateur on instancie le controleur de storie
    const controller = new MyStories();
    controller.getView();
}

// Pour test, instanciation du contrôleur pour l'affichage des stories utilisateur

//const controller = new MyStories();
//controller.getView();
*/