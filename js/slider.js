new Swiper('.categories__swiper', {

    loop: true,
    
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },        
        1440: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    },    

    pagination: {
    el: '.categories__pagination',
    type: "bullets",
    },    
    

    navigation: {
    nextEl: '.categories__btn-next',
    prevEl: '.categories__btn-prev',    
    }    
    }); 