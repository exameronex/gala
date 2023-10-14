new Swiper('.intro-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
          el: '.swiper-pagination',

          clickable: true,
      },
      watchOverflow: true, 
});


new Swiper('.about-index-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
          el: '.swiper-pagination',

          clickable: true,
      }
});

new Swiper('.reviews-list', {
    navigation: {
        nextEl: '.reviews-wrapper .swiper-button-next',
        prevEl: '.reviews-wrapper .swiper-button-prev',
      },

      pagination: {
          el: '.swiper-pagination',

          clickable: true,
      },

      slidesPerView: 1,
      spaceBetween: 5,

      breakpoints: {
        1281: {
            slidesPerView: 2,
        }
      }
});

new Swiper('.blog-index-list', {
    navigation: {
        nextEl: '.blog-index-slider .swiper-button-next',
        prevEl: '.blog-index-slider .swiper-button-prev',
      },

      slidesPerView: 3,
      spaceBetween: 5,
      direction: 'vertical',
});


new Swiper('.about-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
          el: '.swiper-pagination',

          clickable: true,
      },
});

new Swiper('.diploma-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

      pagination: {
          el: '.diploma-wrapper .swiper-pagination',

          clickable: true,
    },

      slidesPerView: 1,
      

      breakpoints: {
        640: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        980: {
            spaceBetween: 10,
            slidesPerView: 3,
        }
    },
});
