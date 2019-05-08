;(function() {
    var html = document.querySelector('html');
    html.removeAttribute("class");
})();

// ;(function() {
//     document.addEventListener('click', function(e) {
//     if (e.target.getAttribute('data-toggle') === 'true'){
//         e.preventDefault();
//         e.stopPropagation();
//     	var el = e.target.getAttribute('data-toggle-class');
//         var elClass = document.querySelectorAll("[data-toggle-class]");
//         for(var i = 0; i < elClass.length; i++) {
//             if(elClass[i].getAttribute('data-toggle-class') == el){
//             	elClass[i].classList.toggle(el);
//             }
//        	}
//     }
// });
// })();


;(function() {
    var toggler = document.querySelectorAll('[data-toggle]');

    for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var el = e.target.getAttribute('data-toggle-class');
            var elClass = document.querySelectorAll("[data-toggle-class]");
            for(var i = 0; i < elClass.length; i++) {
                if(elClass[i].getAttribute('data-toggle-class') == el){
                	elClass[i].classList.toggle(el);
                }
           	}
        }, false);
    }
})();

// Date picker
// ============================================================ //
;(function(window, document, undefined){
    var datepicker = {
        get: function() {
            return _self;
        },
        init: function(options) {
            return _self || new Datepicker(options);
        }
    }

    function Datepicker(options) {
        options = options || {
            limitYearsBack: 100,
            limitYearsForward: 100,
            closeOnSelect: false,
            disableDaysOfWeek: []
        };

        // Check for datepicker elements
        // --------------------------------------------------
        this.datepickerElements = document.querySelectorAll('.datepicker');

        // Generate calendar HTML if .datepicker elements are on page.
        // --------------------------------------------------
        if(this.datepickerElements.length > 0) {
            this.createDatepicker(options, function() {

                // Ensures form has been created and allows the creation of event listeners
                // --------------------------------------------------

                // Variables
                // --------------------------------------------------
                var selectedInput;
                var selectedCalBox;
                var selectedDate;
                var initialDate = new Date();
                var currentMonth = initialDate.getMonth();
                var currentYear = initialDate.getFullYear();
                var monthNames = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ];
                var dayNames = [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ];
                var dateInputs = document.querySelectorAll('.datepicker');
                var calBg = document.querySelector('#kado-calendar-bg');
                var cal = document.querySelector('#kado-calendar');
                var monthSelect = document.querySelector('#kado-calendar-month');
                var yearSelect = document.querySelector('#kado-calendar-year');
                var monthSelectList = document.querySelector('#kado-calendar-select-months');
                var yearSelectList = document.querySelector('#kado-calendar-select-years');
                var monthSelectListAnchors = document.querySelectorAll('#kado-calendar-select-months a');
                var yearSelectListAnchors = document.querySelectorAll('#kado-calendar-select-years a');
                var currentSelectedDate = document.querySelector('#kado-current-selected-day');
                var currentSelectedYear = document.querySelector('#kado-current-selected-year');
                var prev = document.querySelector('#kado-previous-month');
                var next = document.querySelector('#kado-next-month');
                var calBox = document.querySelectorAll('.kado-calendar-box');
                var calCancel = document.querySelector('#kado-calendar-cancel');
                var calOk = document.querySelector('#kado-calendar-ok');
                var calClear = document.querySelector('#kado-calendar-clear');

                // Event Listeners

                // On .datepickers being focused
                for (var i = 0; i < dateInputs.length; i++) {

                    // Append event listeners
                    dateInputs[i].addEventListener('focus', function(e){
                        if (this.value !== '' && new Date(this.value).toString() !== 'Invalid Date'){
                            initialDate = new Date(this.value);
                            currentMonth = initialDate.getMonth();
                            currentYear = initialDate.getFullYear();
                            selectedDate = new Date(this.value);
                        } else {
                            initialDate = new Date();
                            currentMonth = initialDate.getMonth();
                            currentYear = initialDate.getFullYear();
                            selectedDate = '';
                        }

                        // Set elements on select active
                        calBg.classList.add('kado-date-select-active');
                        cal.classList.add('kado-date-select-active');
                        this.classList.add('kado-date-select-active');

                        // Set header / calendar dates
                        setHeaderDates(initialDate);
                        calendarLayout(initialDate, options.disableDaysOfWeek);

                        // Store 'this'
                        selectedInput = this;
                    }, false);

                }

                // Check date when button pushed
                // --------------------------------------------------
                for (var box = 0; box < calBox.length; box ++) {
                    calBox[box].addEventListener('click', function(e){
                        e.preventDefault();
                        if (!this.dataset.selectMonth) return;
                        if (document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');

                        // Check if Day is one of the disabled days of the week
                        if (this.dataset.available == 'false') return;

                        // Set new header
                        setHeaderDates(new Date(this.dataset.selectYear, this.dataset.selectMonth, this.dataset.selectDay));

                        // Set input value
                        selectedInput.value = monthNames[this.dataset.selectMonth] + ' ' + this.dataset.selectDay + ', ' + this.dataset.selectYear;

                        // Ensure that label doesn't clash with content
                        if (selectedInput.nextElementSibling && selectedInput.nextElementSibling.nodeName == 'LABEL') selectedInput.nextElementSibling.classList.add('active');

                        // Set selected ID
                        this.id = 'kado-selected-date';

                        // Store 'this'
                        selectedCalBox = this;
                        selectedDate = new Date(this.dataset.selectYear, this.dataset.selectMonth, this.dataset.selectDay);

                        // Check options for closeOnSelect
                        if (options.closeOnSelect === true) {
                            var activeDatepicker = document.querySelectorAll('.kado-date-select-active');
                            for (var i = 0; i < activeDatepicker.length; i++) {
                                activeDatepicker[i].classList.remove('kado-date-select-active');
                            }
                        }
                    }, false);
                }

                // Check for previous and next month spans being clicked
                // --------------------------------------------------
                prev.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    currentMonth --;
                    var prevMonth = new Date(currentYear, currentMonth);

                    if(prevMonth.getMonth() < 0) {
                        currentMonth = 11;
                        prevMonth = new Date(currentYear - 1, currentMonth);
                    }
                    if(document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');
                    calendarLayout(prevMonth, options.disableDaysOfWeek);
                }, false);

                next.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentMonth ++;
                    var nextMonth = new Date(currentYear, currentMonth);

                    if(nextMonth.getMonth() < 0) {
                        nextMonth = new Date(currentYear + 1, currentMonth - 1);
                    }
                    if(document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');
                    calendarLayout(nextMonth, options.disableDaysOfWeek);
                }, false);

                // Set new month from selection
                // --------------------------------------------------
                for (var m = 0; m < monthSelectListAnchors.length; m ++) {
                    monthSelectListAnchors[m].addEventListener('click', function(e) {
                        e.preventDefault();
                        currentMonth = monthNames.indexOf(this.innerText);
                        var newSelectedMonthDate = new Date(currentYear, currentMonth, 1);

                        if(document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');
                        calendarLayout(newSelectedMonthDate, options.disableDaysOfWeek);
                        monthSelectList.classList.toggle('kado-select-month');
                    }, false);
                }

                for (var y = 0; y < yearSelectListAnchors.length; y ++) {
                    yearSelectListAnchors[y].addEventListener('click', function(e) {
                        e.preventDefault();
                        currentYear = parseInt(this.innerText, 0);
                        var newSelectedYearDate = new Date(currentYear, currentMonth, 1);

                        if(document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');
                        calendarLayout(newSelectedYearDate, options.disableDaysOfWeek);
                        yearSelectList.classList.toggle('kado-select-year');
                    }, false);
                }

                // Close date modal
                calBg.addEventListener('click', function(e){
                    var activeDatepicker = document.querySelectorAll('.kado-date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('kado-date-select-active');
                    }
                }, false);
                calCancel.addEventListener('click', function(e){
                    e.preventDefault();
                    var activeDatepicker = document.querySelectorAll('.kado-date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('kado-date-select-active');
                    }
                }, false);
                calOk.addEventListener('click', function(e){
                    e.preventDefault();
                    var activeDatepicker = document.querySelectorAll('.kado-date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('kado-date-select-active');
                    }
                }, false);

                // Clear entire selection
                calClear.addEventListener('click', function(e){
                    e.preventDefault();

                    // Reset Date
                    initialDate = new Date();
                    selectedDate = '';

                    // Reset input value to empty
                    selectedInput.value = '';
                    if (selectedInput.nextElementSibling && selectedInput.nextElementSibling.nodeName == 'LABEL') selectedInput.nextElementSibling.classList.remove('active');

                    // Remove selected date
                    if(document.querySelector('#kado-selected-date'))document.querySelector('#kado-selected-date').removeAttribute('id');

                    // Reset calendar
                    calendarLayout(initialDate, options.disableDaysOfWeek);
                    setHeaderDates(initialDate);
                }, false);

                // Month / Year selections
                monthSelect.addEventListener('click', function() {
                    if(document.querySelector('.kado-select-year')) {
                        document.querySelector('.kado-select-year').classList.remove('kado-select-year');
                    }
                    monthSelectList.classList.toggle('kado-select-month');
                }, false);
                yearSelect.addEventListener('click', function() {
                    if(document.querySelector('.kado-select-month')) {
                        document.querySelector('.kado-select-month').classList.remove('kado-select-month');
                    }
                    yearSelectList.classList.toggle('kado-select-year');
                }, false);

                // Functions

                // Set Calendar Header
                function setHeaderDates(dateObject) {
                    currentSelectedDate.innerText = dayNames[dateObject.getDay()] + ' - ' + monthNames[dateObject.getMonth()] + ' ' + dateObject.getDate();
                    currentSelectedYear.innerText = dateObject.getFullYear();
                }

                //Create Calendar Elements
                function calendarLayout(dateObject, unavailableArray) {
                    var unavailable = unavailableArray || [];
                    var el = document.querySelectorAll('#kado-calendar-dates a');
                    var startingDayName = new Date(dateObject.getFullYear(), dateObject.getMonth(), 1).getDay();
                    var lastDay = new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0).getDate();
                    var dayName = startingDayName;
                    var unavailableDays = [];

                    // Unavailable days
                    if (unavailable.length > 0) {
                        for (var y = 0; y < unavailable.length; y++) {
                            unavailableDays.push(dayNames.indexOf(unavailable[y]));
                        }
                    }

                    for (var div = 0; div < el.length; div++) {
                        el[div].innerText = '';
                        el[div].removeAttribute('data-select-year');
                        el[div].removeAttribute('data-select-month');
                        el[div].removeAttribute('data-select-day');
                        el[div].removeAttribute('data-select-day-of-week');
                        el[div].removeAttribute('data-available');
                        el[div].style.cursor = 'text';
                    }
                    for (var i = 1; i <= lastDay; i++) {
                        el[startingDayName].innerText = i;
                        el[startingDayName].dataset.selectYear = dateObject.getFullYear();
                        el[startingDayName].dataset.selectMonth = dateObject.getMonth();
                        el[startingDayName].dataset.selectDay = i;
                        el[startingDayName].dataset.selectDayOfWeek = dayName;

                        // Check if dayName matches the disabled days of the Weekdays
                        if (unavailableDays.length > 0) {
                            for (var z = 0; z < unavailableDays.length; z++) {
                                if (dayName === unavailableDays[z]) {
                                    el[startingDayName].dataset.available = false;
                                }
                            }
                        }

                        el[startingDayName].style.cursor = 'pointer';
                        if (selectedDate && selectedDate.getFullYear() === dateObject.getFullYear() && selectedDate.getMonth() === dateObject.getMonth() && selectedDate.getDate() === i) {
                            el[startingDayName].id = 'kado-selected-date';
                        } else {
                            el[startingDayName].removeAttribute('id');
                        }
                        startingDayName = startingDayName + 1;
                        dayName == 6 ? dayName = 0 : dayName = dayName + 1;

                    }
                    monthSelect.innerText = monthNames[dateObject.getMonth()];
                    yearSelect.innerText = dateObject.getFullYear();
                }

            });
        }

    }

    // Create the calendar picker
    Datepicker.prototype.createDatepicker = function(options, callback) {
        options = options;
        options.limitYearsBack = options.limitYearsBack || 100;
        options.limitYearsForward = options.limitYearsForward || 100;
        var createWeekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        var createMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var createYears = [];
        var createCalBg = document.createElement('div');
        var createCal = document.createElement('div');

        // Set array of ID's
        var createCalSecondLevelArray = ['kado-calendar-header', 'kado-calendar-selection', 'kado-calendar-wrap'];
        var createCalThirdLevelArray = ['kado-calendar-select-months', 'kado-calendar-select-years', 'kado-calendar-days', 'kado-calendar-dates', 'kado-calendar-footer'];
        var createCalHeaderSelectedArray = ['kado-current-selected-day', 'kado-current-selected-year'];
        var createCalSelectorArray = ['kado-previous-month', 'kado-calendar-listed-date', 'kado-next-month'];
        var createFooterArray = ['kado-calendar-cancel', 'kado-calendar-clear', 'kado-calendar-ok'];

        // Create fragments
        var createCalSecondLevel = document.createDocumentFragment();
        var createCalThirdLevel = document.createDocumentFragment();
        var createCalHeaderSelected = document.createDocumentFragment();
        var createCalSelector = document.createDocumentFragment();
        var createWeekDayFragment = document.createDocumentFragment();
        var createMonthFragment = document.createDocumentFragment();
        var createYearFragment = document.createDocumentFragment();
        var createDateFragment = document.createDocumentFragment();
        var createFooterFragment = document.createDocumentFragment();

        // Add classes / ID's
        createCalBg.id = 'kado-calendar-bg';
        createCalBg.classList.add('flex-l');
        createCalBg.classList.add('align-center-s');
        createCalBg.classList.add('justify-center-s');
        createCal.id = 'kado-calendar';
        createCal.classList.add('depth-5');
        createCal.classList.add('ml-auto');
        createCal.classList.add('mr-auto');

        // Create sub element layers
        createCalSecondLevelArray.forEach(function(createCalSecondLevelArray) {
            var calendarDivs = document.createElement('div');
            calendarDivs.id = createCalSecondLevelArray;
            calendarDivs.classList.add('float-fix');
            createCalSecondLevel.appendChild(calendarDivs);
        });

        createCalThirdLevelArray.forEach(function(createCalThirdLevelArray) {
            var calendarDivs = document.createElement('div');
            calendarDivs.id = createCalThirdLevelArray;
            calendarDivs.classList.add('float-fix');
            createCalThirdLevel.appendChild(calendarDivs);
        });

        // Create spans for header
        createCalHeaderSelectedArray.forEach(function(createCalHeaderSelectedArray) {
            var calendarSpans = document.createElement('span');
            calendarSpans.id = createCalHeaderSelectedArray;
            createCalHeaderSelected.appendChild(calendarSpans);
        });

        // Create selector buttons
        createCalSelectorArray.forEach(function(createCalSelectorArray) {
            var calendarDivs = document.createElement('div');
            calendarDivs.id = createCalSelectorArray;
            createCalSelector.appendChild(calendarDivs);
        });

        // Weekdays
        createWeekDays.forEach(function(createWeekDays) {
            var calendarDivs = document.createElement('div');
            calendarDivs.innerText = createWeekDays;
            calendarDivs.classList.add('kado-calendar-box');
            createWeekDayFragment.appendChild(calendarDivs);
        });

        // Months
        createMonths.forEach(function(createMonths) {
            var calendarAnchors = document.createElement('a');
            calendarAnchors.innerText = createMonths;
            calendarAnchors.href = '#';
            createMonthFragment.appendChild(calendarAnchors);
        });

        // Years
        for (var y = new Date().getFullYear() - options.limitYearsBack; y <= new Date().getFullYear() + (options.limitYearsForward); y = y + 1) {
            var calendarAnchors = document.createElement('a');
            calendarAnchors.innerText = y;
            calendarAnchors.href = '#';
            createYearFragment.appendChild(calendarAnchors);
        }

        // Create Calendar Date Boxes
        for (var i = 0; i < 42; i++) {
            var calendarAnchors = document.createElement('a');
            calendarAnchors.innerText = '';
            calendarAnchors.classList.add('kado-calendar-box');
            calendarAnchors.href = '#';
            createDateFragment.appendChild(calendarAnchors);
        }

        // Footer buttons
        createFooterArray.forEach(function(createFooterArray) {
            var calendarAnchors = document.createElement('a');
            var textString = createFooterArray.split('-');
            calendarAnchors.href = '#';
            calendarAnchors.id = createFooterArray;
            calendarAnchors.innerText = textString[2].toUpperCase();
            createFooterFragment.appendChild(calendarAnchors);
        });

        // Append Elements
        document.body.appendChild(createCalBg);
        document.body.appendChild(createCal);
        createCal.appendChild(createCalSecondLevel);
        document.getElementById('kado-calendar-wrap').appendChild(createCalThirdLevel);
        document.getElementById('kado-calendar-header').appendChild(createCalHeaderSelected);
        document.getElementById('kado-calendar-select-months').appendChild(createMonthFragment);
        document.getElementById('kado-calendar-selection').appendChild(createCalSelector);
        document.getElementById('kado-calendar-listed-date').innerHTML = '<span id="kado-calendar-month"></span> - <span id="kado-calendar-year"></span>';
        document.getElementById('kado-calendar-select-years').appendChild(createYearFragment);
        document.getElementById('kado-calendar-days').appendChild(createWeekDayFragment);
        document.getElementById('kado-calendar-dates').appendChild(createDateFragment);
        document.getElementById('kado-calendar-footer').appendChild(createFooterFragment);

        return callback();

    }

    var _self;

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return datepicker;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = datepicker;
    } else {
        window.datepicker = datepicker;
    }

})(window, document);

// More options in the works

// var initDatepicker = datepicker.init({
//     limitYearsBack: 100,
//     limitYearsForward: 100,
//     closeOnSelect: false,
//     disableDaysOfWeek: ['Mon']
// });

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

//# sourceMappingURL=kado.js.map
