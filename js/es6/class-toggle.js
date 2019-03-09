// This is the ES6 version of the data toggler plugin

// Form element constructor
// ============================================================ //

;((window, document, undefined) => {

    const classTogglers = {
        get: function() {
            return _self;
        },
        init: function(options) {
            return _self || new ClassTogglers(options);
        },
        destroy: function() {
            return
        }
    };

    class ClassTogglers {
        constructor(options) {
            const _this = this;

            options = options || {
                mode: 'selector',
                dataSelector: 'data-toggle',
                dataSelectorClass: 'data-toggle-class'
            };

            if (!options.dataSelector) options.dataSelector = 'data-toggle';
            if (!options.dataSelectorClass) options.dataSelectorClass = 'data-toggle-class';

            if (options.mode == 'global') {
                document.addEventListener('click', function(e) {
                    if (e.target.hasAttribute(`${options.dataSelector}`)){
                        e.preventDefault();
                        e.stopPropagation();


                        _this.toggleFunction(options.dataSelector, options.dataSelectorClass, e.target);
                    }
                },false);
            } else {
                const toggleButtons = document.querySelectorAll(`[${options.dataSelector}]`)

                for (let toggle of toggleButtons) {
                    toggle.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        _this.toggleFunction(options.dataSelector, options.dataSelectorClass, e.target);
                    }, false);
                }
            }

        }

        toggleFunction(toggle, dataClass, eventTarget) {
            let el = eventTarget.getAttribute(dataClass);
            let elClass = document.querySelectorAll(`[${dataClass}]`);
            for(let element of elClass) {
                if(element.getAttribute(dataClass) == el){
                    element.classList.toggle(el);
                }
            }
        }
    }

    let _self;

    if (typeof define === 'function' && define.amd) {
        define([], () => {
            return classTogglers;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = classTogglers;
    } else {
        window.classTogglers = classTogglers;
    }

})(window, document);

const initClassTogglers = classTogglers.init();
