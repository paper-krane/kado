// Form element constructor
// ============================================================ //
;(function(window, document, undefined){
    var formElements = {
        get: function() {
            return _self;
        },
        init: function(options) {
            return _self || new FormElements(options);
        }
    }

    function FormElements(options) {
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
    FormElements.prototype.cycleAppend = function(collection, handler, event) {
        for (var item = 0; item < collection.length; item ++) {
            collection[item].addEventListener(event, handler.bind(this, collection[item]));
        }
    }

    // Checking form labels sibling status to append 'active'
    // ============================================================ //
    FormElements.prototype.checkSiblingValue = function(element) {
        var elementForVal = element.id;
        var labelQuery = document.querySelector('label[for=' + elementForVal + ']');
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
    FormElements.prototype.resize = function(element, elementEvent) {
        window.setTimeout(function() {
            element.style.overflow = 'hidden';
            element.style.minHeight = '112px';
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }, 0);
    }

    // Make select labels function
    // ============================================================ //
    FormElements.prototype.selectLabelClass = function(selectList, options) {
        for (var select = 0; select < selectList.length; select++) {
            var selectID = selectList[select].id;
            var selectLabel = document.querySelector('label[for=' + selectID + ']');
            if (selectLabel) {
                selectLabel.classList.add('select-label');
            }
        }
    }

    // Grab file upload value for aesthetics.
    // ============================================================ //
    FormElements.prototype.fileValues = function(fileList) {
        for (var fileInput = 0; fileInput < fileList.length; fileInput++) {
            fileList[fileInput].addEventListener('change', function() {
                if (this.files.length > 0) {
                    var fileVal = this.parentNode.querySelector('.file-value');
                    var fileValue = '';
                    for (var i = 0; i < this.files.length; i++) {
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
    FormElements.prototype.checkFormElements = function(elementList) {
        for (var element = 0; element < elementList.length; element++) {
            if ((elementList[element].nodeName === 'SELECT' && elementList[element].firstElementChild.innerText !== '') || elementList[element].value !== '') {
                if (elementList[element].nextElementSibling) {
                    elementList[element].nextElementSibling.classList.add('active');
                }
            }
        }
    }

    var _self;

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return formElements;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = formElements;
    } else {
        window.formElements = formElements;
    }

})(window, document);

var createForm = formElements.init();
