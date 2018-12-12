/**
 * @name Route
 * @desc Définition des routes de l'application
 * @author Aélion
 * @version 1.0.0
 */

 export class Route {
     constructor(path, controller) {
         this.path = path;
         this.controller = controller
     }

     getPath() {
         return this.path;
     }

     getController() {
         return this.controller;
     }
 }