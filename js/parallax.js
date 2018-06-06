;((window, document, undefined) => {

    const parallax = {
        get: function() {
            return _self;
        },
        init: function(element, options) {
            return _self || new Parallax(element, options);
        },
    };

    class Parallax {

        constructor(element = '[data-parallax=parallax]', options = {
            speed: .4,
            xPos: 'center',
            yPos: 'center'
        }) {

        }



    }

    let _self;

    if (typeof define === 'function' && define.amd) {
        define([], () => {
            return parallax;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = parallax;
    } else {
        window.parallax = parallax;
    }

})(window, document);

const createParallax = parallax.init();
