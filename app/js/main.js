$(function () {
  $('.filter-button').on('click', function() {
    $('.filter-button').toggleClass('filter-button--active')
    $('.shop-filter').toggleClass('shop-filter--active')

    // Клик вне модально окна-------------------------------------------------------------------

    // $(".shop-filter--active").on('click',function(e){
    //   if($(e.target).attr("class") != "filter-shop")
    // $(".shop-filter").removeClass('shop-filter--active');
    // })
  });

  $('.shop__btn--list').on('click', function () { 
    $('.product-shop__content').addClass('product-shop__content--active')
    $('.shop__btn--list').addClass('shop__btn--active')
    $('.shop__btn--grid').removeClass('shop__btn--active')
    $('.product-card').addClass('product-card--active')
    $('.product-shop__pagination').addClass('product-shop__pagination--active')
  });

  $('.shop__btn--grid').on('click', function () {
    $('.product-shop__content').removeClass('product-shop__content--active')
    $('.shop__btn--grid').addClass('shop__btn--active')
    $('.shop__btn--list').removeClass('shop__btn--active')
    $('.product-card').removeClass('product-card--active')
    $('.product-shop__pagination').removeClass('product-shop__pagination--active')
  });

  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
    $('.burger').toggleClass('burger--active')
  });

  $('.footer__title--slide').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer__title--active')
  });
  $('.slider-top__wrapper').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(".price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    step: "0.01",
    onStart: function (data) {
      $('.price__from').text(data.from + ".00");
      $('.price__to').text(data.to + ".00");
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
  });

  $(".star").rateYo({
    rating: 4,
    spacing: "8px",
    starSvg: "<svg role='img' viewBox='0 0 576 512'><path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path></svg>" 
  });

  $('.partners__inner').slick({
    arrows: false,
    slidesToShow: 5,
    responsive: [{
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

  // События по скролу-----------------------------------------------------------------------------

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 50) {
      $('.header').addClass("header--sticky");
      $('.slider-top').addClass("slider-top--sticky");
    } else {
      $('.header').removeClass("header--sticky");
      $('.slider-top--sticky').removeClass("slider-top--sticky");
    }
    var scrolled = $(window).scrollTop();
    var shopHeight = $('.shop').height();

    if (this.scrollY > shopHeight) {
      $('.filter-button').addClass('filter-button--disable')
    }else{
      $('.filter-button').removeClass('filter-button--disable')
    }

    if (scrolled > 100 && scrolled > scrollPrev) {
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

  // Два микситап---------------------------------------------------------------------------------------

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