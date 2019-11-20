var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

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