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
