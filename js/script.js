$(document).ready(function() {

    setTimeout(function(){
        AOS.init({
          duration: 500,
          easing:"ease-in-out",
          once: false,
          offset: 100,
          disable: false
        });
    },200);

    let menuState = "hidden";

    const toggleNav = function(){
        if(menuState == "hidden"){
            $("#full-overlay").addClass("show");
            $("#main-nav .navbar-toggler").addClass("togglerClose");
            $('body').addClass('show-menu');
            menuState = "shown";
        }
        else{
            $("#full-overlay").removeClass("show");
            $("#main-nav .navbar-toggler").removeClass("togglerClose");
            $('body').removeClass('show-menu');
            menuState = "hidden";
        }
    }

    const navbarTop = function(){
        if(window.pageYOffset < 50){
            $('#main-nav').addClass('navbar-top');
        }else{
            $('#main-nav').removeClass('navbar-top');

        }
    }

    navbarTop();

    $("#main-nav .navbar-toggler").on('click',function(){
        toggleNav();
    })

    $(window).on('resize', function(){
        if($(document).width() > 991){
            if(menuState == "shown"){
                toggleNav();
            }
        }
    })

    $(window).on('scroll', function(){
        navbarTop();
    })

    $('.smooth-scroll').on('click',function(event){
          event.preventDefault();
          var hash = $(this).attr('href');
          if(menuState == "shown"){
            toggleNav();
        }
          $('html, body').animate({
            scrollTop: $(hash).offset().top-170
          },500)
        
    })

    const headerSwiper = new Swiper('#header-swiper .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '#header-swiper .swiper-pagination',
            type: 'bullets',
            },
        loop: true,
    });
    
    const servicesSwiper = new Swiper('#services-swiper .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '#services-swiper .swiper-pagination',
            type: 'bullets',
            },
        loop: true,
    });


});