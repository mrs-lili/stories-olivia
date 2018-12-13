/**
 * @name UserService
 * @desc Service de gestion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

import { User } from "../user/user.class";

 export class UserService {
     constructor() {
     }

/**
 * Lit localStorage pour dire si on a un éventuel utilisateur ou non
 * @return boolean
 */

     hasUser() {
         const user = JSON.parse(localStorage.getItem('storieUser'));
         if (user) {
             return true;
         }
         return false;
     }

     removeUser(){
         localStorage.removeItem('storieUser'); //removeItem fait partir la clé storieUser
         this.user = {};
     }

/**
 * Retourne un objet Utiisateur à partir du localStorage
 */

     getUser() {


        const localUser = JSON.parse(localStorage.getItem('storieUser'));
        const user = new User();
        user.setUserName(localUser.userName);
        user.group = localUser.group;

        return user;
     }
 }

