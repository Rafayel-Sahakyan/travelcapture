$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        slidesToShow:3,
        speed:500,
        centerMode:true,
        focusOnSelect: true,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true,
        pauseOnHover:false,
         responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            variableWidth:true
          }
        }
        ] 
    });
});
