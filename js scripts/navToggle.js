document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('hidden');
        if (navbar.classList.contains('hidden')) {
            navToggle.textContent = '☰';
        } else {
            navToggle.textContent = '✕';
        }
    });
});