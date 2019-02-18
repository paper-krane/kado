// Form element constructor
// ============================================================ //

;((window, document, undefined) => {

    const formElements = {
        get: function() {
            return _self;
        },
        init: function(options) {
            const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
            if (isIE11) {
                document.querySelector('html').classList.add('ie11');
                return
            }
            return _self || new FormElements(options);
        },
    };

    class FormElements {
        constructor(options) {
            options = options || {};
            this.labeledElements = document.querySelectorAll('.form-element input[type=text], .form-element input[type=email], .form-element input[type=password], .form-element input[type=url], .form-element input[type=number], .form-element input[type=date], .form-element input[type=datetime], .form-element input[type=datetime-local], .form-element input[type=number], .form-element input[type=time], .form-element input[type=tel], .form-element textarea, .form-element select');
            this.selectElements = document.querySelectorAll('.form-element select');
            this.selectLabels = document.querySelectorAll('.form-element select-label');
            this.textArea = document.querySelectorAll('.form-element textarea');
            this.selectInput = document.querySelectorAll('.form-element select');

            // Append event listeners
                // Check elements associated with labels
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'keyup');
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'input');
            this.cycleAppendLabel(this.labeledElements, this.checkSiblingValue, 'change');
                // Select element labels - add class 'select-label'
            this.selectLabelClass(this.selectElements, options);
                // Textarea resizing
            this.cycleAppendTextarea(this.textArea, this.resize, 'change');
            this.cycleAppendTextarea(this.textArea, this.resize, 'cut');
            this.cycleAppendTextarea(this.textArea, this.resize, 'paste');
            this.cycleAppendTextarea(this.textArea, this.resize, 'drop');
            this.cycleAppendTextarea(this.textArea, this.resize, 'keyup');

            // Check elements on load
            this.checkFormElements(this.labeledElements);
        }

        // Utilities / Construction functions
        // ============================================================ //
        cycleAppendLabel(collection, handler, event) {
            for (let item of collection) {
                item.addEventListener(event, handler.bind(this, item));
            }
        }

        cycleAppendTextarea(collection, handler, event) {
            for (let item of collection) {
                item.addEventListener(event, handler.bind(this, item));
            }
        }

        // Checking form labels sibling status to append 'active'
        // ============================================================ //
        checkSiblingValue(element) {
            const elementForVal = element.id;
            const labelQuery = document.querySelector(`label[for=${elementForVal}]`);
            if((element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '') || element.value !== '') {
                labelQuery.classList.add('active');
            } else {
                labelQuery.classList.remove('active');
            }
        }

        // Auto-resize textarea elements based upon amount written content
        // ============================================================ //
        resize(element, elementEvent) {
            window.setTimeout(() => {
                element.style.overflow = 'hidden';
                element.style.minHeight = '112px';
                element.style.height = 'auto';
                element.style.height = element.scrollHeight + 'px';
            }, 0);
        }

        // Make select labels function
        // ============================================================ //
        selectLabelClass(selectList, options) {
            for (let select of selectList) {
                const selectID = select.id;
                const selectLabel = document.querySelector(`label[for=${selectID}]`);
                selectLabel.classList.add('select-label');
            }
        }

        // Grab file upload value for aesthetics.
        // ============================================================ //


        // Mass initialization load (check for fields already filled out etc.)
        // ============================================================ //
        checkFormElements(elementList) {
            for (let element of elementList) {
                if ((element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '') || element.value !== '') {
                    element.nextElementSibling.classList.add('active');
                }
            }
        }
    }

    let _self;

    if (typeof define === 'function' && define.amd) {
        define([], () => {
            return formElements;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = formElements;
    } else {
        window.formElements = formElements;
    }

})(window, document);

const createForm = formElements.init();
