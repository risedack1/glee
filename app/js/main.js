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
        slidesToShow: 5
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