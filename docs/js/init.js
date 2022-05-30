document.addEventListener('DOMContentLoaded', onLoad);
function onLoad() {
    if (document.querySelector('.headerMenuBtn')) {
        let navMenuBtn = document.querySelector('.headerMenuBtn');
        let closeMenu = document.querySelector('.closeIcon');
        let header = document.querySelector('.headerElement');

        navMenuBtn.addEventListener("click", function() {
            let menu = document.querySelector('.headerMobile');
            setTimeout(function () {
                menu.classList.toggle('header__mobile--active');
            }, 100)
        });

        header.addEventListener("click", function(e) {
            let target = e.target;
            let menu = document.querySelector('.headerMobile');
            let overlay = document.querySelector('.headerOverlay');

            if (target === closeMenu || target === overlay || target.classList.contains('header__item--mobile')) {
                setTimeout(function () {
                    menu.classList.toggle('header__mobile--active');
                }, 100);
            }
        });
    }
}