// Form element constructor
// ============================================================ //

;((window, document, undefined) => {

    const formElements = {
        get: function() {
            return _self;
        },
        init: function(options) {
            return _self || new FormElements(options);
        },
    };

    class FormElements {
        constructor(options) {
            options = options || {};
            // Selectors
            this.labeledElements = document.querySelectorAll('.form-element input[type=text]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=email]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=password]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=url]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=number]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=date]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=datetime]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=datetime-local]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=time]:not(:disabled):not(.disabled):not([readonly]), .form-element input[type=tel]:not(:disabled):not(.disabled):not([readonly]), .form-element textarea:not(:disabled):not(.disabled):not([readonly]), .form-element select:not(:disabled):not(.disabled):not([readonly])');
            this.selectElements = document.querySelectorAll('.form-element select:not(:disabled):not(.disabled):not([readonly])');
            this.selectLabels = document.querySelectorAll('.form-element select-label:not(:disabled):not(.disabled):not([readonly])');
            this.textArea = document.querySelectorAll('.form-element textarea:not(:disabled):not(.disabled):not([readonly])');
            this.selectInput = document.querySelectorAll('.form-element select:not(:disabled):not(.disabled):not([readonly])');
            this.fileInput = document.querySelectorAll('.form-element input[type=file]:not(:disabled):not(.disabled):not([readonly])');

            // Append event listeners
                // Check elements associated with labels
            this.cycleAppend(this.labeledElements, this.checkSiblingValue, 'keyup');
            this.cycleAppend(this.labeledElements, this.checkSiblingValue, 'input');
            this.cycleAppend(this.labeledElements, this.checkSiblingValue, 'change');
                // Select element labels - add class 'select-label'
            this.selectLabelClass(this.selectElements, options);
                // Textarea resizing
            this.cycleAppend(this.textArea, this.resize, 'change');
            this.cycleAppend(this.textArea, this.resize, 'cut');
            this.cycleAppend(this.textArea, this.resize, 'paste');
            this.cycleAppend(this.textArea, this.resize, 'drop');
            this.cycleAppend(this.textArea, this.resize, 'keyup');
                // Check file input value
            this.fileValues(this.fileInput);

            // Check elements on load
            this.checkFormElements(this.labeledElements);
        }

        // Utilities / Construction functions
        // ============================================================ //
        cycleAppend(collection, handler, event) {
            for (let item of collection) {
                item.addEventListener(event, handler.bind(this, item));
            }
        }

        // Checking form labels sibling status to append 'active'
        // ============================================================ //
        checkSiblingValue(element) {
            const elementForVal = element.id;
            const labelQuery = document.querySelector(`label[for=${elementForVal}]`);
            if (labelQuery) {
                if((element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '') || element.value !== '') {
                    labelQuery.classList.add('active');
                } else {
                    labelQuery.classList.remove('active');
                }
            }
        }

        // Auto-resize textarea elements based upon amount written content
        // ============================================================ //
        resize(element, elementEvent) {
            window.setTimeout(() => {
                element.style.overflow = 'hidden';
                element.style.minHeight = '112px';
                element.style.height = 'auto';
                element.style.height = `${element.scrollHeight}px`;
            }, 0);
        }

        // Make select labels function
        // ============================================================ //
        selectLabelClass(selectList, options) {
            for (let select of selectList) {
                const selectID = select.id;
                const selectLabel = document.querySelector(`label[for=${selectID}]`);
                if (selectLabel) selectLabel.classList.add('select-label');
            }
        }

        // Grab file upload value for aesthetics.
        // ============================================================ //
        fileValues(fileList) {
            for (let fileInput of fileList) {
                fileInput.addEventListener('change', function() {
                    if (this.files.length > 0) {
                        const fileVal = this.parentNode.querySelector('.file-value');
                        let fileValue = '';
                        for (let i = 0; i < this.files.length; i++) {
                            if (i + 1 != this.files.length) {
                                fileValue += this.files[i].name + ' , '
                            } else {
                                fileValue += this.files[i].name
                            }
                        }
                        fileVal.innerText = fileValue;
                    }
                });
            }
        }

        // Mass initialization load (check for fields already filled out etc.)
        // ============================================================ //
        checkFormElements(elementList) {
            for (let element of elementList) {
                if ((element.nodeName === 'SELECT' && element.firstElementChild.innerText !== '') || element.value !== '') {
                    if (elementList[element].nextElementSibling) element.nextElementSibling.classList.add('active');
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
