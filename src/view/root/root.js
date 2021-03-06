define(
    ['ractive',
     'text!view/root/root.html',
     'css!view/root/root.css'
    ],

    function (Ractive, RootTemplate) {

        var view = function (element) {
            this.element = element;

            this.render();
        };

        view.prototype.onLoaded = function () {
            console.log('Loaded: Root');
        };

        view.prototype.render = function () {
            console.log('> Rendering: Root');
            var ractive = new Ractive({
                el: this.element,
                template: RootTemplate
            });

        };

        return view;
    }
);