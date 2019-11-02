// визуальное изменение кнопки меню при наведении
$('.index-page__menu').hover(function () {
  $(this).toggleClass('index-page__menu_active')
  $('.index-page__menu-line').toggleClass('index-page__menu-line_active');
});

// визуальное изменение соц сетей при наведении курсора
$('.index-page__social-networks-list-item').hover(function () {
  $(this).toggleClass('index-page__social-networks-list-item_active')
  $('.index-page__social-networks-text').toggleClass('index-page__social-networks-text_active');

  // замена текста в зависимости от наведения на иконку соц сети
  let link = $(this).attr('data-link');
  if ($('.index-page__social-networks-text').text() == "Рассказать друзьям") {
    $('.index-page__social-networks-text').text(link);
  } else {
    $('.index-page__social-networks-text').text("Рассказать друзьям");
  }
});

// применение класса active к типам
$('.index-page__psychotype-list-item').click(function () {
  $('.index-page__psychotype-list-item').removeClass('index-page__psychotype-list-item_active');
  $(this).addClass('index-page__psychotype-list-item_active');
});

// присвоение класса при клике
$('.index-page__model-list-item').click(function () {
  $('.index-page__model-list-item').removeClass('index-page__model-list-item_active');
  $(this).addClass('index-page__model-list-item_active');
})

$('.index-page__input').bind("change keyup input click", function () {
  if (this.value.match(/[^1-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});

// табы
$('.index-page__parameter-list-item-header').click(function () {
  $(this).next(".index-page__subparagraphs-list").toggleClass('index-page__subparagraphs-list_active');
});

$('.index-page__subparagraphs-list-item').click(function () {
  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
  $(this).addClass('index-page__subparagraphs-list-item_active');

})