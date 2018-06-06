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
