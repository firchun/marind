
var navbar = document.querySelector('.fixed-top');
var navbarToggler = document.querySelector('.navbar-toggler');
window.addEventListener('scroll', function () {
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


//ganti bahasa
function switchLanguage(lang) {
    //tombol
    var languageButtons = document.querySelectorAll('.dropdown-item');

        languageButtons.forEach(function (button) {
            button.classList.remove('active');
            button.classList.add('text-white');
        });

        event.target.classList.add('active');

        //terjemahan
    document.getElementById("home").innerText = (lang === "en") ? "Home" : "Beranda";
    document.getElementById("warisan-budaya").innerText = (lang === "en") ? "Cultural Heritage" : "Warisan Budaya";
    document.getElementById("kuliner").innerText = (lang === "en") ? "Culinary" : "Kuliner";
    document.getElementById("Handcraft").innerText = (lang === "en") ? "Handcraft" : "Kerajinan Tangan";
    document.getElementById("event").innerText = (lang === "en") ? "Event" : "Acara";
    document.getElementById("languange").innerText = (lang === "en") ? "EN" : "ID";
    document.getElementById("news").innerText = (lang === "en") ? "News" : "Berita";
}
