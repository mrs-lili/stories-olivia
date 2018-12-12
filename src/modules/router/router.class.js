/**
 * @name Router
 * @desc Collection des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */

 import { Route } from './route.class';

 export class Router {
     constructor() {
         this.routes = new Map(); //C'est une collection, objet natif, donne sous forme de liste (comme tableau)

         let router = this; //Objet router rangé dans une var locale, pour pouvoir utiliser router dans evenement.

         // Définit le listener sur les routes

         $(window).on(
             'hashchange',
             function(event) {
                 router.getRoute()
             }
         );

         $(window).on(
             'load',
             function(event) {
                 router.getRoute()
             }
         );
     }

     add(route) {
         this.routes.set(route.path, route);
         return this;
     }

     getRoute(){
         const url = location.hash.slice(1) || '/';
         console.log('Route définies : ' + this.routes.size + ' [' + url + ']';  //size retourne le nombre d'element dans la collection routes
         return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');

     }
 }

 