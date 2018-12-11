import { User } from './user.class';
import { Menu } from './../menu/menu.class';
import { Toast } from './../modules/toaster/toast.class';


export class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition des attributs
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        //Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /** formListener : gestionnaire d'événements sur le formulaire de login
     * @param void (n'accepte pas de parametres)
     * @return void (ne retourne rien)
     * 
    */

    formListener() {

        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'keyup',
            // Callback: fonction appelée si l'événement défini survient
            function (event) {

                //Est-ce que les deux champs sont remplis
                //Et longueur login > 5 caractères
                //On peut enlever login.Val different de valeur vide, puisque on dit
                //qu'il doit etre supérieur à 5 caractères

                if (
                    // login.val() !== '' &&
                    password.val() !== '' &&
                    login.val().length >= 5) {
                    // On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        );
    }

    submitListener() {

        let login = this.login;
        let password = this.password;

        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); //Empêche l'action par défaut

                //Instancie un nouvel utilisateur
                const user = new User();
                // Définit le login et le password de l'utilisateur
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Gère l'authentification: dit s'il est VRAI ou FAUX
                if (user.authenticate()) {
                    console.log('Ok, tu peux y aller');

                    // Instancie le menu...

                    const menu = new Menu();
                    menu.setUser(user);
                    let option = this.option;




                } else {
                    console.log('KO, t\'as pas le droit !');
                    login.val();
                    password.val();
                    $('#btnLogin').attr('disabled', 'disabled');

                    //On peut instancier un toast
                    const toast = new Toast(
                        {
                            message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            duration: 2,
                            background: 'danger'
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}