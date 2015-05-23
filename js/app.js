$(document).ready(function(){

	$('.section-nav').addClass('full');

	$(window).scroll(function(){
        if ($(this).scrollTop() >= 100){
            $('.section-nav').addClass('menu');
            $('.section-nav').removeClass('full');
        }else{
            $('.section-nav').addClass('full');
            $('.section-nav').removeClass('menu');
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 100){
            $('.scroll-to').fadeOut();
        }else{
            $('.scroll-to').fadeIn();
        }
    });
});

