var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() >= $(".about-us").offset().top) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '800');
});
