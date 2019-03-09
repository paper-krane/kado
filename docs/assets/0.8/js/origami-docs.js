;(function(){
    // Submenu toggles
    var submenuToggles = document.querySelectorAll('.has-children > a');

    for (var toggle of submenuToggles) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            var submenu = e.target.nextElementSibling;
            var theChildren = submenu.children;
            var currentActive = document.querySelector('.active')
            var eleHeight = 0;

            for (var child of theChildren) {
                eleHeight += child.scrollHeight;
            }

            if (submenu.getAttribute('style')) {
                submenu.classList.remove('active');
                submenu.removeAttribute('style');
            } else {
                if (currentActive) {
                    currentActive.classList.remove('active');
                    currentActive.removeAttribute('style');
                }
                submenu.classList.add('active');
                submenu.style.maxHeight = eleHeight + 'px';
            }
        }, false);
    }


    // Rest Menu on hover off of main nav in desktop / tabvar
    var navWrap = document.querySelector('#navbar');

    navWrap.addEventListener('mouseleave', function(){
        if (navWrap.querySelector('.active') && window.innerWidth > 991 && window.innerWidth < 1600) {
            navWrap.querySelector('.active').removeAttribute('style');
            navWrap.querySelector('.active').classList.remove('active');
        }
    }, false);
})();
