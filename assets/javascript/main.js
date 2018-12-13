/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */

import { Router } from '../../src/modules/router/router.class';
import { Route } from '../../src/modules/router/route.class';
import { UserService } from "../../src/services/user-service.class";

//Instancie les routes de l'application

const router = new Router ();
const userService = new UserService(); //garde-fou qui va etre mis sur chaque route quand on a besoin,
//C'est lui qui dit ce qu'on a le droit de faire
router
    .add(
        new Route('/', 'LoginController', userService)
    )
    .add(
        new Route('/mystories', 'MyStories', userService)
    )
    