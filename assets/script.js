
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
    document.getElementById("event").innerText = (lang === "en") ? "Event" : "Kegiatan";
    document.getElementById("languange").innerText = (lang === "en") ? "EN" : "ID";
    document.getElementById("news").innerText = (lang === "en") ? "News" : "Berita";
    document.getElementById("carousel-title").innerText = (lang === "en") ? "We're Marind Anim" : "Kami Marind Anim";
    document.getElementById("carousel-description").innerText = (lang === "en") ? "the Thick Culture in South Papua" : "Budaya Kental di Papua Selatan";
    document.getElementById("description-galery").innerText = (lang === "en") ? "Description" : "Keterangan singkat";
    document.getElementById("title-galery").innerText = (lang === "en") ? "Gallery of the Marind tribe" : "Galeri suku Marind";
}
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});