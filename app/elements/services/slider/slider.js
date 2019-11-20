var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 10,
      autoHeight: true
    }
  }

});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: '.gallery-thumbs-btn_next',
    prevEl: '.gallery-thumbs-btn_prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },

  thumbs: {
    swiper: galleryThumbs
  }
});

/* $('.append-slide').on('click', function (e) {
  galleryThumbs.appendSlide('<div class="swiper-slide">Slide</div>');
  galleryTop.appendSlide('<div class="swiper-slide">Slide</div>');
}); */