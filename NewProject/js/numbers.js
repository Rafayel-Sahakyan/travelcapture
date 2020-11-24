$(document).ready(function(){
    var $animation_element1 = $('#numbers');
    var $window = $(window);
    var o="a1";
    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_element1, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)){

    if (o=="a1"){
        const step1 = 1;
        const time1 = 2000;
        function first(a1 , b1){
            let l1 = document.querySelector('.' + b1);
            n1 = 0;
            let t1 = Math.round(time1 / (a1 / step1 ));
            let interval1 = setInterval(() =>{
                n1 = n1 + step1;
                if(n1 == a1){
                    clearInterval(interval1)
                }
                l1.innerHTML = n1;
            }, t1)
        } 
        first(12, 'first');

        const step2 = 11;
        const time2 = 2000;
        function second(a2 , b2){
            let l2 = document.querySelector('.' + b2);
            n2 = 0;
            let t2 = Math.round(time2 / (a2 / step2 ));
            let interval2 = setInterval(() =>{
                n2 = n2 + step2;
                if(n2 >1430){
                    n2=1430;
                    clearInterval(interval2);
                }
                l2.innerHTML = n2;
            }, t2)
        } 
        second(1430, 'second');

        const step3 = 10;
        const time3 = 2000;
        function third(a3 , b3){
            let l3 = document.querySelector('.' + b3);
            n3 = 0;
            let t3 = Math.round(time3 / (a3 / step2 ));
            let interval3 = setInterval(() =>{
                n3 = n3 + step3;
                if(n3 >= 250){
                    n3=250;
                    clearInterval(interval3)
                }
                l3.innerHTML = n3;
            }, t3)
        } 
        third(250, 'third');

        o="a2";}
        }
    });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
})