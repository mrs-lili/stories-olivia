class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition du listener sur le formulaire
        this.formListener();
    }

/** formListener : gestionnaire d'événements sur le formulaire de login
 * @param void (n'accepte pas de parametres)
 * @return void (ne retourne rien)
 * 
*/ 

formListener(){
    $('#loginForm').on(
        'keyup',
        // Callback: fonction appelée si l'événement défini survient
        function(event) {
                //vérifier le contenu des deux champs
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                //Est-ce que les deux champs sont remplis

                if (login.val() !== '' && password.val() !== ''){
                    // On peut activer le bouton
                    $('#btnLogin').removeAttr('disabled');
                }else{
                    $('#btnLogin').attr('disabled', 'disabled');
                }
                
        }
    );
}

}