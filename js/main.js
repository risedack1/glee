$(function(){
    $('.burger').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
        $('.burger').toggleClass('burger--active')
    });

    $('.footer__title--slide').on('click', function(){
        $(this).next().slideToggle()
        $(this).toggleClass('footer__title--active')
    });
    $('.slider-top__wrapper').slick({
        dots: true,
        arrows: false,
        fade: true
    });
    $('.partners__inner').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY >50) {
          $('.header').addClass("header--sticky");
          $('.slider-top').addClass("slider-top--sticky");
        } else {
          $('.header').removeClass("header--sticky");
          $('.slider-top--sticky').removeClass("slider-top--sticky");
        }
        var scrolled = $(window).scrollTop();
 
	      if ( scrolled > 100 && scrolled > scrollPrev ) {
		      $('.header').addClass('header--visible');
	      } else {
		      $('.header').removeClass('header--visible');
	      }
	      scrollPrev = scrolled;
      });

      $(window).scroll(function () {
        $('.menu__list').removeClass('menu__list--active')
        $('.burger').removeClass('burger--active')
      });

    let containerEl1 = document.querySelector('.design');
    let containerEl2 = document.querySelector('.products');
    let config = {
        controls: {
            scope: 'local',
        },
    };
    (() => mixitup(containerEl1, config))();
    (() => mixitup(containerEl2, config))();
});