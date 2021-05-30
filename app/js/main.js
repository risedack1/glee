$(function(){
    $('.slider-top__wrapper').slick({
        dots: true,
        arrows: false,
        fade: true
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