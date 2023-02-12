document.body.addEventListener('click', (e) => {
  // Get the target element of the click event
  const target = e.target;

  // If the target element is the 'cart-tech-button'
  if (target.id === 'cart-tech-button') {
    // Toggle the 'empty' class on the '.cart' element
    document.querySelector('.cart').classList.toggle('empty');
  } 

  // If the target element has the class 'catalog__products-hide-filter'
  else if (target.classList.contains('catalog__products-hide-filter')){
    // Get the filters element
    const filters = document.querySelector('.catalog');
    // Toggle the 'hide-filters' class on the filters element
    filters.classList.toggle('hide-filters');
  }
});

// Get the screen width of the device
const screenSize = window.screen.width;

// Initialize a new Swiper object for the '.blog__swiper' element
const blogSwiper = new Swiper('.blog__swiper', {
    // Set the navigation options for the Swiper
   navigation: {
     nextEl: '.blog-button-next',
     prevEl: '.blog-button-prev',
   },
 
  // Set the breakpoint options for the Swiper
   breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
});

const productSwiper = new Swiper('.product-page-swiper', {
  spaceBetween: 500,
  centeredSlides: true,
  slidesPerView: 1,
});




if (screenSize > 991){
  const productMiniSwiper = new Swiper('.product-mini-pc-swiper', {
    centeredSlides: true,
    slideToClickedSlide: true,
    
    // Set the navigation options for the Swiper
    navigation: {
      nextEl: '.product-button-next',
      prevEl: '.product-button-prev',
    },
  
      // Set the breakpoint options for the Swiper
     breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 37
        }
      },
  });
  productMiniSwiper.controller.control = productSwiper;
  productSwiper.controller.control = productMiniSwiper;

}else{
  const productMiniMobileSwiper = new Swiper('.product-mini-swiper-mobile', {
    centeredSlides: true,
    slideToClickedSlide: true,
    
    // Set the navigation options for the Swiper
    navigation: {
      nextEl: '.product-button-next',
      prevEl: '.product-button-prev',
    },
  
      // Set the breakpoint options for the Swiper
     breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 37
        }
      },
  });
  productMiniMobileSwiper.controller.control = productSwiper;
  productSwiper.controller.control = productMiniMobileSwiper;
}






// Initialize a new Swiper object for the '.products-items-3' element
const product3Swiper = new Swiper('.products-items-3', {

    // Set the breakpoint options for the Swiper
   breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 37
      }
    }
    
});


// Initialize a new Swiper object for the '.starter-slider-swiper' element
const starterSwiper = new Swiper('.starter-slider-swiper', {
  spaceBetween: 10,

  navigation: {
    nextEl: '.starter-button-next',
    prevEl: '.starter-button-prev',
  },

  pagination: {
    el: '.starter-pagination',
    clickable: true,
  },

  slidesPerView: 1,
});
const productsSwiper = new Swiper('.products-items', {
 
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 80
    },
  },
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

console.log('________$$$$\n _______$$__$\n _______$___$$\n _______$___$$\n _______$$___$$\n ________$____$$\n ________$$____$$$\n _________$$_____$$\n _________$$______$$\n __________$_______$$\n ____$$$$$$$________$$\n __$$$_______________$$$$$$\n _$$____$$$$____________$$$               Хорошего дня\n _$___$$$__$$$____________$$\n _$$________$$$____________$\n __$$____$$$$$$____________$\n __$$$$$$$____$$___________$\n __$$_______$$$$___________$\n ___$$$$$$$$$__$$_________$$\n ____$________$$$$_____$$$$\n ____$$____$$$$$$____$$$$$$\n _____$$$$$$____$$__$$\n _______$_____$$$_$$$\n ________$$$$$$$$$$');