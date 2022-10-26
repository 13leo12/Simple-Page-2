const swiper = new Swiper('.customer_slider', {
    // Optional parameters
    slidesPerView: 1,
    autoHeight: true,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints:{
        769: {
            direction: 'vertical',
            slidesPerView: 2,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.customer_chevron_up',
        prevEl: '.customer_chevron_down',
    },
    });

const swiper2 = new Swiper('.team_slider', {
        // Optional parameters
        slidesPerView: 1,
        centeredSlides: true,
        //autoHeight: true,
        slidesPerGroup: 1,
        //loop: true,
        slideToClickedSlide: true,
        breakpoints:{
            769: {
                slidesPerView: 3,
            },
        },
        });

const swiper3 = new Swiper('.team_slider_txt', {
            // Optional parameters
            slidesPerView: 1,
            autoHeight: true,
            slidesPerGroup: 1,
            spaceBetween: 10,
            });


swiper2.controller.control = swiper3;
swiper3.controller.control = swiper2;
