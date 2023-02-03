document.body.addEventListener('click', function(e){
   console.log(e.target);
})
const screenSize = window.screen.width;

const blogSwiper = new Swiper('.blog__swiper', {
   navigation: {
     nextEl: '.blog-button-next',
     prevEl: '.blog-button-prev',
   },
 
   breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
});

const starterSwiper = new Swiper('.starter-slider-swiper', {
  spaceBetween: 10,
  effect: 'cube',

  navigation: {
    nextEl: '.starter-button-next',
    prevEl: '.starter-button-prev',
  },

  pagination: {
    el: '.starter-pagination',
  },

  slidesPerView: 1,
});

if (screenSize > 640){
   const productsSwiper = new Swiper('.products-swiper', {
      slidesPerView: 3,
      spaceBetween: 70,
   });
} else{
   const productsSwiper = new Swiper('.products-swiper', {
      effect: 'coverflow',
      parallax: true,
      loop: true,
      slidesPerView: 2.9,
      centeredSlides: 1,
      coverflowEffect: {
         rotate: 10,
         slideShadows: false,
      },
   
      breakpoints: {
         320: {
           spaceBetween: 15
         },
         480: {
           spaceBetween: 40
         },
         640: {
           spaceBetween: 70
         }
       }
   });
}