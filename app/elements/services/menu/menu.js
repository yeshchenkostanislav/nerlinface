$('.header__menu').click(function () {
  $('.content__menu').toggleClass('content__menu_active');
  $('.content__box-list-text').each(function (i) {
    let $this = $(this);
    run($this, 65);
  });
});

$('.content__close').click(function () {
  $('.content__menu').toggleClass('content__menu_active');
})