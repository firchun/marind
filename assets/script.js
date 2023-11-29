// Tangkap elemen navbar
var navbar = document.querySelector('.fixed-top');
var navbarToggler = document.querySelector('.navbar-toggler');
// Tambahkan event listener untuk event scroll
window.addEventListener('scroll', function () {
    // Periksa posisi scroll
    if (window.scrollY >= navbar.offsetHeight) {
        navbar.classList.add('bg-dark')
    } else {
        navbar.classList.remove('bg-dark');
    }
});

navbarToggler.addEventListener('click', function () {
    var hasBgDark = navbar.classList.contains('bg-dark');
    
    if (!hasBgDark) {
        navbar.classList.add('bg-dark');
    }
});