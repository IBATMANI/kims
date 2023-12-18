document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggleIcon');
    const navLinks = document.querySelector('.nav-links');

    toggleIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');

        const isNavVisible = navLinks.classList.contains('show');
        toggleIcon.src = isNavVisible ? 'x.svg' : 'ham.svg';
    });
});