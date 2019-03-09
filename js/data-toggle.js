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
