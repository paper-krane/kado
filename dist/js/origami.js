;(function() {
    var html = document.querySelector('html');
    html.removeAttribute("class");
})();

;(function() {
    document.addEventListener('click', function(e) {
    if (e.target.dataset.toggle === 'true'){
        e.preventDefault();
        e.stopPropagation();
    	var el = e.target.dataset.toggleClass;
        var elClass = document.querySelectorAll("[data-toggle-class]");
        for(var i = 0; i < elClass.length; i++) {
            if(elClass[i].dataset.toggleClass == el){
            	elClass[i].classList.toggle(el);
            }
       	}
    }
});
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
        this.datepickerElements = document.querySelectorAll('.datepicker');

        // Generate calendar HTML if .datepicker elements are on page.
        if(this.datepickerElements.length > 0) {
            this.createDatepicker(options, function() {

                // Ensures form has been created and allows the creation of event listeners

                // Variables
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
                var calBg = document.querySelector('#calendar-bg');
                var cal = document.querySelector('#calendar');
                var monthSelect = document.querySelector('#calendar-month');
                var yearSelect = document.querySelector('#calendar-year');
                var monthSelectList = document.querySelector('#calendar-select-months');
                var yearSelectList = document.querySelector('#calendar-select-years');
                var monthSelectListAnchors = document.querySelectorAll('#calendar-select-months a');
                var yearSelectListAnchors = document.querySelectorAll('#calendar-select-years a');
                var currentSelectedDate = document.querySelector('#current-selected-day');
                var currentSelectedYear = document.querySelector('#current-selected-year');
                var prev = document.querySelector('#previous-month');
                var next = document.querySelector('#next-month');
                var calBox = document.querySelectorAll('.calendar-box');
                var calCancel = document.querySelector('#calendar-cancel');
                var calOk = document.querySelector('#calendar-ok');
                var calClear = document.querySelector('#calendar-clear');

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
                        calBg.classList.add('date-select-active');
                        cal.classList.add('date-select-active');
                        this.classList.add('date-select-active');

                        // Set header / calendar dates
                        setHeaderDates(initialDate);
                        calendarLayout(initialDate, options.disableDaysOfWeek);

                        // Store 'this'
                        selectedInput = this;
                    }, false);

                }

                // Check date when button pushed
                for (var box = 0; box < calBox.length; box ++) {
                    calBox[box].addEventListener('click', function(e){
                        e.preventDefault();
                        if (!this.dataset.selectMonth) return;
                        if (document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');

                        // Check if Day is one of the disabled days of the week
                        if (this.dataset.available == 'false') return;

                        // Set new header
                        setHeaderDates(new Date(this.dataset.selectYear, this.dataset.selectMonth, this.dataset.selectDay));

                        // Set input value
                        selectedInput.value = monthNames[this.dataset.selectMonth] + ' ' + this.dataset.selectDay + ', ' + this.dataset.selectYear;

                        // Ensure that label doesn't clash with content
                        selectedInput.nextElementSibling.classList.add('active');

                        // Set selected ID
                        this.id = 'selected-date';

                        // Store 'this'
                        selectedCalBox = this;
                        selectedDate = new Date(this.dataset.selectYear, this.dataset.selectMonth, this.dataset.selectDay);

                        // Check options for closeOnSelect
                        if (options.closeOnSelect === true) {
                            var activeDatepicker = document.querySelectorAll('.date-select-active');
                            for (var i = 0; i < activeDatepicker.length; i++) {
                                activeDatepicker[i].classList.remove('date-select-active');
                            }
                        }
                    }, false);
                }

                //Check for previous and next month spans being clicked
                prev.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    currentMonth --;
                    var prevMonth = new Date(currentYear, currentMonth);

                    if(prevMonth.getMonth() < 0) {
                        currentMonth = 11;
                        prevMonth = new Date(currentYear - 1, currentMonth);
                    }
                    if(document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');
                    calendarLayout(prevMonth, options.disableDaysOfWeek);
                }, false);

                next.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentMonth ++;
                    var nextMonth = new Date(initialDate.getFullYear(), currentMonth);

                    if(nextMonth.getMonth() < 0) {
                        nextMonth = new Date(initialDate.getFullYear() + 1, currentMonth - 1);
                    }
                    if(document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');
                    calendarLayout(nextMonth, options.disableDaysOfWeek);
                }, false);

                // Set new month from selection
                for (var m = 0; m < monthSelectListAnchors.length; m ++) {
                    monthSelectListAnchors[m].addEventListener('click', function(e) {
                        e.preventDefault();
                        currentMonth = monthNames.indexOf(this.innerText);
                        var newSelectedMonthDate = new Date(currentYear, currentMonth, 1);

                        if(document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');
                        calendarLayout(newSelectedMonthDate, options.disableDaysOfWeek);
                        monthSelectList.classList.toggle('select-month');
                    }, false);
                }

                for (var y = 0; y < yearSelectListAnchors.length; y ++) {
                    yearSelectListAnchors[y].addEventListener('click', function(e) {
                        e.preventDefault();
                        currentYear = parseInt(this.innerText, 0);
                        var newSelectedYearDate = new Date(currentYear, currentMonth, 1);

                        if(document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');
                        calendarLayout(newSelectedYearDate, options.disableDaysOfWeek);
                        yearSelectList.classList.toggle('select-year');
                    }, false);
                }

                // Close date modal
                calBg.addEventListener('click', function(e){
                    var activeDatepicker = document.querySelectorAll('.date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('date-select-active');
                    }
                }, false);
                calCancel.addEventListener('click', function(e){
                    e.preventDefault();
                    var activeDatepicker = document.querySelectorAll('.date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('date-select-active');
                    }
                }, false);
                calOk.addEventListener('click', function(e){
                    e.preventDefault();
                    var activeDatepicker = document.querySelectorAll('.date-select-active');
                    for (var i = 0; i < activeDatepicker.length; i++) {
                        activeDatepicker[i].classList.remove('date-select-active');
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
                    selectedInput.nextElementSibling.classList.remove('active');

                    // Remove selected date
                    if(document.querySelector('#selected-date'))document.querySelector('#selected-date').removeAttribute('id');

                    // Reset calendar
                    calendarLayout(initialDate, options.disableDaysOfWeek);
                    setHeaderDates(initialDate);
                }, false);

                // Month / Year selections
                monthSelect.addEventListener('click', function() {
                    if(document.querySelector('.select-year')) {
                        document.querySelector('.select-year').classList.remove('select-year');
                    }
                    monthSelectList.classList.toggle('select-month');
                }, false);
                yearSelect.addEventListener('click', function() {
                    if(document.querySelector('.select-month')) {
                        document.querySelector('.select-month').classList.remove('select-month');
                    }
                    yearSelectList.classList.toggle('select-year');
                }, false);

                // Functions

                // Set Calendar Header
                function setHeaderDates(dateObject) {
                    currentSelectedDate.innerText = dayNames[dateObject.getDay()] + ' - ' + monthNames[dateObject.getMonth()] + ' ' + dateObject.getDate();
                    currentSelectedYear.innerText = dateObject.getFullYear();
                }

                //Create Calendar Elements
                function calendarLayout(dateObject, unavailableArray) {
                    var el = document.querySelectorAll('#calendar-dates a');
                    var startingDayName = new Date(dateObject.getFullYear(), dateObject.getMonth(), 1).getDay();
                    var lastDay = new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0).getDate();
                    var dayName = startingDayName;
                    var unavailableDays = [];

                    // Unavailable days
                    if (unavailableArray.length > 0) {
                        for (var y = 0; y < unavailableArray.length; y++) {
                            unavailableDays.push(dayNames.indexOf(unavailableArray[y]));
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
                            el[startingDayName].id = 'selected-date';
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
        var createWeekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        var createMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var createYears = [];
        var createCalBg = document.createElement('div');
        var createCal = document.createElement('div');

        // Set array of ID's
        var createCalSecondLevelArray = ['calendar-header', 'calendar-selection', 'calendar-wrap'];
        var createCalThirdLevelArray = ['calendar-select-months', 'calendar-select-years', 'calendar-days', 'calendar-dates', 'calendar-footer'];
        var createCalHeaderSelectedArray = ['current-selected-day', 'current-selected-year'];
        var createCalSelectorArray = ['previous-month', 'calendar-listed-date', 'next-month'];
        var createFooterArray = ['calendar-cancel', 'calendar-clear', 'calendar-ok'];

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
        createCalBg.id = 'calendar-bg';
        createCalBg.classList.add('flex-l', 'align-center-s', 'jesticy-center-s');
        createCal.id = 'calendar';
        createCal.classList.add('depth-5', 'ml-auto', 'mr-auto');

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
            calendarDivs.classList.add('calendar-box');
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
            calendarAnchors.classList.add('calendar-box');
            calendarAnchors.href = '#';
            createDateFragment.appendChild(calendarAnchors);
        }

        // Footer buttons
        createFooterArray.forEach(function(createFooterArray) {
            var calendarAnchors = document.createElement('a');
            var textString = createFooterArray.split('-');
            calendarAnchors.href = '#';
            calendarAnchors.id = createFooterArray;
            calendarAnchors.innerText = textString[1].toUpperCase();
            createFooterFragment.appendChild(calendarAnchors);
        });

        // Append Elements
        document.body.appendChild(createCalBg);
        document.body.appendChild(createCal);
        createCal.appendChild(createCalSecondLevel);
        document.getElementById('calendar-wrap').appendChild(createCalThirdLevel);
        document.getElementById('calendar-header').appendChild(createCalHeaderSelected);
        document.getElementById('calendar-select-months').appendChild(createMonthFragment);
        document.getElementById('calendar-selection').appendChild(createCalSelector);
        document.getElementById('calendar-listed-date').innerHTML = '<span id="calendar-month"></span> - <span id="calendar-year"></span>';
        document.getElementById('calendar-select-years').appendChild(createYearFragment);
        document.getElementById('calendar-days').appendChild(createWeekDayFragment);
        document.getElementById('calendar-dates').appendChild(createDateFragment);
        document.getElementById('calendar-footer').appendChild(createFooterFragment);

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
        this.labeledElements = document.querySelectorAll('input[type=text], input[type=email], input[type=password], input[type=url], input[type=number], input[type=date], input[type=datetime], input[type=datetime-local], input[type=number], input[type=time], input[type=tel], textarea, select');
        this.selectElements = document.querySelectorAll('select');
        this.selectLabels = document.querySelectorAll('select-label');
        this.textArea = document.querySelectorAll('textarea');
        this.selectInput = document.querySelectorAll('select');
        this.fileInput = document.querySelectorAll('input[type=file]');

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

// ;((window, document, undefined) => {
//
//     const parallax = {
//         get: function() {
//             return _self;
//         },
//         init: function(element, options) {
//             return _self || new Parallax(element, options);
//         },
//     };
//
//     class Parallax {
//
//         constructor(element = '[data-parallax=parallax]', options = {
//             speed: .4,
//             xPos: 'center',
//             yPos: 'center'
//         }) {
//
//         }
//
//
//
//     }
//
//     let _self;
//
//     if (typeof define === 'function' && define.amd) {
//         define([], () => {
//             return parallax;
//         });
//     } else if (typeof module !== 'undefined' && module.exports) {
//         module.exports = parallax;
//     } else {
//         window.parallax = parallax;
//     }
//
// })(window, document);
//
// const createParallax = parallax.init();

//# sourceMappingURL=origami.js.map
