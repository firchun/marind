
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
    document.getElementById("about").innerText = (lang === "en") ? "About" : "Tentang";
    document.getElementById("about-content").innerText = (lang === "en") ? "Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm" : "Scanfcode.com CODE INGIN MENJADI SEDERHANA adalah sebuah inisiatif untuk membantu programmer yang akan datang dengan kode tersebut. Scanfcode berfokus pada penyediaan kode atau cuplikan yang paling efisien karena kodenya ingin sederhana. Kami akan membantu pemrogram membangun konsep dalam berbagai bahasa pemrograman yang mencakup C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, dan Algoritma";
    document.getElementById("subscribe").innerText = (lang === "en") ? "Subscribe" : "Berlangganan";
    document.getElementById("read-more").innerText = (lang === "en") ? "Read More.." : "Baca Selengkapnya..";
    document.getElementById("read-news-1").innerText = (lang === "en") ? "Read News" : "Baca Berita";
    document.getElementById("read-news-2").innerText = (lang === "en") ? "Read News" : "Baca Berita";
    document.getElementById("read-news-3").innerText = (lang === "en") ? "Read News" : "Baca Berita";
    document.getElementById("read-news-4").innerText = (lang === "en") ? "Read News" : "Baca Berita";
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