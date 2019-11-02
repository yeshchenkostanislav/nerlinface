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

// табы в параметрах
$('.index-page__parameter-list-item-header').click(function () {
  $(this).next(".index-page__subparagraphs-list").toggleClass('index-page__subparagraphs-list_active');
});

$('.index-page__subparagraphs-list-item').click(function () {
  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
  $(this).addClass('index-page__subparagraphs-list-item_active');
})

// скрытие окна с описанием подпараметра
$('.index-page__subparagraphs-info-close').click(function () {
  $('.index-page__subparagraphs-info').removeClass('index-page__subparagraphs-info_active');

  // при закрытии окна, убираеться со всех подпунктов класс active
  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
});

// открытие окна при нажатии на подпараметр
$('.index-page__subparagraphs-list-item-text').click(function () {

  $('.index-page__subparagraphs-info').addClass('index-page__subparagraphs-info_active');
  let text = $(this).text();
  $('.index-page__subparagraphs-text').text(text);

  run('.index-page__subparagraphs-info-text');
});

function run(nameOf) {
  var a = new String;
  a = $(nameOf).text();
  $(nameOf).text('');
  var c = a.length;
  var j = 0;
  var intervalListener = setInterval(function () {
    if (j < c) {
      $(nameOf).text($(nameOf).text() + a[j]);

      // позволяет при закрытии окна по кнопке close остановить выполнение функции
      $('.index-page__subparagraphs-info-close').click(function () {
        $(nameOf).text(a);
        window.clearInterval(intervalListener);
      })

      j = j + 1;

    } else {
      //$(nameOf).removeClass('after')
    }
  }, 10);
};