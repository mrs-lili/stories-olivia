/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/views/loginController.class';
import { MyStories } from '../../src/stories/myStories.class';
let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';


/* // @version  Passage par contrôleur
// On créée une instance du contrôleur
const controller = new LoginController();
controller.getView(); //permet de contrôler qu'il fait bien ce qu'on veut. Si ca fonctionne on
//verra dans console le code html, sinon erreur.

// Créer une instance de Login
// On le met après pour que ca fonctionne dans la vue
const login = new Login(); */

// Pour test, instanciation du contrôleur pour l'affichage des stories utilisateur

const controller = new MyStories();
controller.getView();