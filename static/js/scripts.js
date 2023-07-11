document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.querySelector('.nav-container');
    var navSecondary = document.querySelector('.nav-container-secundary');

    navContainer.addEventListener('click', function() {
        navSecondary.classList.toggle('show');
    });
});