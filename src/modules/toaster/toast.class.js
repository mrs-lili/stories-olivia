/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 */

export class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {

            //Paramètre de définition de la couleur de fond du toast
            this.backgroundClass = 'danger';

        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée de l'affichage du toast (en secondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }
    }
    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        // Créée en mémoire un nouvel objet div dans le DOM (index.html)
        const toaster = $('<div>');

        // On lui ajoute les classes avec methodes jQuery
        toaster
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('fadeInDownBig')
            .addClass('toast')
            .html('<p>' + this.message + '</p>');

        // Ajoute le toaster au document lui-même
        toaster.appendTo($('body'));

        // Affiche pendant un certain temps
        setTimeout(
            function () {
                setTimeout(
                    function () {
                        toaster
                            .addClass('fadeOutRightBig'); //pour qu'il reparte avec style aussi
                        //Ici, quand on arrive au bout de l'intervalle de temps

                    },
                    this.duration * 1000
                );

                //Ici, quand on arrive au bout de l'intervalle de temps

                toaster.remove();

            },
            this.duration * 1000
            /**
             * Dans index.html ->
             * <div class="tost danger">
             * <p>Désolé ce compte n'existe pas</p>
             * </div>
             */

        );
    }
}