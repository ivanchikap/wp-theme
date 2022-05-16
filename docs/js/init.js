document.addEventListener('DOMContentLoaded', onLoad);
function onLoad() {
    console.log('work');
    if (document.getElementById('header__menu-btn')) {
        let navMenuBtn = document.getElementById('header__menu-btn');
        let closeMenu = document.getElementById('closeMenu');
        let header = document.getElementById('header');

        navMenuBtn.addEventListener("click", function() {
            let menu = document.getElementById('menu');
            setTimeout(function () {
                menu.classList.toggle('header__mobile--active');
            }, 100)
        });
        header.addEventListener("click", function(e) {
            let target = e.target;
            let menu = document.getElementById('menu');
            let overlay = document.getElementById('overlay');
            let navItemsMobile = document.querySelectorAll('.header__item--mobile');

            if (target === closeMenu || target === overlay || target.classList.contains('header__item--mobile')) {
                setTimeout(function () {
                    menu.classList.toggle('header__mobile--active');
                }, 100);
            }
        });
    }
}
// $(document).ready();