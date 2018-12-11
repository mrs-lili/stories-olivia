/**
 * @name Menu
 * @desc Gestion du menu utilisateur
 * @author Aélion
 * @version 1.0.0
 */

class Menu {
    constructor() {
        this.options = [
            { title: 'Accueil', active: 'always' },
            { title: 'Toutes les stories', active: 'isAdmin' },
            { title: 'Mes stories', active: 'always' },
            {
                title: 'Mon compte', active: 'always', options: [
                    { title: 'Mes préférences' },
                    { title: 'Changer de mot de passe' },
                    { divider: true },
                    { title: 'Déconnexion' }
                ]
            }
        ];
    }

    /**
     * Définit l'utilisateur connecté
     * @param {*} user
     */

    setUser(user) {
        this.user = user;
        // Met à jour le menu Utilisateur
        this._update();

        // Active ou pas les options
        this._activate();
    }

    _update() {

        console.log('coucou');

        /** 
         * Mise à jour de l'option du menu: (username)
         */

        const userMenu = $('#userMenu');
        userMenu.html(this.user.userName);

        //On définit les options du menu (via bloc qui contient toutes les options du menu)

        const dropdownBlock = $('#userMenuOptions');

        //Virer les options existantes dans les options du menu

        dropdownBlock.empty();

        // Recharge les options à partir de la définition
        //Indice 3 du constructor donc MonCompte, on récupère attribut options
        const userMenuOptions = this.options[3].options;
        //Boucle: elle boucle sur tableau qu'on vient de récupérer ligne du dessus
        //Dès qu'on a un élément dans le tableau on la range dans une variable créée appelé option (constante)
        //On créée une variable item et on dit que ca vaudra à la fabrication d'une option
        //
        for (const option of userMenuOptions) {
            const item = this._makeOption(option);
            item.appendTo(dropdownBlock);
        }
        //En fin de parcours, on affiche le menu
        dropdownBlock.removeClass('hidden');
    }
    _makeOption(option) {
        let item = null;

        if (option.hasOwnProperty('title')) {
            //link logic here
            item = $('<a>');
            item
                .addClass('dropdown-item')
                .attr('href', '#')
                .html(option.title);

            //<a class="dropdown-item" href="#">Action</a>

        } else {
            //divider logic here
            //<div class="dropdown-divider"></div>
            item = $('<div>');
            item
                .addClass('dropdown-divider');
        }
        return item;
    }

_activate() {
    for (let option of this.options) {
        const item = $('[title="' + option.title + '"]');

        if (option.activate === 'always') {
            item.removeClass('disabled');
        } else if (this.options.active === 'isAdmin' && this.user.group === 'Administrateur') {
            item.removeClass('disabled');
        }
    }

}
}



/**  _makeOptions(option) {

    const item = null;

    if (option.hasOwnProperty('title')) {
        // link logic here*

    } else {
        //divider logic here
    }
}

*/

