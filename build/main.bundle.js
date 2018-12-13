/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(/*! ../../src/modules/router/router.class */ "./src/modules/router/router.class.js");

var _route = __webpack_require__(/*! ../../src/modules/router/route.class */ "./src/modules/router/route.class.js");

var _userService = __webpack_require__(/*! ../../src/services/user-service.class */ "./src/services/user-service.class.js");

//Instancie les routes de l'application

var router = new _router.Router(); /**
                                    * @name main.js
                                    * @desc Point d'entrée principal dans l'application Javascript
                                    */

var userService = new _userService.UserService(); //garde-fou qui va etre mis sur chaque route quand on a besoin,
//C'est lui qui dit ce qu'on a le droit de faire
router.add(new _route.Route('/', 'LoginController', userService)).add(new _route.Route('/mystories', 'MyStories', userService));

/***/ }),

/***/ "./src/modules/router/route.class.js":
/*!*******************************************!*\
  !*** ./src/modules/router/route.class.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Route
 * @desc Définition des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */

var Route = exports.Route = function () {
    function Route(path, controller) {
        var canActivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Route);

        this.path = path;
        this.controller = controller;
        this.canActivate = canActivate;
    }

    //canActivate=null veut dire que c'est un paramètre optionnel

    _createClass(Route, [{
        key: "getPath",
        value: function getPath() {
            return this.path;
        }
    }, {
        key: "getController",
        value: function getController() {
            return this.controller;
        }
    }, {
        key: "getCanActivate",
        value: function getCanActivate() {
            return this.canActivate;
        }
    }]);

    return Route;
}();

/***/ }),

/***/ "./src/modules/router/router.class.js":
/*!********************************************!*\
  !*** ./src/modules/router/router.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name Router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc Collection des routes de l'application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aélion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _route = __webpack_require__(/*! ./route.class */ "./src/modules/router/route.class.js");

var _loginController = __webpack_require__(/*! ./../../user/login/loginController.class */ "./src/user/login/loginController.class.js");

var _myStories = __webpack_require__(/*! ./../../stories/myStories.class */ "./src/stories/myStories.class.js");

var _userService = __webpack_require__(/*! ./../../services/user-service.class */ "./src/services/user-service.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Créée une constante controllers qui contient les définitions des classes de tout les controleurs
var controllers = {
    LoginController: _loginController.LoginController,
    MyStories: _myStories.MyStories
};

var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = new Map(); //C'est une collection, objet natif, donne sous forme de liste (comme tableau)

        var router = this; //Objet router rangé dans une var locale, pour pouvoir utiliser router dans evenement.

        // Définit le listener sur les routes

        $(window).on('hashchange', function (event) {
            router.getRoute(); //Quand l'url change ca va chercher la methode getRoute
        });

        $(window).on('load', function (event) {
            router.getRoute();
        });
    }

    _createClass(Router, [{
        key: 'add',
        value: function add(route) {
            this.routes.set(route.path, route);
            return this;
        }
    }, {
        key: 'getRoute',
        value: function getRoute() {
            var url = location.hash.slice(1) || '/'; //regardes le hash et enlève le #, s'il n'y a pas de # on met un /. 
            console.log('URL à charger [' + url + ']'); //size retourne le nombre d'element dans la collection routes

            //Ensuite, on va essayer de chercher si dans la collection des routes, on a quelque chose qui correspond.
            //La collection des routes est dans main.js. On regarde si l'url découpée correspond à une route.
            var route = this.routes.get(url);

            // Instance d'un controleur vide

            var controller = {};

            if (!route) {
                // Aucun contrôleur associé à cette route
            } else {
                //si on a qqch, ca contient donc un objet de type route définit dans route.class.js
                if (url === '/') {
                    //si la route est juste un /, on veut donc retourner à l'accueil de l'application.
                    //Soit on affiche formulaire de login, soit on affiche mes stories.
                    // On vérifie l'utilisateur pour voir s'il a déjà été enregistré dans localStorage ou pas.
                    var userService = new _userService.UserService();
                    if (userService.hasUser()) {
                        //Retourne donc vrai ou faux: on a un utilisateur ou non
                        //Il y a un utilisateur identifié...donc pas de login
                        controller = new _myStories.MyStories(); //Créée un nouveau controller qui va gérer mystories
                    } else {
                        //Pas encore d'utilisateur, on instancie LoginController
                        controller = new _loginController.LoginController(); //un controleur envoie vers formulaire de login
                    }
                } else {
                    //La route définie est autre chose...
                    console.log('Instancie :' + route.getController()); //Retourne le controller spécifié par le hash qu'on a trouvé.
                    //Ex si /mystories -> ca renvoie vers mystories

                    var canActivate = route.getController(); //Demande si on peut prendre cette route pour l'utilisateur connecté
                    if (canActivate) {
                        //L'instanciation requiert une vérification
                        if (canActivate.hasUser()) {
                            controller = new controllers[route.getController()](); //instance dynamique, on s'appuie sur une constance de classe
                            //Le new s'appuie sur l'objet controllers, et dedans on va chercher la classe de la route qui correpsond au controller.
                            //Entre crochet: on met la classe
                        } else {
                            //On ne peut pas, sans utilisateur identifié
                            controller = new _loginController.LoginController(); //on renvoie obligatoirement vers le formulaire de login
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
    }]);

    return Router;
}();

/***/ }),

/***/ "./src/services/user-service.class.js":
/*!********************************************!*\
  !*** ./src/services/user-service.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name UserService
 * @desc Service de gestion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

var UserService = exports.UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    /**
     * Lit localStorage pour récupérer un éventuel utilisateur
     * @return boolean
     */

    _createClass(UserService, [{
        key: 'hasUser',
        value: function hasUser() {
            var user = JSON.parse(localStorage.getItem('storieUser'));
            if (user) {
                return true;
            }
            return false;
        }
    }]);

    return UserService;
}();

/***/ }),

/***/ "./src/stories/myStories.class.js":
/*!****************************************!*\
  !*** ./src/stories/myStories.class.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name MyStories
 * @desc Contrôleur pour l'affichage des stories utilisateur
 * @author Aélion
 * @version 1.0.0
 */
var MyStories = exports.MyStories = function () {
    function MyStories() {
        _classCallCheck(this, MyStories);

        // Définit la vue pour ce contrôleur
        this.view = './src/stories/views/stories.view.html';
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(MyStories, [{
        key: 'getView',
        value: function getView() {
            // Récupère le placeholder de mon application
            var app = $('[app]');

            $.get(this.view,
            // Callback appelée après que le fichier ait été chargé
            function (viewContent) {
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent);
            });
        }
    }]);

    return MyStories;
}();

/***/ }),

/***/ "./src/user/login/loginController.class.js":
/*!*************************************************!*\
  !*** ./src/user/login/loginController.class.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Aélion
 * @version */

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
    }

    /**
     * Méthode pour récuperer la vue à afficher
     * Il faut donc récuperer la vue, sous la forme d'élément html à injecter à notre page.
     */

    _createClass(LoginController, [{
        key: 'getView',
        value: function getView() {
            // Récupère le placeholder de mon application
            var app = $('[app]'); //on cherche quelque part dans le document qqch qui a l'attribut app
            // Car on veut injecter notre contenu ici. On parle de "placeholder"

            $.get(
            // 2 parametres: ce qu'on veut récupérer (this.view) et met le contenu
            // dans le parametre viewContent.
            this.view, function (viewContent) {
                // console.log(viewContent); <- pas necessaire
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent); //on remplit
            });
        }
    }]);

    return LoginController;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map