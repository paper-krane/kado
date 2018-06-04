;(() => {
    document.addEventListener('click', (e) => {
    if (e.target.dataset.toggle === 'true'){
        e.preventDefault();
    	const el = e.target.dataset.toggleClass;
        const elClass = document.querySelectorAll("[data-toggle-class]");
        for(let i = 0; i < elClass.length; i++) {
            if(elClass[i].dataset.toggleClass == el){
            	elClass[i].classList.toggle(el);
            }
       	}
    }
});
})();
