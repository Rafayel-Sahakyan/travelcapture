$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
    });
});

if ($(window).width() < 600) {
    document.getElementsByClassName('gallery-title')[0].setAttribute("data-aos", "");
    document.getElementsByClassName('gallery-paragraph')[0].setAttribute("data-aos", "");
}