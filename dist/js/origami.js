"use strict";

;(function () {
    var html = document.querySelector('html');
    html.removeAttribute("class");
})();
'use strict';

;(function () {
    document.addEventListener('click', function (e) {
        if (e.target.dataset.toggle === 'true') {
            e.preventDefault();
            var el = e.target.dataset.toggleClass;
            var elClass = document.querySelectorAll("[data-toggle-class]");
            for (var i = 0; i < elClass.length; i++) {
                if (elClass[i].dataset.toggleClass == el) {
                    elClass[i].classList.toggle(el);
                }
            }
        }
    });
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Form element constructor
// ============================================================ //

;(function (window, document, undefined) {

    var formElements = {
        get: function get() {
            return _self;
        },
        init: function init(options) {
            var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
            if (isIE11) {
                document.querySelector('html').classList.add('ie11');
                return;
            }
            return _self || new FormElements(options);
        }
    };

    var FormElements = function () {
        function FormElements(options) {
            _classCallCheck(this, FormElements);

            options = options || {};
            this.labeledElements = document.querySelectorAll('input[type=text], input[type=email], input[type=password], input[type=url], input[type=number], input[type=date], input[type=datetime], input[type=datetime-local], input[type=number], input[type=time], input[type=tel], textarea, select');
            this.selectElements = document.querySelectorAll('select');
            this.selectLabels = document.querySelectorAll('select-label');
            this.textArea = document.querySelectorAll('textarea');
            this.selectInput = document.querySelectorAll('select');

            // Append event listeners
            // Check elements associated with labels
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'keyup');
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'oninput');
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'onchange');
            // Select element labels - add class 'select-label'
            this.selectLabelClass(this.selectElements, options);
            // Textarea resizing
            this.cycleAppendTextarea(this.textArea, this.resize, 'onchange');
            this.cycleAppendTextarea(this.textArea, this.resize, 'oninput');
            this.cycleAppendTextarea(this.textArea, this.resize, 'cut');
            this.cycleAppendTextarea(this.textArea, this.resize, 'paste');
            this.cycleAppendTextarea(this.textArea, this.resize, 'drop');
            this.cycleAppendTextarea(this.textArea, this.resize, 'keyup');

            // Check elements on load
            this.checkFormElements(this.labeledElements);
        }

        // Utilities / Construction functions
        // ============================================================ //


        _createClass(FormElements, [{
            key: 'cycleAppendLabel',
            value: function cycleAppendLabel(collection, handler, event) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        item.addEventListener(event, handler.bind(this, item));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: 'cycleAppendTextarea',
            value: function cycleAppendTextarea(collection, handler, event) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = collection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        item.addEventListener(event, handler.bind(this, item));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }

            // Checking form labels sibling status to append 'active'
            // ============================================================ //

        }, {
            key: 'checkSiblingValue',
            value: function checkSiblingValue(element) {
                var elementForVal = element.id;
                var labelQuery = document.querySelector('label[for=' + elementForVal + ']');
                if (element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '' || element.value !== '') {
                    labelQuery.classList.add('active');
                } else {
                    labelQuery.classList.remove('active');
                }
            }

            // Auto-resize textarea elements based upon amount written content
            // ============================================================ //

        }, {
            key: 'resize',
            value: function resize(element, elementEvent) {
                window.setTimeout(function () {
                    element.style.overflow = 'hidden';
                    element.style.minHeight = '112px';
                    element.style.height = 'auto';
                    element.style.height = element.scrollHeight + 'px';
                }, 0);
            }

            // Make select labels function
            // ============================================================ //

        }, {
            key: 'selectLabelClass',
            value: function selectLabelClass(selectList, options) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = selectList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var select = _step3.value;

                        var selectID = select.id;
                        var selectLabel = document.querySelector('label[for=' + selectID + ']');
                        selectLabel.classList.add('select-label');
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }

            // Grab file upload value for aesthetics.
            // ============================================================ //


            // Mass initialization load (check for fields already filled out etc.)
            // ============================================================ //

        }, {
            key: 'checkFormElements',
            value: function checkFormElements(elementList) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = elementList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var element = _step4.value;

                        if (element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '' || element.value !== '') {
                            element.nextElementSibling.classList.add('active');
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }]);

        return FormElements;
    }();

    var _self = void 0;

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return formElements;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = formElements;
    } else {
        window.formElements = formElements;
    }
})(window, document);

var createForm = formElements.init();
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function (window, document, undefined) {

    var parallax = {
        get: function get() {
            return _self;
        },
        init: function init(element, options) {
            return _self || new Parallax(element, options);
        }
    };

    var Parallax = function Parallax() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-parallax=parallax]';
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            speed: .4,
            xPos: 'center',
            yPos: 'center'
        };

        _classCallCheck(this, Parallax);
    };

    var _self = void 0;

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return parallax;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = parallax;
    } else {
        window.parallax = parallax;
    }
})(window, document);

var createParallax = parallax.init();
//# sourceMappingURL=origami.js.map
